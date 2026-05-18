<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const historySection = ref(null)
const historyTitle = ref(null)
const historyImage = ref(null)
const historyCopy = ref(null)

let historyContext

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  historyContext = gsap.context(() => {
    const copyParts = gsap.utils.toArray('[data-history-part]')
    const paragraphLines = gsap.utils.toArray('[data-history-line]')
    const track = historyCopy.value?.querySelector('.timeline span')
    const marker = historyCopy.value?.querySelector('.timeline-marker')

    if (prefersReducedMotion) {
      gsap.set([historyTitle.value, historyImage.value, ...copyParts, ...paragraphLines, track, marker], {
        clearProps: 'all',
      })
      return
    }

    gsap.set(historyTitle.value, { autoAlpha: 0, y: 24 })
    gsap.set(historyImage.value, { autoAlpha: 0, clipPath: 'inset(0 100% 0 0)' })
    gsap.set(copyParts, { autoAlpha: 0, y: 32 })
    gsap.set(paragraphLines, { autoAlpha: 0, yPercent: 120 })
    gsap.set(track, { scaleX: 0, transformOrigin: 'left center' })
    gsap.set(marker, { xPercent: -50, scale: 0, autoAlpha: 0 })

    gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: historySection.value,
        start: 'top 68%',
        once: true,
      },
    })
      .to(historyTitle.value, { autoAlpha: 1, y: 0, duration: 0.7 })
      .to(historyImage.value, {
        autoAlpha: 1,
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.95,
      }, '-=0.25')
      .to(copyParts, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
      }, '-=0.55')
      .to(track, { scaleX: 1, duration: 0.85 }, '-=0.45')
      .to(marker, {
        autoAlpha: 1,
        scale: 1,
        x: () => historyCopy.value?.querySelector('.timeline')?.offsetWidth || 0,
        duration: 0.85,
      }, '<')
      .to(paragraphLines, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.65,
        stagger: 0.07,
      }, '-=0.25')
  }, historySection)
})

onBeforeUnmount(() => {
  historyContext?.revert()
})
</script>

<template>
  <section id="cómo-nos-expresamos" class="expression-page">
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
      <div class="goals-inner">
        <h2>Buscamos</h2>
        <ul>
          <li>Reforzar la relación directa entre artistas y fans</li>
          <li>Representar la diversidad de la música independiente</li>
          <li>Diferenciarnos del modelo de streaming masivo</li>
          <li>Construir una identidad basada en comunidad</li>
        </ul>
      </div>
    </section>

    <section class="video-section community">
      <video class="media-bg" autoplay muted loop playsinline preload="metadata">
        <source src="/videos/concierto-publico.mp4" type="video/mp4" />
      </video>
      <div class="media-overlay media-overlay--dark"></div>
      <div class="community-inner">
        <h2>Somos una comunidad<br />en movimiento</h2>
        <div class="community-copy">
          <p>
            El diseño de Bandcamp nace de la idea de definir la música
            independiente como una comunidad viva, formada por miles de artistas,
            sellos y fans que crean conexiones directas entre sí.
          </p>
          <p>
            Igual que las bandadas de estorninos dibujan formas cambiantes en el
            cielo. Aquí cada elemento gráfico representa una voz individual con
            las texturas y formas que lo componen.
          </p>
        </div>
      </div>
    </section>

    <section class="music-community section-white">
      <div class="music-copy">
        <h2>La música crece<br />en comunidad</h2>
        <p>
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
      <div class="values-inner">
        
        <h2>
          Intimidad
          <span>Autenticidad</span>
          <span>Vínculo</span>
        </h2>
        <p>
          La identidad se construye desde su escucha, lo común y aquello humano:
          entender, compartir, una conexión que participa del encuentro. Desde lo
          físico. Aquí el diseño no interrumpe: acompaña. Se siente como hoja en
          un cuaderno personal, como escuchar una canción en soledad. Todo está
          dispuesto para que la distancia desaparezca, para que el vínculo entre
          artista y oyente sea directo, casi confidencial.
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

.values h2 {
  font-size: clamp(54px, 7vw, 94px);
  line-height: 1.17;
  font-weight: 300;
  letter-spacing: -0.055em;
  margin: 0;
}

.values h2 span {
  display: block;
  font-size: clamp(36px, 5vw, 66px);
  margin-top: 20px;
}

.values p {
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
  .values p { margin-top: 0; }
}
</style>
