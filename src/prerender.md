# SEO 预渲染

如果你想要预渲染路由，并且发布生产版本时不会显著变化，使用 webpack 插件：[prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin)，经测试可以在 vue 中进行使用。对于 _经常_ 变动的页面，[Prerender.io](https://prerender.io/) 和 [Netlify](https://www.netlify.com/pricing) 都提供了应对经常变动的内容的针对搜索引擎的方案。

If you want to prerender routes that will not significantly change once pushed to production, use this Webpack plugin: [prerender-spa-plugin](https://www.npmjs.com/package/prerender-spa-plugin), which has been tested for use with Vue. For pages that _do_ frequently change, [Prerender.io](https://prerender.io/) and [Netlify](https://www.netlify.com/pricing) both offer plans for regularly re-prerendering your content for search engines.


