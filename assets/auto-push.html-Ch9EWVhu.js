import{_ as p,r as a,o as t,c as i,f as c,d as l,a as s,b as n,e as r}from"./app-CpKAKiQD.js";const d={},y=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"相关信息"),s("p",null,[n("这是一个"),s("code",null,"GitHub Actions"),n("的配置文件，整体思路是，获取本次更新的url"),s("br"),n(" （通过对比两次提交的sitemap.xml文件），所以触发条件是deploy分支有推送并修改了"),s("code",null,"sitemap.xml"),n("文件，再利用python脚本进行url推送到百度、Bing、Google")]),s("p",null,[n("脚本代码请看这里👉"),s("a",{href:"/posts/Python/submit-url"},"提交URL到搜索引擎（百度、Bing、Google）")])],-1),m=s("p",null,[n("前些天不是写了Bing的提交脚本吗，但是每次都要自己手动跑脚本也很麻烦，但我又没有服务器，所以用上了GitHub Actions了嘛"),s("br"),n(" 总的来说做了以下事情：")],-1),B=s("ol",null,[s("li",null,"提交代码并修改sitemap.xml 后触发工作流"),s("li",null,"比对上一次提交和本次提交的新增URL"),s("li",null,"将URL分别提交给百度站长、Bing、Google 供搜索引擎快速收录"),s("li")],-1),u=s("h2",{id:"流程解读",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程解读"},[s("span",null,"流程解读")])],-1),v=r(`<h2 id="配置代码" tabindex="-1"><a class="header-anchor" href="#配置代码"><span>配置代码</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">推送脚本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  push</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    branches</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">gh-pages</span></span>
<span class="line"><span style="color:#E06C75;">    paths</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">&#39;sitemap.xml&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">jobs</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  push_bot</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    runs-on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E06C75;">    steps</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Checkout gh-pages branch</span></span>
<span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">          fetch-depth</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span></span>
<span class="line"><span style="color:#E06C75;">          ref</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;gh-pages&#39;</span></span>
<span class="line"><span style="color:#E06C75;">          path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">gh-pages</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">获取上一次提交SHA</span></span>
<span class="line"><span style="color:#E06C75;">        id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">last-commit</span></span>
<span class="line"><span style="color:#E06C75;">        run</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">|</span></span>
<span class="line"><span style="color:#98C379;">          cd gh-pages</span></span>
<span class="line"><span style="color:#98C379;">          PREV=$(git log --format=&quot;%H&quot; -n 2 | tail -n 1)</span></span>
<span class="line"><span style="color:#98C379;">          echo &quot;SHA_KEY=$PREV&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#98C379;">          echo $PREV</span></span>
<span class="line"><span style="color:#98C379;">        </span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">拉取prev代码</span></span>
<span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">          ref</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ steps.last-commit.outputs.SHA_KEY }}</span></span>
<span class="line"><span style="color:#E06C75;">          path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">prev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Checkout main branch</span></span>
<span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">          ref</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;main&#39;</span></span>
<span class="line"><span style="color:#E06C75;">          path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Set up Python</span></span>
<span class="line"><span style="color:#E06C75;">        uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/setup-python@v4</span></span>
<span class="line"><span style="color:#E06C75;">        with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">          python-version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;3.10&quot;</span></span>
<span class="line"><span style="color:#E06C75;">          cache</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;pip&quot;</span><span style="color:#7F848E;font-style:italic;"> # 设置缓存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">安装依赖</span></span>
<span class="line"><span style="color:#E06C75;">        run</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">|</span></span>
<span class="line"><span style="color:#98C379;">          pip install -r main/script/requirements.txt</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">运行脚本</span></span>
<span class="line"><span style="color:#E06C75;">        env</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">          #设置secrets的环境变量</span></span>
<span class="line"><span style="color:#E06C75;">          BAIDU_KEY</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ secrets.BAIDU_KEY }}</span></span>
<span class="line"><span style="color:#E06C75;">          BING_KEY</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ secrets.BING_KEY }}</span></span>
<span class="line"><span style="color:#E06C75;">          GOOGLE_JSON</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ secrets.GOOGLE_JSON }}</span></span>
<span class="line"><span style="color:#E06C75;">        run</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">|</span></span>
<span class="line"><span style="color:#98C379;">          python main/script/submit.py --sitemap gh-pages/sitemap.xml --prevsitemap prev/sitemap.xml</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置解读" tabindex="-1"><a class="header-anchor" href="#配置解读"><span>配置解读</span></a></h2><h4 id="触发" tabindex="-1"><a class="header-anchor" href="#触发"><span>触发</span></a></h4><p>这个例子的触发机制如下：</p><ol><li>当有推送行为发生</li><li>推送分支为<code>gh-pages</code></li><li><code>sitemap.xml</code>文件被修改</li></ol><h4 id="配置运行环境" tabindex="-1"><a class="header-anchor" href="#配置运行环境"><span>配置运行环境</span></a></h4><p>这里指定<code>ubuntu-latest</code></p><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h4><ol><li><p>拉取 gh-pages 分支代码到路径<code>gh-pages</code></p></li><li><p>获取上一次提交SHA-1值使用如下命令，将获取到的倒数第二次git提交SHA-1值存储到环境变量<code>GITHUB_OUTPUT</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>中，方便后续使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;"> cd</span><span style="color:#98C379;"> gh-pages</span></span>
<span class="line"><span style="color:#E06C75;"> PREV</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">$(</span><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log </span><span style="color:#D19A66;">--format=</span><span style="color:#98C379;">&quot;%H&quot; </span><span style="color:#D19A66;">-n</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;"> tail</span><span style="color:#D19A66;"> -n</span><span style="color:#D19A66;"> 1</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#56B6C2;"> echo</span><span style="color:#98C379;"> &quot;SHA_KEY=</span><span style="color:#E06C75;">$PREV</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#E06C75;">$GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#56B6C2;"> echo</span><span style="color:#E06C75;"> $PREV</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取上一步存储到到<code>GITHUB_OUTPUT</code>的commitid，并拉取代码代码到路径prev，ref可以是分支，tag，commitid</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;"> name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">拉取prev代码</span></span>
<span class="line"><span style="color:#E06C75;"> uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E06C75;"> with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">     ref</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ steps.last-commit.outputs.SHA_KEY }}</span></span>
<span class="line"><span style="color:#E06C75;">     path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">prev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拉取main分支代码到路径main</p></li><li><p>安装python环境并设置缓存</p></li><li><p>安装python依赖库</p></li><li><p>运行脚本读取配置在仓库--&gt;Settings--&gt;Secrets and variables--&gt;Actions--&gt;Repository secrets中的环境变量，并把上次提交的sitemap.xml和本次提交的sitemap.xml作为命令行参数提交给python脚本</p><figure><img src="https://s3.bmp.ovh/imgs/2023/04/17/67c1bc7646f4be1d.png" alt="Repository secrets" tabindex="0" loading="lazy"><figcaption>Repository secrets</figcaption></figure></li></ol><hr class="footnotes-sep">`,11),h={class:"footnotes"},b={class:"footnotes-list"},g={id:"footnote1",class:"footnote-item"},C={href:"https://docs.github.com/zh/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable",target:"_blank",rel:"noopener noreferrer"},A=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function E(F,f){const e=a("Mermaid"),o=a("ExternalLinkIcon");return t(),i("div",null,[y,c(" more "),m,B,u,l(e,{id:"mermaid-34",code:"eJylUk1PwkAQvfdXbOKVJogBYg8mFIIXT8aLaTiUdguNm5a0S5Cb+BEDGCoHiTGaiBjhQMAL0YSAf6Yfy79wqUADN3Uvm3lvZt7bmWVZlsEqRpAD7qji9eqk2yHDMTPHFaSXpLxoYHDEM4Aes5jNGWIhD9JAIF+3pH1DLh/cx37GZ2XVgBJWdQ0cHPoAaXw4VstrDJ2XC8e6n11bLLtHBlNvMnCaE3v8Shs41rl7905xo6j5RVCT/TshkO6bYzXdRm92VskAmgJ4wa1XaUsq6fbb9rjjPS+Y5IKxP2sBMydSgjOoks7Vj92ll5o9fSKjlp+RnstJSDTNFFTAvgGhhsUcUFSEuK1wWJJFKWRiQz+BGyFbUmWc5yKF05CkI93gthRFWXKyaNLJGWKZA1EQXZM4hogONtBQspK8s73SWAv/qsGjIgwUIuFdaVW2Ef5SwcRlBOn+F9bj8XAsEliPxf7hGySC0QQgH0qulhKgqeULGf+zMN9pvxYZ"}),v,s("section",h,[s("ol",b,[s("li",g,[s("p",null,[s("a",C,[n("设置步骤的输出参数"),l(o)]),n(),A])])])])])}const x=p(d,[["render",E],["__file","auto-push.html.vue"]]),G=JSON.parse('{"path":"/blog/auto-push.html","title":"如何利用GitHub Action提交URL到搜索引擎","lang":"zh-CN","frontmatter":{"title":"如何利用GitHub Action提交URL到搜索引擎","shortTitle":"如何自动提交URL到搜索引擎","date":"2023-04-17T00:00:00.000Z","icon":"yaml","star":true,"isOriginal":true,"cover":"https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg","category":["Blog"],"tag":["Blog","GitHub Action"],"description":"相关信息 这是一个GitHub Actions的配置文件，整体思路是，获取本次更新的url （通过对比两次提交的sitemap.xml文件），所以触发条件是deploy分支有推送并修改了sitemap.xml文件，再利用python脚本进行url推送到百度、Bing、Google 脚本代码请看这里👉提交URL到搜索引擎（百度、Bing、Google）...","head":[["meta",{"property":"og:url","content":"https://cnmd.icu/blog/auto-push.html"}],["meta",{"property":"og:site_name","content":"三个三"}],["meta",{"property":"og:title","content":"如何利用GitHub Action提交URL到搜索引擎"}],["meta",{"property":"og:description","content":"相关信息 这是一个GitHub Actions的配置文件，整体思路是，获取本次更新的url （通过对比两次提交的sitemap.xml文件），所以触发条件是deploy分支有推送并修改了sitemap.xml文件，再利用python脚本进行url推送到百度、Bing、Google 脚本代码请看这里👉提交URL到搜索引擎（百度、Bing、Google）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"如何利用GitHub Action提交URL到搜索引擎"}],["meta",{"property":"article:author","content":"thiszhc"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:tag","content":"GitHub Action"}],["meta",{"property":"article:published_time","content":"2023-04-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何利用GitHub Action提交URL到搜索引擎\\",\\"image\\":[\\"https://s3.bmp.ovh/imgs/2023/04/17/67c1bc7646f4be1d.png\\"],\\"datePublished\\":\\"2023-04-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"thiszhc\\",\\"url\\":\\"https://cnmd.icu\\"}]}"]]},"headers":[{"level":2,"title":"流程解读","slug":"流程解读","link":"#流程解读","children":[]},{"level":2,"title":"配置代码","slug":"配置代码","link":"#配置代码","children":[]},{"level":2,"title":"配置解读","slug":"配置解读","link":"#配置解读","children":[]}],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":2.8,"words":839},"filePathRelative":"blog/auto-push.md","localizedDate":"2023年4月17日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>这是一个<code>GitHub Actions</code>的配置文件，整体思路是，获取本次更新的url<br>\\n（通过对比两次提交的sitemap.xml文件），所以触发条件是deploy分支有推送并修改了<code>sitemap.xml</code>文件，再利用python脚本进行url推送到百度、Bing、Google</p>\\n<p>脚本代码请看这里👉<a href=\\"/posts/Python/submit-url\\">提交URL到搜索引擎（百度、Bing、Google）</a></p>\\n</div>\\n","autoDesc":true}');export{x as comp,G as data};
