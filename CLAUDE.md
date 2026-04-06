# Popunch: The Comic Engine

波普艺术 AI 漫画生成器 — 用文字和图片生成漫画面板，配合博客做 SEO。

## Tech Stack

- **Framework:** React 19, Vite 6, TypeScript 5.8
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 6.22
- **CMS:** Sanity Client 7.14 (博客内容)
- **AI:** Google Generative AI (@google/genai) — Gemini
- **Deploy:** TBD

## Architecture

SPA 架构，services 模式分离外部依赖：

```
App.tsx                    ← 路由 + 导航 + 页脚
├── components/
│   ├── Home.tsx           ← 首页（Hero + ComicMaker + BlogSection）
│   ├── Hero.tsx           ← 首屏展示
│   ├── ComicMaker.tsx     ← AI 漫画生成器（核心功能）
│   ├── BlogSection.tsx    ← 博客列表
│   ├── BlogPostPage.tsx   ← 博客详情
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   └── ui/                ← 原子组件
│       ├── BlogCard.tsx
│       ├── PopButton.tsx
│       └── SpeechBubble.tsx
├── services/
│   ├── geminiService.ts   ← Google Gemini AI 调用
│   ├── blogService.ts     ← 博客内容服务
│   └── sanity.ts          ← Sanity CMS client
└── src/index.css          ← 全局样式
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | 首页：Hero + 漫画生成器 + 博客列表 |
| `/blog/:slug` | BlogPostPage | 博客文章详情 |
| `/terms` | TermsPage | 使用条款 |
| `/privacy` | PrivacyPage | 隐私政策 |

## Theme

波普艺术风格：
- 黄色背景 + Ben-Day 点阵纹理
- 粗体颜色（红、蓝、黄、黑）
- Bangers 字体（漫画风格标题）
- 粗黑边框 + 阴影
- 对话气泡 UI 组件

## SEO Strategy

- 博客内容通过 Sanity CMS 提供有机搜索流量
- 漫画生成器是"趣味功能钩子" — 吸引用户并产生外链
- 需要：proper meta tags、OG tags、structured data、sitemap

## Env Variables

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Google Gemini AI (via Vite define) |

## Dev Commands

```bash
pnpm dev        # 启动开发服务器
pnpm build      # 构建生产版本
pnpm preview    # 预览构建结果
```
