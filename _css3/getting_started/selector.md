---
layout: css_main
title: Selectores
post: 4
---
<h3>Selectores</h3>
<p><abbr title="Hojas de estilo en cascada">CSS</abbr> tiene su propia terminolog&iacute;a para describir el lenguaje <abbr title="Hojas de estilo en cascada">CSS</abbr>. Si en una hoja de estilos creamos una l&iacute;nea  como esta:</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token selector">p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
<p>En la terminolog&iacute;a de <abbr title="Hojas de estilo en cascada">CSS</abbr>, toda esta l&iacute;nea es una regla. Esta regla comienza con p (elemento p&aacute;rrafo de <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>), que es un selector. Permite seleccionar qu&eacute; elementos en el DOM se aplica la regla. La parte interior de las llaves es la declaraci&oacute;n. La palabra clave es color, que es una propiedad, y #FF0000 (valor hexadecimeal correspondiente al color rojo) es el valor. El punto y coma despu&eacute;s de el par propiedad-valor separa los posibles otros pares de  propiedad-valor en una misma declaraci&oacute;n.</p>
<p>Dos atributos tienen un estatus especial para <abbr title="Hojas de estilo en cascada">CSS</abbr>. Son 'class' e 'id'.</p>
<article>
  <h4>'Class': Selectores de clase</h4>
  <p>Utilice el atributo 'class' para asignarle a un elemento un nombre de clase. Depende del nombre que elijas como clase. M&uacute;ltiples elementos en un documento pueden tener el mismo valor de la clase.</p>
  <p>En su hoja de estilo, escriba un punto (.) antes del nombre de la clase, cuando se utiliza como un selector.</p>
  <h4>'Id': Selectores de identificadores</h4>
  <p>Utilice el atributo 'id' en un elemento para asignar un identificaci&oacute;n para ese elemento. Depende de usted el nombre que elija para el ID. El nombre de ID debe ser &uacute;nico en el documento.</p>
  <div class="tuto_example">
  <p>El siguiente ejemplo muestra la forma de aplicar un estilo a diferentes elementos <abbr title="Lenguaje de Marcado de Hipertexto">HTML</abbr>.</p>
  <pre class="language-html correcto"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Este es el primer párrafo de texto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Este es un encabezado de nivel 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>principal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Este es el párrafo principal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre>

<p>En una hoja de estilo <abbr title="Hojas de estilo en cascada">CSS</abbr>, aplicar las siguientes reglas:</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token comment" spellcheck="true">/* Esta regla hace que todos los elementos con la class key sean verdes. */</span>
<span class="token selector"><span class="token class">.key</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00de06<span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">/* Esta regla hace que el único elemento con identificador 'principal' este en negrita: */</span>
<span class="token selector"><span class="token id">#principal</span> </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bolder<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
</div>
<p>Si m&aacute;s de una regla se aplica a un elemento y especifica la misma propiedad, entonces el CSS da prioridad a la regla que tiene el selector m&aacute;s espec&iacute;fico. Un selector 'ID' es m&aacute;s espec&iacute;fico que un selector de 'class', que a su vez es m&aacute;s espec&iacute;fico que un selector ('tag') de etiquetas.</p>
<p>Usted no esta limitado a los dos atributos especiales, class e id.  Se puede especificar otros atributos mediante corchetes. Por ejemplo, el selector [type='button'] selecciona todos los elementos que tienen un atributo de tipo con el  valor 'button'.</p>
</article>
<article>
<h4>Las pseudo-clases de los selectores</h4>
<p>Una pseudo-clase  'pseudo-class' es en <abbr title="Hojas de estilo en cascada">CSS</abbr> una palabra clave añadida a los selectores, que especifica un estado especial del elemento a seleccionar. Por ejemplo ": hover" aplicar&aacute; un estilo cuando el usuario se desplaza sobre el elemento especificado mediante el selector.</p>
<p>Las pseudo-clases, junto con los pseudo-elementos, permiten aplicar un estilo a un elemento no s&oacute;lo en relaci&oacute;n con el contenido de la estructura del documento, sino tambi&eacute;n en relaci&oacute;n a los factores externos, como la historia del navegador por ejemplo: ": visited", el estado de su contenido como ":checked" en algunos elementos de formulario.</p>
<p>El siguiente ejemplo muestra la utilizaci&oacute;n de una pseudo-clase</p>
<pre class="language-css correcto"><code class=" language-css"><span class="token selector">selector<span class="token pseudo-class">:pseudo-class</span> </span><span class="token punctuation">{</span>
  <span class="token property">property</span><span class="token punctuation">:</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>
<p>Listado de pseudo-classes:</p>
<ul>
  <li>:link</li>
  <li>:visited</li>
  <li>:active</li>
  <li>:hover</li>
  <li>:focus</li>
  <li>:first-child</li>
  <li>:last-child</li>
  <li>:nth-child</li>
  <li>:nth-last-child</li>
  <li>:nth-of-type</li>
  <li>:first-of-type</li>
  <li>:last-of-type</li>
  <li>:empty</li>
  <li>:target</li>
  <li>:checked</li>
  <li>:enabled</li>
  <li>:disabled</li>
  <li class="hidden-content">(Fin del listado de pseudo-clases)</li>
</ul>
</article>
<article>
<h4>Los selectores basados en relaciones</h4>
<p><abbr title="Hojas de estilo en cascada">CSS</abbr> tiene algunas formas de seleccionar elementos en funci&oacute;n de las relaciones entre los elementos. Usted puede utilizar estas para hacer selectores que sean m&aacute;s espec&iacute;ficos.</p>
<div class="table-wrapper">
  <table aria-describedby="tblDescription">
    <caption id="tblDescription">Selectores comunes basados en relaciones</caption>
    <thead>
      <tr>
        <th id="columna_selector" scope="col">Selector</th>
        <th id="columna_descripcion" scope="col">Selecciona</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td headers="columna_selector">A E</td>
        <td headers="columna_descripcion">Cualquier elemento E que es un descendiente de un elemento A (que es: un hijo o un hijo de un hijo etc.)</td>
      </tr>
      <tr>
        <td headers="columna_selector">A > E</td>
        <td headers="columna_descripcion">Cualquier elemento E que es un hijo de un elemento A</td>
      </tr>
      <tr>
        <td headers="columna_selector">E:first-child</td>
        <td headers="columna_descripcion">Cualquier elemento E que es el primer hijo de su padre</td>
      </tr>
      <tr>
        <td headers="columna_selector">B + E</td>
        <td headers="columna_descripcion">Cualquier elemento E que es el siguiente hermano de un elemento B (es decir: el pr&oacute;ximo hijo del mismo padre)</td>
      </tr>
    </tbody>
  </table>
</div>
</article>
