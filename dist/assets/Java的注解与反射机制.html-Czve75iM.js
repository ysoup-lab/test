import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as i,f as t,b as h,d as e,r as k,o as p,e as r}from"./app-DSj3T88f.js";const d="/assets/264-BVnwOJuW.png",g={};function A(o,s){const a=k("font");return p(),l("div",null,[s[2]||(s[2]=i("h1",{id:"java的注解与反射机制",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#java的注解与反射机制"},[i("span",null,"Java的注解与反射机制")])],-1)),s[3]||(s[3]=i("h2",{id:"一、什么是注解",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#一、什么是注解"},[i("span",null,"一、什么是注解")])],-1)),s[4]||(s[4]=i("p",null,"Annotation 是从 JDK5.0 开始引入的技术",-1)),s[5]||(s[5]=i("p",null,"Annotation 的作用：",-1)),i("ul",null,[s[1]||(s[1]=i("li",null,"不是程序本身，可以对程序作出解释（这一点和注释[comment]没什么区别）",-1)),i("li",null,[h(a,{color:"red"},{default:e(()=>s[0]||(s[0]=[r("**可以被其他程序（比如：编译器等）读取**")])),_:1})])]),s[6]||(s[6]=t(`<p>Annotation 的格式：</p><p>注解是以 <strong>@注释名</strong> 在代码中存在的，还可以添加一些参数值，例如：<strong>@SuppressWarnings(value=&quot;unchecked&quot;)</strong></p><p>Annotation 在哪里使用：</p><ul><li>可以附加在 package , class , method , field 等上面，相当于给他们添加了额外的辅助信息，我们可以通过 <strong>反射机制</strong> 编程实现对这些元数据的访问</li></ul><p>内置注释：</p><ul><li><p><strong>@Override</strong>：定义在 java.lang.Override中，此注释只适用于修辞方法，表示一个方法声明打算重写超类中的另一个方法声明。</p></li><li><p><strong>@Deprecated</strong>：定义在 java.lang.Deprecated中，此注释可以用于修辞方法、属性、类，表示不鼓励程序员使用这样的元素，通常是因为它很危险或者存在更好的选择。</p></li><li><p><strong>@SuppressWarnings</strong>：定义在 java.lang.SuppressWarnings 中用来抑制编译时的警告信息。</p><p>与前两个注释有所不同，我们需要添加一个参数才能正确使用，这些参数都是已经定义好了的，我们选择性的使用就好了。</p><p>@SuppressWarnings(&quot;all&quot;)</p><p>@SuppressWarnings(&quot;unchecked&quot;)</p><p>@SuppressWarnings(value={&quot;unchecked&quot;,&quot;deprecation&quot;})</p><p>……</p></li></ul><h2 id="二、元注解" tabindex="-1"><a class="header-anchor" href="#二、元注解"><span>二、元注解</span></a></h2><p>元注解的作用是负责注解其他注解，Java定义了4个标准的meta-annotation类型，他们被用来提供对其他annotation类型做说明</p><p>4个元注解分别为：</p><ul><li><strong>@Target</strong> 用于描述注解的使用范围（即：被描述的注解可以用在什么地方）</li><li><strong>@Retention</strong> 用于表示需要在什么级别保存注解信息，用于描述注解的生命周期（SOURCE&lt;CLASS&lt;<strong>RUNTIME</strong>）</li><li><strong>@Document</strong> 说明该注解将被包含在 javadoc 中</li><li><strong>@Inherited</strong> 说明子类可以继承父类中的该注解</li></ul><p>测试元注解：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Target</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">METHOD</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*方法*/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Retention</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">RetentionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">RUNTIME</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/*运行时有效*/</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Documented</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //表示把注解生成在Javadoc中</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Inherited</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //表示可以被继承</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> MyAnnotation</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、自定义注解" tabindex="-1"><a class="header-anchor" href="#三、自定义注解"><span>三、自定义注解</span></a></h2><p>使用 <strong>@interface</strong> 自定义注解时，自动继承了 <strong>java.lang.annotation.Annotation</strong> 接口</p><ul><li><strong>@interface</strong> 用来声明一个注解，格式：<strong>public @interface 注解名{定义内容}</strong></li><li>其中的每一个方法实际上是声明了一个配置参数</li><li>方法的名称就是参数的名称</li><li>返回值类型就是参数的类型（返回值只能是基本类型，Class，String，enum）</li><li>可以通过 default 来声明参数的默认值</li><li>如果只有一个参数成员，一般参数名为 value</li><li>注解元素必须要有值，我们定义注解元素时，经常使用空字符串，0作为默认值</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Test2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //注解可以显式赋值，如果没有默认值，就必须给注解赋值</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">MyAnnotation1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">schools</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;BUPT&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //如果注解只有一个参数可以省略参数名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">MyAnnotation2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;你好 &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> test2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Target</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">METHOD</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Retention</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">RetentionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">RUNTIME</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> MyAnnotation1</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //注解的参数：类型+参数名()[default 默认值];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> //默认值为-1，代表不存在</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">schools</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Target</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">({</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">TYPE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">ElementType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">METHOD</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Retention</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">RetentionPolicy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">RUNTIME</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;"> MyAnnotation2</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //注解的参数：类型+参数名()[default 默认值];</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、什么是java的反射机制" tabindex="-1"><a class="header-anchor" href="#四、什么是java的反射机制"><span>四、什么是Java的反射机制</span></a></h2><p>Java的反射（Reflection）机制是指在程序的运行状态中，（通过借助ReflectionAPI）可以构造任意一个类的对象，可以了解任意一个对象所属的类，可以获取任意一个类的成员变量和方法（类的内部信息），可以操作任意一个对象的属性和方法。这种动态获取程序信息以及动态调用对象的功能称为Java语言的反射机制。反射是java被视为动态语言的关键。</p><p>加载完类之后，在堆内存的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射。</p><h3 id="_1、动态语言" tabindex="-1"><a class="header-anchor" href="#_1、动态语言"><span>1、动态语言</span></a></h3><p>是一类在运行时可以改变其结构的语言：例如新的函数、对象甚至代码可以被引进，已有的函数可以被删除或者是其他结构上的变化。通俗来说就是运行时代码可以根据一些条件来改变自身的结构</p><p>主要动态语言：Object-C、C#、JavaScript、PHP、Python等</p><h3 id="_2、静态语言" tabindex="-1"><a class="header-anchor" href="#_2、静态语言"><span>2、静态语言</span></a></h3><p>与动态语言相对应的，运行时不能改变其结构，如 Java、C、C++</p><p>Java不是动态语言，但是 Java 可以称为是 <strong>准动态语言</strong>。即 Java 有一定的动态性，可以利用 <strong>反射机制</strong> 获得类似动态语言的特性。Java的动态性使得编程时更加灵活。</p><h2 id="五、什么是类对象" tabindex="-1"><a class="header-anchor" href="#五、什么是类对象"><span>五、什么是类对象</span></a></h2><p>对象照镜子后可以得到的信息：某个类的属性、方法和构造器、某个类到底实现了哪些接口</p><p>对于每个类而言，JRE都为其保留一个不变的Class类型的对象</p><p>一个Class对象包含了特定某个结构(class/interface/enum/annotation/primitive type/void/[])的有关信息</p><ul><li>Class 本身也是一个类</li><li>Class 对象只能由系统建立对象</li><li>一个加载的类在 JVM 中只会有一个 Class 实例</li><li>一个 Class 对象对应的是一个加载到 JVM 中的一个 <code>.class</code> 文件</li><li>每个类的实例都会记得自己是由哪个Class实例所生成</li><li>通过 Class 可以完整地得到一个类中的所有被加载的结构</li><li>Class 类是反射机制的根源，针对任何你想动态加载、运行的类，唯有先获得相应的Class对象</li></ul><p>在理解类对象之前，先说我们熟悉的对象之间的区别：</p><ul><li>garen 和 teemo 都是<strong>Hero对象</strong>，他们的区别在于，各自有<strong>不同的名称，血量，伤害值</strong>。</li></ul><p>然后说说类之间的区别：</p><ul><li>Hero 和 Item 都是类，他们的区别在于有<strong>不同的方法，不同的属性</strong>。</li></ul><p><strong>类对象</strong>，就是用于描述这种类，都有什么属性，什么方法的</p><h2 id="六、class类的常用方法" tabindex="-1"><a class="header-anchor" href="#六、class类的常用方法"><span>六、Class类的常用方法</span></a></h2><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="七、如何获取类对象" tabindex="-1"><a class="header-anchor" href="#七、如何获取类对象"><span>七、如何获取类对象</span></a></h2><p>获取类对象主要有5种方式</p><ol><li><p><code>Class.forName</code> 已知一个类的全类名，且该类在类路径下，可通过Class类的静态方法 forName() 获取，可能抛出 ClassNotFoundException</p></li><li><p><code>Hero.class</code> 若已知具体的类，通过类的 class 属性获取，该方法最为安全可靠，程序性能最高</p></li><li><p><code>new Hero().getClass()</code> 已知某个类的实例（即对象），调用该实例的 getClass() 方法获取 Class 对象</p></li><li><p><code>.Type</code> 内置基本数据类型可以直接用类名</p></li><li><p>还可以利用 <code>ClassLoader</code></p></li></ol><p>在一个 JVM 中，一种类，只会有一个类对象存在。所以以上几种方式取出来的类对象，都是一样的</p><p>准确的讲是一个 ClassLoader 下，一种类，只会有一个类对象存在。通常一个 JVM 下，只会有一个 ClassLoader</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pClass1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;charactor.Hero&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pClass2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Hero</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pClass3 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Hero</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、获取类对象的时候-会导致类属性被初始化" tabindex="-1"><a class="header-anchor" href="#八、获取类对象的时候-会导致类属性被初始化"><span>八、获取类对象的时候，会导致类属性被初始化</span></a></h2><p>无论什么途径获取类对象，都会导致静态属性被初始化，而且只会执行一次（除了直接使用 <code>Class c = Hero.class</code> 这种方式，这种方式不会导致静态属性被初始化）</p><h2 id="九、通过反射机制创建对象" tabindex="-1"><a class="header-anchor" href="#九、通过反射机制创建对象"><span>九、通过反射机制创建对象</span></a></h2><p>与传统的通过 new 来获取对象的方式不同</p><p>反射机制，会先拿到Hero的“类对象”，然后通过类对象获取“构造器对象”</p><p>再通过构造器对象创建一个对象</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 传统的使用new的方式创建对象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Hero</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> h1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Hero</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;teemo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 使用反射的方式创建对象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> className </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;charactor.Hero&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 类对象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> pClass</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(className);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 构造器</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Constructor</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> pClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getConstructor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 通过构造器实例化</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Hero</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> h2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (Hero) </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、通过反射机制修改对象的属性" tabindex="-1"><a class="header-anchor" href="#十、通过反射机制修改对象的属性"><span>十、通过反射机制修改对象的属性</span></a></h2><p>对于private修饰的成员，需要使用 <code>setAccessible(true)</code> 才能访问和修改</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Hero</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> h </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Hero</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//使用传统方式修改name的值为garen</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;garen&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//获取类Hero的名字叫做name的字段</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Field</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> f1</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getDeclaredField</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//修改这个字段的值</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">f1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(h, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;teemo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getField 和 getDeclaredField 的区别：</p><ul><li>这两个方法都是用于获取字段</li><li>getField <strong>只能获取</strong>public的，包括<strong>从父类继承</strong>来的字段。</li><li>getDeclaredField 可以获取本类所有的字段，<strong>包括private</strong>的，但是<strong>不能获取继承</strong>来的字段。 (<strong>注</strong>： 这只能获取到private的<strong>字段</strong>，但并不能访问该private字段的<strong>值</strong>，除非加上 <strong>setAccessible(true)</strong>)</li></ul><h2 id="十一、通过反射机制-调用一个对象的方法" tabindex="-1"><a class="header-anchor" href="#十一、通过反射机制-调用一个对象的方法"><span>十一、通过反射机制，调用一个对象的方法</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Hero</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> h </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Hero</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 获取这个名字叫做setName，参数类型是String的方法</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Method</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> m </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;setName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 对h对象，调用这个方法</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">invoke</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(h, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;盖伦&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 使用传统的方式，调用getName方法</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二、反射机制好在哪里" tabindex="-1"><a class="header-anchor" href="#十二、反射机制好在哪里"><span>十二、反射机制好在哪里</span></a></h2><ul><li>在运行时判断任意一个对象所属的类</li><li>在运行时构造任意一个类的对象</li><li>在运行时判断任意一个类所具有的成员变量和方法</li><li>在运行时获取泛型信息</li><li>在运行时调用任意一个对象的成员变量和方法</li><li>在运行时处理注解</li><li>生成动态代理</li></ul><p>通常来说，需要在学习了<strong>Spring</strong>的<strong>依赖注入</strong>，<strong>反转控制</strong>之后，才会对反射有更好的理解。</p>`,60))])}const B=n(g,[["render",A],["__file","Java的注解与反射机制.html.vue"]]),v=JSON.parse('{"path":"/Java/main/Java%E7%9A%84%E6%B3%A8%E8%A7%A3%E4%B8%8E%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html","title":"Java的注解与反射机制","lang":"zh-CN","frontmatter":{"title":"Java的注解与反射机制","date":"2023-04-18T00:00:00.000Z","tags":["Java","注解","反射"],"categories":["Java"]},"headers":[{"level":2,"title":"一、什么是注解","slug":"一、什么是注解","link":"#一、什么是注解","children":[]},{"level":2,"title":"二、元注解","slug":"二、元注解","link":"#二、元注解","children":[]},{"level":2,"title":"三、自定义注解","slug":"三、自定义注解","link":"#三、自定义注解","children":[]},{"level":2,"title":"四、什么是Java的反射机制","slug":"四、什么是java的反射机制","link":"#四、什么是java的反射机制","children":[{"level":3,"title":"1、动态语言","slug":"_1、动态语言","link":"#_1、动态语言","children":[]},{"level":3,"title":"2、静态语言","slug":"_2、静态语言","link":"#_2、静态语言","children":[]}]},{"level":2,"title":"五、什么是类对象","slug":"五、什么是类对象","link":"#五、什么是类对象","children":[]},{"level":2,"title":"六、Class类的常用方法","slug":"六、class类的常用方法","link":"#六、class类的常用方法","children":[]},{"level":2,"title":"七、如何获取类对象","slug":"七、如何获取类对象","link":"#七、如何获取类对象","children":[]},{"level":2,"title":"八、获取类对象的时候，会导致类属性被初始化","slug":"八、获取类对象的时候-会导致类属性被初始化","link":"#八、获取类对象的时候-会导致类属性被初始化","children":[]},{"level":2,"title":"九、通过反射机制创建对象","slug":"九、通过反射机制创建对象","link":"#九、通过反射机制创建对象","children":[]},{"level":2,"title":"十、通过反射机制修改对象的属性","slug":"十、通过反射机制修改对象的属性","link":"#十、通过反射机制修改对象的属性","children":[]},{"level":2,"title":"十一、通过反射机制，调用一个对象的方法","slug":"十一、通过反射机制-调用一个对象的方法","link":"#十一、通过反射机制-调用一个对象的方法","children":[]},{"level":2,"title":"十二、反射机制好在哪里","slug":"十二、反射机制好在哪里","link":"#十二、反射机制好在哪里","children":[]}],"git":{"createdTime":1739185487000,"updatedTime":1740401099000,"contributors":[{"name":"yangji","username":"yangji","email":"2020946884@qq.cin","commits":1},{"name":"I758809","username":"I758809","email":"nick.yang03@sap.com","commits":1}]},"readingTime":{"minutes":8.2,"words":2459},"filePathRelative":"Java/main/Java的注解与反射机制.md","localizedDate":"2023年4月18日","excerpt":"\\n<h2>一、什么是注解</h2>\\n<p>Annotation 是从 JDK5.0 开始引入的技术</p>\\n<p>Annotation 的作用：</p>\\n<ul>\\n<li>不是程序本身，可以对程序作出解释（这一点和注释[comment]没什么区别）</li>\\n<li>\\n</li>\\n</ul>\\n<p>Annotation 的格式：</p>\\n<p>注解是以 <strong>@注释名</strong> 在代码中存在的，还可以添加一些参数值，例如：<strong>@SuppressWarnings(value=\\"unchecked\\")</strong></p>\\n<p>Annotation 在哪里使用：</p>"}');export{B as comp,v as data};
