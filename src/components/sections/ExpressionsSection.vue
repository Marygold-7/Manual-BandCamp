<template>
  <section ref="expressionPage" id="cómo-nos-expresamos" class="expression-page">
    <section class="home-hero section-white">
      <div class="hero-lockup">
        <video class="hero-particles" autoplay muted loop playsinline preload="metadata">
          <source src="/videos/video-hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <section ref="historySection" class="history section-white">
      <h2 ref="historyTitle">Nuestra historia</h2>

      <div class="history-card">

        <img ref="historyImage" class="history-image" src="/images/fundadores.png" alt="Fundadores de Bandcamp" />

        <div ref="historyCopy" class="history-copy">
          <p class="history-kicker" data-history-part>Origen</p>
          <p class="year" data-history-part>2008</p>
          <h3 data-history-part>Fundación de Bandcamp</h3>
          <div class="timeline" data-history-part>
            <span></span>
            <i class="timeline-marker" aria-hidden="true"></i>
          </div>
          <div class="history-text" aria-label="Resumen histórico">
            <p>
              <span data-history-line>Bandcamp fue fundada por Ethan Diamond, Shawn Grunberger,</span>
              <span data-history-line>Joe Holt y Neal Tucker en California.</span>
            </p>
            <p>
              <span data-history-line>La plataforma nace para dar a los artistas control directo</span>
              <span data-history-line>sobre la distribución y venta de su música.</span>
            </p>
          </div>
        </div>

      </div>
    </section>

    <section class="video-section goals">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/concierto.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay"></div>
      <div class="goals-inner" data-expression-group>
        <h2 data-expression-text>Buscamos</h2>
        <ul>
          <li data-expression-text>Reforzar la relación directa entre artistas y fans</li>
          <li data-expression-text>Representar la diversidad de la música independiente</li>
          <li data-expression-text>Diferenciarnos del modelo de streaming masivo</li>
          <li data-expression-text>Construir una identidad basada en comunidad</li>
        </ul>
      </div>
    </section>

    <section class="video-section community">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/concierto-publico.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay media-overlay--dark"></div>
      <div class="community-inner" data-expression-group>
        <h2 data-expression-text>Somos una comunidad<br />en movimiento</h2>
        <div class="community-copy">
          <p data-expression-text>
            El diseño de Bandcamp nace de la idea de definir la música
            independiente como una comunidad viva, formada por miles de artistas,
            sellos y fans que crean conexiones directas entre sí.
          </p>
          <p data-expression-text>
            Igual que las bandadas de estorninos dibujan formas cambiantes en el
            cielo. Aquí cada elemento gráfico representa una voz individual con
            las texturas y formas que lo componen.
          </p>
        </div>
      </div>
    </section>

    <section ref="musicSection" class="music-community section-white">
      <div class="music-copy">
        <h2 ref="musicTitle">La música crece<br />en comunidad</h2>
        <p ref="musicText">
          Queremos poner en valor al artista y reforzar el vínculo humano que
          existe alrededor de la música. Donde los creadores se sienten apoyados
          por una comunidad que escucha y participa activamente.
        </p>
      </div>
    </section>

    <section class="video-section values">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/video-atributos.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay media-overlay--warm"></div>
      <div ref="valuesSection" class="values-inner" data-expression-group>
        <div class="values-list" aria-label="Valores de marca">
          <button
            v-for="(value, index) in values"
            :key="value.label"
            :ref="(el) => setValueWordRef(el, index)"
            class="value-word"
            :class="{ active: activeValueIndex === index }"
            type="button"
            data-expression-text
            @click="selectValue(index)"
          >
            {{ value.label }}
          </button>
        </div>
        <p ref="valuesCopy" class="values-copy" data-expression-text>
          {{ values[activeValueIndex].text }}
        </p>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.expression-page {
  --page-max: 1440px;
  --content: 930px;
  background: #fff;
  color: #000;
}

.section-white {
  background: #fff;
}

.home-hero {
  min-height: 575px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-lockup {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: min(900px, 92vw);
}

.hero-particles {
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-left: -48px;
  mix-blend-mode: multiply;
  opacity: .9;
  pointer-events: none;
}

.history {
  position: relative;
  min-height: 560px;
  padding: 20px 0 150px;
}

.history h2 {
  text-align: center;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.035em;
  margin: 0 0 40px;
}

.history-card {
  width: min(845px, 78vw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 310px minmax(360px, 1fr);
  align-items: start;
  position: relative;
  gap: 42px;
}

.history-card img {
  width: 310px;
  height: 250px;
  object-fit: cover;
  display: block;
}

.history-copy {
  --history-line: 395px;
  padding-top: 2px;
  position: relative;
}

.history-kicker {
  font-size: 10px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: .16em;
  margin: 0 0 8px;
  text-transform: uppercase;
}

.year {
  font-size: clamp(82px, 8vw, 126px);
  line-height: .72;
  letter-spacing: -0.075em;
  margin: 0;
}

.history-copy h3 {
  font-size: clamp(18px, 1.75vw, 24px);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.035em;
  margin: 14px 0 24px;
}

.timeline {
  width: min(var(--history-line), 100%);
  height: 2px;
  background: #cfcfcf;
  position: relative;
  margin: 0 0 34px;
}

.timeline span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 50%;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #000;
  transform: translate(-50%, -50%);
}

.history-text {
  display: grid;
  gap: 14px;
  max-width: 390px;
}

.history-text p {
  font-size: 13px;
  line-height: 1.14;
  margin: 0;
  overflow: hidden;
}

.history-text span {
  display: block;
}

.history-arrow {
  position: fixed;
  top: 63vh;
  z-index: 3;
  border: 0;
  background: transparent;
  font-size: 22px;
  line-height: 1;
  color: #777;
  cursor: default;
}

.history-arrow--left { left: 20px; }
.history-arrow--right { right: 44px; }

.video-section {
  min-height: 680px;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.media-bg,
.media-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.media-bg {
  object-fit: cover;
  z-index: 0;
}

.media-overlay {
  z-index: 1;
  background: linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.28) 46%, rgba(0,0,0,.48));
}

.media-overlay--dark {
  background: linear-gradient(rgba(0,0,0,.32), rgba(0,0,0,.48));
}

.media-overlay--warm {
  background: linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,.26) 47%, rgba(0,0,0,.54));
}

.goals-inner,
.community-inner,
.values-inner {
  position: relative;
  z-index: 2;
}

.goals-inner {
  min-height: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: min(1020px, 86vw);
  margin: 0 auto;
  padding-top: 22px;
}

.goals h2 {
  font-size: clamp(48px, 5.3vw, 72px);
  line-height: 1;
  font-weight: 300;
  margin: 0 0 0 40px;
  letter-spacing: -0.055em;
}

.goals ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 42px;
  max-width: 355px;
}

.goals li {
  font-size: 16px;
  line-height: 1.17;
}

.community {
  min-height: 675px;
}

.community-inner {
  min-height: 675px;
  width: min(920px, 82vw);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 15px;
}

.community h2 {
  font-size: clamp(42px, 5vw, 72px);
  line-height: 1.08;
  font-weight: 300;
  letter-spacing: -0.055em;
  text-align: center;
  margin: 0 0 68px;
}

.community-copy {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 72px;
  margin-left: 0;
}

.community-copy p {
  font-size: 15px;
  line-height: 1.15;
  margin: 0;
}

.music-community {
  min-height: 640px;
  display: flex;
  align-items: center;
}

.music-copy {
  width: min(1010px, 86vw);
  margin: 0 auto;
  padding-left: 0;
}

.music-copy h2 {
  font-size: clamp(42px, 5vw, 68px);
  line-height: 1.05;
  font-weight: 400;
  letter-spacing: -0.06em;
  margin: 0 0 26px;
}

.music-copy p {
  max-width: 340px;
  font-size: 16px;
  line-height: 1.13;
  margin: 0;
}

.values {
  min-height: 620px;
}

.values-inner {
  min-height: 620px;
  width: min(1180px, 88vw);
  margin: 0 auto;
  display: grid;
  grid-template-columns: .9fr 1fr;
  align-items: center;
  gap: 70px;
}

.values-list {
  display: grid;
  justify-items: start;
  gap: 22px;
}

.value-word {
  appearance: none;
  border: 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: clamp(54px, 7vw, 94px);
  line-height: 1.17;
  font-weight: 300;
  letter-spacing: -0.055em;
  text-align: left;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transform-origin: left center;
  transition: opacity .2s ease;
}

.value-word:not(.active) {
  opacity: .82;
}

.value-word:hover,
.value-word:focus-visible {
  opacity: 1;
}

.value-word:focus-visible {
  outline: 1px solid #fff;
  outline-offset: 8px;
}

.values-copy {
  max-width: 570px;
  font-size: 13px;
  line-height: 1.12;
  margin: 72px 0 0;
}

@media (max-width: 900px) {
  .home-hero { min-height: 430px; }
  .hero-lockup { flex-direction: column; gap: 8px; }
  .hero-particles { margin-left: 0; height: 170px; }

  .history-card {
    width: min(520px, 88vw);
    grid-template-columns: 1fr;
  }
  .history-card img {
    width: 100%;
    height: auto;
  }
  .history-arrow { display: none; }

  .goals-inner,
  .values-inner {
    grid-template-columns: 1fr;
    gap: 42px;
    align-content: center;
  }
  .goals h2 { margin-left: 0; }

  .community-copy { grid-template-columns: 1fr; gap: 28px; }
  .values-copy { margin-top: 0; }
  .value-word { font-size: clamp(44px, 12vw, 72px); }
}

</style>