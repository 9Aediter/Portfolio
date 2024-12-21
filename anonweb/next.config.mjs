/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  // คุณสามารถเพิ่มการตั้งค่าอื่น ๆ ที่ต้องการได้ที่นี่
};

export default nextConfig;
