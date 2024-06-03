import{_ as e,c as o,o as a,a2 as t}from"./chunks/framework.CSD-MHFz.js";const g=JSON.parse('{"title":"webpack scope hoisting","description":"","frontmatter":{},"headers":[],"relativePath":"job/module/webpack scope hoisting.md","filePath":"job/module/webpack scope hoisting.md"}'),c={name:"job/module/webpack scope hoisting.md"},p=t('<h1 id="webpack-scope-hoisting" tabindex="-1">webpack scope hoisting <a class="header-anchor" href="#webpack-scope-hoisting" aria-label="Permalink to &quot;webpack scope hoisting&quot;">​</a></h1><p>详细介绍：<a href="https://webpack.docschina.org/plugins/module-concatenation-plugin/" target="_blank" rel="noreferrer">https://webpack.docschina.org/plugins/module-concatenation-plugin/</a></p><h2 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h2><p>介绍一下 webpack scope hoisting？</p><blockquote><p>参考答案：</p><p>scope hoisting 是 webpack 的内置优化，它是针对模块的优化，在生产环境打包时会自动开启。</p><p>在未开启scope hoisting时，webpack 会将每个模块的代码放置在一个独立的函数环境中，这样是为了保证模块的作用域互不干扰。</p><p>而 scope hoisting 的作用恰恰相反，是把多个模块的代码合并到一个函数环境中执行。在这一过程中，webpack 会按照顺序正确的合并模块代码，同时对涉及的标识符做适当处理以避免重名。</p><p>这样做的好处是减少了函数调用，对运行效率有一定提升，同时也降低了打包体积。</p><p>但 scope hoisting 的启用是有前提的，如果遇到某些模块多次被其他模块引用，或者使用了动态导入的模块，或者是非 ESM 的模块，都不会有 scope hoisting。</p></blockquote>',5),s=[p];function i(n,r,h,l,_,d){return a(),o("div",null,s)}const k=e(c,[["render",i]]);export{g as __pageData,k as default};
