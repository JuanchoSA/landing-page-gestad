var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { u as t, B as e, s, c as a, r as i, a as r } from "./chunks/_/nitro.mjs";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };
"global" in globalThis || (globalThis.global = globalThis);
var o = globalThis.process;
globalThis.process = o ? new Proxy(o, { get: /* @__PURE__ */ __name((e2, s2, a2) => Reflect.has(e2, s2) ? Reflect.get(e2, s2, a2) : Reflect.get(t, s2, a2), "get") }) : t, globalThis.Buffer || (globalThis.Buffer = e), globalThis.setImmediate || (globalThis.setImmediate = s), globalThis.clearImmediate || (globalThis.clearImmediate = a);
var n = { "/robots.txt": { type: "text/plain; charset=utf-8", etag: '"18-j8OIsL9qGDmNZ+lHhp2tyH4XtaE"', mtime: "2026-04-08T08:55:00.000Z", size: 24, path: "../robots.txt" }, "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI"', mtime: "2026-04-08T08:55:00.000Z", size: 4286, path: "../favicon.ico" }, "/_nuxt/B_c17RlO.js": { type: "text/javascript; charset=utf-8", etag: '"d96-/B1XCYkTher4Rp3g3iNer3YkQvs"', mtime: "2026-04-27T20:46:21.808Z", size: 3478, path: "../_nuxt/B_c17RlO.js" }, "/_nuxt/entry.oVbF9oV0.css": { type: "text/css; charset=utf-8", etag: '"57d5-a0FEjEREWYhifV/d8RhFz4yr6jQ"', mtime: "2026-04-27T20:46:21.808Z", size: 22485, path: "../_nuxt/entry.oVbF9oV0.css" }, "/_nuxt/error-404.C-Ezrlz-.css": { type: "text/css; charset=utf-8", etag: '"97e-YLcQ2HBNLea0KJoUeqSqSCendIU"', mtime: "2026-04-27T20:46:21.808Z", size: 2430, path: "../_nuxt/error-404.C-Ezrlz-.css" }, "/_nuxt/h8k2r-Xp.js": { type: "text/javascript; charset=utf-8", etag: '"2543-ANhvuMBSVJUQyYp0OGzGPlYczfA"', mtime: "2026-04-27T20:46:21.808Z", size: 9539, path: "../_nuxt/h8k2r-Xp.js" }, "/_nuxt/error-500.DBWf9FGj.css": { type: "text/css; charset=utf-8", etag: '"773-9MNIE+ztUss3x7HN62QKMFz0rhs"', mtime: "2026-04-27T20:46:21.807Z", size: 1907, path: "../_nuxt/error-500.DBWf9FGj.css" }, "/_nuxt/builds/meta/53180f30-f213-47f6-b2f2-ac59567f62ed.json": { type: "application/json", etag: '"58-zrLmvuhErYfOZfG6pYPrBl79uMo"', mtime: "2026-04-27T20:46:22.589Z", size: 88, path: "../_nuxt/builds/meta/53180f30-f213-47f6-b2f2-ac59567f62ed.json" }, "/_nuxt/builds/latest.json": { type: "application/json", etag: '"47-HOLvUizNfkq6c3Lp53iRrFmnce4"', mtime: "2026-04-27T20:46:22.587Z", size: 71, path: "../_nuxt/builds/latest.json" }, "/_nuxt/zZ9qJ05K.js": { type: "text/javascript; charset=utf-8", etag: '"233a0-4J8JQvGOGiUU8Y43Y5HzFbRsEXU"', mtime: "2026-04-27T20:46:21.808Z", size: 144288, path: "../_nuxt/zZ9qJ05K.js" }, "/_nuxt/logo-gestad.BCaXVi1r.png": { type: "image/png", etag: '"13720-3gf+vefB/g5opv7hYMvk5x9KIrA"', mtime: "2026-04-27T20:46:21.805Z", size: 79648, path: "../_nuxt/logo-gestad.BCaXVi1r.png" }, "/_nuxt/KhPly5i-.js": { type: "text/javascript; charset=utf-8", etag: '"146-1PEOaQ2cpOqXVFe6wOT/cXA+JPM"', mtime: "2026-04-27T20:46:21.808Z", size: 326, path: "../_nuxt/KhPly5i-.js" } };
var l = { "/_nuxt/builds/meta/": { maxAge: 31536e3 }, "/_nuxt/builds/": { maxAge: 1 }, "/_nuxt/": { maxAge: 31536e3 } };
var c = r();
var h = { async fetch(t2, s2, a2) {
  const r2 = new URL(t2.url);
  if (s2.ASSETS && (function(t3 = "") {
    if (n[t3]) return true;
    for (const e2 in l) if (t3.startsWith(e2)) return true;
    return false;
  })(r2.pathname)) return s2.ASSETS.fetch(t2);
  let o2;
  return i(t2) && (o2 = e.from(await t2.arrayBuffer())), globalThis.__env__ = s2, c.localFetch(r2.pathname + r2.search, { context: { waitUntil: /* @__PURE__ */ __name((t3) => a2.waitUntil(t3), "waitUntil"), _platform: { cf: t2.cf, cloudflare: { request: t2, env: s2, context: a2 } } }, host: r2.hostname, protocol: r2.protocol, method: t2.method, headers: t2.headers, body: o2 });
}, scheduled(t2, e2, s2) {
} };
export {
  h as default
};
//# sourceMappingURL=bundledWorker-0.4130951339189878.mjs.map
