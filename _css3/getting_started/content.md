---
layout: css_main
title: Contenido
post: 6
---
<h3>Contenido</h3>
<p>Existen situaciones en las uqe tiene sentido especificar cierto contenido como parte de la hoja de estilo, no como parte del documento.</p>
<p>El contenido especificado en una hoja de estilo puede consistir en texto o im&aacute;genes. Especifique el contenido de su hoja de estilos cuando el contenido est&aacute; estrechamente vinculado a la estructura del documento.</p>
<div class="tuto_details">
  <p>Especificar contenido en una hoja de estilo puede causar complicaciones. Por ejemplo, es posible que tenga versiones de idioma diferentes de su documento que comparten una hoja de estilo. Si parte de la hoja de estilo tiene que ser traducida, significa que debe colocar las partes de la hoja de estilos en archivos separados y organizar para que se vincule con las versiones de idioma adecuado de su documento.</p>
  <p>Estas complicaciones no surgen si el contenido especificado incluye s&iacute;mbolos o im&aacute;genes que se aplican en todos los idiomas y culturas.</p>
</div>
<article>
<h4>Contenido de texto</h4>
<p><abbr title="Hojas de estilo en cascada">CSS</abbr> puede insertar contenido de texto antes o despu&eacute;s de un elemento. Para especificar esto, haga una regla y agregue ''::before' o ''::after' al selector. En la declaraci&oacute;n, especifique la propiedad de 'content' con el contenido de texto como su valor.</p>
<div class="tuto_example">
  <p>Ejemplo</p>
  <h5>HTML</h5>
  <pre class="language-html correcto"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Un texto donde tengo que <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ref<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>algo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></code></pre>
  <h5>CSS</h5>
  <pre class="language-css correcto"><code class=" language-css"><span class="token selector"><span class="token class">.ref</span><span class="token pseudo-element">::before</span> </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a15ec7<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"Referenciar: "</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
</article>
<article>
<h4>Contenido de im&aacute;gen</h4>
<p>Para agregar una im&aacute;gen antes o despu&eacute;s de un elemento, puedes especificar la direcci&oacute;n URL de la im&aacute;gen como valor de la propiedad 'content'.</p>
<div class="tuto_example">
<p>Ejemplo</p>
<p>Esta regla agrega un espacio y un &iacute;cono despu&eacute;s de todo los enlaces con clase 'glossary'.</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token selector">a<span class="token class">.glossary</span><span class="token pseudo-element">:after</span> </span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" "</span> <span class="token url">url("../images/glossary-icon.gif")</span><span class="token punctuation">;</span><span class="token punctuation">}</span></code></pre>
<p>La siguiente regla establece el fondo de un elemento espec&iacute;fico, utilizando una URL para especificar un archivo de imagen.</p>
<p>El selector especifica el id del elemento. El valor 'no-repeat' hace que la imagen aparezca s&oacute;lo una vez:</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token selector"><span class="token id">#sidebar-box</span> </span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> <span class="token url">url("../images/sidebar-ground.png")</span> no-repeat<span class="token punctuation">;</span><span class="token punctuation">}</span></code></pre>
</div>
</article>
