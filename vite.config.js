import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// O CSS do build é pequeno (~7 KiB) e bloqueia a renderização como request
// separado. Este plugin injeta o conteúdo direto no <head> e remove o <link>,
// tirando-o do caminho crítico (Lighthouse: "render-blocking requests").
function inlineCss() {
  // Cada HTML de entrada (index, 404) passa por aqui separadamente; o primeiro
  // remove o asset do bundle, então guardamos o conteúdo para os seguintes.
  const cssCache = new Map()

  return {
    name: 'br7-inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'asset' && fileName.endsWith('.css')) {
            cssCache.set(fileName, chunk.source)
          }
        }

        let out = html
        for (const [fileName, source] of cssCache) {
          const tag = new RegExp(
            `<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']*${fileName.replace(
              /[.*+?^${}()|[\]\\]/g,
              '\\$&'
            )}["'][^>]*>`
          )
          if (!tag.test(out)) continue

          out = out.replace(tag, `<style>${source}</style>`)
          delete bundle[fileName]
        }
        return out
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), inlineCss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Convenção de 404 estático (GitHub Pages, Netlify, Vercel, Cloudflare):
        // o host serve dist/404.html para qualquer rota inexistente.
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
