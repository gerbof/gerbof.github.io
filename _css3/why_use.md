---
layout: css_main
title: ¿Por qu&eacute; usar CSS?
post: 2
---

<h3>¿Por qu&eacute; usar <abbr title="Hojas de estilo en cascada">CSS</abbr>?</h3>
<article>
<h4>Informaci&oacute;n</h4>
<p><abbr title="Hojas de estilo en cascada">CSS</abbr> ayuda a mantener la informaci&oacute;n de contenido de un documento separado de los detalles de como mostrarlo. Los detalles de como se muestra el documento son conocidos como estilos. Si mantienes los estilos separados del contenido puedes:</p>
<ul>
  <li>Evitar duplicaciones.</li>
  <li>Hacer el mantenimiento m&aacute;s simple.</li>
  <li>Usar el mismo contenido con diferentes estilos para diferentes propositos.</li>
</ul>
<table>
 <caption>
  Ejemplo
 </caption>
 <tbody>
  <tr>
   <td>
    <p>Tu sitio web podr&iacute;a mostrar miles de p&aacute;ginas que se ven similar. Usando <abbr title="Hojas de estilo en cascada">CSS</abbr>, almacenas la informaci&oacute;n de estilos en archivos comunes que todas las p&aacute;ginas comparten.Cuando un usuario visualiza una p&aacute;gina web, el navegador carga la informaci&oacute;n de estilos junto con el contenido de la p&aacute;gina.</p>
    <p>Cuando un usuario imprime una p&aacute;gina web, podr&iacute;as proveerle diferente informaci&oacute;n de estilos que hace que las p&aacute;ginas impresas sean f&aacute;ciles de leer.</p>
   </td>
  </tr>
 </tbody>
</table>
<p>En general con <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>, usas el lenguaje de marcado para describir la informaci&oacute;n del contenido del documento, no sus estilos. Usas <abbr title="Hojas de estilo en cascada">CSS</abbr> para especificar sus estilos, no su contenido.</p>
</article>
<article>
<h4>Creando una hoja de estilos</h4>
<p>Las hojas de estilos son un conjunto de reglas que se aplican a un documento <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr> (tambi&eacute;n pueden ser aplicadas a documentos <abbr title="Lenguaje de marcado extensible">XML</abbr>). Estas reglas est&aacute;n compuestas por tres partes:</p>
<ul id="structure_description">
  <li>Los elementos a los que se aplica una regla (llamados selectores)</li>
  <li>La propiedad a aplicar</li>
  <li>El valor de la propiedad</li>
</ul>
<p>La siguiente im&aacute;gen describe una regla de hojas de estilo</p>
<figure role="img" aria-labelledby="imgid1">
  <img src="{{ site.baseurl }}/images/css_rule.jpg" alt="Ejemplo de regla de hoja de estilo" longdesc="#structure_description"/>
  <figcaption id="imgid1">Figura 1. Ejemplo de una regla de hojas de estilo</figcaption>
</figure>

<p>Una vez escr&iacute;tas las reglas deseadas en un archivo externo al documento <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>, el mismo deberia quedar guardado en el directorio deseado, con la extensi&oacute;n "<abbr title="extension del archivo resultante">.css</abbr>"</p>
<p>Luego en tu documento <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr> debes enlazar tu hoja de estilos en el encabezado del documento de la siguiente manera:</p>
<pre class="language-html correcto"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>miHojaDeEstilo.css<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</article>
