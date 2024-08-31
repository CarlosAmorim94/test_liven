/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**", // Permite todas as imagens do caminho especificado
      },
    ],
  },
}

module.exports = nextConfig
