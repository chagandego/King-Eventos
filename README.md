# King Eventos — Site institucional

Site profissional, moderno e responsivo da **King Eventos**, empresa de organização de eventos em
Sorocaba – SP. Construído com **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**,
pronto para deploy na **Vercel**.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

Build de produção:

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba este projeto para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta o Next.js automaticamente — basta confirmar. Nenhuma variável de ambiente
   é obrigatória para o site funcionar.
4. Após publicar, ajuste `siteUrl` em `src/content/site.ts` para o domínio final
   (usado em SEO, Open Graph e `sitemap.xml`).

## Onde editar cada coisa

| O que | Arquivo |
| --- | --- |
| Nome, telefone, endereço, WhatsApp, redes sociais | `src/content/site.ts` |
| Textos do Hero, Sobre, CTA | `src/content/site.ts` |
| Serviços (cards) | `src/content/site.ts` → `services` |
| Eventos + categorias/filtros | `src/content/site.ts` → `events` |
| Diferenciais | `src/content/site.ts` → `differentials` |
| Depoimentos (conteúdo demonstrativo) | `src/content/site.ts` → `testimonials` |
| Galeria (mosaico + lightbox) | `src/content/site.ts` → `gallery` |
| Mensagens automáticas do WhatsApp | `src/content/site.ts` → `whatsapp.messages` |
| Cores / tipografia | `tailwind.config.ts` e `src/app/globals.css` |
| Metadados de SEO / Open Graph | `src/app/layout.tsx` |
| Imagem de compartilhamento (Open Graph) | `src/app/opengraph-image.tsx` |
| Favicon | `src/app/icon.svg` |
| Integração do formulário de contato | `src/app/api/contact/route.ts` |

## Imagens

As imagens atuais são **ilustrativas** (Unsplash) e servem apenas de demonstração.

Para usar as fotos reais da King Eventos:

1. Coloque os arquivos em `public/` (ex.: `public/eventos/casamento-01.jpg`).
2. Em `src/content/site.ts`, troque as URLs por caminhos locais (ex.: `"/eventos/casamento-01.jpg"`)
   e atualize os textos `alt`.
3. Opcional: remova o bloco `images.remotePatterns` de `next.config.mjs` quando não houver mais
   imagens externas.

Todas as imagens usam `next/image` com **lazy loading** automático (o Hero usa `priority`).

## Formulário de contato

O endpoint `POST /api/contact` hoje apenas valida os campos e registra a solicitação no log do
servidor. Para receber as mensagens de verdade, integre um serviço em
`src/app/api/contact/route.ts` (Resend, SendGrid, Nodemailer, Formspree, planilha, CRM...).
Enquanto isso, o formulário também oferece o botão **"Enviar pelo WhatsApp"**, que já funciona.

## Estrutura

```
src/
  app/
    layout.tsx            # <html>, fontes, metadados SEO/OG, JSON-LD (LocalBusiness)
    page.tsx              # composição da página (uma página, âncoras por seção)
    globals.css           # base do Tailwind + utilitários (botões, reveal, inputs)
    icon.svg              # favicon
    opengraph-image.tsx   # imagem de compartilhamento gerada dinamicamente
    sitemap.ts / robots.ts
    api/contact/route.ts  # endpoint do formulário
  components/
    Header, Hero, About, Services, Events, Differentials,
    Testimonials, Gallery, QuoteCTA, Contact, ContactForm,
    Footer, FloatingWhatsApp
    Reveal.tsx            # animação fade-in ao entrar na viewport (IntersectionObserver)
    SectionHeading.tsx
    icons.tsx             # ícones SVG inline (sem biblioteca externa)
  content/
    site.ts              # TODO o conteúdo editável
  lib/
    whatsapp.ts          # gera links wa.me com mensagem automática
```

## Observações

- **Acessibilidade / performance:** sem bibliotecas de animação; apenas CSS + IntersectionObserver.
  As animações respeitam `prefers-reduced-motion`.
- **SEO:** `title`/`meta description`, H1 único (Hero), H2 nas seções, Open Graph, JSON-LD
  `EventPlanner`, `sitemap.xml` e `robots.txt`.
- **Telefone informado:** `(15) 3217-3079`. Os links de WhatsApp usam `https://wa.me/551532173079`,
  conforme solicitado. Se o número de WhatsApp for diferente do telefone fixo, ajuste
  `whatsapp.number` em `src/content/site.ts`.
