/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Necessário para hospedagem estática (cPanel/Apache/Nginx)
  // pois não haverá um servidor Node.js para otimizar imagens em tempo real.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;