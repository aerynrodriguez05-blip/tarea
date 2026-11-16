/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.56.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kfozehkpebzwrwucblrq.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/imagenes_productos/**',
      },
    ],
  },
};


export default nextConfig;
