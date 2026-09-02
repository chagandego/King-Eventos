/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // As imagens de demonstração vêm do Unsplash. Ao trocar pelas fotos reais
    // da King Eventos (recomendado: pasta /public), este bloco pode ser removido.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
