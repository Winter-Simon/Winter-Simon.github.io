
# Winter Simon — Personal Site

**Personal Website · Physics, Research & Projects**

🌐 **[访问我的个人网站](https://winter-simon.github.io/)**

个人学术主页、物理学习笔记、知识花园与软件项目作品集。

## 页面

- `/` — 首页，研究兴趣、项目、近期笔记
- `/notes/` — 知识花园（Markdown 内容集合，支持新增笔记自动生成路由）
- `/projects/` — 项目作品集（持续开发与构想状态明确区分）
- `/about/` — 关于
- `/404/` — 无效地址说明页

## 本地使用

需要 Node.js 20.19+ 或 22.12+。在本目录执行：

```bash
npm install
npm run dev
```

浏览器打开命令行显示的地址，通常为 `http://localhost:4321/`。

## 发布到 GitHub Pages

**推荐新建独立仓库 `Winter-Simon.github.io`**，将本项目目录的内容直接作为该仓库根目录（不是多套一个 `winter-simon-personal-site/` 文件夹）。建议在本地运行 `npm install` 生成 `package-lock.json`，并一起提交。当前自动部署使用 `npm install`，待锁文件提交后可切换为更稳定的 `npm ci`。仓库设置 **Settings → Pages → Build and deployment → Source: GitHub Actions**。每次推送到 `main` 将执行内置的 `.github/workflows/deploy.yml`，成功后访问 `https://winter-simon.github.io/`。

如果部署在其他名字的项目仓库，`astro.config.mjs` 会根据 Actions 提供的 `GITHUB_REPOSITORY` 识别项目路径，例如 `https://winter-simon.github.io/skills-github-pages/`。独立域名可通过 `SITE_URL` 和 `SITE_BASE` 环境变量配置。

> 本框架未推送到现有 GitHub 仓库。已发现的 `skills-github-pages` 是入门练习项目，建议保持不变。

## 新增笔记

在 `src/content/notes/` 添加 Markdown 文件（例如 `my-note.md`）：

```md
---
title: 我的新笔记
summary: 一句话介绍
updated: 2026-10-24
topic: 量子力学
stage: 探索中
order: 4
---

这里开始写正文。
```

URL 自动生成 `/notes/my-note/`。请手工挑选要公开的 Obsidian 笔记，避免整个私人库同步到公开仓库；支持常见 Markdown 与 `$...$`、`$$...$$` KaTeX 数学公式；尚未配置 Obsidian 专有 wiki 链接、双向链接和插件语法的自动转换。

## 主要目录

```text
src/
  components/          导航、页脚、项目卡、笔记行
  content/notes/       可以持续新增的 Markdown 笔记
  content.config.ts    笔记内容校验
  data/projects.ts     项目数据
  layouts/             公共页面布局
  lib/paths.ts         GitHub Pages 子路径适配
  pages/               四个栏目及笔记动态路由
  styles/global.css    网站设计规范、响应式、排版
public/                Favicon、社交分享图
.github/workflows/     Pages 自动部署
```

## 当前边界

- 两个项目中的 Interactive Physics Lab 仅为**规划中的概念**；Smart WorkSpace 展示图也是**概念示意**。
- 笔记是示例性质；上线前需校对、完善与决定公开范围。
- 当前未添加分析脚本、评论系统、账户系统，也不会上传任何私人笔记或项目源码。
