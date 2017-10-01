---
layout: css_main
title: Medios
post: 9
---
<h3>Medios</h3>
<p>El prop&oacute;sito de <abbr title="Hojas de estilo en cascada">CSS</abbr> es especificar c&oacute;mo se presentan los documentos al usuario. La presentaci&oacute;n puede tener m&aacute;s de una forma.</p>
<p>Por ejemplo, es probable que est&eacute; leyendo esta p&aacute;gina en un dispositivo m&oacute;bil. Pero tambi&eacute;n es posible que desee proyectarlo en una pantalla para una audiencia grande o imprimirlo. Estos diferentes medios pueden tener caracter&iacute;sticas diferentes. <abbr title="Hojas de estilo en cascada">CSS</abbr> proporciona maneras de presentar un documento de manera diferente en diferentes medios.</p>
<p>Para especificar las reglas que son espec&iacute;ficas de un tipo de medio, utilice <code>@media</code> seguido del tipo de medio, seguido de llaves que encierran las reglas.</p>
<div class="tuto_example">
<p>Ejemplo</p>
<p>Supongamos que el documento presenta una barra de navegaci&oacute;n para moverse por el sitio Web. Cuando el documento se imprime la barra de navegaci&oacute;n no tiene ning&uacute;n prop&oacute;sito, entonces con la hoja de estilo puede quitarlo completamente:</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
  <span class="token selector"><span class="token id">nav</span> </span><span class="token punctuation">{</span><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre>
<p>El siguiente ejemplo cambia el color de fondo a verde claro si la ventana es de 480 p&iacute;xeles de ancho o m&aacute;s (si la ventana es inferior a 480 p&iacute;xeles, el color de fondo ser&aacute; de color rosa):</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token atrule"><span class="token selector"><span class="token id">body</span> </span><span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> #ffc0cb<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span>
  <span class="token selector"><span class="token id">body</span> </span><span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> #90ee90<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre>
</div>
<p>Algunos de los tipos de medios comunes son:</p>
<ul>
  <li>screen</li>
  <li>print</li>
  <li>projection</li>
  <li>all</li>
</ul>
