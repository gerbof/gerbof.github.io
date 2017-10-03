---
layout: css_main
title: Textos
post: 5
---
<h3>Los estilos de texto</h3>
<p><abbr title="Hojas de estilo en cascada">CSS</abbr> tiene varias propiedades de estilo de texto.</p>
<p>Existe una propiedad conveniente, 'font', que se puede utilizar para especificar varios aspectos a la vez, por ejemplo:</p>
<ul>
  <li>Negrita, cursiva, y small-caps (versalitas)</li>
  <li>El tamaño</li>
  <li>La altura de la l&iacute;nea</li>
  <li>El tipo de letra</li>
</ul>
<div class="tuto_example">
<pre class="brush:css line-numbers  language-css"><code class=" language-css"><span class="token selector">p </span><span class="token punctuation">{</span>
<span class="token property">font</span><span class="token punctuation">:</span> italic <span class="token number">75%</span>/<span class="token number">125%</span> <span class="token string">"Comic Sans MS"</span>, cursive<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
<p>Esta regla establece varias propiedades de la fuente, poniendo todos los p&aacute;rrafos en cursiva.</p>
<p>El tamaño de fuente se establece en tres cuartas partes del tamaño en cada p&aacute;rrafo del elemento padre, y el interl&iacute;neado se establece en 125% (un poco m&aacute;s separados de lo normal).</p>
<p>El tipo de letra se establece en Comic Sans MS, pero si este tipo de letra no est&aacute; disponible, el navegador utilizar&aacute; por defecto tipograf&iacute;a cursiva.</p>
<p>La regla tiene el efecto de desactivar las versalitas y negritas (estableciendo su valor en normal)</p>
</div>
<article>
<h4>Tipos de fuentes</h4>
<p>No se puede predecir qu&eacute; tipograf&iacute;as tienen los lectores de nuestro documento. As&iacute; que cuando se especifican los tipos de fuentes de las letras, es buena idea darle una lista alternativa en orden de preferencia.</p>
<p>Finalice la lista con uno de los las tipograf&iacute;as por defecto: serif, sans-serif, cursive, fantasy o monospace.</p>
<p>Si el tipo de letra no es compatible con alguna de los caracteres del documento, el navegador puede sustituirlos por una tipograf&iacute;a diferente. Por ejemplo, el documento puede contener caracteres especiales que el tipo de letra no admite. Si el navegador puede encontrar otro tipograf&iacute;a que tiene esos caracteres, entonces usar&aacute; otro tipo de fuente</p>
<p>Para especificar un tipo de letra por s&iacute; misma, utilizar la propiedad 'font-family'.</p>
</article>
<article>
<h4>Tamaños de la fuente</h4>
<p>Los usuarios de navegadores pueden anular los tamaños de fuente por defecto o cambiar el tamaño del texto mientras leen una p&aacute;gina, as&iacute; que tiene buen sentido utilizar tamaños relativos donde se pueda.</p>
<p>Si es necesario, puede especificar como tamaño actual: 14em o 14pt para una impresora. Esto no es accesible para los usuarios con discapacidad visual, ya que no les permite cambiar el tamaño. Una estrategia m&aacute;s accesible es establecer un valor incorporado como mediano en un elemento en la parte superior del documento, y luego fijar tamaños relativos a todos los elementos descendientes.</p>
<p>Para especificar un tamaño de fuente por su cuenta, utilice la propiedad 'font-size'.</p>
</article>
<article>
<h4>Otras propiedades</h4>
<p>Para especificar cursiva por su cuenta, use 'font-style: italic';</p>
<p>Para especificar la negrita por su cuenta, use 'font-weight: bold';</p>
<p>Para especificar pequeños capitales, use 'font-variant: small-caps'.</p>
</article>
