---
layout: css_main
title: Técnicas de Accesibilidad
post: 12
---
<h3>Técnicas <abbr title="Hojas de estilo en cascada">CSS</abbr> para la Accesibilidad</h3>
<ol>
  <li>
    <article>
      <hgroup>
        <h4>Reducir el mantenimiento y aumentar la coherencia.</h4>
        <h5>Cree un estilo de presentación que sea coherente en todas las páginas. [Prioridad 3].</h5>
      </hgroup>
      <ul>
        <li>Use un número mínimo de hojas de estilo en su sitio.</li>
        <li>Use hojas de estilo vinculadas en vez de estilos incrustados y evite hojas de estilo incrustadas ("inline").</li>
        <li>Si tiene más de una, use el mismo nombre de clase ("class") para el mismo concepto en todas las hojas de estilo.</li>
      </ul>
      <p>El siguiente ejemplo muestra el enlace de estilo 'inline' siendo la misma una forma incorrecta de enlazar estilos.</p>
      <pre class="language-html incorrecto"><code class=" language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>margin-left: 0px;<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>open<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>display: list-item; opacity: 0.787503;<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Lorem ipsum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Dolor sit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></code></pre>
    </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Permitir al usuario redefinir los estilos.</h4>
      <h5>Evite características desaconsejadas por las tecnologías W3C. [Prioridad 2].</h5>
    </hgroup>
    <ul>
      <li>Con CSS1, el autor siempre tenía la última palabra sobre los estilos. Con CSS2, si la hoja de estilo del usuario contiene '!important', esto tiene prioridad sobre cualquier regla aplicable en la hoja de estilo del autor.</li>
    </ul>
    <p>Por ejemplo, la regla siguiente especifica una letra grande para el texto de párrafo y tendría prioridad para redefinir sobre una regla de autor con el mismo peso:</p>
    <div class="tuto_example">
      <pre class="language-css correcto"><code class=" language-css"><span class="token selector">p </span><span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 24em !important<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18em
      <span class="token punctuation">}</span></code></pre>
      <p>Si la primera declaración no tuviera añadido el valor !important, el tamaño de los párrafos sería 18em, ya que en el caso de declaraciones de la misma importancia, prevalece la indicada en último lugar.</p>
      <p>Sin embargo, como la primera declaración se ha marcado como de alta prioridad (gracias al valor !important), el tamaño de los párrafos será 24em.</p>
    </div>
  </article>
  </li>
  <li>
    <article>
      <hgroup>
        <h4>Unidades de medida.</h4>
        <h5>Utilice unidades relativas y porcentajes en lugar de absolutas al especificar los valores en los atributos del lenguaje de marcadores y en los valores de las propiedades de las hojas de estilo. [Prioridad 2].</h5>
      </hgroup>
      <ul>
        <li>Use la unidad "em" para fijar el tamaño de letra.</li>
        <li>Utilice unidades de longitud relativas y porcentajes para márgenes, anchuras, alturas.</li>
      </ul>
      <p>El siguiente ejemplo muestra la forma correcta de utilizar las unidades de medida</p>
      <pre class="language-css correcto"><code class=" language-css"><span class="token selector">body </span><span class="token punctuation">{</span>
      <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 12em<span class="token punctuation">;</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 15%
      <span class="token punctuation">}</span></code></pre>
    </article>
  </li>
  <li>
    <article>
      <hgroup>
        <h4>Contenidos generados.</h4>
        <h5>Cuando exista un marcador apropiado, use marcadores en vez de imágenes para transmitir la información. [Prioridad 2].</h5>
      </hgroup>
      <p>Proporcione un equivalente textual para cualquier imagen o texto importantes generados por la hoja de estilo (por ejemplo, mediante las propiedades "background-image", "list-style", o "content"). CSS incluye diferentes mecanismos que permiten generar contenido desde la hoja de estilo: la función attr() y la propiedad "content", los pseudo-elementos '::before' y '::after'</p>
    </article>
  </li>
  <li>
    <article>
      <hgroup>
        <h4>Tipos de letra</h4>
        <h5>Evite características desaconsejadas por las tecnologías W3C. [Prioridad 2].</h5>
      </hgroup>
      <ul>
        <li>Especifique siempre un tipo de letra genérico por defecto.</li>
        <li>Utilice las múltiples propiedades CSS para controlar las características de los tipos de letra "font-family/size/size-adjust/stretch/style/variant/weight".</li>
      </ul>
      <p>El siguiente ejemplo muestra la forma correcta de especificar varios tipos de letra:</p>
      <pre class="language-css correcto"><code class=" language-css"><span class="token selector">body </span><span class="token punctuation">{</span>
      <span class="token property">font-family</span><span class="token punctuation">:</span> 'Arial', 'Helvetica', sans-serif
<span class="token punctuation">}</span></code></pre>
    </article>
  </li>
  <li>
    <article>
      <hgroup>
        <h4>Efectos de estilo del texto</h4>
        <h5>Hasta que las aplicaciones de usuario permitan controlarlo, evite el parpadeo del contenido (por ejemplo, cambio de presentación en periodos regulares, así como el encendido y apagado). [Prioridad 2].</h5>
      </hgroup>
      <ul>
        <li>Mayúsculas/minúsculas: "text-transform" (para mayúsculas, minúsculas y primera letra mayúscula).</li>
        <li>Efectos de sombra: "text-shadow"</li>
        <li>Subrayado, parpadeo: "text-decoration". Nota. Si se emplea contenido parpadeante (por ejemplo, un titular que aparece y desaparece a intervalos regulares), proporcione un mecanismo para detener el parpadeo. Con CSS, "text-decoration: blink" producirá el efecto de parpadeo y además permitirá al usuario detener el efecto desactivando las hojas de estilo o redefiniendo la regla en una hoja de estilo de usuario. No use los elementos BLINK o MARQUEE. Estos elementos no aparecen en ninguna especificación W3C para HTML (es decir, son elementos no estándares).</li>
      </ul>
    </article>
  </li>
  <li>
    <article>
      <hgroup>
        <h4>Texto en vez de imágenes</h4>
        <h5>Utilice hojas de estilo para controlar la maquetación y la presentación. [Prioridad 2].</h5>
      </hgroup>
      <ul>
        <li>Usar texto en lugar de imágenes significa que la información estará disponible para un mayor número de usuarios (con sintetizadores de voz, dispositivos braille, dispositivos gráficos, etc.).</li>
        <li>Recordar utilizar el atributo 'alt' de HTML para las imágenes en su defecto</li>
      </ul>
    </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Formateo y posición del texto</h4>
      <h5>Utilice hojas de estilo para controlar la maquetación y la presentación. [Prioridad 2].</h5>
    </hgroup>
    <ul>
      <li>Sangría: "text-indent".</li>
      <li>Espaciado de letras o palabras: "letter-spacing", "word-spacing". </li>
      <li>Espacio en blanco: "white-space"</li>
      <li>Dirección del texto: "direction", "unicode-bidi".</li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Contraste de colores</h4>
      <h5>Asegúrese de que las combinaciones de los colores de fondo y primer plano tengan suficiente contraste para que sean percibidas por personas con deficiencias de percepción de color o en pantallas en blanco y negro. [Prioridad 2 para imágenes, Prioridad 3 para texto].</h5>
    </hgroup>
    <ul>
      <li>Use números en vez de nombres, para especificar colores.</li>
      <li>Use estas propiedades CSS para especificar colores:
        <ul>
          <li>"color", para el color de primer plano del texto.</li>
          <li>"background-color", para el color de fondo.</li>
          <li>"border-color", "outline-color" para colores de bordes.</li>
        </ul>
      </li>
      <li>Para colores de vínculos, haga referencia a las pseudo-clases :link, :visited, y :active.</li>
    </ul>
    <p>Ejemplo aconsejado:</p>
    <pre class="language-css correcto"><code class=" language-css"><span class="token selector">h1 </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #808000<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> rgb(50%,50%,0%)
<span class="token punctuation">}</span></code></pre>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Asegurarse de que la información no se transmite sólo por el colo</h4>
      <h5>Asegúrese de que toda la información transmitida a través de los colores también esté disponible sin color, por ejemplo mediante el contexto o por marcadores. [Prioridad 1]</h5>
    </hgroup>
    <ul>
      <li>Asegúrese de que la información está disponible a través de otros efectos de estilo (por ejemplo un efecto de fuente) y a través del contexto (por ejemplo, vínculos de texto detallados).</li>
      <li>Resaltar información importante por un borde.</li>
      <li>Utilizar un color de fondo diferente.</li>
      <li>Comenzar con una palabra importante, "Ejemplo" (o "Ejemplo desaconsejado").</li>
      <li>Terminar con alguna frase como "fin del ejemplo", siendo ésta escondida por defecto con "display: none". Para las aplicaciones de usuario que no soportan hojas de estilo o cuando se desconectan las hojas de estilo, este texto ayuda a delimitar el fin de un ejemplo a los lectores que no sean capaces de ver el borde que rodea el ejemplo.</li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Proporcionar pistas de contexto en las listas HTML</h4>
      <h5>Marque correctamente las listas y los ítems de las listas. [Prioridad 2]. Proporcione metadatos para añadir información semántica a las páginas y sitios. [Prioridad 2].</h5>
    </hgroup>
    <ul>
      <li>Emplee UL para listas sin ordenar y OL para las ordenadas (por ejemplo, utilizar marcadores de forma apropiada) conjuntamente con CSS para proporcionar indicaciones contextuales.</li>
      <li>Los autores deberían considerar el proporcionar pistas contextuales en las listas anidadas no numeradas.</li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Maquetación, ubicación, colocación en capas, y alineación</h4>
      <h5>Utilice hojas de estilo para controlar la maquetación y la presentación. [Prioridad 2]. No utilice tablas para maquetar, a menos que la tabla tenga sentido cuando se alinee. Por otro lado, si la tabla no tiene sentido, proporcione una alternativa equivalente. [Prioridad 2]</h5>
    </hgroup>
    <ul>
      <li>Las propiedades "text-indent/align", "word-spacing", "font-stretch", 'margin-top/right/bottom/left', "float", "position", "top", "right", "bottom" y "left", "empty-cells"</li>
      <li>Proporcione textos equivalentes para todas las imágenes, incluyendo las imágenes invisibles o transparentes. Si los diseñadores de contenido no pueden usar hojas de estilo y deben utilizar imágenes invisibles o transparentes (por ejemplo, con IMG) para diseñar con imágenes en las páginas, deberían especificar alt="" para ellas.</li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Líneas y bordes</h4>
      <h5>Organice el documento de forma que pueda ser leído sin hoja de estilo. Por ejemplo, cuando un documento HTML es interpretado sin asociarlo a una hoja de estilo, tiene que ser posible leerlo. [Prioridad 1].</h5>
    </hgroup>
    <ul>
      <li>Propiedades "border", "border-width", "border-style", "border-color".</li>
      <li>Para las tablas, "border-spacing" y "border-collapse".</li>
      <li>Para contornos dinámicos, "outline", "outline-color", "outline-style" y "outline-width".</li>
    </ul>
    <p>Esta técnica ayuda a aquellas personas con discapacidades cognitivas a centrar su visión en una zona en particular y prestar atención a cada sección por separado. Al no utilizar bordes, aquellas personas verán la página como una única columna con todo el contenido junto.</p>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Ubicación por CSS y marcado para una transformación correcta</h4>
      <h5>Organice el documento de forma que pueda ser leído sin hoja de estilo. Por ejemplo, cuando un documento HTML es interpretado sin asociarlo a una hoja de estilo, tiene que ser posible leerlo. [Prioridad 1]</h5>
    </hgroup>
    <ul>
      <li>Mediante las propiedades de ubicación de CSS2, el diseñador puede mostrar los contenidos en cualquier posición en la ventana del navegador del usuario. El orden en que los elementos aparecen en pantalla puede ser distinto al orden en que aparecen en el documento fuente.</li>
      <li>Tener en cuenta que la propiedad 'tabindex' debe especificarse cuidadosamente para cada elemento del DOM, ya que existen personas que solo usan el teclado para navegar por el sitio, entonces el orden de los estilos debe tener coherencia con el orden visual de cada elemento y de cada texto del sitio ya que si una persona usa un lector de pantallas, puede perderse si el CSS no respeta el orden visual.</li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Crear movimiento con hojas de estilo y scripts</h4>
      <h5>Hasta que las aplicaciones de usuario permitan congelar el movimiento de los contenidos, evite los movimientos en las páginas. [Prioridad 2]</h5>
    </hgroup>
    <ul>
      <li>mostrar/ocultar los contenidos, cambiar la presentación (movimiento y colores)</li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Hojas de estilo en cascada auditivas</h4>
      <h5>Proporcione la información de modo que los usuarios puedan recibir los documentos según sus preferencias (por ejemplo, idioma, tipo de contenido, etc.) [Prioridad 3].</h5>
    </hgroup>
    <ul>
      <li>"volume": controla el volumen del texto hablado.</li>
      <li>"speak": determina si el contenido se pronunciará y, en caso afirmativo, si se debe deletrear o leer como palabras.</li>
      <li>"pause", "pause-before", y "pause-after": controla las pausas antes y después de anunciar el contenido. Permite a los usuarios separar los contenidos para mejorar la comprensión.</li>
      <li>"cue", "cue-before", y "cue-after": especifican un sonido que se reproducirá antes y después del contenido, lo que puede ser valioso para la orientación (parecido a una imágen visual).</li>
      <li>"play-during" controla los sonidos de fondo durante la presentación del elemento (parecido a un imagen de fondo).</li>
      <li>"azimuth", "elevation": proporcionan una dimensión al sonido, lo que permite a los usuarios distinguir las voces.</li>
      <li>"speech-rate", "voice-family", "pitch", "pitch-range", "stress", y "richness": controlan las cualidades de los contenidos hablados. Cambiando estas propiedades para diferentes elementos, los usuarios pueden ajustar con detalle la presentación sonora-auditiva de los contenidos.</li>
      <li>"speak-punctuation" y "speak-numeral": controlan la forma de decir los números y la puntuación, lo que afecta la calidad de la experiencia para la navegación por voz.</li>
      <li>"speak-header": describe cómo se debe decir la información sobre los encabezados antes de una celda de tabla.</li>
    </ul>
    <p>Las propiedades auditivas proporcionan información para usuarios no-videntes y usuarios de navegadores de voz de manera parecida al tipo de letra que proporciona información visual. El ejemplo siguiente muestra cómo distintas cualidades de sonido incluida una familia de voz ("voice-family", algo parecido a un tipo de letra auditivo), pueden indicar al usuario que el contenido hablado es un encabezado:</p>
    <pre class="language-css correcto"><code class=" language-css"><span class="token selector">h1 </span><span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">/* Familia de voces. */</span>
    <span class="token property">voice-family</span><span class="token punctuation">:</span> male<span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">/* Enfasis. */</span>
    <span class="token property">stress</span><span class="token punctuation">:</span> 20<span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">/* Riqueza. */</span>
    <span class="token property">richness</span><span class="token punctuation">:</span> 90<span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">/* Señal anterior. */</span>
    <span class="token property">cue-before</span><span class="token punctuation">:</span> url("ping.au")
<span class="token punctuation">}</span></code></pre>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Acceso a representaciones alternativas de los contenidos</h4>
      <h5>Proporcione la información de modo que los usuarios puedan recibir los documentos según sus preferencias (por ejemplo, idioma, tipo de contenido, etc.) [Prioridad 3].</h5>
    </hgroup>
    <p>CSS permite a los usuarios acceder a representaciones alternativas de los contenidos especificadas en valores de los atributos cuando se emplean juntos los siguientes:</p>
    <ul>
      <li>Selectores de atributos.</li>
      <li>La función attr() y la propiedad "content"</li>
      <li>los pseudo-elementos :before y :after </li>
    </ul>
  </article>
  </li>
  <li>
  <article>
    <hgroup>
      <h4>Tipos de medios</h4>
      <h5>Proporcione la información de modo que los usuarios puedan recibir los documentos según sus preferencias (por ejemplo, idioma, tipo de contenido, etc.) [Prioridad 3].</h5>
    </hgroup>
    <p>Con los "tipos de medios" de CSS (empleados con las reglas @media) los creadores de páginas y los usuarios pueden diseñar hojas de estilo que permiten mostrar los documentos de forma más adecuada en ciertos dispositivos. Estas hojas de estilo pueden adaptar la presentación del documento para dispositivos Braille, sintetizadores de voz, o dispositivos TTY. Las reglas "@media" también pueden reducir los tiempos de descarga porque permiten a las aplicaciones de usuario ignorar reglas inapropiadas.</p>
    <p>La regla @media es utilizada generalemten para hacer el sitio responsive. En CSS2 se llama tipos de medios, mientras que en CSS3 es llamado 'media queries'.</p>
    <p>NOTA: los tipos de medios son sólo soportados por los siguientes navegadores:</p>
    <table class="browserref">
      <caption>Navegadores soportados</caption>
      <tbody>
        <tr>
          <th>Propiedad</th>
          <th id="bsChrome" class="browser_icon" title="Chrome"></th>
          <th id="bsEdge" class="browser_icon" title="Internet Explorer / Edge"></th>
          <th id="bsFirefox" class="browser_icon" title="Firefox"></th>
          <th id="bsSafari" class="browser_icon" title="Safari"></th>
          <th id="bsOpera" class="browser_icon" title="Opera"></th>                
        </tr>
        <tr>
          <td>@media</td>
          <td>21.0</td>
          <td>9.0</td>
          <td>3.5</td>
          <td>4.0</td>
          <td>9.0</td>
        </tr>
      </tbody>
    </table>
  </article>
  </li>  
</ol>
