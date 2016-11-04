---
layout: css_main
title: Cajas
post: 8
---
<h3>Cajas</h3>
<p>Cuando el navegador muestra un elemento, el elemento ocupa espacio. Hay cuatro partes en el espacio que ocupa.</p>
<p id="description_image">En el medio, se encuentra el espacio que el elemento necesita para mostrar su contenido. Alrededor de eso, hay "acolchado". Alrededor de eso, hay una frontera. Alrededor de eso, hay un margen que separa el elemento de otros elementos.</p>
<figure>
  <img id="box" src="{{ site.baseurl }}/images/box1.png" alt="Representacion de las cajas" longdesc="#description_image"/>
  <figcaption>Figura 1. Representacion de las cajas.</figcaption>
</figure>
<p>El padding, el borde y el margen pueden tener diferentes tamaños en la parte superior, derecha, inferior e izquierda del elemento. Cualquiera o todos estos tamaños pueden ser cero.</p>
<article>
  <h4>Bordes</h4>
  <p>Puede utilizar bordes para decorar elementos con l&iacute;neas o cuadros.</p>
  <p>Para especificar el mismo borde alrededor de un elemento, utilice la propiedad 'border'. Especifique el ancho (generalmente en p&iacute;xeles para mostrar en una pantalla), el estilo y el color.</p>
  <p>La propiedad puede tomar los siguientes valores:</p>
  <ul>
    <li>solid</li>
    <li>dotted</li>
    <li>dashed</li>
    <li>double</li>
    <li>inset</li>
    <li>outset</li>
    <li>ridge</li>
    <li>groove</li>
    <li class="hidden-content">(Fin de opciones de valores)</li>  
  </ul>
  <p>Para especificar los bordes de un lado a otro, utilice las propiedades: 'border-top', 'border-right', 'border-bottom', 'border-left'. Puede utilizarlos para especificar un borde en un solo lado, o bordes diferentes en lados diferentes.</p>
</article>
<article>
  <h4>M&aacute;rgenes y padding</h4>
  <p>Utilice los m&aacute;rgenes (propiedad 'margin') y el padding (propiedad 'padding') para ajustar las posiciones de los elementos y crear espacio alrededor de ellos.</p>
  <p>Si especifica un ancho, se aplica todo alrededor del elemento (superior, derecha, inferior e izquierda).</p>
  <p>Si especifica dos anchos, el primero se aplica a la parte superior e inferior, el segundo a la derecha e izquierda.</p>
  <p>Puede especificar los cuatro anchos en el orden: arriba, derecha, abajo, izquierda.</p>
  <div class="tuto_example">
    <p>Ejemplo</p>
    <p>La siguiente regla señala los p&aacute;rrafos con clase 'nota', d&aacute;ndoles un borde rojo en todo. El padding separa el borde alrededor del texto un poco. Se pone sangr&iacute;a desde el margen izquierdo del p&aacute;rrafo relativo al resto del texto</p>
    <pre class="language-css correcto"><code class=" language-css"><span class="token selector">p<span class="token class">.remark</span> </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">2</span>px solid red<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">4</span>%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">24</span>%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>
  </div>
</article>
