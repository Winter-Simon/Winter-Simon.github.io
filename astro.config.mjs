import { defineConfig } from 'astro/config';

// 本地开发在网站根目录；发布到 GitHub 项目仓库时自动添加仓库名前缀。
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPages = repo.toLowerCase() === 'winter-simon.github.io';
const base = process.env.SITE_BASE ?? (repo && !isUserPages ? `/${repo}` : '/');

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://winter-simon.github.io',
  base,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: ['remark-math'],
    rehypePlugins: ['rehype-katex'],
  },
});
