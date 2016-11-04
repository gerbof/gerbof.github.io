---
layout: html_main
title: Elementos básicos
post: 4
---

<h3>{{ page.title }}</h3>
<aside id="nav-content" role="complementary">
  <div role="navigation" aria-labelledby="middlenavcontent">
    <p id="middlenavcontent">Etiquetas abarcadas en este apartado</p>
    <ul>
        <li><a href="#encabezados" title="Enlace que dirije dentro de éste artículo al contenido de encabezados"><span><</span>h1<span>></span>,...,<span><</span>h6<span>></span></a></li>
        <li><a href="#parrafos" title="Enlace que dirije dentro de éste artículo al contenido de párrafos"><span><</span>p<span>></span></a></li>
        <li><a href="#bloques" title="Enlace que dirije dentro de éste artículo al contenido de bloques"><span><</span>div<span>></span> / <span><</span>span<span>></span></a></li>
        <li><a href="#abreviaturas" title="Enlace que dirije dentro de éste artículo al contenido de abreviaturas"><span><</span>abbr<span>></span></a></li>
        <li><a href="#hipervinculos" title="Enlace que dirije dentro de éste artículo al contenido de hipervinculos"><span><</span>a<span>></span></a></li>
        <li><a href="#info-contacto" title="Enlace que dirije dentro de éste artículo al contenido de información de contacto"><span><</span>address<span>></span></a></li>
        <li><a href="#imagenes" title="Enlace que dirije dentro de éste artículo al contenido de imagenes"><span><</span>img<span>></span></a></li>
        <li><a href="#tablas" title="Enlace que dirije dentro de éste artículo al contenido de tablas"><span><</span>table<span>></span></a></li>
        <li><a href="#listas" title="Enlace que dirije dentro de éste artículo al contenido de listas"><span><</span>ul<span>></span> / <span><</span>ol<span>></span> / <span><</span>dl<span>></span> / <span><</span>li<span>></span></a></li>
    </ul>
  </div>
</aside>
<p>Antes de ver c&oacute;mo agregar elementos de HTML5 puede hacer que su p&aacute;gina sea m&aacute;s accesible, aseg&uacute;rese de que est&aacute; comenzando a cabo con un buen código.</p>

<p>Probablemente ha escuchado la importancia de escribir sem&aacute;ntica, compatible con los est&aacute;ndares HTML. Una raz&oacute;n que es importante es que mejora la accesibilidad. Por ejemplo, una persona no vidente que usa un lector de pantalla necesita la capacidad de saltar a trav&eacute;s de diferentes secciones de la p&aacute;gina, en lugar de leer la p&aacute;gina completa de principio a fin. El uso de niveles de t&iacute;tulo (encabezados) apropiados hace esto mucho m&aacute;s f&aacute;cil. El usuario puede escuchar todos los t&iacute;tulos de las secciones y luego decidir qu&eacute; parte de la p&aacute;gina le interesa, si los hubiere.</p>

<p>Los elementos est&aacute;n compuestos, generalmente, por una etiqueta de inicio y una de cierre. Cada elemento informa al navegador sobre la informaci&oacute;n contenida dentro de esas etiquetas.</p>

<p>Todos los elementos pueden contar con atributos que los acompañen, dandole al elemento informaci&oacute;n adicional, por ejemplo si se le quiere dar un identificador al elemento, con el atributo "id" o "class", un t&iacute;tulo con el atributo "title". Todos los atributos siempre se declaran en la etiqueta de inicio de cada elemento.</p>

<img class="graphic" src="{{ site.baseurl }}/images/elemento.png" alt="La imágen muestra como esta compuesto un elemento HTML, iniciando por una etiqueta de inicio, el atributo, el valor de ese atributo, el contenido del elemento y el fin de la etiqueta" />

<article id="encabezados">
  <h4>Encabezados</h4>
  <p>Muchos desarrolladores de p&aacute;ginas web emplean las etiquetas <span><</span>div<span>></span> y <span><</span>span<span>></span> para definir encabezados (títulos) de secci&oacute;n y estructurar el contenido. Sin embargo, estas etiquetas no proporcionan contenido sem&aacute;ntico, por lo que se debe evitar su uso. Lo correcto es utilizar las etiquetas de encabezados (de nivel 1 a 6) que est&aacute;n pensados para marcar los t&iacute;tulos y subt&iacute;tulos de los apartados de un documento. En principio, los t&iacute;tulos <span><</span>h1<span>></span>,..., <span><</span>h6<span>></span> se deben utilizar de forma jer&aacute;rquica, es decir, no salt&aacute;ndose niveles y utilizando t&iacute;tulos del mismo nivel para contenido de la misma categor&iacute;a (apartados principales, subapartados, etc.).
  </p>
  <p>El siguiente ejemplo muestra la forma correcta de encabezados</p>
  <pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Elementos encabezado<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Resumen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Algún texto aquí...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Ejemplos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Ejemplo 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Algún texto aquí<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Ejemplo 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Algún texto aquí...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code></pre>

<p>El siguiente ejemplo muestra la forma incorrecta de encabezados</p>
<pre class="line-numbers language-html incorrecto">
  <code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Elementos encabezado<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Resumen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Algún texto aquí...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Ejemplos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Ejemplo 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>Algún texto aquí<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Ejemplo 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Algún texto aquí...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code></pre>
</article>
<article id="parrafos">
  <h4>P&aacute;rrafos</h4>
  <p>La etiqueta <span><</span>p<span>></span> esta pensada para definir p&aacute;rrafos de texto. No utilizarla para dividir contenido o en casos donde exista, uno más espec&iacute;fico (por ejemplo, "address"), un p&aacute;rrafo no puede contener una lista.</p>
  <p>El siguiente ejemplo muestra la forma correcta de los p&aacute;rrafos</p>
  <pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Este es el primer párrafo de texto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Este es el segundo párrafo de texto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>El siguiente ejemplo muestra la forma incorrecta de encabezados</p>
<pre class="line-numbers language-html incorrecto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Primer elemento de una lista<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</article>
<article id="bloques">
<h4>Bloques</h4>
<p>La etiqueta <code><span><</span>div<span>></span></code> representa un contenedor gen&eacute;rico sin ning&uacute;n significado especial. Es utilizado para agrupar elementos para prop&oacute;sitos de estilos (utilizando los atributos "class" o "id").
La etiqueta <code><span><</span>span<span>></span></code>, aunque no se define como elemento de bloque, sino de l&iacute;nea, representa texto sin ning&uacute;n significado espec&iacute;fico.
S&oacute;lo debe ser usado cuando ning&uacute;n otro elemento sem&aacute;ntico le confiere un significado adecuado (como <code><span><</span>article<span>></span></code> o <code><span><</span>nav<span>></span></code>), en cuyo caso, provendr&aacute; de atributos globales como class, lang, o dir.</p>
<p>El siguiente ejemplo muestra la forma correcta de los bloques</p>
<pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div <span class="token attr-name">id</span>="identificador_del_bloque"</span><span class="token punctuation">&gt;</span></span>
    Aqui cualquier contenido como <span><</span>p<span>></span> o <span><</span>table<span>></span>
<span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Esto es un p&aacute;rrafo de <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>ejemplo<span class="token tag"><span class="token punctuation">&lt;/</span>span<span class="token punctuation">&gt;</span></span>de span<span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span>
</code></pre>
<p>El siguiente ejemplo muestra la forma incorrecta de los bloques</p>
<pre class="line-numbers language-html incorrecto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div <span class="token attr-name">id</span>="menu"</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Primer elemento del menú<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

Aqui deberia haberse usado el elemento <code><span><</span>nav<span>></span></code> de HTML5.
</code></pre>
</article>
<article id="abreviaturas">
<h4>Abreviaturas</h4>
<p>La etiqueta <code><span><</span>abbr<span>></span></code> est&aacute; pensada para etiquetar abreviaturas o acrónimos. Si la etiqueta incluye el atributo title, &eacute;ste debe contener el significado de la abreviatura.</p>
<p>El siguiente ejemplo muestra la forma correcta de las abreviaturas</p>
<pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Este es un ejemplo de abreviatura <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abbr <span class="token attr-name">title</span>="Lenguaje de Marcado de Hipertexto"</span><span class="token punctuation">&gt;</span></span>HTML<span class="token tag"><span class="token punctuation">&lt;/</span>abbr</span><span class="token punctuation">&gt;</span>dentro
de un párrafo<span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span>
</code></pre>
</article>
<article id="hipervinculos">
<h4>Hiperv&iacute;nculos</h4>
<p>Los hiperv&iacute;nculos o enlaces de hipertexto representados con <code><span><</span>a<span>></span></code> son el elemento caracter&iacute;stico de la web porque permiten que las p&aacute;ginas se relacionen entre s&iacute;. Un hiperv&iacute;nculo tiene dos partes: el enlace, es decir, el elemento (texto o im&aacute;gen) sobre el que se puede acceder con el rat&oacute;n o el teclado, y el destino, es decir, el elemento (p&aacute;gina web, im&aacute;gen, archivo, etc) que se muestra al acceder al enlace.
El destino de un enlace puede ser un directorio, un archivo o un elemento (texto o im&aacute;gen) situado en un sitio web.
Es recomendable que todos los hiperv&iacute;nculos dentro de su etiqueta tengan el atributo "title" que diga hacia d&oacute;nde dirige dicho enlace.</p>
<p>El siguiente ejemplo muestra la forma correcta de los hiperv&iacute;nculos</p>
<pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Este p&aacute;rrafo contiene un <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a <span class="token attr-name">href</span>="direccion_de_enlace" <span class="token attr-name">title</span>="Este enlace dirige hacia..."</span><span class="token punctuation">&gt;</span></span>hiperv&iacute;nculo<span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span>a otra p&aacute;gina<span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span>

<span class="token comment" spellcheck="true">&lt;!-- Enlaces con imágenes --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span>"direccion_de_enlace" <span class="token attr-name">title</span>="Este enlace dirige hacia..."</span></span><span class="token punctuation">&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>direccion_de_imagen<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MDN logo<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="line-numbers-rows"><span></span><span></span><span></span></span>
</code></pre>
<p>El siguiente ejemplo muestra la forma incorrecta de los hiperv&iacute;nculos</p>
<pre class="line-numbers language-html incorrecto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Este p&aacute;rrafo contiene información importante.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>direccion_de_enlace<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Leer m&aacute;s...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="line-numbers-rows"><span></span><span></span><span></span><span></span></span><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span>
</code></pre>
</article>
<article id="info-contacto">
<h4>Informaci&oacute;n de contacto</h4>
<p>La etiqueta <span><</span>address<span>></span> est&aacute; pensada para contener informaci&oacute;n de contacto del autor de la informaci&oacute;n. Normalmente se incluye en el pie de p&aacute;gina general del cuerpo del documento o en el pie de p&aacute;gina de un art&iacute;culo.</p>
<p>El siguiente ejemplo muestra la forma correcta de la informaci&oacute;n de contacto</p>
<pre class="line-numbers language-html correcto">
<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">&gt;</span></span>Autor: Bartolomé Sintes Marco. Última modificación: 21 de Julio de 2016<span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">&gt;</span>
</code></pre>
</article>
<article id="imagenes">
<h4>Im&aacute;genes</h4>
<p>La etiqueta <code><span><</span>img <span>/></span></code> permite mostrar im&aacute;genes vectoriales o de mapa de bits en una p&aacute;gina web. Las im&aacute;genes no forman parte del documento, sino que se mantienen como archivos aparte. El atributo "src" contiene el camino absoluto o relativo a la im&aacute;gen desde la p&aacute;gina web. Para que el navegador pueda mostrar la im&aacute;gen, el archivo referenciado debe estar disponible. Sino el atributo "alt" contiene el texto alternativo que deben mostrar los navegadores si la im&aacute;gen no est&aacute; disponible. Es recomendable que el texto alternativo est&eacute; siempre presente y que sea significativo para que lectores de pantallas puedan describir la im&aacute;gen.</p>
<p>El siguiente ejemplo muestra la forma correcta de las imágenes</p>
<pre class="line-numbers language-html correcto">
<code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mdn-logo-sm.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Logotipo de Mozilla Developers<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="line-numbers-rows"><span></span></span></code></pre>
</article>
<article id="tablas">
<h4>Tablas</h4>
<p>Una tabla, representada con la etiqueta <code><span><</span>table<span>></span></code> es un conjunto de celdas,  <code><span><</span>td<span>></span></code> (celda de datos) o <code><span><</span>th<span>></span></code> (celda de cabecera) organizadas en filas <code><span><</span>tr<span>></span></code> que a su vez se organizan en grupos de filas <code><span><</span>thead<span>></span></code>, <code><span><</span>tbody<span>></span></code> o <code><span><</span>tfoot<span>></span></code>. Es recomendable que la tabla tenga una leyenda usando la etiqueta <code><span><</span>caption<span>></span></code> luego de la etiqueta de inicio de tabla.
Las tablas que almacenan gran cantidad de datos, si no est&aacute;n diseñadas correctamente, pueden resultar inaccesibles, al escucharlas a través de un lector de pantalla. Para evitar este problema, se tienen que etiquetar correctamente las tablas para definir su título, se tienen que definir los encabezamientos de las columnas y las filas y se tienen que emplear etiquetas y atributos especiales para asociar las celdas de encabezamiento y las celdas de datos para los encabezamientos más complejos. Por eso es recomendable que en donde puedan existir varios niveles de encabezamiento, emplear los atributos <code>scope</code> y <code>headers</code> para definir la relación que existe entre las celdas de encabezamiento y las celdas de datos..</p>
<p>El atributo <code>scope</code> define el conjunto de celdas para las cuales la celda sobre la que se aplica proporciona información de encabezamiento. Puede tomar cuatro posibles valores:</p>
<ul>
  <li><code>row</code>: La celda proporciona información de encabezamiento para el resto de celdas
      de la fila que la contiene.
  </li>
  <li><code>col</code>: La celda proporciona información de encabezamiento para el resto de celdas
      de la columna que la contiene.
  </li>	  
  <li><code>rowgroup</code>: La celda proporciona información de encabezamiento para el resto del
      grupo de filas que la contiene.
  </li>	  
  <li><code>colgroup</code>: La celda proporciona información de encabezamiento para el resto del
      grupo de columnas que la contiene.
  </li>	  
</ul>
<p>
El atributo <code>headers</code> permite definir una lista de celdas de la tabla que proporcionan
información de encabezamiento para la celda actual. El valor de este atributo es una lista separada
por espacios en blanco de los identificadores de las celdas de encabezamiento; las celdas de
encabezamiento se identifican con el atributo <code>id</code>. Por tanto, el atributo <code>headers</code>
permite definir encabezamientos más complejos que con el atributo <code>scope</code>.
</p>
<p>El siguiente ejemplo muestra la forma correcta de las tablas</p>
<pre class="line-numbers  language-html correcto"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Tabla con cabecera<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">&gt;</span></span>Tabla de ejemplo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_nombre<span class="token punctuation">"</span></span><span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Nombre<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_apellido<span class="token punctuation">"</span></span><span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Apellido<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td <span class="token attr-name">headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_nombre<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Juan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td <span class="token attr-name">headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_apellido<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Perez<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td <span class="token attr-name">headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_nombre<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>María<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td <span class="token attr-name">headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_apellido<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Gonzales<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Tabla con thead y tbody<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">&gt;</span></span>Tabla de paises y sus capitales<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_pais<span class="token punctuation">"</span></span><span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>País<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_capital<span class="token punctuation">"</span></span><span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Capital<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td <span class="token attr-name">headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_pais<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Argentina<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td <span class="token attr-name">headers</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columna_capital<span class="token punctuation">"</span></span></span><span class="token punctuation">&gt;</span></span>Buenos Aires<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</article>
<article id="listas">
<h4>Listas</h4>
<p>En la mayor&iacute;a de los documentos HTML se usan listas para organizar el texto.</p>
<dl>
  <dt>Listas no ordenadas</dt>
  <dd>se colocan dentro de la etiqueta <code><span><</span>ul<span>></span></code>. Cada &iacute;tem que queramos añadir a la lista, lo haremos dentro de la etiqueta <code><span><</span>li<span>></span></code>.</dd>
</dl>
<dl>
  <dt>Listas ordenadas</dt>
  <dd>van enmarcadas dentro de las etiqueta <code><span><</span>ol<span>></span></code>. Cada &iacute;tem de la lista se escribe con la misma etiqueta que en las no numeradas. Pero al ser listas ordenadas los s&iacute;mbolos ser&aacute;n n&uacute;meros y &eacute;stos se ir&aacute;n generando autom&aacute;ticamente por orden, conforme escribamos nuevos &iacute;tems. Podemos hacer que el primer &iacute;tem comience con el n&uacute;mero que nosotros queramos a trav&eacute;s del atributo "value". También se puede modificar el marcador para que en vez de n&uacute;meros sean letras o n&uacute;meros romanos con el atributo "type".</dd>
</dl>
<dl>
  <dt>Lista de definiciones</dt>
  <dd>Es una lista de t&eacute;rminos con una definici&oacute;n para cada t&eacute;rmino. La etiqueta <code><span><</span>dl<span>></span></code> nos indica que dentro de ella, entre ella y su cierre, va a ir una definici&oacute;n. Con la etiqueta <code><span><</span>dt<span>></span></code> definimos el t&iacute;tulo del t&eacute;rmino. Y con la etiqueta <code><span><</span>dd<span>></span></code> definimmos el t&eacute;rmino</dd>
</dl>
<span class="hidden-content">(Fin de definición de listas)</span>
<p>Es recomendable que al utilizar listas no ordenadas o de definiciones proporcionar pistas contextuales para indicar el final de cada lista, para que los lectores de pantalla le indiquen al usuario que la lista finaliz&oacute;. Estas pistas podrían ocultarse mediante hojas de estilo.</p>
<p>El siguiente ejemplo muestra la forma correcta de las listas</p>
<pre class="line-numbers  language-html correcto"><code class=" language-html"><span class="token comment" spellcheck="true">&lt;!-- Listas ordenadas y no ordenadas en conjunto --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>primer item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>segundo item      <span class="token comment" spellcheck="true">&lt;!-- Mira, la etiqueta de cierre &lt;/li&gt; no está aquí! --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>segundo item primer subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>segundo item segundo subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>segundo item tercer subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>                <span class="token comment" spellcheck="true">&lt;!-- Aquí está la etiqueta de cierre &lt;/li&gt; --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>tercer item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token comment" spellcheck="true">&lt;!-- Listas de definición --&gt;</span>
<span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Software<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Libre<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Que tiene facultad para obrar o no obrar.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Que no es esclavo.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</article>
