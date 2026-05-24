
<script setup>
import { colorBasics, accentColors } from "../../data/brandData";
</script>

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

<style scoped lang="scss">
.color-section {
  padding: 140px 24px;
  display: grid;
  justify-items: center;
  gap: 70px;
  overflow: hidden;
}
.color-block {
  width: min(1280px, calc(100vw - 48px));
  min-height: 520px;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
  align-items: stretch;
  gap: clamp(28px, 4vw, 72px);
}
.color-visual,
.copy {
  min-height: inherit;
  display: grid;
  place-content: center;
  padding: 48px;
}
.color-visual {
  justify-items: center;
}
.copy {
  justify-items: start;
  width: 100%;
  margin: 0;
}
.copy h2 {
  width: min(420px, 100%);
  text-align: left;
  margin: 0 0 28px;
  font-size: 30px;
  font-weight: 600;
}
.swatches {
  width: 100%;
  display: grid;
  gap: 64px;
  margin: 0;
}
.basic {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(620px, 100%);
}
.basic .circle,
.accent .circle {
  border: 0;
}
.accent {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(660px, 100%);
  gap: 54px 70px;
}
.swatches article {
  display: grid;
  justify-items: center;
}
.circle {
  width: clamp(150px, 14vw, 210px);
  height: clamp(150px, 14vw, 210px);
  border: 1px solid #000;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 0 48px;
  font-size: 22px;
}
.accent .circle {
  width: clamp(135px, 12vw, 180px);
  height: clamp(135px, 12vw, 180px);
}
.swatches p {
  width: min(190px, 100%);
  display: grid;
  grid-template-columns: 86px 1fr;
  font-size: 16px;
  line-height: 1.1;
  margin: 0 0 32px;
}
.swatches p:last-child {
  margin-bottom: 0;
}
.swatches b {
  font-weight: 700;
}
.copy p {
  width: min(420px, 100%);
  font-size: 18px;
  line-height: 1.18;
  margin: 0;
}
.copy p + p {
  margin-top: 22px;
}
.wrong-capture {
  width: min(780px, 112%);
  height: auto;
  display: block;
  margin: 0;
}
.ui-row {
  width: min(680px, 100%);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-items: center;
  gap: 54px;
  margin: 0;
}
.form-samples {
  display: grid;
  gap: 20px;
  width: 230px;
}
.form-samples label,
.form-samples button {
  height: 38px;
  border: 1px solid #e42924;
  border-radius: 5px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 10px;
  color: #e42924;
  font: inherit;
}
.form-samples input {
  min-width: 0;
  flex: 1;
  border: 0;
  outline: 0;
  font: inherit;
}
.particle-button {
  border: 0;
  min-width: 220px;
  min-height: 110px;
  background: #fff;
  color: #e42924;
  font: inherit;
  background-image: radial-gradient(#000 2px, transparent 2px);
  background-size: 14px 14px;
}
.link-grid {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 26px 56px;
}
.link-grid a {
  font-size: 30px;
  text-decoration: underline;
}
.accent-link {
  color: #bc8ebf;
}
@media (max-width: 900px) {
  .color-block,
  .accent,
  .ui-row {
    grid-template-columns: 1fr;
  }
  .color-block {
    min-height: auto;
    gap: 0;
  }
  .color-visual,
  .copy {
    min-height: auto;
    padding: 32px 0;
  }
  .basic {
    grid-template-columns: 1fr;
  }
  .ui-row {
    gap: 42px;
  }
}
</style>
