---
layout: html_main
title: Estructura del cuerpo
post: 3
---

<h3>{{ page.title }}</h3>

<p>La estructura del cuerpo (el c&oacute;digo entre las etiquetas <span><</span>body<span>></span>) generar&aacute; la parte visible del documento. Este es el c&oacute;digo que producir&aacute; nuestra p&aacute;gina web.</p>
<h3>Nuevas etiquetas estructurales</h3>
<p><abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr> incorpora nuevas etiquetas para estructurar p&aacute;ginas web. Estos elementos, denominados elementos sem&aacute;nticos sirven para dividir un documento en partes l&oacute;gicas, indicando el tipo de contenido que se incluye en cada parte, los cu&aacute;les representan secciones l&oacute;gicas o componentes de una aplicaci&oacute;n web o un documento</p>

<img class="graphic" src="{{ site.baseurl }}/images/html5_estructura.jpg" alt="La imágen muestra como el documento se divide en: el encabezado, la barra de navegación, las secciones, los articulos y el pie de página." />

<h3>Soporte <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr></h3>
<p>Como hemos visto en el punto anterior <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr> ofrece algunas maneras en que podemos hacer nuestros sitios m&aacute;s accesibles; pero hay un problema: no todos los navegadores son compatibles con estas nuevas t&eacute;cnicas.</p>
<p>En primer lugar, tiene que asegurarse de que entiende (y esto es muy, muy importante, as&iacute; que preste atenci&oacute;n): soporte para <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr> mediante cualquier navegador en particular no va a ser una pregunta s&iacute; / no. Esto toma un poco de explicaci&oacute;n.</p>
<p>Cuando una nueva versi&oacute;n de <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr> sale del cascar&oacute;n, como <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr>, no es algo repentino. Se necesitan años de discusi&oacute;n para el <abbr title="El Consorcio WWW">W3C</abbr> para tomar decisiones finales acerca de c&oacute;mo se va a trabajar con una versión de <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>. Sin embargo, los navegadores no esperan a que todo est&eacute; terminado, comienzan a implementar tan pronto como sea posible, porque es mucho trabajo para poner en práctica todo a la vez.</p>
<p><a title="Enlace fuera de éste sitio que dirije a la página que muestra navegadores compatibles con HTML5." href="http://html5accessibility.com/">Accesibilidad HTML5</a> es un gran recurso donde se puede averiguar qu&eacute; navegadores son compatibles con qu&eacute; partes de <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr>.</p>

<h3>HTML5 y ARIA</h3>
<p>Así, mientras que hay cosas interesantes para la accesibilidad en <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr>, estas técnicas no son compatibles con todos los navegadores. Y a&uacute;n cuando la nueva versi&oacute;n de un navegador es compatible con algo, las anteriores versiones del navegador no se actualizarán para apoyarlo, y algunas personas seguirán utilizando estos antiguos navegadores.</p>
<p>Pero eso est&eacute; bien, porque tenemos un plan para afrontarlo, y se llama <abbr title="Iniciativa de Accesibilidad Web – Accessible Rich Internet Applications">WAI-ARIA</abbr> o simplemente <abbr title="Accessible Rich Internet Applications">ARIA</abbr> para abreviar.</p>
<p>La diferencia entre <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr> y <abbr title="Accessible Rich Internet Applications">ARIA</abbr> es que <abbr title="Accessible Rich Internet Applications">ARIA</abbr> es un complemento de las clases, pero <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr> es el código de la página real semántica; es decir, que proporciona significado a la estructura de la página. Un <code>div</code> no hace eso. As&iacute; que si algunos navegadores no soportan <abbr title="Lenguaje de Marcado de Hipertexto versión 5">HTML5</abbr>, pero la mayor&iacute;a ARIA, ¿qu&eacute; haces? La respuesta es: usar ambos. Puede parecer extraño utilizar c&oacute;digo que la mayor&iacute;a de los navegadores no est&aacute;n soportando, pero tenga en cuenta que se soportar&aacute;n en un futuro próximo.</p>
Por ejemplo:
<pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header role="banner"</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span></code></pre>
<p>Aunque no nos adentraremos en el tema de ARIA en la siguiente tabla se muestra los equivalente a los elementos sem&aacute;nticos</p>

<div class="table-wrapper">
<table aria-describedby="tblDescription">
  <caption id="tblDescription">Elementos HTML del cuerpo de un documento</caption>
  <thead>
    <tr>
      <th id="columna_elementos" scope="col">Elemento</th>
      <th id="columna_aria">Equivalente en ARIA</th>
      <th id="columna_descripcion" scope="col">Descripci&oacute;n</th>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td headers="columna_elementos"><span><</span>header<span>></span></td>
      <td headers="columna_aria"><code>role="banner"</code></td>
      <td headers="columna_descripcion">
        Cabecera: con &eacute;ste elemento se representa el encabezado de un documento o una secci&oacute;n y suele utilizarse para agrupar los elementos como logo, t&iacute;tulo, navegaci&oacute;n principal, subt&iacute;tulos, una corta descripci&oacute;n del sitio web o la p&aacute;gina, etc. El elemento <span><</span>header<span>></span> no debe ser confundido con <span><</span>head<span>></span> usado antes para construir la cabecera del documento. Del mismo modo que <span><</span>head<span>></span>, la intenci&oacute;n de <span><</span>header<span>></span> es proveer informaci&oacute;n introductoria, pero difiere con respecto a <span><</span>head<span>></span> en su alcance.
      </td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>nav<span>></span></td>
      <td headers="columna_aria"><code>role="navigation"</code></td>
      <td headers="columna_descripcion">
        Barra de navegación: &eacute;ste elemento proporciona una forma de especificar expl&iacute;citamente la forma de navegaci&oacute;n a trav&eacute;s del sitio. Los usuarios son guiados desde esta barra hacia las diferentes p&aacute;ginas o documentos, normalmente pertenecientes al mismo sitio web.
      </td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>section<span>></span></td>
      <td headers="columna_aria"><code>role="main, alert, alertdialog, application, banner, complementary, contentinfo, dialog, document, log, main, marquee, navigation, search, o status" </code></td>
      <td headers="columna_descripcion">
        Secciones: &eacute;ste elemento engloba a un bloque de contenido relacionado, por lo que representa a una informaci&oacute;n "general" dentro de un documento o aplicaci&oacute;n. Puede contener subsecciones y si lo acompañamos de etiquetas h1-h6 podemos estructurar mejor toda la p&aacute;gina.
        IMPORTANTE: Las etiquetas que representan cada secci&oacute;n del documento est&aacute;n localizadas en el c&oacute;digo en forma de lista, unas sobre otras, pero en el sitio web algunas de estas secciones se ubicar&aacute;n lado a lado. En HTML5, la responsabilidad de la representaci&oacute;n de los elementos en la pantalla fue delegada a CSS. El diseño ser&aacute; logrado asignando estilos a cada elemento HTML.
      </td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>article<span>></span></td>
      <td headers="columna_aria"><code>No APLICA</code></td>
      <td headers="columna_descripcion">
        Art&iacute;culos: &eacute;ste elemento se aplica al contenido de un sitio web que puede ser publicado o distribuido de forma independiente, como entradas en blogs o art&iacute;culos de noticias. As&iacute;, podr&iacute;amos tener varios art&iacute;culos marcados sem&aacute;nticamente, por lo que una herramienta puede extraerlos con facilidad.
      </td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>aside<span>></span></td>
      <td headers="columna_aria"><code>role="complementary"</code></td>
      <td headers="columna_descripcion">
        Barra lateral: &eacute;ste elemento representa contenido secundario relacionado con el contenido principal de un documento y resulta esencial para delimitar el contenido “importante” del contenido “de apoyo”. Se utiliza para bloques publicitarios, enlaces externos, citas, calendario de eventos, etc.
      </td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>footer<span>></span></td>
      <td headers="columna_aria"><code>role="contentinfo"</code></td>
      <td headers="columna_descripcion">
        Pie de p&aacute;gina: &eacute;ste elemento representa el pie de p&aacute;gina de un documento o de una parte del documento. Est&aacute; pensado para incluir la información que normalmente se coloca al final de un contenido, como el nombre del autor, enlaces relacionados o derechos de autor.
      </td>
    </tr>
  </tbody>
</table>
</div>
<p>IMPORTANTE: Es deseable que se utilicen los elementos de forma correcta, ya que algunas personas con discapacidades, necesitan de una fuente externa, como por ejemplo, lectores de pantalla, para navegar por el sitio.</p>
