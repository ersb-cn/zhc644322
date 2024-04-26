import{_ as r,r as t,o as d,c as u,f as c,a as s,d as a,w as e,b as n,e as p}from"./app-CpKAKiQD.js";const y={},b={class:"table-of-contents"},m=s("h2",{id:"github-actions-是什么",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-actions-是什么"},[s("span",null,"GitHub Actions 是什么？")])],-1),B=s("p",null,"Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。",-1),v=s("p",null,"很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。",-1),h=s("p",null,"如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。",-1),C=s("h2",{id:"什么是ci-cd",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#什么是ci-cd"},[s("span",null,"什么是CI/CD？")])],-1),g={href:"https://link.zhihu.com/?target=https%3A//www.redhat.com/en/topics/devops/what-is-ci-cd",target:"_blank",rel:"noopener noreferrer"},A=s("p",null,"字面意思就是持续集成Continuous Intergation/持续分发Continuous Delivery持续部署Continuous Deployment，网上有太多同质的解释都太过于晦涩，",-1),f=s("p",null,"提到CI/CD就离不开一个词叫流水线。流水线上每个人的工作是分工明确的，而且工程是有先后顺序，就像造一台车，先造零件，然后组装、喷涂、内饰最后还要测试。软件开发同样如此，有前期的产品设计，UI设计、单元的开发，产品的测试，优化迭代等都由不同的人负责。",-1),_=p('<p>CI/CD另一个作用就是解决团队代码中的冲突或错误。你提交的代码是否会和其他人的有冲突，如果有就不准你提交，回去再和其他哥们儿商量下。同样这一点也能解决你上传BUG代码的问题，同样禁止你。</p><p>如果要做的这几点那就一定需要一个中心化的工厂而且有另一个高效的团队来管理这个工厂的正常运行。CI/CD背后的提供商就是这样的工厂，而为了保证“持续”这个词，任何人都不可能24小时不睡觉帮你在工厂审核你的代码，所以自动化也是CI/CD的一个关键，自动触发机制使得以上所有的操作都是自动化完成的。所以这个工厂其实是无人化的工厂。</p><p>说到底CI/CD并不是一项新的技术，而是一种行业的标准，任何人在其上工作都必须遵守的标准，正因有这样的标准化流程，才能让团队的每一个人都能在自己的岗位上有效输出。说白了也就是领导团队想方设法提高员工效率榨干每一分钟的防摸鱼工具。（笑）</p><p>确实是这样，CI/CD的标准化工具的出现使得从开发到部署的周期大幅度缩短，再配上云开发的代码仓，那简直就是：云仓CI，法力无边。Github Action出现了。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><p>GitHub Actions 有一些自己的术语。</p><p>（1）<strong>workflow</strong> （工作流程）：持续集成一次运行的过程，就是一个 workflow。</p><p>（2）<strong>job</strong> （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。</p><p>（3）<strong>step</strong>（步骤）：每个 job 由多个 step 构成，一步步完成。</p><p>（4）<strong>action</strong> （动作）：每个 step 可以依次执行一个或多个命令（action）。</p><h2 id="关于工作流程" tabindex="-1"><a class="header-anchor" href="#关于工作流程"><span>关于工作流程</span></a></h2><p>工作流是一个可配置的自动化过程，将运行一个或多个作业。工作流由签入到存储库的YAML文件定义，并将在存储库中的事件触发时运行，或者可以手动触发，或者按照定义的计划。</p><p>工作流定义在存储库的 <code>.github/workflows</code> 目录中，一个存储库可以有多个工作流，每个工作流可以执行一组不同的任务。例如，您可以有一个工作流来构建和测试拉取请求，另一个工作流在每次创建发布时部署您的应用程序，还有一个工作流在每次有人打开新问题时添加标签。</p>',13),F={href:"https://help.github.com/en/articles/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"},E=p(`<p><strong>（1）<code>name</code></strong></p><p><code>name</code>字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">GitHub Actions Demo</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（2）<code>on</code></strong></p><p><code>on</code>字段指定触发 workflow 的条件，通常是某些事件。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">push</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码指定，<code>push</code>事件触发 workflow。</p><p><code>on</code>字段也可以是事件的数组。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">pull_request</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码指定，<code>push</code>事件或<code>pull_request</code>事件都可以触发 workflow。</p>`,10),k={href:"https://help.github.com/en/articles/events-that-trigger-workflows",target:"_blank",rel:"noopener noreferrer"},w=p(`<p><strong>（3）<code>on.&lt;push|pull_request.&lt;tags|branches</code></strong></p><p>指定触发事件时，可以限定分支或标签。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  push</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    branches</span><span style="color:#ABB2BF;">:    </span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">master</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码指定，只有<code>master</code>分支发生<code>push</code>事件时，才会触发 workflow。</p><p><strong>（4）<code>jobs.&lt;job_id.name</code></strong></p><p>workflow 文件的主体是<code>jobs</code>字段，表示要执行的一项或多项任务。</p><p><code>jobs</code>字段里面，需要写出每一项任务的<code>job_id</code>，具体名称自定义。<code>job_id</code>里面的<code>name</code>字段是任务的说明。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">jobs</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  my_first_job</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">My first job</span></span>
<span class="line"><span style="color:#E06C75;">  my_second_job</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">My second job</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的<code>jobs</code>字段包含两项任务，<code>job_id</code>分别是<code>my_first_job</code>和<code>my_second_job</code>。</p><p><strong>（5）<code>jobs.&lt;job_id.needs</code></strong></p><p><code>needs</code>字段指定当前任务的依赖关系，即运行顺序。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">jobs</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  job1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  job2</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    needs</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">job1</span></span>
<span class="line"><span style="color:#E06C75;">  job3</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    needs</span><span style="color:#ABB2BF;">: [</span><span style="color:#98C379;">job1</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">job2</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>job1</code>必须先于<code>job2</code>完成，而<code>job3</code>等待<code>job1</code>和<code>job2</code>的完成才能运行。因此，这个 workflow 的运行顺序依次为：<code>job1</code>、<code>job2</code>、<code>job3</code>。</p><p><strong>（6）<code>jobs.&lt;job_id.runs-on</code></strong></p><p><code>runs-on</code>字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。</p><ul><li><code>ubuntu-latest</code>，<code>ubuntu-18.04</code>或<code>ubuntu-16.04</code></li><li><code>windows-latest</code>，<code>windows-2019</code>或<code>windows-2016</code></li><li><code>macOS-latest</code>或<code>macOS-10.14</code></li></ul><p>下面代码指定虚拟机环境为<code>ubuntu-18.04</code>。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">runs-on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ubuntu-18.04</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（7）<code>jobs.&lt;job_id.steps</code></strong></p><p><code>steps</code>字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。</p><ul><li><code>jobs.&lt;job_id.steps.name</code>：步骤名称。</li><li><code>jobs.&lt;job_id.steps.run</code>：该步骤运行的命令或者 action。</li><li><code>jobs.&lt;job_id.steps.env</code>：该步骤所需的环境变量。</li></ul><p>下面是一个完整的 workflow 文件的范例。</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Greeting from Mona</span></span>
<span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">jobs</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  my-job</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">My Job</span></span>
<span class="line"><span style="color:#E06C75;">    runs-on</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E06C75;">    steps</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">     - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Print a greeting</span></span>
<span class="line"><span style="color:#E06C75;">       env</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">        MY_VAR</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Hi there! My name is</span></span>
<span class="line"><span style="color:#E06C75;">        FIRST_NAME</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Mona</span></span>
<span class="line"><span style="color:#E06C75;">        MIDDLE_NAME</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">The</span></span>
<span class="line"><span style="color:#E06C75;">        LAST_NAME</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Octocat</span></span>
<span class="line"><span style="color:#E06C75;">      run</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">|</span></span>
<span class="line"><span style="color:#98C379;">        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>steps</code>字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。</p><h3 id="工作流基础" tabindex="-1"><a class="header-anchor" href="#工作流基础"><span>工作流基础</span></a></h3><p>工作流必须包含以下基本组件：</p><ol><li>一个或多个将触发工作流的事件。</li><li>一个或多个作业，每个作业都将在运行机器上执行并运行一系列一个或多个步骤。</li><li>每个步骤都可以运行您定义的脚本或运行操作，这是一个可重用的扩展，可以简化您的工作流程。</li></ol><h3 id="工作流触发" tabindex="-1"><a class="header-anchor" href="#工作流触发"><span>工作流触发</span></a></h3>`,28),x={href:"https://docs.github.com/zh/actions/using-workflows/triggering-a-workflow",target:"_blank",rel:"noopener noreferrer"},j=p(`<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">on</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  push</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    branches</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">gh-pages</span></span>
<span class="line"><span style="color:#E06C75;">    paths</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">&#39;sitemap.xml&#39;</span></span>
<span class="line"><span style="color:#E06C75;">  schedule</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    - </span><span style="color:#E06C75;">cron</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;0 23 * * *&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子的触发机制如下：</p><ol><li>当有推送行为发生</li><li>推送分支为<code>gh-pages</code></li><li><code>sitemap.xml</code>文件被修改</li><li>每天 UTC 23:00触发<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></li><li>push下的分支和文件要同时触发才会使工作流运行</li></ol><div class="hint-container caution"><p class="hint-container-title">注意!!!</p><p>虽然官方文档未提及需要把<code>.github/workflows</code>目录下的工作流文件存储于指定触发分支下，但我实际操作中发现，如我设置的触发分支为<code>gh-pages</code>但假如我的.yaml文件在<code>main</code>分支下不在<code>gh-pages</code>根目录的<code>.github/workflows</code>文件夹下，实际并不会触发。</p></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h2><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>这是一个<code>GitHub Actions</code>的配置文件，整体思路是，获取本次更新的url<br> （通过对比两次提交的sitemap.xml文件），所以触发条件是deploy分支有推送并修改了<code>sitemap.xml</code>文件，再利用python脚本进行url推送到百度、Bing、Google</p><p>脚本代码请看这里👉<a href="/posts/Python/submit-url">提交URL到搜索引擎（百度、Bing、Google）</a></p></div>`,7),G=s("p",null,[n("前些天不是写了Bing的提交脚本吗，但是每次都要自己手动跑脚本也很麻烦，但我又没有服务器，所以用上了GitHub Actions了嘛"),s("br"),n(" 总的来说做了以下事情：")],-1),D=s("ol",null,[s("li",null,"提交代码并修改sitemap.xml 后触发工作流"),s("li",null,"比对上一次提交和本次提交的新增URL"),s("li",null,"将URL分别提交给百度站长、Bing、Google 供搜索引擎快速收录"),s("li")],-1),I=s("h2",{id:"流程解读",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程解读"},[s("span",null,"流程解读")])],-1),T=p(`<h2 id="配置代码" tabindex="-1"><a class="header-anchor" href="#配置代码"><span>配置代码</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">推送脚本</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置解读" tabindex="-1"><a class="header-anchor" href="#配置解读"><span>配置解读</span></a></h2><h4 id="触发" tabindex="-1"><a class="header-anchor" href="#触发"><span>触发</span></a></h4><p>这个例子的触发机制如下：</p><ol><li>当有推送行为发生</li><li>推送分支为<code>gh-pages</code></li><li><code>sitemap.xml</code>文件被修改</li></ol><h4 id="配置运行环境" tabindex="-1"><a class="header-anchor" href="#配置运行环境"><span>配置运行环境</span></a></h4><p>这里指定<code>ubuntu-latest</code></p><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h4><ol><li><p>拉取 gh-pages 分支代码到路径<code>gh-pages</code></p></li><li><p>获取上一次提交SHA-1值使用如下命令，将获取到的倒数第二次git提交SHA-1值存储到环境变量<code>GITHUB_OUTPUT</code><sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup>中，方便后续使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;"> cd</span><span style="color:#98C379;"> gh-pages</span></span>
<span class="line"><span style="color:#E06C75;"> PREV</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">$(</span><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log </span><span style="color:#D19A66;">--format=</span><span style="color:#98C379;">&quot;%H&quot; </span><span style="color:#D19A66;">-n</span><span style="color:#D19A66;"> 2</span><span style="color:#ABB2BF;"> |</span><span style="color:#61AFEF;"> tail</span><span style="color:#D19A66;"> -n</span><span style="color:#D19A66;"> 1</span><span style="color:#98C379;">)</span></span>
<span class="line"><span style="color:#56B6C2;"> echo</span><span style="color:#98C379;"> &quot;SHA_KEY=</span><span style="color:#E06C75;">$PREV</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> &gt;&gt; </span><span style="color:#E06C75;">$GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#56B6C2;"> echo</span><span style="color:#E06C75;"> $PREV</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取上一步存储到到<code>GITHUB_OUTPUT</code>的commitid，并拉取代码代码到路径prev，ref可以是分支，tag，commitid</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;"> name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">拉取prev代码</span></span>
<span class="line"><span style="color:#E06C75;"> uses</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E06C75;"> with</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">     ref</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">\${{ steps.last-commit.outputs.SHA_KEY }}</span></span>
<span class="line"><span style="color:#E06C75;">     path</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">prev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>拉取main分支代码到路径main</p></li><li><p>安装python环境并设置缓存</p></li><li><p>安装python依赖库</p></li><li><p>运行脚本读取配置在仓库--&gt;Settings--&gt;Secrets and variables--&gt;Actions--&gt;Repository secrets中的环境变量，并把上次提交的sitemap.xml和本次提交的sitemap.xml作为命令行参数提交给python脚本</p><figure><img src="https://s3.bmp.ovh/imgs/2023/04/17/67c1bc7646f4be1d.png" alt="Repository secrets" tabindex="0" loading="lazy"><figcaption>Repository secrets</figcaption></figure></li></ol><hr class="footnotes-sep">`,11),H={class:"footnotes"},S={class:"footnotes-list"},U={id:"footnote1",class:"footnote-item"},q={href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://crontab.guru/examples.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://docs.github.com/zh/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs",target:"_blank",rel:"noopener noreferrer"},L=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),z={id:"footnote2",class:"footnote-item"},K={href:"https://docs.github.com/zh/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable",target:"_blank",rel:"noopener noreferrer"},O=s("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function V(J,P){const l=t("router-link"),o=t("ExternalLinkIcon"),i=t("Mermaid");return d(),u("div",null,[c(" more "),s("nav",b,[s("ul",null,[s("li",null,[a(l,{to:"#github-actions-是什么"},{default:e(()=>[n("GitHub Actions 是什么？")]),_:1})]),s("li",null,[a(l,{to:"#什么是ci-cd"},{default:e(()=>[n("什么是CI/CD？")]),_:1})]),s("li",null,[a(l,{to:"#基本概念"},{default:e(()=>[n("基本概念")]),_:1})]),s("li",null,[a(l,{to:"#关于工作流程"},{default:e(()=>[n("关于工作流程")]),_:1}),s("ul",null,[s("li",null,[a(l,{to:"#工作流基础"},{default:e(()=>[n("工作流基础")]),_:1})]),s("li",null,[a(l,{to:"#工作流触发"},{default:e(()=>[n("工作流触发")]),_:1})])])]),s("li",null,[a(l,{to:"#实例"},{default:e(()=>[n("实例")]),_:1})]),s("li",null,[a(l,{to:"#流程解读"},{default:e(()=>[n("流程解读")]),_:1})]),s("li",null,[a(l,{to:"#配置代码"},{default:e(()=>[n("配置代码")]),_:1})]),s("li",null,[a(l,{to:"#配置解读"},{default:e(()=>[n("配置解读")]),_:1})])])]),m,B,v,h,C,s("p",null,[s("a",g,[n("What is CI/CD? (redhat.com)"),a(o)])]),A,f,a(i,{id:"mermaid-28",code:"eJzT1dXlKsksyUm1UnD2fLa18fmK7md7pjxfsosLJJOWk1+enJFYVKLgE8SlAATFpUnpRYkFGQqO0c96Gp/vXvtydtuzjgmxYMmUzKLU5JLM/DyY6qTSzBRdXbuS1OISIJWbWpSeChZPzUsB02iGKAAVKThBxZ52tD3tnxiT96J91dOuFU/nbADynu5oftqx4cnuyU93TYaodoaZ0Lzi+d5NSKohAkDVz+b0Pu1a+HTmCrAbi0sqc1IVHBXSMnNyrJTTzM0NzIx0ikuK8rNTgVwzMyhbtzwzpSTDyqigQic5Pye/CCiXlgaTS0ksBgZJUWKllYKpginCVCeoqQYGySmJyXBTUbhkGewMNdjIwDIZrhqNS6LBClwAlxPJSg=="}),_,s("p",null,[n("workflow 文件的配置字段非常多，详见"),s("a",F,[n("官方文档"),a(o)]),n("。下面是一些基本字段。")]),E,s("p",null,[n("完整的事件列表，请查看"),s("a",k,[n("官方文档"),a(o)]),n("。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。")]),w,s("p",null,[n("可以有多种触发方式，具体参见"),s("a",x,[n("官方文档"),a(o)]),n(",下面以我的一个工作流举例讲解触发事件")]),j,c(" more "),G,D,I,a(i,{id:"mermaid-292",code:"eJylUk1PwkAQvfdXbOKVJogBYg8mFIIXT8aLaTiUdguNm5a0S5Cb+BEDGCoHiTGaiBjhQMAL0YSAf6Yfy79wqUADN3Uvm3lvZt7bmWVZlsEqRpAD7qji9eqk2yHDMTPHFaSXpLxoYHDEM4Aes5jNGWIhD9JAIF+3pH1DLh/cx37GZ2XVgBJWdQ0cHPoAaXw4VstrDJ2XC8e6n11bLLtHBlNvMnCaE3v8Shs41rl7905xo6j5RVCT/TshkO6bYzXdRm92VskAmgJ4wa1XaUsq6fbb9rjjPS+Y5IKxP2sBMydSgjOoks7Vj92ll5o9fSKjlp+RnstJSDTNFFTAvgGhhsUcUFSEuK1wWJJFKWRiQz+BGyFbUmWc5yKF05CkI93gthRFWXKyaNLJGWKZA1EQXZM4hogONtBQspK8s73SWAv/qsGjIgwUIuFdaVW2Ef5SwcRlBOn+F9bj8XAsEliPxf7hGySC0QQgH0qulhKgqeULGf+zMN9pvxYZ"}),T,s("section",H,[s("ol",S,[s("li",U,[s("p",null,[n("可以使用 "),s("a",q,[n("crontab guru"),a(o)]),n(" 帮助生成 cron 语法并确认其运行时间。 为了帮助入门，还提供了 "),s("a",M,[n("crontab guru 示例"),a(o)]),n("列表。计划工作流程的通知将发送给最后修改工作流程文件中的 cron 语法的用户。 有关详细信息，请参阅“"),s("a",N,[n("工作流程运行通知"),a(o)]),n("”。 "),L])]),s("li",z,[s("p",null,[s("a",K,[n("设置步骤的输出参数"),a(o)]),n(),O])])])])])}const Y=r(y,[["render",V],["__file","github-action.html.vue"]]),X=JSON.parse('{"path":"/tutorial/github/github-action.html","title":"GitHub Actions 使用介绍","lang":"zh-CN","frontmatter":{"title":"GitHub Actions 使用介绍","icon":"actions","date":"2023-04-14T00:00:00.000Z","star":true,"cover":"https://w.wallhaven.cc/full/j3/wallhaven-j3zvvp.jpg","category":["GitHub"],"tag":["GitHub Actions"],"description":"GitHub Actions 是什么？ Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 ...","head":[["meta",{"property":"og:url","content":"https://cnmd.icu/tutorial/github/github-action.html"}],["meta",{"property":"og:site_name","content":"三个三"}],["meta",{"property":"og:title","content":"GitHub Actions 使用介绍"}],["meta",{"property":"og:description","content":"GitHub Actions 是什么？ Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://w.wallhaven.cc/full/j3/wallhaven-j3zvvp.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T05:22:57.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"GitHub Actions 使用介绍"}],["meta",{"property":"article:author","content":"thiszhc"}],["meta",{"property":"article:tag","content":"GitHub Actions"}],["meta",{"property":"article:published_time","content":"2023-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T05:22:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub Actions 使用介绍\\",\\"image\\":[\\"https://w.wallhaven.cc/full/j3/wallhaven-j3zvvp.jpg\\"],\\"datePublished\\":\\"2023-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T05:22:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"thiszhc\\",\\"url\\":\\"https://cnmd.icu\\"}]}"]]},"headers":[{"level":2,"title":"GitHub Actions 是什么？","slug":"github-actions-是什么","link":"#github-actions-是什么","children":[]},{"level":2,"title":"什么是CI/CD？","slug":"什么是ci-cd","link":"#什么是ci-cd","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"关于工作流程","slug":"关于工作流程","link":"#关于工作流程","children":[{"level":3,"title":"工作流基础","slug":"工作流基础","link":"#工作流基础","children":[]},{"level":3,"title":"工作流触发","slug":"工作流触发","link":"#工作流触发","children":[]}]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]},{"level":2,"title":"流程解读","slug":"流程解读","link":"#流程解读","children":[]},{"level":2,"title":"配置代码","slug":"配置代码","link":"#配置代码","children":[]},{"level":2,"title":"配置解读","slug":"配置解读","link":"#配置解读","children":[]}],"git":{"createdTime":1712467377000,"updatedTime":1712467377000,"contributors":[{"name":"三个三","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":7.56,"words":2267},"filePathRelative":"tutorial/github/github-action.md","localizedDate":"2023年4月14日","excerpt":"<!-- more -->\\n\\n<h2>GitHub Actions 是什么？</h2>\\n<p>Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。</p>\\n<p>很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。</p>","autoDesc":true}');export{Y as comp,X as data};
