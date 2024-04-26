import{_ as t,r as o,o as r,c as i,a as s,b as n,d as l,w as c,e as a}from"./app-CpKAKiQD.js";const d={},y=a('<h1 id="关于本站" tabindex="-1"><a class="header-anchor" href="#关于本站"><span>关于本站</span></a></h1><div class="hint-container info"><p class="hint-container-title">✨📒</p><p>详细记录一下此次建站过程</p></div><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h2>',3),u=s("br",null,null,-1),v=s("code",null,"vue3",-1),h=s("code",null,"typescript",-1),m=s("code",null,"vite",-1),C=s("br",null,null,-1),F={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"markdown增强",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown增强"},[s("span",null,"Markdown增强")])],-1),b=a(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">.</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> .github</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> ISSUE_TEMPLATE</span><span style="color:#7F848E;font-style:italic;"> # issus 模版</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> bug-report.yml</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> workflows</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">       └──</span><span style="color:#98C379;"> deploy-docs.yml</span><span style="color:#7F848E;font-style:italic;"> # 推送脚本</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> CNAME</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> LICENSE</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> README.md</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> api</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> proxy.js</span><span style="color:#7F848E;font-style:italic;"> # 跨域代理</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> env.d.ts</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> package.json</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> script</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> requirements.txt</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> submit.py</span><span style="color:#7F848E;font-style:italic;"> # Github Actions 推送URL使用脚本</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> src</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> .vuepress</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> client.ts</span><span style="color:#7F848E;font-style:italic;"> # 客户端配置文件</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> components</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> MyCoverLink.vue</span><span style="color:#7F848E;font-style:italic;"> # 友链组件</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> Mylink.vue</span><span style="color:#7F848E;font-style:italic;"> # 卡片组件</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> config.ts</span><span style="color:#7F848E;font-style:italic;"> # vuepress配置文件</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> data</span><span style="color:#7F848E;font-style:italic;"> # 数据</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> navbar</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> plugins</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> vuepress-plugin-canvas</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> vuepress-plugin-gradient-cover</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> vuepress-plugin-hitokoto</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> vuepress-plugin-live2DAssist</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> vuepress-plugin-popper</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> public</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> assets</span><span style="color:#7F848E;font-style:italic;"> # 资源</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> sidebar</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> styles</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> theme</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> api</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> bing.ts</span><span style="color:#7F848E;font-style:italic;"> # bing 每日壁纸</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> components</span><span style="color:#7F848E;font-style:italic;"> #自定义组件</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> index.ts</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   ├──</span><span style="color:#98C379;"> layouts</span><span style="color:#7F848E;font-style:italic;"> # 自定义布局</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> utils</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">       ├──</span><span style="color:#98C379;"> busuanzi.pure.js</span><span style="color:#7F848E;font-style:italic;"> # 不蒜子统计</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">       └──</span><span style="color:#98C379;"> time.ts</span><span style="color:#7F848E;font-style:italic;"> #运行时间</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   │</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> theme.ts</span><span style="color:#7F848E;font-style:italic;"> # 主题配置文件</span></span>
<span class="line"><span style="color:#61AFEF;">│</span><span style="color:#98C379;">   └──</span><span style="color:#98C379;"> README.md</span></span>
<span class="line"><span style="color:#61AFEF;">├──</span><span style="color:#98C379;"> tsconfig.json</span></span>
<span class="line"><span style="color:#61AFEF;">└──</span><span style="color:#98C379;"> vercel.json</span><span style="color:#7F848E;font-style:italic;"> # vercel 配置文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="框架支持" tabindex="-1"><a class="header-anchor" href="#框架支持"><span>框架支持</span></a></h2>`,3),g={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},E=s("h2",{id:"主题支持",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题支持"},[s("span",null,"主题支持")])],-1),f={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},A=s("h2",{id:"自定义内容",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义内容"},[s("span",null,"自定义内容")])],-1),k=s("p",null,"基于原主题进行了继承，个性化内容如下，主要自定义内容分为",-1),w=a("<li><p><strong>自定义布局</strong></p><ul><li>NotFound.vue</li><li>Layout.vue(增加打赏组件)</li><li>News.vue(说说列表布局)</li></ul></li><li><p><strong>自定义组件</strong></p><ul><li>BlogHero.vue</li><li>PageFooter.vue</li><li>Sponsor.vue（打赏组件）</li><li>NewsList.vue （说说列表）</li><li>NewsItem.vue （说说item）</li></ul></li>",2),x=s("p",null,[s("strong",null,"本地插件开发")],-1),j=s("li",null,"vuepress-plugin-canvas（支持彩虹背景和动态几何图形两种）",-1),N=s("li",null,"vuepress-plugin-gradient-cover （遮罩背景）",-1),B=s("li",null,"vuepress-plugin-hitokoto （一言插件）",-1),T=s("li",null,"vuepress-plugin-live2DAssist （看板娘辅助，由于子页有sidebar，看板娘会挡住，所以写了一个子页隐藏的小东西）",-1),z={href:"https://github.com/moefyit/moefy-canvas",target:"_blank",rel:"noopener noreferrer"},L=s("p",null,[s("strong",null,"引用外部内容")],-1),M={href:"https://github.com/oh-my-live2d/vuepress-plugin-oh-my-live2d",target:"_blank",rel:"noopener noreferrer"},S=s("li",null,[s("p",null,"不蒜子统计")],-1),D={href:"https://github.com/moefyit/moefy-canvas",target:"_blank",rel:"noopener noreferrer"},P={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/google-analytics.html",target:"_blank",rel:"noopener noreferrer"},R=s("p",null,[s("strong",null,"配置内容")],-1),Z=s("li",null,"navbar",-1),I=s("li",null,"sidebar",-1),q={href:"https://waline.js.org/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.algolia.com/developers/?utm_content=powered_by&utm_source=localhost&utm_medium=referral&utm_campaign=docsearch",target:"_blank",rel:"noopener noreferrer"},V=s("li",null,"启用 copyright 版权信息插件",-1),U=s("li",null,"feed rss插件",-1),H=s("li",null,"增加文章类型-说说，为说说markdown图片添加预览选择器",-1),J=s("li",null,[s("p",null,[s("strong",null,"零碎")]),s("ul",null,[s("li",null,"运行时间统计"),s("li",null,"CSS 样式美化"),s("li",null,"引入字体，品如手写体，夏行楷体"),s("li",null,"wanlie 增加自定义emoji，并修改展示样式"),s("li",null,"个性log"),s("li",null,[n("自动推送新文章url到搜索引擎（百度、Bing、Google）👉"),s("a",{href:"/platform/github/github-action"},"详细配置")])])],-1),O=s("h2",{id:"总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#总结"},[s("span",null,"总结")])],-1),W=s("blockquote",null,[s("p",null,"未完待续，持续优化中")],-1),K=s("p",null,"本地插件，喜欢自取，源码公开，点击右上角，github图标即可，当然不要忘记点个✨哦",-1);function Q(X,Y){const e=o("ExternalLinkIcon"),p=o("RouteLink");return r(),i("div",null,[y,s("p",null,[n("之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法"),u,n(" 直到偶然间发现vuepress，首先是被"),v,n("+"),h,n("+"),m,n("吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无意中发现了"),C,s("a",F,[n("vuepress-theme-hope"),l(e)]),n("，漂亮的外观一下子就吸引到我了，然后去官网深入研究了一番，发现二次开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适。所以，一步步折腾了起来……")]),_,s("p",null,[n("hope主题的markdown效果是出乎意料的好，而且支持了很多普通markdown不支持的东西，如自定义容器、带tab的代码块，最方便的是可以直接写流程图了，可选高亮主题（本站代码高亮基于shikiPlugin,虽不如默认的prismjs轻量高效，但能提供更准确的语法高亮）具体效果看这里☞"),l(p,{to:"/demo/markdown.html"},{default:c(()=>[n("Markdown展示")]),_:1})]),b,s("p",null,[s("a",g,[n("vuepress2.x"),l(e)])]),E,s("p",null,[s("a",f,[n("vuepress-theme-hope"),l(e)])]),A,k,s("ol",null,[w,s("li",null,[x,s("ul",null,[j,N,B,T,s("li",null,[n("vuepress-plugin-popper （鼠标特效，基于"),s("a",z,[n("@moefy-canvas/theme-popper"),l(e)]),n("）")])])]),s("li",null,[L,s("ul",null,[s("li",null,[s("p",null,[s("a",M,[n("vuepress-plugin-oh-my-live2d"),l(e)]),n(" 看板娘插件")])]),S,s("li",null,[s("p",null,[s("a",D,[n("@moefy-canvas/theme-popper"),l(e)]),n("原有插件只支持vuepress1.x，自己基于moefy-canvas进行了支持vuepress2.x的本地化插件开发")])]),s("li",null,[s("p",null,[s("a",P,[n("@vuepress/plugin-google-analytics"),l(e)]),n(" 支持Google Analytics 4 正好看到通知原来的UA也要被强制转换了，所以更换了G4")])])])]),s("li",null,[R,s("ul",null,[Z,I,s("li",null,[n("评论基于 "),s("a",q,[n("Waline"),l(e)])]),s("li",null,[n("搜索基于"),s("a",G,[n("algolia"),l(e)])]),V,U,H])]),J]),O,W,K])}const ss=t(d,[["render",Q],["__file","about.html.vue"]]),ns=JSON.parse('{"path":"/about.html","title":"关于本站","lang":"zh-CN","frontmatter":{"date":"2023-03-14T21:45:45.000Z","icon":"info","sidebar":false,"category":["Blog"],"tag":["Blog"],"description":"关于本站 ✨📒 详细记录一下此次建站过程 开始 之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法 直到偶然间发现vuepress，首先是被vue3+typescript+vite吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无...","head":[["meta",{"property":"og:url","content":"https://cnmd.icu/about.html"}],["meta",{"property":"og:site_name","content":"三个三"}],["meta",{"property":"og:title","content":"关于本站"}],["meta",{"property":"og:description","content":"关于本站 ✨📒 详细记录一下此次建站过程 开始 之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法 直到偶然间发现vuepress，首先是被vue3+typescript+vite吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"property":"article:author","content":"thiszhc"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:published_time","content":"2023-03-14T21:45:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于本站\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-14T21:45:45.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"thiszhc\\",\\"url\\":\\"https://cnmd.icu\\"}]}"]]},"headers":[{"level":2,"title":"开始","slug":"开始","link":"#开始","children":[]},{"level":2,"title":"Markdown增强","slug":"markdown增强","link":"#markdown增强","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"框架支持","slug":"框架支持","link":"#框架支持","children":[]},{"level":2,"title":"主题支持","slug":"主题支持","link":"#主题支持","children":[]},{"level":2,"title":"自定义内容","slug":"自定义内容","link":"#自定义内容","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":3.17,"words":952},"filePathRelative":"about.md","localizedDate":"2023年3月14日","excerpt":"\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">✨📒</p>\\n<p>详细记录一下此次建站过程</p>\\n</div>\\n<h2>开始</h2>\\n<p>之前的博客是基于jekyll打造的，要添加和定制化的东西都只能基于html+js+css完成，有些麻烦，所以一直有想更换引擎的想法<br>\\n直到偶然间发现vuepress，首先是被<code>vue3</code>+<code>typescript</code>+<code>vite</code>吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾，直到无意中发现了<br>\\n<a href=\\"https://theme-hope.vuejs.press/zh/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">vuepress-theme-hope</a>，漂亮的外观一下子就吸引到我了，然后去官网深入研究了一番，发现二次开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适。所以，一步步折腾了起来……</p>","autoDesc":true}');export{ss as comp,ns as data};
