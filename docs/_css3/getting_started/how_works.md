---
layout: css_main
title: ¿C&oacute;mo funciona CSS?
post: 3
---
<h3>¿C&oacute;mo funciona <abbr title="Hojas de estilo en cascada">CSS</abbr>?</h3>
<p>Cuando un navegador muestra un documento, debe combinar el contenido del documento con la informaci&oacute;n de su estilo. Se procesa el documento en dos etapas:</p>
<ol>
  <li>El navegador convierte el lenguaje de marcado (markup) y el <abbr title="Hojas de estilo en cascada">CSS</abbr> en el <abbr title="Modelo de objeto de documento">DOM</abbr>. El <abbr title="Modelo de objeto de documento">DOM</abbr> representa el documento en la memoria de la computadora. Combina el contenido del documento con su estilo.</li>
  <li>El navegador muestra el contenido de la <abbr title="Modelo de objeto de documento">DOM</abbr>.</li>
</ol>
<p>Un lenguaje de marcado utiliza elementos para definir la estructura del documento. Usted marca un elemento utilizando etiquetas, que son cadenas que comienzan con '<' y termina con '>'. La mayor&iacute;a de los elementos tienen un par de etiquetas, una etiqueta de inicio y una etiqueta de cierre. Para la etiqueta de inicio, coloque el nombre del elemento entre '<' y '>'. Para la etiqueta final, coloque un '/' despu&eacute;s de '<' y antes del nombre del elemento.</p>
<p>Dependiendo del lenguaje de marcado, algunos elementos tienen s&oacute;lo una etiqueta de inicio, o una sola etiqueta donde el '/' viene despu&eacute;s del nombre del elemento. Un elemento tambi&eacute;n puede ser un contenedor e incluir otros elementos entre su etiqueta de inicio y la etiqueta de cierre. S&oacute;lo recuerda cerrar siempre las etiquetas dentro del contenedor.</p>
<p>Un DOM tiene una estructura en forma de &aacute;rbol. Cada elemento, atributo y extensi&oacute;n de texto en el lenguaje de marcado se convierte en un nodo de la estructura de &aacute;rbol. Los nodos se definen por su relaci&oacute;n con otros nodos <abbr title="Modelo de objeto de documento">DOM</abbr>. Algunos elementos son los padres de los nodos secundarios, y los nodos secundarios tienen hermanos.</p>
