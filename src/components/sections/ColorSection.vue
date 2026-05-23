
<template>
  <section id="color" class="color-section">
    <article class="color-block">
      <div class="color-visual">
        <div class="swatches basic">
          <article v-for="c in colorBasics" :key="c.name">
            <div
              class="circle"
              :style="{ background: c.hex, color: c.dark ? '#fff' : '#000' }"
            >
              {{ c.name }}
            </div>
            <p><b>Hex</b>{{ c.hex }}</p>
            <p><b>RGB</b>{{ c.rgb }}</p>
            <p><b>CMYK</b>{{ c.cmyk }}</p>
          </article>
        </div>
      </div>
      <div class="copy">
        <h2>Colores principales</h2>
        <p>
          La identidad de Bandcamp se basa principalmente en el uso del blanco y
          negro. Esta eleccion responde a la necesidad de construir una imagen
          clara, reconocible y atemporal.
        </p>
        <p>
          El negro actua como color principal. Aporta solidez, presencia y
          coherencia en todas las aplicaciones. El blanco funciona como
          contraste, asegurando legibilidad y equilibrio visual.
        </p>
      </div>
    </article>

    <article class="color-block">
      <div class="color-visual">
        <div class="swatches accent">
          <article v-for="c in accentColors" :key="c.name">
            <div class="circle" :style="{ background: c.hex }">{{ c.name }}</div>
            <p><b>Hex</b>{{ c.hex }}</p>
            <p><b>RGB</b>{{ c.rgb }}</p>
            <p><b>CMYK</b>{{ c.cmyk }}</p>
          </article>
        </div>
      </div>
      <div class="copy">
        <h2>Colores acento</h2>
        <p>
          La paleta de colores de acento se utiliza de forma puntual para
          destacar elementos dentro de la interfaz y la comunicacion.
        </p>
        <p>
          El uso debe ser moderado y funcional, evitando la saturacion, para
          mantener la claridad visual y el equilibrio con los colores base de la
          identidad.
        </p>
      </div>
    </article>

    <article class="color-block">
      <div class="color-visual">
        <img
          class="wrong-capture"
          src="/assets/albums/Capturas/Usos%20incorrectos%20Logo%20.png"
          alt="Usos incorrectos de color del logotipo BandCamp"
        />
      </div>
      <div class="copy">
        <h2>Usos incorrectos</h2>
        <p>
          Para garantizar la correcta aplicacion de la marca, deben evitarse las
          siguientes practicas: aplicar el logotipo sobre fondos de color que
          comprometan su legibilidad y utilizar combinaciones cromaticas que no
          respeten el contraste adecuado.
        </p>
        <p>
          Alterar los colores originales del logotipo sin seguir los criterios
          establecidos o emplear versiones en negativo o positivo sin asegurar
          una correcta visibilidad. El logotipo debe aplicarse siempre con un
          contraste optimo y una lectura clara.
        </p>
      </div>
    </article>

    <article class="color-block">
      <div class="color-visual">
      <div class="ui-row">
        <div class="form-samples">
          <label><span>⌕</span><input placeholder="Text" /><span>⌕</span></label>
          <button type="button">Opcion 1 <span>↑</span></button>
        </div>
        <button class="particle-button" type="button">Boton</button>
        <div class="link-grid">
          <a>Link ↗</a>
          <a>Link</a>
          <a class="accent-link">Link ↗</a>
          <a class="accent-link">Link</a>
        </div>
      </div>
      </div>
      <div class="copy">
        <h2>Normas de uso</h2>
        <p>
          La correcta aplicacion del color de acento se reserva para enlaces,
          avisos, textos destacados, campos de interaccion y otros elementos que
          requieran llamar la atencion del usuario.
        </p>
      </div>
    </article>
  </section>
</template>
