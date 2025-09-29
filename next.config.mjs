/** @type {import('next').NextConfig} */
// const nextConfig = {};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // مهم: خروجی استاتیک می‌سازه (برای GitHub Pages لازمه)
  basePath: "/my-next-app", // اسم ریپو
  assetPrefix: "/my-next-app/", // آدرس فایل‌های استاتیک
};

module.exports = nextConfig;
export default nextConfig;
// next.config.js
