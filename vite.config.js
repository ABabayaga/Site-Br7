import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O CSS do build é pequeno (~7 KiB) e bloqueia a renderização como request
// separado. Este plugin injeta o conteúdo direto no <head> e remove o <link>,
// tirando-o do caminho crítico (Lighthouse: "render-blocking requests").
function inlineCss() {
  return {
    name: 'br7-inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        let out = html
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (chunk.type !== 'asset' || !fileName.endsWith('.css')) continue

          const tag = new RegExp(
            `<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']*${fileName.replace(
              /[.*+?^${}()|[\]\\]/g,
              '\\$&'
            )}["'][^>]*>`
          )
          if (!tag.test(out)) continue

          out = out.replace(tag, `<style>${chunk.source}</style>`)
          delete bundle[fileName]
        }
        return out
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), inlineCss()],
})
