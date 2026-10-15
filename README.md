# 日办 · 协同清单搭子 — 官网

静态官网，部署到 **Cloudflare Pages**，用于微信开放平台等审核。

- **GitHub 仓库**：[github.com/linyf-B/riban](https://github.com/linyf-B/riban)（本目录为独立 Git 根，供 Cloudflare Pages 连接）
- 本地：`npm install` → `npm run dev`
- 部署说明：[docs/DEPLOY-CLOUDFLARE.md](./docs/DEPLOY-CLOUDFLARE.md)
- 上线前修改：`src/config/site.ts`（邮箱、运营方、下载链接）
- 图标与截图：`public/images/`（来自 `docs/wechat/日办-高清-108.png` 与 `docs/preview/*.png`）
