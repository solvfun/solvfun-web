# Solvfun Landing Page - 建设规划

## 项目概述

为 Solvfun App（Solana 链上自托管钱包，主打 Meme 币交易）建设一个精美的 Web 落地页。

## 已安装的 Claude Code 技能

以下技能已安装在项目目录 `.claude/skills/` 下（项目级，不影响其他项目）：

| 技能 | 作用 |
|------|------|
| `frontend-design-ultimate` | 核心设计能力，从文字描述生成高质量、反模板化的页面 |
| `nextjs-shadcn` | Next.js + shadcn/ui 组件最佳实践 |
| `animated-component-libraries` | 动画组件库（Magic UI、Aceternity UI 等高级动效） |
| `find-skills` | 发现和搜索更多技能 |

> **注意**：需要开启新的 Claude Code 对话才能让技能生效。

---

## 第一步：准备素材

开始编码之前，需要准备以下素材：

- [ ] **App Logo**（SVG 格式最佳，同时准备 PNG 备用）
- [ ] **App 截图**（3-5 张关键界面，建议包含：首页、交易页、钱包页）
- [ ] **手机 Mockup 图**（把截图放进手机模型里，更有质感）
- [ ] **品牌配色**（主色、辅色、强调色、背景色）
- [ ] **品牌字体**（如有；没有的话技能会推荐独特字体）
- [ ] **下载链接**（App Store / Google Play / APK 直链）
- [ ] **社交媒体链接**（Twitter/X、Telegram、Discord 等）
- [ ] **隐私政策 & 服务条款**（正文内容）

---

## 第二步：页面内容结构

### Hero 区域
- 品牌标语（一句话抓住用户）
- 副标题（简要说明 App 是什么）
- 下载按钮（CTA）
- 手机截图展示（带动效）

### Features 核心功能
- 3-4 张功能卡片，建议突出：
  - **自托管钱包** — 私钥本地存储，你的资产你做主
  - **Meme 币交易** — 快速发现和交易热门 Meme 币
  - **极速体验** — Solana 链上毫秒级确认
  - **安全可靠** — 开源/审计等安全背书

### App 截图展示
- 轮播或网格布局展示 App 核心界面
- 配合手机 Mockup 增加真实感

### How It Works 使用流程
- 简单 3 步引导：
  1. 下载 App
  2. 创建/导入钱包
  3. 开始交易 Meme 币

### 安全性说明
- 自托管架构说明
- 私钥永不离开设备
- 如有审计报告可链接

### 下载 CTA（底部）
- 再次放置下载按钮
- 扫码下载二维码（可选）

### Footer
- Logo + 简介
- 隐私政策链接
- 服务条款链接
- 社交媒体图标链接
- Copyright

---

## 第三步：技术方案

### 推荐技术栈
- **Next.js 14+**（App Router）
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**（基础组件）
- **Magic UI / Aceternity UI**（高级动效组件）
- **Framer Motion**（动画引擎）

### 部署
- **Vercel**（与 Next.js 原生集成，免费额度足够）
- 自定义域名绑定

---

## 第四步：设计 & 实现

### 方案 A：纯 AI 生成（推荐）
1. 准备好上述素材
2. 开启新的 Claude Code 对话（让技能生效）
3. 描述你想要的风格和内容
4. Claude 利用已安装的技能直接生成精美页面
5. 迭代调整直到满意

### 方案 B：Figma 先设计，再还原
1. 在 Figma 中设计视觉稿（可参考 Phantom、Jupiter 等 Web3 官网风格）
2. 把 Figma 链接发给 Claude
3. Claude 通过 Figma MCP 读取设计稿，精确还原为代码

### 方案 C：混合方案
1. 用 v0.dev / Bolt.new 生成初版视觉
2. 导出代码交给 Claude 整合到项目中
3. Claude 在此基础上优化、加动效、接真实数据

---

## 第五步：额外页面

除落地页外，可能还需要：

- `/privacy` — 隐私政策页
- `/terms` — 服务条款页
- `/download` — 下载引导页（可选，根据设备自动跳转）

---

## 风格参考

可以参考以下 Web3/Crypto App 官网找灵感：

- Phantom（phantom.app）— 简洁高级感
- Jupiter（jup.ag）— Solana 生态，活力风格
- Uniswap（uniswap.org）— 渐变 + 动效
- Raydium（raydium.io）— Solana DeFi 风格

---

## 开始编码时的 Prompt 示例

在新对话中可以这样描述：

> 帮我创建 Solvfun App 的落地页。Solvfun 是 Solana 上的自托管钱包，主打 Meme 币交易。
>
> 风格：暗色主题，科技感，类似 Phantom 的简洁高级感，但更有 Meme 文化的活力。
>
> 配色：[填入你的品牌色]
>
> 页面结构：Hero + Features + 截图展示 + 使用流程 + 安全说明 + 下载 CTA + Footer
>
> 技术栈：Next.js + Tailwind + shadcn/ui + 动画组件
>
> 素材在 /public 目录下。
