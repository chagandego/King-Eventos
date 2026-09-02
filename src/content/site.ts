/**
 * ------------------------------------------------------------------
 *  KING EVENTOS — Conteúdo do site (arquivo único e editável)
 * ------------------------------------------------------------------
 *  Altere aqui textos, contatos, serviços, imagens e depoimentos.
 *  Nenhum outro arquivo precisa ser editado para atualizar o conteúdo.
 *
 *  Informações CONFIRMADAS da empresa:
 *    - Nome:      King Eventos
 *    - Segmento:  Organização de eventos
 *    - Endereço:  R. Gildo Scareli, 72 - Wanel Ville, Sorocaba - SP, 18055-028
 *    - Telefone:  (15) 3217-3079
 *
 *  Qualquer outra informação abaixo é conteúdo demonstrativo / editável.
 * ------------------------------------------------------------------
 */

/** Monta a URL de uma imagem de demonstração do Unsplash. */
function u(id: string, w = 1000): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const site = {
  name: "King Eventos",
  segment: "Organização de eventos",
  year: 2026,

  /** Ajuste para o domínio final publicado (usado em SEO / Open Graph / sitemap). */
  siteUrl: "https://king-eventos.vercel.app",

  address: {
    full: "R. Gildo Scareli, 72 - Wanel Ville, Sorocaba - SP, 18055-028",
  },

  phone: {
    display: "(15) 3217-3079",
    href: "tel:+551532173079",
  },

  whatsapp: {
    // Número usado nos links wa.me (DDI 55 + DDD 15 + número).
    number: "551532173079",
    messages: {
      quote:
        "Olá! Conheci a King Eventos pelo site e gostaria de solicitar um orçamento para o meu evento.",
      floating:
        "Olá! Conheci a King Eventos pelo site e gostaria de saber mais sobre os serviços e solicitar um orçamento.",
    },
  },

  social: {
    // Preencha quando o perfil oficial for informado. Ex.: "https://instagram.com/kingeventos"
    instagram: "",
  },

  maps: {
    embedUrl:
      "https://www.google.com/maps?q=" +
      encodeURIComponent("R. Gildo Scareli, 72 - Wanel Ville, Sorocaba - SP, 18055-028") +
      "&output=embed",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Eventos", href: "#eventos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    eyebrow: "Organização de eventos em Sorocaba – SP",
    title: "Transformamos momentos em experiências inesquecíveis",
    subtitle:
      "A King Eventos cuida de cada detalhe para que seu evento seja especial, elegante e memorável.",
    badges: ["Eventos personalizados", "Experiência", "Qualidade"],
    image: u("photo-1519741497674-611481863552", 1920),
    imageAlt:
      "Salão decorado para casamento — organização de eventos em Sorocaba (imagem ilustrativa)",
  },

  about: {
    quote:
      "Cada evento tem uma história. Nosso trabalho é ajudar a transformar essa história em uma experiência inesquecível.",
    paragraphs: [
      "A King Eventos é uma empresa especializada na organização e realização de eventos em Sorocaba e região. Cuidamos de cada etapa do planejamento para que você aproveite cada momento com tranquilidade.",
      "Trabalhamos com soluções personalizadas para diferentes tipos de celebrações — de casamentos e formaturas a aniversários, confraternizações e eventos corporativos. Cada projeto é desenvolvido a partir do que o cliente deseja, com atenção aos detalhes que fazem a diferença.",
      "Do conceito à execução, organizamos fornecedores, cronograma, ambientação e logística, mantendo uma comunicação clara em todas as fases do evento.",
    ],
    image: u("photo-1464366400600-7168b8af9bc3", 1200),
    imageAlt:
      "Mesa de jantar ao ar livre com iluminação decorativa — ambientação de eventos (imagem ilustrativa)",
  },

  /**
   * SERVIÇOS — edite livremente. Não afirme que um serviço é oferecido
   * caso isso não possa ser confirmado com a empresa.
   * icon: rings | cap | cake | briefcase | sparkles | palette
   */
  services: [
    {
      title: "Casamentos",
      icon: "rings",
      description: "Organização e planejamento para tornar o grande dia ainda mais especial.",
    },
    {
      title: "Formaturas",
      icon: "cap",
      description: "Estrutura e organização para comemorar uma das grandes conquistas da vida.",
    },
    {
      title: "Aniversários",
      icon: "cake",
      description: "Eventos personalizados para comemorações de todos os estilos.",
    },
    {
      title: "Eventos Corporativos",
      icon: "briefcase",
      description: "Soluções para confraternizações, encontros e eventos empresariais.",
    },
    {
      title: "Festas e Celebrações",
      icon: "sparkles",
      description: "Planejamento para diferentes tipos de festas e ocasiões especiais.",
    },
    {
      title: "Eventos Personalizados",
      icon: "palette",
      description:
        "Projetos desenvolvidos de acordo com as necessidades e desejos de cada cliente.",
    },
  ],

  /**
   * EVENTOS — galeria com filtros. As imagens são ILUSTRATIVAS.
   * Substitua `image` pelas fotos reais da King Eventos (ideal: pasta /public,
   * ex.: "/eventos/casamento-01.jpg") e ajuste `alt`.
   */
  events: {
    categories: ["Todos", "Casamentos", "Formaturas", "Aniversários", "Corporativos", "Outros"],
    items: [
      {
        title: "Casamento ao ar livre",
        category: "Casamentos",
        description: "Cerimônia com ambientação natural e elegante.",
        image: u("photo-1522413452208-996ff3f3e740", 900),
        alt: "Cerimônia de casamento ao ar livre — imagem ilustrativa",
      },
      {
        title: "Recepção de casamento",
        category: "Casamentos",
        description: "Mesa dos convidados e decoração de salão.",
        image: u("photo-1519225421980-715cb0215aed", 900),
        alt: "Casal em recepção de casamento — imagem ilustrativa",
      },
      {
        title: "Formatura",
        category: "Formaturas",
        description: "Comemoração de conclusão de curso.",
        image: u("photo-1523050854058-8df90110c9f1", 900),
        alt: "Formandos comemorando a conquista — imagem ilustrativa",
      },
      {
        title: "Aniversário",
        category: "Aniversários",
        description: "Festa personalizada com ambientação temática.",
        image: u("photo-1530103862676-de8c9debad1d", 900),
        alt: "Comemoração de aniversário com luzes — imagem ilustrativa",
      },
      {
        title: "Bodas",
        category: "Aniversários",
        description: "Jantar comemorativo com decoração sofisticada.",
        image: u("photo-1519671482749-fd09be7ccebf", 900),
        alt: "Salão preparado para jantar comemorativo — imagem ilustrativa",
      },
      {
        title: "Evento corporativo",
        category: "Corporativos",
        description: "Encontro empresarial, palestras e networking.",
        image: u("photo-1511578314322-379afb476865", 900),
        alt: "Plateia em evento corporativo — imagem ilustrativa",
      },
      {
        title: "Confraternização",
        category: "Corporativos",
        description: "Confraternização de fim de ano da empresa.",
        image: u("photo-1540575467063-178a50c2df87", 900),
        alt: "Confraternização corporativa — imagem ilustrativa",
      },
      {
        title: "Festa de celebração",
        category: "Outros",
        description: "Comemoração especial com brinde e decoração.",
        image: u("photo-1492684223066-81342ee5ff30", 900),
        alt: "Festa com confete e comemoração — imagem ilustrativa",
      },
      {
        title: "Jantar intimista",
        category: "Outros",
        description: "Jantar com ambientação à luz de velas.",
        image: u("photo-1478146896981-b80fe463b330", 900),
        alt: "Mesa com velas e decoração para jantar — imagem ilustrativa",
      },
    ],
  },

  /** DIFERENCIAIS. icon: clipboard | palette | target | star */
  differentials: [
    { title: "Planejamento", icon: "clipboard", description: "Cada detalhe pensado para o seu evento." },
    {
      title: "Personalização",
      icon: "palette",
      description: "Soluções adaptadas ao estilo e às necessidades de cada cliente.",
    },
    {
      title: "Atenção aos detalhes",
      icon: "target",
      description: "Cuidado em cada etapa da organização.",
    },
    {
      title: "Experiência",
      icon: "star",
      description: "Profissionalismo para transformar ideias em eventos especiais.",
    },
  ],

  /**
   * DEPOIMENTOS — CONTEÚDO DEMONSTRATIVO.
   * Substitua pelos depoimentos reais de clientes da King Eventos.
   */
  testimonials: [
    {
      name: "Juliana & Rafael",
      event: "Casamento",
      text: "Texto de exemplo: a equipe cuidou de cada detalhe e a organização deixou tudo mais tranquilo no nosso dia.",
    },
    {
      name: "Patrícia M.",
      event: "Aniversário",
      text: "Texto de exemplo: a festa ficou exatamente como imaginávamos, com atenção a cada elemento da decoração.",
    },
    {
      name: "Eduardo A.",
      event: "Evento corporativo",
      text: "Texto de exemplo: planejamento organizado e comunicação clara do começo ao fim do evento.",
    },
  ],

  /**
   * GALERIA — mosaico. Imagens ILUSTRATIVAS.
   * `wide`: ocupa 2 colunas | `tall`: ocupa 2 linhas.
   */
  gallery: [
    { src: u("photo-1519741497674-611481863552", 1200), alt: "Mesa posta para casamento — imagem ilustrativa", wide: true, tall: false },
    { src: u("photo-1478146896981-b80fe463b330", 900), alt: "Decoração com velas — imagem ilustrativa", wide: false, tall: true },
    { src: u("photo-1523050854058-8df90110c9f1", 900), alt: "Formatura — imagem ilustrativa", wide: false, tall: false },
    { src: u("photo-1511578314322-379afb476865", 900), alt: "Evento corporativo — imagem ilustrativa", wide: false, tall: false },
    { src: u("photo-1492684223066-81342ee5ff30", 900), alt: "Festa com confete — imagem ilustrativa", wide: false, tall: false },
    { src: u("photo-1464366400600-7168b8af9bc3", 1200), alt: "Jantar ao ar livre com luzes — imagem ilustrativa", wide: true, tall: false },
    { src: u("photo-1519225421980-715cb0215aed", 900), alt: "Casal em casamento — imagem ilustrativa", wide: false, tall: false },
    { src: u("photo-1530103862676-de8c9debad1d", 900), alt: "Comemoração com luzes — imagem ilustrativa", wide: false, tall: false },
    { src: u("photo-1519671482749-fd09be7ccebf", 900), alt: "Salão de recepção — imagem ilustrativa", wide: false, tall: false },
    { src: u("photo-1540575467063-178a50c2df87", 900), alt: "Confraternização corporativa — imagem ilustrativa", wide: false, tall: false },
  ],

  quoteCta: {
    image: u("photo-1492684223066-81342ee5ff30", 1920),
  },

  /** Opções do campo "Tipo de evento" no formulário de contato. */
  eventTypes: [
    "Casamento",
    "Formatura",
    "Aniversário",
    "Evento corporativo",
    "Festa ou confraternização",
    "Outro",
  ],
} as const;

export type Site = typeof site;
