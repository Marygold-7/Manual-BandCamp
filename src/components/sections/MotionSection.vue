<template>
  <section id="motion" ref="motionSection" class="motion-section">
    <section class="speed-curves">
      <h2 data-motion-reveal>Curvas de velocidad</h2>
      <div class="speed-layout">
        <p class="speed-copy" data-motion-reveal>
          A pesar de esta variedad, su comportamiento se entiende en conjunto.
          Las partículas se agrupan, se desplazan y evolucionan como una bandada,
          sin una estructura rígida, guiadas por dinámicas propias que generan
          formas cambiantes y vivas.
        </p>

        <div class="speed-legend" data-motion-reveal>
          <article>
            <span class="legend-dot legend-dot--red"></span>
            <div>
              <h3>Asentamiento</h3>
              <p>Easy-in-out</p>
            </div>
          </article>
          <article>
            <span class="legend-dot legend-dot--violet"></span>
            <div>
              <h3>Bandada</h3>
              <p>Easy-out</p>
            </div>
          </article>
          <article>
            <span class="legend-dot legend-dot--cyan"></span>
            <div>
              <h3>Formación</h3>
              <p>Flujo continuo</p>
            </div>
          </article>
        </div>

        <div class="speed-chart-area">
          <svg
            class="speed-chart"
            viewBox="0 0 560 390"
            role="img"
            aria-label="Gráfico de curvas de velocidad"
            data-motion-reveal
          >
            <defs>
              <pattern id="motion-grid" width="49" height="49" patternUnits="userSpaceOnUse">
                <path d="M 49 0 L 0 0 0 49" fill="none" stroke="#e6e6e6" stroke-width="1" />
              </pattern>
            </defs>
            <rect x="1" y="1" width="558" height="388" fill="url(#motion-grid)" stroke="#dedede" />
            <path
              data-speed-curve="settle"
              class="speed-curve"
              d="M 2 388 C 24 268 62 126 139 91 C 186 70 222 52 297 52 C 387 52 480 52 556 52"
            />
            <path
              data-speed-curve="flock"
              class="speed-curve"
              d="M 2 388 C 95 306 150 255 217 222 C 277 192 321 192 374 151 C 425 112 474 70 556 52"
            />
            <path
              data-speed-curve="formation"
              class="speed-curve"
              d="M 2 388 C 78 389 116 376 173 324 C 239 264 284 207 335 174 C 398 134 459 74 556 52"
            />
            <circle data-moving-dot cx="2" cy="388" r="8" />
          </svg>
          <div class="speed-actions" data-motion-reveal>
            <button
              :class="{ active: activeSpeedCurve === 'settle' }"
              style="--active-color: #e92924"
              type="button"
              @click="selectSpeedCurve('settle')"
            >
              Asentamiento
            </button>
            <button
              :class="{ active: activeSpeedCurve === 'flock' }"
              style="--active-color: #bc8ebf"
              type="button"
              @click="selectSpeedCurve('flock')"
            >
              Bandada
            </button>
            <button
              :class="{ active: activeSpeedCurve === 'formation' }"
              style="--active-color: #77c9e5"
              type="button"
              @click="selectSpeedCurve('formation')"
            >
              Formación
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="motion-video-slot motion-video-slot--loader">
      <h2>Pantalla de carga</h2>
      <div class="loader">
        <video src="/videos/1.mp4" autoplay muted loop playsinline></video>
      </div>
    </section>
    <section class="motion-video-slot motion-video-slot--bandada">
      <h2>Bandada</h2>
      <div class="bandada">
        <video src="/videos/2.mp4" autoplay muted loop playsinline></video>
      </div>
    </section>
    <div class="club-card">
      <h2>Card BandCamp Clubs</h2>
      <video src="/videos/Card%20particulas.mp4" autoplay muted loop playsinline></video>
    </div>
    <section class="isotype-motion">
      <h2 data-isotope-reveal>Animaciones isotipo</h2>
      <div class="isotype-cluster" data-isotope-reveal>
        <img
          src="/assets/images-section/isotype-motion-group.png"
          alt="Animaciones del isotipo Bandcamp"
        />
      </div>
      <p data-isotope-reveal>
        El símbolo basado en partículas puede utilizarse también como elemento
        gráfico dentro del sistema visual de la marca, generando variaciones
        dinámicas inspiradas en el movimiento colectivo de las bandadas.
      </p>
    </section>
  </section>
</template>

<style scoped lang="scss">
.motion-section {
  padding: 140px 0;
}

.motion-section > h2,
.speed-curves h2,
.club-card > h2 {
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  margin: 0 0 70px;
}

.speed-curves {
  width: min(1060px, calc(100% - 12vw));
  margin: 0 auto 170px;
}

.speed-layout {
  display: grid;
  grid-template-columns: 280px 150px minmax(0, 560px);
  gap: 38px;
  align-items: center;
}

.speed-copy {
  margin: 0;
  font-size: 16px;
  line-height: 1.14;
}

.speed-legend {
  display: grid;
  gap: 74px;
}

.speed-legend article {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
}

.legend-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-top: 4px;
}

.legend-dot--red {
  background: #e92924;
}

.legend-dot--violet {
  background: #bc8ebf;
}

.legend-dot--cyan {
  background: #77c9e5;
}

.speed-legend h3 {
  margin: 0 0 12px;
  font-size: 21px;
  font-weight: 400;
  line-height: 1;
}

.speed-legend p {
  margin: 0;
  font-size: 16px;
  line-height: 1;
}

.speed-chart-area {
  display: grid;
  gap: 22px;
}

.speed-chart {
  width: 100%;
  aspect-ratio: 560 / 390;
  display: block;
}

.speed-curve {
  fill: none;
  stroke: #dedede;
  stroke-width: 2.8;
  stroke-linecap: round;
}

.speed-chart circle {
  fill: #dedede;
}

.speed-chart [data-moving-dot] {
  fill: #e92924;
  pointer-events: none;
}

.speed-actions {
  display: flex;
  justify-content: center;
  gap: 22px;
}

.speed-actions button {
  border: 0;
  border-radius: 5px;
  background: #000;
  color: #fff;
  padding: 10px 13px;
  font: inherit;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;
}

.speed-actions button.active {
  color: var(--active-color);
}

.motion-video-slot {
  width: 100%;
  min-height: 430px;
  display: grid;
  grid-template-rows: auto 1fr;
  align-items: center;
  padding: 28px 0 54px;
}

.motion-video-slot h2 {
  text-align: center;
  margin: 0;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
}

.motion-video-slot--bandada {
  min-height: 430px;
}

</style>