const UPSTREAM = "http://47.108.53.157/download/app-debug.apk";

export async function onRequest(context) {
  if (context.params.file !== "app-debug.apk") {
    return new Response("Not found", { status: 404 });
  }

  let upstream;
  try {
    upstream = await fetch(UPSTREAM);
  } catch (error) {
    const message = error instanceof Error ? error.message : "fetch failed";
    return new Response(`upstream error: ${message}`, { status: 502 });
  }

  if (!upstream.ok || !upstream.body) {
    return new Response(`upstream ${upstream.status} body=${Boolean(upstream.body)}`, {
      status: 502,
    });
  }

  const headers = new Headers();
  const length = upstream.headers.get("Content-Length");
  if (length) headers.set("Content-Length", length);
  headers.set("Content-Type", "application/vnd.android.package-archive");
  headers.set("Content-Disposition", 'attachment; filename="app-debug.apk"');
  headers.set("Cache-Control", "public, max-age=300");

  return new Response(upstream.body, { status: 200, headers });
}
