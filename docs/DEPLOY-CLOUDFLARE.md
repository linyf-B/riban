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

官方文档写明：Pages **Git 集成只支持 [GitHub / GitLab](https://developers.cloudflare.com/pages/configuration/git-integration/)**，**不能**在控制台里直接连 [Gitee](https://gitee.com/linyf-wyh/riban)。Gitee 可继续当代码备份；上线 Pages 用下面两种方式之一。

### 方式 A：GitHub 连 Pages（推荐，改代码自动部署）

1. 把本目录推到 GitHub（例如 `linyf-B/riban`，仓库根就是 Astro 项目，**不要**再填子目录 `website`）。
2. **Workers 和 Pages → 创建 → Pages → 连接到 Git** → 选 GitHub 仓库。
3. **构建配置**
   - 框架：Astro
   - 根目录：`/`（仅官网单仓时留空即可）
   - 构建命令：`npm run build`
   - 输出目录：`dist`
4. 环境变量：上表 `SITE_URL` + `PUBLIC_*`
5. 之后改 Gitee 时，记得同步推 GitHub，或只以 GitHub 为 Pages 源。

### 方式 B：Direct Upload + Wrangler（不绑 Git，适合只用 Gitee）

1. **创建应用程序 → Pages → 使用直接上传**（不要选「连接到 Git」）。
2. 本地构建并上传：

```powershell
cd D:\_A\MeDOCS\Project\web3\日办\website
npm install
npm run build
npx wrangler pages deploy dist --project-name=riban
```

首次会提示登录 Cloudflare；也可在 [API 令牌](https://dash.cloudflare.com/profile/api-tokens) 创建 **Edit Cloudflare Pages** 权限，设置 `CLOUDFLARE_API_TOKEN` 与 `CLOUDFLARE_ACCOUNT_ID`。

3. 若要坚持 Gitee 触发部署：在 Gitee **流水线**里装 Node、执行 `npm ci && npm run build`，再跑上述 `wrangler pages deploy`（密钥放 Gitee 仓库变量）。参见 [Direct Upload + CI](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)。

部署完成后访问 `https://<项目名>.pages.dev`。

## 4. 微信开放平台填写

- **应用官网**：`https://riban.pages.dev/`（换成你的 Pages 域名）
- 审核员应能打开：首页、下载按钮、`/privacy/`、`/terms/`
- 应用介绍可与首页文案一致

## 5. 自定义域名（可选）

Pages → 自定义域 → 绑定你的域名 → 把 `SITE_URL` 改为新域名并重新部署。
