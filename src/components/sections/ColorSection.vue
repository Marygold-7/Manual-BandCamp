<script setup>
import { colorBasics, accentColors } from "../../data/brandData";
</script>
<template>
  <section id="color" class="color-section">
    <h2>Colores principales</h2>
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
    <p class="copy">
      La identidad de Bandcamp se basa principalmente en el uso del blanco y
      negro. Esta elección responde a la necesidad de construir una imagen
      clara, reconocible y atemporal.
    </p>
    <h2>Colores acento</h2>
    <div class="swatches accent">
      <article v-for="c in accentColors" :key="c.name">
        <div class="circle" :style="{ background: c.hex }">{{ c.name }}</div>
        <p><b>Hex</b>{{ c.hex }}</p>
        <p><b>RGB</b>{{ c.rgb }}</p>
        <p><b>CMYK</b>{{ c.cmyk }}</p>
      </article>
    </div>
    <h2>Usos incorrectos</h2>
    <div class="wrong-grid">
      <span
        v-for="c in accentColors"
        :key="c.name"
        :style="{ background: c.hex }"
        >BandCamp</span
      ><span
        v-for="c in accentColors"
        :key="c.hex + 'b'"
        class="dark"
        :style="{ color: c.hex }"
        >BandCamp</span
      >
    </div>
    <h2>Normas de uso</h2>
    <div class="ui-row">
      <input placeholder="Text" /><button>Botón</button><a>Link</a
      ><a class="accent-link">Link</a>
    </div>
  </section>
</template>
<style scoped lang="scss">
.color-section {
  padding: 140px 24px;
  max-width: 1100px;
  margin: auto;
}
.color-section h2 {
  text-align: center;
  margin: 0 0 60px;
  font-size: 28px;
}
.swatches {
  display: grid;
  gap: 64px;
  margin-bottom: 90px;
}
.basic {
  grid-template-columns: repeat(2, 1fr);
  max-width: 560px;
  margin-inline: auto;
}
.accent {
  grid-template-columns: repeat(4, 1fr);
}
.circle {
  width: 180px;
  height: 180px;
  border: 1px solid #000;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: auto auto 28px;
  font-size: 20px;
}
.swatches p {
  display: grid;
  grid-template-columns: 70px 1fr;
  font-size: 14px;
}
.copy {
  max-width: 520px;
  margin: 0 auto 150px;
  font-size: 18px;
}
.wrong-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 120px;
}
.wrong-grid span {
  position: relative;
  border: 1px solid #000;
  border-radius: 8px;
  text-align: center;
  font-weight: 800;
  font-size: 24px;
  padding: 18px;
}
.wrong-grid span:before,
.wrong-grid span:after {
  content: "";
  position: absolute;
  inset: 50% -4px auto;
  height: 1px;
  background: red;
}
.wrong-grid span:before {
  transform: rotate(12deg);
}
.wrong-grid span:after {
  transform: rotate(-12deg);
}
.dark {
  background: #000;
}
.ui-row {
  display: flex;
  justify-content: center;
  gap: 48px;
  align-items: center;
}
.ui-row input {
  border: 1px solid #e42924;
  padding: 12px 18px;
  border-radius: 4px;
}
.ui-row button {
  border: 0;
  background: #fff;
  color: #e42924;
  padding: 22px 42px;
  background-image: radial-gradient(#000 1px, transparent 1px);
  background-size: 8px 8px;
}
.ui-row a {
  font-family: monospace;
  font-size: 28px;
  text-decoration: underline;
}
.accent-link {
  color: #bc8ebf;
}
@media (max-width: 800px) {
  .basic,
  .accent,
  .wrong-grid {
    grid-template-columns: 1fr 1fr;
  }
  .ui-row {
    flex-wrap: wrap;
  }
  .circle {
    width: 140px;
    height: 140px;
  }
}
</style>
