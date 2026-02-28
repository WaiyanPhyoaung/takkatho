import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BPkBIPRZ.mjs';
import { manifest } from './manifest_DLCWCXxz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro2.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about.astro.mjs');
const _page4 = () => import('./pages/api/auth/signin.astro.mjs');
const _page5 = () => import('./pages/api/auth/signout.astro.mjs');
const _page6 = () => import('./pages/api/auth/signup.astro.mjs');
const _page7 = () => import('./pages/courses.astro.mjs');
const _page8 = () => import('./pages/dashboard.astro.mjs');
const _page9 = () => import('./pages/signin.astro.mjs');
const _page10 = () => import('./pages/signup.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const _page12 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["node_modules/@astrojs/starlight/routes/static/404.astro", _page2],
    ["src/pages/about.astro", _page3],
    ["src/pages/api/auth/signin.ts", _page4],
    ["src/pages/api/auth/signout.ts", _page5],
    ["src/pages/api/auth/signup.ts", _page6],
    ["src/pages/courses.astro", _page7],
    ["src/pages/dashboard.astro", _page8],
    ["src/pages/signin.astro", _page9],
    ["src/pages/signup.astro", _page10],
    ["src/pages/index.astro", _page11],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "98780d74-aadf-431c-8f70-8dd3d85355e5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
