# BR7 — Marketing em Movimento

Reconstrução em código (Vite + React + Tailwind) do site https://comfy-axolotl-fb7c24.netlify.app/,
baseada no conteúdo real extraído da página. O visual foi desenhado do zero — não é um clone
pixel-perfect, já que o HTML/CSS original não estava acessível — em torno de um conceito de
"rota rodoviária": códigos BR-01…BR-08 nas capacidades, linha de faixa de pista animada como
divisor, e a tipografia Space Grotesk + Inter + IBM Plex Mono.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/`.

## Estrutura

```
src/
├── App.jsx              # monta as seções
├── index.css             # Tailwind + tokens base
└── components/
    ├── Header.jsx        # nav fixa, relógio, "Conversar"
    ├── Hero.jsx           # headline + faixa animada de skills
    ├── Intro.jsx          # "boa está vendendo?"
    ├── Trabalhos.jsx      # grid de cases (Upper GR, Motora Match...)
    ├── Capacidades.jsx    # 8 capacidades com código BR-XX
    ├── Metodo.jsx         # 3 diferenciais
    ├── Contato.jsx        # CTA, WhatsApp, e-mail, base
    └── Footer.jsx
```

## O que ajustar

- **Imagens dos cases**: hoje os cards de `Trabalhos.jsx` são só texto — falta linkar as
  artes finais dos clientes (o site original também usava "imagens provisórias").
- **Paleta**: tokens em `tailwind.config.js` (`asphalt`, `chalk`, `lane`, `brake`).
- **Fontes**: carregadas via Google Fonts no `index.html` (Space Grotesk, Inter, IBM Plex Mono).
