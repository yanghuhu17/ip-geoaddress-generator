/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出，build 后生成 ./out
  images: {
    unoptimized: true,  // 静态导出时必须加（否则图片优化失败）
  },
  // 如果你想输出到其他目录，比如 ./dist
  // distDir: 'dist',
};

module.exports = nextConfig;
