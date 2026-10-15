# 日办官网 · Cloudflare Pages 部署

官网用于微信开放平台等审核：需包含**应用介绍、下载入口、隐私政策、用户协议**。

## 1. 本地预览

```powershell
cd D:\_A\MeDOCS\Project\web3\日办\website
npm install
npm run dev
```

## 2. 部署前必改

编辑 `src/config/site.ts`，或通过 **Cloudflare Pages → Settings → Environment variables（Production）** 设置：

| 变量 | 说明 |
|------|------|
| `SITE_URL` | 构建用，如 `https://riban.pages.dev` |
| `PUBLIC_CONTACT_EMAIL` | 审核联系邮箱 |
| `PUBLIC_OPERATOR_NAME` | 运营主体名称（与开放平台一致） |
| `PUBLIC_ANDROID_DOWNLOAD_URL` | APK 完整 HTTPS 直链 |
| `PUBLIC_APP_STORE_URL` / `PUBLIC_PLAY_STORE_URL` | 上架后填写（可选） |

将 **release APK** 复制为 `public/download/riban-android.apk` 并提交，或只用 Releases 直链。

## 3. Cloudflare Pages（与 subtitle-kit 相同账号）

1. **Workers 和 Pages → 创建应用程序 → Pages → 连接到 Git**
2. 仓库：包含 `日办` 的 Git 仓库（可先 push `website/` 到 GitHub）
3. **构建配置**
   - 框架：Astro
   - **根目录**：`website`（若整仓在 `日办` 子路径则填相对路径）
   - 构建命令：`npm run build`
   - 输出目录：`dist`
4. 环境变量：上表 `SITE_URL` + `PUBLIC_*`
5. 部署完成后访问 `https://<项目名>.pages.dev`

## 4. 微信开放平台填写

- **应用官网**：`https://riban.pages.dev/`（换成你的 Pages 域名）
- 审核员应能打开：首页、下载按钮、`/privacy/`、`/terms/`
- 应用介绍可与首页文案一致

## 5. 自定义域名（可选）

Pages → 自定义域 → 绑定你的域名 → 把 `SITE_URL` 改为新域名并重新部署。
