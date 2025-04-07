import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as n,o as l}from"./app-DSj3T88f.js";const e={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[n(`<h1 id="_71-简化路径" tabindex="-1"><a class="header-anchor" href="#_71-简化路径"><span>71.简化路径</span></a></h1><p><strong>难度：中等</strong></p><p>给你一个字符串 <code>path</code> ，表示指向某一文件或目录的 Unix 风格 <strong>绝对路径</strong> （以 <code>&#39;/&#39;</code> 开头），请你将其转化为更加简洁的规范路径。</p><p>在 Unix 风格的文件系统中，一个点（<code>.</code>）表示当前目录本身；此外，两个点 （<code>..</code>） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，<code>&#39;//&#39;</code>）都被视为单个斜杠 <code>&#39;/&#39;</code> 。 对于此问题，任何其他格式的点（例如，<code>&#39;...&#39;</code>）均被视为文件/目录名称。</p><p>请注意，返回的 <strong>规范路径</strong> 必须遵循下述格式：</p><ul><li>始终以斜杠 <code>&#39;/&#39;</code> 开头。</li><li>两个目录名之间必须只有一个斜杠 <code>&#39;/&#39;</code> 。</li><li>最后一个目录名（如果存在）<strong>不能</strong> 以 <code>&#39;/&#39;</code> 结尾。</li><li>此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 <code>&#39;.&#39;</code> 或 <code>&#39;..&#39;</code>）。</li></ul><p>返回简化后得到的 <strong>规范路径</strong> 。</p><p><strong>示例 1：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入：path = &quot;/home/&quot;</span></span>
<span class="line"><span>输出：&quot;/home&quot;</span></span>
<span class="line"><span>解释：注意，最后一个目录名后面没有斜杠。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入：path = &quot;/../&quot;</span></span>
<span class="line"><span>输出：&quot;/&quot;</span></span>
<span class="line"><span>解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入：path = &quot;/home//foo/&quot;</span></span>
<span class="line"><span>输出：&quot;/home/foo&quot;</span></span>
<span class="line"><span>解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 4：</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>输入：path = &quot;/a/./b/../../c/&quot;</span></span>
<span class="line"><span>输出：&quot;/c&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= path.length &lt;= 3000</code></li><li><code>path</code> 由英文字母，数字，<code>&#39;.&#39;</code>，<code>&#39;/&#39;</code> 或 <code>&#39;_&#39;</code> 组成。</li><li><code>path</code> 是一个有效的 Unix 风格绝对路径。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路"><span>解题思路</span></a></h2><ol><li>使用 <code>Deque&lt;String&gt;</code> 作为栈（这里用 <code>LinkedList</code> 实现），用于存储路径的有效部分。</li><li>使用 <code>path.split(&quot;/&quot;, -1)</code> 将输入的路径字符串 <code>path</code> 按照斜杠 <code>/</code> 分割成多个部分。分割后的每个字符串都代表路径中的一个组成部分。</li><li>对于每个路径组件，进行如下处理： <ul><li>如果是 <code>&quot;..&quot;</code> 且栈不为空，则弹出栈顶元素（向上一级目录）。</li><li>如果是有效的路径名（非空且不是 <code>&quot;.&quot;</code>），则将其压入栈中。</li></ul></li><li>使用 <code>StringBuilder</code> 从栈中弹出所有元素来构建最终的路径字符串。由于栈是后进先出的结构，所以从栈顶开始弹出元素并在每个元素前添加 <code>/</code>，然后将其插入到 <code>StringBuilder</code> 的开头。</li><li>如果在构建完路径后 <code>StringBuilder</code> 为空（即栈是空的），这意味着简化后的路径是根目录 <code>/</code>。否则，返回构建的路径字符串。</li></ol><p>注意：<code>StringBuilder</code> 的 <code>insert(int offset, String str)</code> 方法，可以将字符串 <code>str</code> 插入到索引位置为 <code>offset</code> 的位置，并把原本索引处 <code>offset</code> 及其后面的字符的位置都向后顺延。</p><h2 id="代码展示" tabindex="-1"><a class="header-anchor" href="#代码展示"><span>代码展示</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> simplifyPath</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> path) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    Deque</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> stack </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LinkedList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 分割输入路径字符串，获取各个部分</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">[] components </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 遍历路径的每个部分</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> components</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> component </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> components[i]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 如果遇到 &quot;..&quot; 且栈不为空，则弹出栈顶元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;..&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 如果是有效路径名，则压入栈中</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        else</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">component</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equals</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(component);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 构建简化后的路径字符串</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    StringBuilder</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> StringBuilder</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isEmpty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">insert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> stack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pop</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 如果栈为空，则返回根目录</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;/&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度：O(n)</p><p>空间复杂度：O(n)</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>`,25)]))}const d=s(e,[["render",t],["__file","71.简化路径.html.vue"]]),r=JSON.parse(`{"path":"/LeetCode/main/71.%E7%AE%80%E5%8C%96%E8%B7%AF%E5%BE%84.html","title":"71.简化路径","lang":"zh-CN","frontmatter":{"title":"71.简化路径","date":"2023-07-24T00:00:00.000Z","tags":["栈","字符串"],"categories":["力扣每日一题"]},"headers":[{"level":2,"title":"解题思路","slug":"解题思路","link":"#解题思路","children":[]},{"level":2,"title":"代码展示","slug":"代码展示","link":"#代码展示","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1739185487000,"updatedTime":1739185487000,"contributors":[{"name":"yangji","username":"yangji","email":"2020946884@qq.cin","commits":1}]},"readingTime":{"minutes":2.97,"words":892},"filePathRelative":"LeetCode/main/71.简化路径.md","localizedDate":"2023年7月24日","excerpt":"\\n<p><strong>难度：中等</strong></p>\\n<p>给你一个字符串 <code>path</code> ，表示指向某一文件或目录的 Unix 风格 <strong>绝对路径</strong> （以 <code>'/'</code> 开头），请你将其转化为更加简洁的规范路径。</p>\\n<p>在 Unix 风格的文件系统中，一个点（<code>.</code>）表示当前目录本身；此外，两个点 （<code>..</code>） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，<code>'//'</code>）都被视为单个斜杠 <code>'/'</code> 。 对于此问题，任何其他格式的点（例如，<code>'...'</code>）均被视为文件/目录名称。</p>"}`);export{d as comp,r as data};
