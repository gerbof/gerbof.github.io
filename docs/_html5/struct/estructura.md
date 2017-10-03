---
layout: html_main
title: Estructura global
post: 2
---

<h3>{{ page.title }}</h3>

<p>Los documentos <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr> se encuentran estrictamente organizados. Cada parte del documento est&aacute; diferenciada, declarada y determinada por etiquetas espec&iacute;ficas. Estas etiquetas HTML son palabras clave y atributos rodeados de los signos mayor y menor. La mayor&iacute;a de las etiquetas HTML se utilizan en pares, una etiqueta de apertura y una de cierre, y el contenido se declara entre ellas.</p>

<img class="graphic" src="{{ site.baseurl }}/images/html_estructura.png" alt="Division del documento HTML: tipo de documento, estructura (cabecera y cuerpo del documento)." />

<p>En primer lugar necesitamos indicar el tipo de documento que estamos creando. Esto en <abbr title="Lenguaje de Marcado de Hipertexto versi&oacute;n 5">HTML5</abbr> es extremadamente sencillo:</p>
<pre><!DOCTYPE html></pre>
<p>Esta l&iacute;nea debe ser la primera l&iacute;nea del archivo, sin espacios o l&iacute;neas que la precedan. De esta forma, el
modo est&aacute;ndar del navegador es activado y las incorporaciones de <abbr title="Lenguaje de Marcado de Hipertexto versi&oacute;n 5">HTML5</abbr> son interpretadas siempre que sea posible,
o ignoradas en caso contrario.</p>
<p>Luego de declarar el tipo de documento, debemos comenzar a construir la estructura <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>. Como siempre, la estructura tipo &aacute;rbol de este lenguaje tiene su ra&iacute;z en el elemento <span><</span>html<span>></span>. Este elemento envolver&aacute; al resto del c&oacute;digo.</p>
<p>Continuemos construyendo nuestra plantilla. El c&oacute;digo HTML insertado entre las etiquetas <span><</span>html<span>></span> tiene que ser dividido entre dos secciones principales. Al igual que en versiones previas de <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>, la primera secci&oacute;n es la cabecera, donde definiremos el t&iacute;tulo de nuestra p&aacute;gina web, declararemos el set de caracteres correspondiente, proveeremos informaci&oacute;n general acerca del documento e incorporaremos los archivos externos con estilos, c&oacute;digos Javascript o incluso im&aacute;genes necesarias para generar la p&aacute;gina en la pantalla. Y la segunda secci&oacute;n el cuerpo, que representa la parte visible de todo documento. El siguiente paso, por lo tanto, ser&aacute; crear estas dos secciones en el c&oacute;digo usando los elementos <span><</span>head<span>></span> y <span><</span>body<span>></span> ya conocidos.</p>

<div class="table-wrapper">
<table aria-describedby="tblDescription">
  <caption id="tblDescription">Elementos que se pueden utilizar para generar la cabecera</caption>
  <thead>
    <tr>
      <th id="columna_elementos" scope="col">Elemento</th>
      <th id="columna_descripcion" scope="col">Descripci&oacute;n y ejemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td headers="columna_elementos"><span><</span>meta<span>></span></td>
      <td headers="columna_descripcion">
        &eacute;sta etiqueta se utiliza para especificar una descripci&oacute;n del documento, palabras claves, autor, y otro tipo de metadatos. Estos metadatos son utilizados por los navegadores, por los motores de b&uacute;squeda y otros servicios web.
        Ejemplos:
        <pre class="ejemplo">
          <span><</span>meta name="description" content="Free Web tutorials"<span>></span>
          <span><</span>meta name="keywords" content="HTML,CSS,XML,JavaScript"<span>></span>
          <span><</span>meta name="author" content="Hege Refsnes"<span>></span>
          <span><</span>meta charset="UTF-8"<span>></span>
        </pre>
        <span class="findelista">Fin del ejemplo</span>
      </td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>title<span>></span></td>
      <td headers="columna_descripcion">&eacute;sta etiqueta simplemente especifica el t&iacute;tulo del documento. Normalmente este texto es mostrado en la barra superior de la ventana del navegador.</td>
    </tr>
    <tr>
      <td headers="columna_elementos"><span><</span>link<span>></span></td>
      <td headers="columna_descripcion">&eacute;sta etiqueta es usada para incorporar hojas de estilos, c&oacute;digos Javascript, im&aacute;genes o iconos desde archivos externos.
      Ejemplo:
        <pre class="ejemplo">
          <span><</span>link rel="stylesheet" href="miEstilo.css"<span>></span>
        </pre>
        <span class="findelista">Fin del ejemplo</span>
      En <abbr title="Lenguaje de Marcado de Hipertexto versi&oacute;n 5">HTML5</abbr> ya no se necesita especificar qu&eacute; tipo de estilos estamos insertando, por lo que el atributo "type" de <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr> fue eliminado. Solo necesitamos dos atributos para incorporar nuestro archivo de estilos: el atributo rel significa "relaci&oacute;n" y es acerca de la relaci&oacute;n entre el documento y el archivo que estamos incorporando por medio de href. En este caso, el atributo rel tiene el valor "stylesheet" que le dice al navegador que el archivo miEstilo.css es un archivo CSS con estilos requeridos para presentar la p&aacute;gina en pantalla.
      </td>
    </tr>
  </tbody>
</table>
</div>
