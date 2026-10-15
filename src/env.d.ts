/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly PUBLIC_ANDROID_DOWNLOAD_URL?: string;
  readonly PUBLIC_APP_STORE_URL?: string;
  readonly PUBLIC_PLAY_STORE_URL?: string;
  readonly PUBLIC_WECHAT_MP_PATH?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_OPERATOR_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
