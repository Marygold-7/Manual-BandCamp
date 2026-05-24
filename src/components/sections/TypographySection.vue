<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scaleChart = ref(null);
let typeContext;

onMounted(() => {
  typeContext = gsap.context(() => {
    const lines = gsap.utils.toArray("[data-scale-line]");

    gsap.set(lines, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.to(lines, {
      scaleX: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: scaleChart.value,
        start: "top 76%",
        once: true,
      },
    });
  }, scaleChart);
});

onBeforeUnmount(() => {
  typeContext?.revert();
});
</script>

<template>
  <section id="tipografía" class="type-section">
    <article class="type-block">
      <div class="type-visual">
        <p class="spec">
          ABCDEFGHIJKLMNÑOPQ<br />
          RSTUVWXYZ<br /><br />
          abcdefghijklmnñopqrstuv<br />
          wxyz<br /><br />
          1234567890.,;:!¿?"()[]{}/*+-_=...@
        </p>
      </div>
      <div class="type-copy">
        <h2>Tipografía primaria</h2>
        <div class="type-sample">
          <strong>Aa</strong>
          <span>POI Orbiter</span>
        </div>
        <p>
          La tipografía principal utilizada es POI Orbiter, una sans serif de
          construcción limpia y geométrica. Al trabajar con un sistema visual
          dinámico basado en partículas, texturas y acabados manuales, se hace
          necesario un contrapunto gráfico que aporte orden y claridad.
        </p>
        <p>
          En este sentido, la tipografía actúa como elemento estabilizador
          dentro de la identidad. Su apariencia precisa equilibra la
          expresividad del sistema gráfico. Para uso de títulos H1 y cuerpo de
          texto.
        </p>
      </div>
    </article>

    <article class="type-block">
      <div class="type-visual type-visual--mono">
        <p class="spec">
          ABCDEFGHIJKLMNÑOPQRS<br />
          TUVWXYZ<br /><br />
          abcdefghijklmnñopqrs<br />
          tuvwxyz<br /><br />
          1234567890.,;:!<br />
          ¿?"()[]{}/*+-_=...@
        </p>
      </div>
      <div class="type-copy">
        <h2>Tipografía secundaria</h2>
        <div class="type-sample type-sample--mono">
          <strong>Aa</strong>
          <span>Logic Monospace</span>
        </div>
        <p>
          La tipografía secundaria es Logic Monospace, utilizada en niveles
          jerárquicos como subtítulos (H2-H6) y textos de apoyo.
        </p>
        <p>
          Su carácter monoespaciado aporta un tono más estructurado, generando
          contraste con la tipografía principal.
        </p>
        <p>
          Además, refuerza una estética contemporánea y digital, alineada con el
          entorno musical de la marca, sin perder claridad ni legibilidad.
        </p>
      </div>
    </article>

    <article class="type-block">
      <div class="type-visual">
        <div ref="scaleChart" class="scale-chart">
          <svg
            class="scale-image"
            viewBox="0 0 1187 170"
            role="img"
            aria-label="Relación tipográfica entre título, subtítulo y texto"
          >
            <line
              data-scale-line
              class="scale-svg-line scale-svg-line--solid"
              x1="0"
              y1="28"
              x2="1187"
              y2="28"
            />
            <line
              data-scale-line
              class="scale-svg-line scale-svg-line--dash"
              x1="0"
              y1="62"
              x2="1187"
              y2="62"
            />
            <line
              data-scale-line
              class="scale-svg-line scale-svg-line--solid"
              x1="0"
              y1="94"
              x2="1187"
              y2="94"
            />
            <line
              data-scale-line
              class="scale-svg-line scale-svg-line--dash"
              x1="0"
              y1="128"
              x2="1187"
              y2="128"
            />
            <line
              data-scale-line
              class="scale-svg-line scale-svg-line--solid"
              x1="0"
              y1="160"
              x2="1187"
              y2="160"
            />
            <text class="scale-title" x="62" y="158">Título</text>
            <text class="scale-subtitle" x="620" y="158">subtítulo</text>
            <text class="scale-body" x="1002" y="158">texto</text>
          </svg>
        </div>
      </div>
      <div class="type-copy">
        <h2>Relación de tamaños</h2>
        <p>
          La jerarquía tipográfica se construye a partir de una clara relación
          de tamaños entre título, subtítulo y texto.
        </p>
        <p>
          El título actúa como elemento principal, con mayor peso visual y
          presencia. El subtítulo establece un segundo nivel jerárquico que
          acompaña y organiza la información, mientras que el texto cumple una
          función informativa con un tamaño más contenido.
        </p>
        <p>
          Esta progresión permite una lectura clara y ordenada, facilitando la
          comprensión y estructuración de los contenidos en cualquier
          aplicación.
        </p>
      </div>
    </article>

    <article class="type-block">
      <div class="type-visual leading-visual">
        <div class="leading-title-group">
          <p class="title-leading">
            Los títulos, en Poi Orbiter,<br />
            tendrán un interlineado<br />
            igual a su tamaño
          </p>
          <span>64 / 64</span>
        </div>
        <div class="leading-lower">
          <div>
            <p class="subtitle-leading">
              Los subtítulos, en<br />
              Logic Monospace,<br />
              tendrán un interlineado<br />
              igual a su tamaño.
            </p>
            <span>32 / 32</span>
          </div>
          <div>
            <p class="text-leading">
              Los textos, en Poi Orbiter,<br />tendrán un interlineado igual<br />a
              su tamaño.
            </p>
            <span>16 / 16</span>
          </div>
        </div>
      </div>
      <div class="type-copy">
        <h2>Interlineados</h2>
        <p>
          El sistema tipográfico establece un interlineado equivalente al tamaño
          del cuerpo de texto en todos los niveles jerárquicos.
        </p>
        <p>
          Tanto en títulos (Poi Orbiter) como en subtítulos (Logic Monospace) y
          texto base, se mantiene una relación 1:1 entre tamaño e interlineado.
        </p>
      </div>
    </article>

    <article class="type-block">
      <div class="type-visual">
        <svg
          class="wrong-type-image"
          viewBox="0 0 820 405"
          role="img"
          aria-label="Usos incorrectos tipograficos del logotipo BandCamp"
        >
          <g class="wrong-type-card">
            <rect x="2" y="2" width="365" height="176" rx="8" />
            <line x1="2" y1="2" x2="367" y2="178" />
            <line x1="367" y1="2" x2="2" y2="178" />
            <text x="185" y="106" text-anchor="middle">BandCamp</text>
          </g>
          <g class="wrong-type-card wrong-type-card--condensed">
            <rect x="453" y="2" width="365" height="176" rx="8" />
            <line x1="453" y1="2" x2="818" y2="178" />
            <line x1="818" y1="2" x2="453" y2="178" />
            <text x="636" y="106" text-anchor="middle">BandCamp</text>
          </g>
          <g class="wrong-type-card wrong-type-card--shadow">
            <rect x="2" y="227" width="365" height="176" rx="8" />
            <line x1="2" y1="227" x2="367" y2="403" />
            <line x1="367" y1="227" x2="2" y2="403" />
            <text x="185" y="332" text-anchor="middle">BandCamp</text>
          </g>
          <g class="wrong-type-card wrong-type-card--tracking">
            <rect x="453" y="227" width="365" height="176" rx="8" />
            <line x1="453" y1="227" x2="818" y2="403" />
            <line x1="818" y1="227" x2="453" y2="403" />
            <text x="636" y="332" text-anchor="middle">BandCamp</text>
          </g>
        </svg>
      </div>
      <div class="type-copy">
        <h2>Usos incorrectos</h2>
        <p>
          Para garantizar la coherencia tipográfica de la marca, deben evitarse
          las siguientes prácticas: sustituir la tipografía corporativa por
          otras fuentes o modificar la estructura del logotipo, alterando
          proporciones o estilos.
        </p>
        <p>
          Aplicar efectos como sombras, desenfoques o relieves. Alterar el
          espaciado entre letras (tracking) o la composición del logotipo.
        </p>
        <p>
          El logotipo debe utilizarse siempre con su tipografía original,
          respetando su forma, proporción y configuración establecida.
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.type-section {
  padding: 140px 24px;
  display: grid;
  justify-items: center;
  gap: 70px;
  overflow: hidden;
}
.type-block {
  width: min(1280px, calc(100vw - 48px));
  min-height: 560px;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.92fr);
  align-items: stretch;
  gap: clamp(28px, 4vw, 72px);
}
.type-visual,
.type-copy {
  min-height: inherit;
  display: grid;
  place-content: center;
  padding: 48px;
}
.type-visual {
  justify-items: start;
}
.type-copy {
  justify-items: start;
}
.type-copy h2,
.type-copy p,
.type-sample {
  width: min(420px, 100%);
}
.type-copy h2 {
  font-size: 30px;
  line-height: 1;
  font-weight: 600;
  margin: 0 0 36px;
}
.type-copy p {
  font-size: 16px;
  line-height: 1.15;
  margin: 0;
}
.type-copy p + p {
  margin-top: 18px;
}
.spec {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  line-height: 1.16;
  margin: 0;
}
.type-visual--mono .spec,
.type-sample--mono,
.subtitle-leading {
  font-family: "Logic Monospace", monospace;
}
.type-sample {
  margin: 0 0 36px;
}
.type-sample strong {
  display: block;
  font-size: clamp(150px, 17vw, 280px);
  line-height: 0.72;
  font-weight: 700;
  letter-spacing: 0;
}
.type-sample span {
  display: block;
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1;
  margin-top: 22px;
}
.scale-chart {
  position: relative;
  width: min(1180px, 150%);
  display: grid;
  place-items: center;
  overflow: visible;
}
.scale-image {
  width: 100%;
  height: auto;
  overflow: visible;
}
.scale-svg-line {
  transform-box: fill-box;
  stroke: #cfcfcf;
  stroke-width: 1;
}
.scale-svg-line--dash {
  stroke-dasharray: 7 8;
}
.scale-title,
.scale-subtitle,
.scale-body {
  fill: #000;
  font-family: "POI Orbiter Trial", Arial, Helvetica, sans-serif;
}
.scale-title {
  font-size: 154px;
  font-weight: 700;
}
.scale-subtitle {
  font-size: 70px;
  font-weight: 600;
}
.scale-body {
  font-size: 42px;
  font-weight: 400;
}
.leading-visual {
  width: min(900px, 122%);
  display: grid;
  align-content: center;
  gap: 58px;
}
.leading-visual p,
.leading-visual span,
.leading-title-group {
  margin: 0;
}
.title-leading {
  font-size: clamp(29px, 3.1vw, 48px);
  line-height: 1;
}
.leading-title-group {
  display: grid;
  gap: 22px;
}

.leading-lower {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, .5fr);
  align-items: center;
  gap: clamp(46px, 6vw, 96px);
}
.leading-lower > div {
  display: grid;
  gap: 14px;
}
.subtitle-leading {
  font-size: clamp(14px, 1.7vw, 23px);
  line-height: 1;
}
.text-leading {
  font-size: clamp(9px, .8vw, 11px);
  line-height: 1;
}
.leading-visual span {
  font-size: clamp(10px, 1vw, 13px);
}
.wrong-type-grid {
  width: min(760px, 100%);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 34px 56px;
}
.wrong-type-grid span {
  position: relative;
  min-height: 130px;
  border: 1px solid #000;
  border-radius: 8px;
  display: grid;
  place-items: center;
  overflow: hidden;
  font-size: clamp(42px, 5vw, 68px);
}
.wrong-type-grid span::before,
.wrong-type-grid span::after {
  content: "";
  position: absolute;
  left: -10%;
  right: -10%;
  top: 50%;
  height: 1px;
  background: #e42924;
}
.wrong-type-grid span::before { transform: rotate(20deg); }
.wrong-type-grid span::after { transform: rotate(-20deg); }
.wrong-type-grid span:nth-child(1) {
  font-family: "Courier New", monospace;
}
.wrong-type-grid span:nth-child(2) {
  transform: scaleX(.78);
}
.wrong-type-grid span:nth-child(3) {
  text-shadow: 0 8px 10px #000;
}
.wrong-type-grid span:nth-child(4) {
  letter-spacing: .24em;
}
.wrong-type-image {
  width: min(1020px, 145%);
  height: auto;
  overflow: visible;
}
.wrong-type-card rect {
  fill: #fff;
  stroke: #000;
  stroke-width: 1.2;
}
.wrong-type-card line {
  stroke: #e42924;
  stroke-width: 1.2;
}
.wrong-type-card text {
  fill: #000;
  font-family: "Courier New", monospace;
  font-size: 56px;
}
.wrong-type-card--condensed text {
  font-family: "POI Orbiter Trial", Arial, Helvetica, sans-serif;
  font-size: 54px;
  transform: scaleX(.62);
  transform-box: fill-box;
  transform-origin: center;
}
.wrong-type-card--shadow text {
  font-family: "POI Orbiter Trial", Arial, Helvetica, sans-serif;
  font-size: 58px;
  filter: drop-shadow(0 9px 7px rgba(0, 0, 0, .7));
}
.wrong-type-card--tracking text {
  font-family: "POI Orbiter Trial", Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 14px;
}
@media (max-width: 900px) {
  .type-block {
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 0;
  }
  .type-visual,
  .type-copy {
    min-height: auto;
    padding: 32px 0;
  }
  .leading-visual,
  .wrong-type-grid {
    grid-template-columns: 1fr;
  }
}
</style>
