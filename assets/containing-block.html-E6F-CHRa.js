import{_ as p,r as e,o,c as t,a as s,b as n,d as l,e as i}from"./app-CpKAKiQD.js";const c={},r=s("h1",{id:"你不知道的-css-之包含块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#你不知道的-css-之包含块"},[s("span",null,"你不知道的 CSS 之包含块")])],-1),d=s("p",null,"一说到 CSS 盒模型，这是很多小伙伴耳熟能详的知识，甚至有的小伙伴还能说出 border-box 和 content-box 这两种盒模型的区别。",-1),B=s("p",null,"但是一说到 CSS 包含块，有的小伙伴就懵圈了，什么是包含块？好像从来没有听说过这玩意儿。",-1),y=s("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-142005.png",alt:"image-20220814222004395",style:{zoom:"20%"}},null,-1),v=s("p",null,"好吧，如果你对包含块的知识一无所知，那么系好安全带，咱们准备出发了。",-1),m=s("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-060434.png",alt:"image-20220813140434032",style:{zoom:"50%"}},null,-1),A=s("p",null,[n("包含块英语全称为"),s("strong",null,"containing block"),n("，实际上平时你在书写 CSS 时，大多数情况下你是感受不到它的存在，因此你不知道这个知识点也是一件很正常的事情。但是这玩意儿是确确实实存在的，在 CSS 规范中也是明确书写了的：")],-1),u={href:"https://drafts.csswg.org/css2/#containing-block-details",target:"_blank",rel:"noopener noreferrer"},b=i(`<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-142459.png" alt="image-20220814222458695" style="zoom:50%;"><p>并且，如果你不了解它的运作机制，有时就会出现一些你认为的莫名其妙的现象。</p><p>那么，这个包含块究竟说了什么内容呢？</p><p>说起来也简单，<strong>就是元素的尺寸和位置，会受它的包含块所影响。对于一些属性，例如 width, height, padding, margin，绝对定位元素的偏移值（比如 position 被设置为 absolute 或 fixed），当我们对其赋予百分比值时，这些值的计算值，就是通过元素的包含块计算得来。</strong></p><p>来吧，少年，让我们从最简单的 case 开始看。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-143153.png" alt="image-20220814223152726" style="zoom:50%;"><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;container&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;item&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: skyblue;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.item</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请仔细阅读上面的代码，然后你认为 div.item 这个盒子的宽高是多少？</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-143451.png" alt="image-20220814223451349" style="zoom:33%;"><p>相信你能够很自信的回答这个简单的问题，div.item 盒子的 width 为 250px，height 为 150px。</p><p>这个答案确实是没有问题的，但是如果我追问你是怎么得到这个答案的，我猜不了解包含块的你大概率会说，因为它的父元素 div.container 的 width 为 500px，50% 就是 250px，height 为 300px，因此 50% 就是 150px。</p><p>这个答案实际上是不准确的。正确的答案应该是，<strong>div.item 的宽高是根据它的包含块来计算的</strong>，而这里包含块的大小，正是这个元素最近的祖先块元素的内容区。</p><p>因此正如我前面所说，<strong>很多时候你都感受不到包含块的存在。</strong></p><p>包含块分为两种，一种是根元素（HTML 元素）所在的包含块，被称之为初始包含块（<strong>initial containing block</strong>）。对于浏览器而言，初始包含块的的大小等于视口 viewport 的大小，基点在画布的原点（视口左上角）。它是作为元素绝对定位和固定定位的参照物。</p><p>另外一种是对于非根元素，对于非根元素的包含块判定就有几种不同的情况了。大致可以分为如下几种：</p><ul><li>如果元素的 positiion 是 relative 或 static ，那么包含块由离它最近的块容器（block container）的内容区域（content area）的边缘建立。</li><li>如果 position 属性是 fixed，那么包含块由视口建立。</li><li>如果元素使用了 absolute 定位，则包含块由它的最近的 position 的值不是 static （也就是值为fixed、absolute、relative 或 sticky）的祖先元素的内边距区的边缘组成。</li></ul><p>前面两条实际上都还比较好理解，第三条往往是初学者容易比较忽视的，我们来看一个示例：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;container&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;item&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;item2&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: skyblue;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.item</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">150</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#D19A66;"> solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.item2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先阅读上面的代码，然后你能在脑海里面想出其大致的样子么？或者用笔和纸画一下也行。</p><p>公布正确答案：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-153548.png" alt="image-20220814233548188" style="zoom:33%;"><p>怎么样？有没有和你所想象的对上？</p><p>其实原因也非常简单，根据上面的第三条规则，对于 div.item2 来讲，它的包含块应该是 div.container，而非 div.item。</p><p>如果你能把上面非根元素的包含块判定规则掌握，那么关于包含块的知识你就已经掌握 80% 了。</p><p>实际上对于非根元素来讲，包含块还有一种可能，那就是如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：</p><ul><li>transform 或 perspective 的值不是 none</li><li>will-change 的值是 transform 或 perspective</li><li>filter 的值不是 none 或 will-change 的值是 filter(只在 Firefox 下生效).</li><li>contain 的值是 paint (例如: contain: paint;)</li></ul><p>我们还是来看一个示例：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;container&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;item&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;item2&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.container</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">500</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: skyblue;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.item</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">150</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  border: </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">px</span><span style="color:#D19A66;"> solid</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin-left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  transform: </span><span style="color:#56B6C2;">rotate</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">deg</span><span style="color:#ABB2BF;">); </span><span style="color:#7F848E;font-style:italic;">/* 新增代码 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.item2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们对于上面的代码只新增了一条声明，那就是 transform: rotate(0deg)，此时的渲染效果却发生了改变，如下图所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-154347.png" alt="image-20220814234347149" style="zoom:33%;"><p>可以看到，此时对于 div.item2 来讲，包含块就变成了 div.item。</p><p>好了，到这里，关于包含块的知识就基本讲完了。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-154655.png" alt="image-20220814234654914" style="zoom:33%;"><p>我们再把 CSS 规范中所举的例子来看一下。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;Illustration of containing blocks&lt;/</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">body</span><span style="color:#D19A66;"> id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;body&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#D19A66;"> id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;div1&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">p</span><span style="color:#D19A66;"> id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;p1&quot;</span><span style="color:#ABB2BF;">&gt;This is text in the first paragraph...&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">p</span><span style="color:#D19A66;"> id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;p2&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        This is text</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">em</span><span style="color:#D19A66;"> id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;em1&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          in the</span></span>
<span class="line"><span style="color:#ABB2BF;">          &lt;</span><span style="color:#E06C75;">strong</span><span style="color:#D19A66;"> id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;strong1&quot;</span><span style="color:#ABB2BF;">&gt;second&lt;/</span><span style="color:#E06C75;">strong</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          paragraph.</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是一段简单的 HTML 代码，在没有添加任何 CSS 代码的情况下，你能说出各自的包含块么？</p><p>对应的结果如下：</p><table><thead><tr><th>元素</th><th>包含块</th></tr></thead><tbody><tr><td>html</td><td>initial C.B. (UA-dependent)</td></tr><tr><td>body</td><td>html</td></tr><tr><td>div1</td><td>body</td></tr><tr><td>p1</td><td>div1</td></tr><tr><td>p2</td><td>div1</td></tr><tr><td>em1</td><td>p2</td></tr><tr><td>strong1</td><td>p2</td></tr></tbody></table><p>首先 HTML 作为根元素，对应的包含块就是前面我们所说的初始包含块，而对于 body 而言，这是一个 static 定位的元素，因此该元素的包含块参照第一条为 html，以此类推 div1、p1、p2 以及 em1 的包含块也都是它们的父元素。</p><p>不过 strong1 比较例外，它的包含块确实 p2，而非 em1。为什么会这样？建议你再把非根元素的第一条规则读一下：</p><ul><li>如果元素的 positiion 是 relative 或 static ，那么包含块由离它最近的**块容器（block container）**的内容区域（content area）的边缘建立。</li></ul><p>没错，因为 em1 不是块容器，而包含块是<strong>离它最近的块容器</strong>的内容区域，所以是 p2。</p><p>接下来添加如下的 CSS：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">#div1</span><span style="color:#ABB2BF;"> { </span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; top: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码我们对 div1 进行了定位，那么此时的包含块会发生变化么？你可以先在自己思考一下。</p><p>答案如下：</p><table><thead><tr><th>元素</th><th>包含块</th></tr></thead><tbody><tr><td>html</td><td>initial C.B. (UA-dependent)</td></tr><tr><td>body</td><td>html</td></tr><tr><td>div1</td><td>initial C.B. (UA-dependent)</td></tr><tr><td>p1</td><td>div1</td></tr><tr><td>p2</td><td>div1</td></tr><tr><td>em1</td><td>p2</td></tr><tr><td>strong1</td><td>p2</td></tr></tbody></table><p>可以看到，这里 div1 的包含块就发生了变化，变为了初始包含块。这里你可以参考前文中的这两句话：</p><ul><li>初始包含块（<strong>initial containing block</strong>）。对于浏览器而言，初始包含块的的大小等于视口 viewport 的大小，基点在画布的原点（视口左上角）。它是作为元素绝对定位和固定定位的参照物。</li><li>如果元素使用了 absolute 定位，则包含块由它的最近的 position 的值不是 static （也就是值为fixed、absolute、relative 或 sticky）的祖先元素的内边距区的边缘组成。</li></ul><p>是不是一下子就理解了。没错，因为我们对 div1 进行了定位，因此它会应用非根元素包含块计算规则的第三条规则，寻找离它最近的 position 的值不是 static 的祖先元素，不过显然 body 的定位方式为 static，因此 div1 的包含块最终就变成了初始包含块。</p><p>接下来我们继续修改我们的 CSS：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">#div1</span><span style="color:#ABB2BF;"> { </span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#61AFEF;">#em1</span><span style="color:#ABB2BF;">  { </span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">  left: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们对 em1 同样进行了 absolute 绝对定位，你想一想会有什么样的变化？</p><p>没错，聪明的你大概应该知道，em1 的包含块不再是 p2，而变成了 div1，而 strong1 的包含块也不再是 p2 了，而是变成了 em1。</p><p>如下表所示：</p><table><thead><tr><th>元素</th><th>包含块</th></tr></thead><tbody><tr><td>html</td><td>initial C.B. (UA-dependent)</td></tr><tr><td>body</td><td>html</td></tr><tr><td>div1</td><td>initial C.B. (UA-dependent)</td></tr><tr><td>p1</td><td>div1</td></tr><tr><td>p2</td><td>div1</td></tr><tr><td>em1</td><td>div1（因为定位了，参阅非根元素包含块确定规则的第三条）</td></tr><tr><td>strong1</td><td>em1（因为 em1 变为了块容器，参阅非根元素包含块确定规则的第一条）</td></tr></tbody></table><p>好了，这就是 CSS 规范中所举的例子。如果你全都能看明白，以后你还能跟别人说你是看过这一块知识对应的 CSS 规范的人。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-15-013519.png" alt="image-20220815093518833" style="zoom:33%;"><p>另外，关于包含块的知识，在 MDN 上除了解说了什么是包含块以外，也举出了很多简单易懂的示例。</p>`,62),F={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block",target:"_blank",rel:"noopener noreferrer"},g=s("p",null,"好了，这就是有关包含块的所有内容了，你学会了么？-）",-1),h=s("hr",null,null,-1),C=s("p",null,[n("-"),s("em",null,"EOF"),n("-")],-1);function x(E,D){const a=e("ExternalLinkIcon");return o(),t("div",null,[r,d,B,y,v,m,A,s("p",null,[s("em",null,[s("a",u,[n("https://drafts.csswg.org/css2/#containing-block-details"),l(a)])])]),b,s("p",null,[n("具体你可以移步到："),s("em",null,[s("a",F,[n("https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block"),l(a)])])]),g,h,C])}const S=p(c,[["render",x],["__file","containing-block.html.vue"]]),f=JSON.parse('{"path":"/posts/Web/CSS/containing-block.html","title":"你不知道的 CSS 之包含块","lang":"zh-CN","frontmatter":{"date":"2023-04-06T00:00:00.000Z","icon":"box","category":["CSS"],"tag":["前端开发"],"description":"你不知道的 CSS 之包含块 一说到 CSS 盒模型，这是很多小伙伴耳熟能详的知识，甚至有的小伙伴还能说出 border-box 和 content-box 这两种盒模型的区别。 但是一说到 CSS 包含块，有的小伙伴就懵圈了，什么是包含块？好像从来没有听说过这玩意儿。 image-20220814222004395 好吧，如果你对包含块的知识一无所知...","head":[["meta",{"property":"og:url","content":"https://cnmd.icu/posts/Web/CSS/containing-block.html"}],["meta",{"property":"og:site_name","content":"三个三"}],["meta",{"property":"og:title","content":"你不知道的 CSS 之包含块"}],["meta",{"property":"og:description","content":"你不知道的 CSS 之包含块 一说到 CSS 盒模型，这是很多小伙伴耳熟能详的知识，甚至有的小伙伴还能说出 border-box 和 content-box 这两种盒模型的区别。 但是一说到 CSS 包含块，有的小伙伴就懵圈了，什么是包含块？好像从来没有听说过这玩意儿。 image-20220814222004395 好吧，如果你对包含块的知识一无所知..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"property":"article:author","content":"thiszhc"}],["meta",{"property":"article:tag","content":"前端开发"}],["meta",{"property":"article:published_time","content":"2023-04-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你不知道的 CSS 之包含块\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"thiszhc\\",\\"url\\":\\"https://cnmd.icu\\"}]}"]]},"headers":[],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":8.18,"words":2453},"filePathRelative":"posts/Web/CSS/containing-block.md","localizedDate":"2023年4月6日","excerpt":"\\n<p>一说到 CSS 盒模型，这是很多小伙伴耳熟能详的知识，甚至有的小伙伴还能说出 border-box 和 content-box 这两种盒模型的区别。</p>\\n<p>但是一说到 CSS 包含块，有的小伙伴就懵圈了，什么是包含块？好像从来没有听说过这玩意儿。</p>\\n<img src=\\"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-142005.png\\" alt=\\"image-20220814222004395\\" style=\\"zoom: 20%;\\">\\n<p>好吧，如果你对包含块的知识一无所知，那么系好安全带，咱们准备出发了。</p>","autoDesc":true}');export{S as comp,f as data};
