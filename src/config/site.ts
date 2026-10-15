/** 部署前请改成本次审核用的真实信息（也可在 Cloudflare 构建环境变量里覆盖 PUBLIC_*） */
export const siteConfig = {
  name: "日办",
  tagline: "协同清单搭子",
  fullName: "日办 · 协同清单搭子",
  description:
    "日办是一款面向个人与情侣、室友、小团队的待办与协同清单应用。用日历看清每一天要做什么，支持复制一整天、到点提醒与多人共编同一条事项。",
  /** 微信开放平台 / 应用审核填写的官网域名，需与 Cloudflare Pages 一致 */
  origin: import.meta.env.SITE ?? "https://riban.pages.dev",
  version: "1.0.0",
  androidPackage: "app.riban.riban",
  /** Android 安装包直链，文件在 47.108.53.157:/home/ubuntu/linyf_app/ */
  androidDownloadUrl:
    import.meta.env.PUBLIC_ANDROID_DOWNLOAD_URL ||
    "http://47.108.53.157/download/app-debug.apk",
  /** 上架应用商店后替换；暂无则留空字符串 */
  appStoreUrl: import.meta.env.PUBLIC_APP_STORE_URL || "",
  playStoreUrl: import.meta.env.PUBLIC_PLAY_STORE_URL || "",
  /** 微信小程序（若已上线，填路径或留空） */
  wechatMiniProgramPath: import.meta.env.PUBLIC_WECHAT_MP_PATH || "",
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL || "hello@example.com",
  operatorName: import.meta.env.PUBLIC_OPERATOR_NAME || "日办产品团队",
  updatedAt: "2026-10-15",
  appIcon: "/images/app-icon.png",
  screenshots: [
    { src: "/images/list.png", title: "任务清单", caption: "按日期查看待办，支持筛选与协同头像" },
    { src: "/images/create-alarm.png", title: "提醒设置", caption: "提前 1 天、30 分钟与截止时提醒" },
    { src: "/images/login-identities.png", title: "快速开始", caption: "选择演示身份或自定义昵称进入" },
    { src: "/images/login-wechat.png", title: "微信登录", caption: "可使用微信账号便捷登录（可选）" },
  ],
};
