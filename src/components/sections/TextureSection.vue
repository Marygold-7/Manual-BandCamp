<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const particlesSection = ref(null);
const solidCarousel = ref(null);
const mixedCarousel = ref(null);
const strokeCarousel = ref(null);
let textureContext;

const noAccentParticleNames = new Set([14, 15, 16, 17, 18, 23, 26, 27]);
const particlePath = (n) =>
  `/assets/albums/Partículas/${noAccentParticleNames.has(n) ? "Particula" : "Partícula"} ${n}.svg`;

const solidParticles = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41].map((n) => ({
  id: n,
  src: particlePath(n),
}));

const mixedParticles = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((n) => ({
  id: n,
  src: particlePath(n),
}));

const strokeParticles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => ({
  id: n,
  src: particlePath(n),
}));

onMounted(() => {
  textureContext = gsap.context(() => {
    const particleItems = gsap.utils.toArray("[data-particle-reveal]");
    gsap.set(particleItems, { autoAlpha: 0, y: 36 });

    gsap.to(particleItems, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: particlesSection.value,
        start: "top 72%",
        once: true,
      },
    });

    const createCarousel = (selector, startIndex = 1) => {
      const cards = gsap.utils.toArray(selector);
      if (!cards.length) return;

      const total = cards.length;
      let active = startIndex;
      const renderCarousel = (animate = false) => {
        cards.forEach((card, index) => {
          let slot = (index - active + total) % total;
          if (slot > total / 2) slot -= total;

          const vars = {
            xPercent: slot * 115,
            scale: slot === 0 ? 1 : 0.72,
            autoAlpha: Math.abs(slot) <= 1 ? 1 : 0,
            zIndex: slot === 0 ? 3 : 2,
            duration: 0.75,
            ease: "power3.inOut",
          };

          if (animate) gsap.to(card, vars);
          else gsap.set(card, vars);
        });
      };

      renderCarousel();
      gsap.timeline({ repeat: -1 })
        .to({}, { duration: 1.8 })
        .call(() => {
          active = (active + 1) % total;
          renderCarousel(true);
        });
    };

    createCarousel("[data-solid-card]", 1);
    createCarousel("[data-mixed-card]", 2);
    createCarousel("[data-stroke-card]", 2);
  });
});

onBeforeUnmount(() => {
  textureContext?.revert();
});
</script>

<template>
  <section id="texturas" class="texture-section">
    <section ref="particlesSection" class="particles-section">
      <h2 data-particle-reveal>Partículas</h2>
      <div class="particles">
        <article class="particle-item" data-particle-reveal>
          <div class="particle-media">
            <video src="/videos/concierto-publico.mp4" autoplay muted loop playsinline aria-label="Bandada de estorninos"></video>
          </div>
          <h3>Estorninos</h3>
          <div class="particle-copy">
            <p>
              La identidad de Bandcamp parte de la etimología de su nombre. La
              palabra <em>band</em> puede entenderse como “bandada”, como en el
              caso de los estorninos.
            </p>
            <p>
              Este concepto conecta directamente con la esencia de la plataforma:
              una comunidad donde el vínculo entre artistas y fans se basa en el
              apoyo mutuo y la colaboración.
            </p>
            <p>
              La imagen de la bandada de estorninos se traslada al sistema visual
              mediante el uso de partículas diversas. Representan múltiples
              elementos individuales que generan un comportamiento colectivo.
            </p>
          </div>
        </article>

        <article class="particle-item" data-particle-reveal>
          <div class="particle-media">
            <video src="/videos/concierto.mp4" autoplay muted loop playsinline aria-label="Vídeo de partículas"></video>
          </div>
          <h3>Partículas</h3>
          <div class="particle-copy">
            <p>
              A pesar de esta variedad, su comportamiento se entiende en conjunto.
              Las partículas se agrupan, se desplazan y evolucionan como una
              bandada, sin una estructura rígida, guiadas por dinámicas propias que
              generan formas cambiantes y vivas.
            </p>
          </div>
        </article>
      </div>
    </section>

    <h2>Texturas sólidas</h2>
    <div ref="solidCarousel" class="solid-carousel" aria-label="Carrusel de texturas sólidas">
      <figure
        v-for="particle in solidParticles"
        :key="particle.id"
        class="solid-card mixed-card"
        data-solid-card
      >
        <img :src="particle.src" :alt="`Partícula sólida ${particle.id}`" />
      </figure>
    </div>
    <p class="texture-note">
      Dado el carácter independiente y auténtico de Bandcamp, las partículas
      presentan variaciones en su forma y acabado, evitando la uniformidad y
      reforzando una estética más orgánica y diversa.
    </p>
    <h2>Texturas mixtas</h2>
    <div ref="mixedCarousel" class="solid-carousel mixed-carousel" aria-label="Carrusel de texturas mixtas">
      <figure
        v-for="particle in mixedParticles"
        :key="particle.id"
        class="solid-card mixed-card"
        data-mixed-card
      >
        <img :src="particle.src" :alt="`Partícula mixta ${particle.id}`" />
      </figure>
    </div>
    <p class="texture-note">
      Dado el carácter independiente y auténtico de Bandcamp, las partículas
      presentan variaciones en su forma y acabado, evitando la uniformidad y
      reforzando una estética más orgánica y diversa.
    </p>
    <h2>Texturas a trazos</h2>
    <div ref="strokeCarousel" class="solid-carousel stroke-carousel" aria-label="Carrusel de texturas a trazos">
      <figure
        v-for="particle in strokeParticles"
        :key="particle.id"
        class="solid-card mixed-card stroke-card"
        data-stroke-card
      >
        <img :src="particle.src" :alt="`Partícula a trazos ${particle.id}`" />
      </figure>
    </div>
    <p class="texture-note">
      Dado el carácter independiente y auténtico de Bandcamp, las partículas
      presentan variaciones en su forma y acabado, evitando la uniformidad y
      reforzando una estética más orgánica y diversa.
    </p>
    <div class="texture-video-stack" aria-label="Espacios preparados para vídeos de texturas">
      <div class="texture-video-slot texture-video-slot--wide">
        <video src="/videos/video-hero.mp4" autoplay muted loop playsinline aria-label="Vídeo de textura 1"></video>
      </div>
      <div class="texture-video-slot texture-video-slot--medium">
        <video src="/videos/video-atributos.mp4" autoplay muted loop playsinline aria-label="Vídeo de textura 2"></video>
      </div>
      <div class="texture-video-slot texture-video-slot--cloud">
        <video src="/videos/concierto-publico.mp4" autoplay muted loop playsinline aria-label="Vídeo de textura 3"></video>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.texture-section {
  padding: 140px 8vw;
}
.texture-section > h2 {
  text-align: center;
  margin: 90px 0 60px;
}
.particles-section {
  width: min(980px, 100%);
  margin: 0 auto 120px;
}
.particles-section h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 70px;
}
.particles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 72px;
  align-items: start;
}
.particle-item {
  display: grid;
  justify-items: center;
}
.particle-media {
  width: 100%;
  max-width: 360px;
  aspect-ratio: 16 / 9;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  overflow: hidden;
}
.particle-media img,
.particle-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.particle-media--cloud {
  overflow: visible;
}
.particle-media--cloud :deep(*) {
  max-width: 100%;
}
.particle-item h3 {
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 38px;
}
.particle-copy {
  width: min(360px, 100%);
  display: grid;
  gap: 24px;
}
.particle-copy p {
  font-size: 16px;
  line-height: 1.13;
  margin: 0;
}
.texture-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 42px;
  max-width: 960px;
  margin: 0 auto 120px;
}
.texture-grid span {
  height: 68px;
  background: #000;
  border-radius: 50% 42% 55% 35%;
  transform: rotate(var(--r, 0deg));
}
.texture-grid span:nth-child(odd) {
  --r: -12deg;
}
.solid-carousel {
  position: relative;
  width: min(760px, 100%);
  height: 240px;
  display: grid;
  place-items: center;
  margin: 0 auto 120px;
  overflow: hidden;
}
.solid-card {
  position: absolute;
  width: 220px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  margin: 0;
  will-change: transform, opacity;
}
.solid-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}
.texture-note {
  width: min(420px, 100%);
  margin: -24px auto 230px;
  font-size: 16px;
  line-height: 1.12;
}
.mixed-carousel {
  margin-bottom: 120px;
}
.stroke-carousel {
  margin-bottom: 120px;
}
.mixed-card {
  width: 230px;
}
.mixed span {
  background: repeating-radial-gradient(
    circle,
    #000 0 2px,
    transparent 2px 6px
  );
  border: 2px solid #000;
}

.strokes span {
  background: repeating-linear-gradient(
    160deg,
    #000 0 5px,
    transparent 5px 12px
  );
  border-radius: 30%;
}
.texture-video-stack {
  width: calc(100% + 16vw);
  margin: -10px -8vw 0;
}
.texture-video-slot {
  min-height: 360px;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.texture-video-slot video {
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: block;
  object-fit: cover;
}
.texture-video-slot + .texture-video-slot {
  margin-top: 56px;
}
.texture-video-slot--wide {
  min-height: 390px;
}
.texture-video-slot--medium {
  min-height: 340px;
}
.texture-video-slot--cloud {
  min-height: 340px;
}
.brand-particles {
  width: min(720px, 78vw);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.brand-particles--wide {
  transform: translateY(2px);
}
.brand-particles--medium {
  width: min(520px, 70vw);
  gap: 18px;
  transform: scale(0.82);
}
.brand-particles--cloud {
  width: min(520px, 70vw);
  transform: scale(0.85);
}
.brand-particles h2 {
  font-size: 64px;
  margin: 0;
  line-height: 1;
  white-space: nowrap;
}
.brand-particles--medium h2 {
  font-size: 52px;
}
@media (max-width: 800px) {
  .particles {
    grid-template-columns: 1fr;
  }
  .texture-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .solid-carousel {
    width: min(100%, 360px);
    height: 190px;
  }
  .solid-card {
    width: 160px;
  }
  .texture-note {
    margin: -12px auto 120px;
  }
  .mixed-card {
    width: 170px;
  }
  .texture-video-stack {
    width: calc(100% + 16vw);
  }
  .texture-video-slot {
    min-height: 260px;
  }
  .texture-video-slot + .texture-video-slot {
    margin-top: 36px;
  }
  .brand-particles {
    flex-direction: column;
    width: min(320px, 84vw);
    gap: 12px;
  }
  .brand-particles h2 {
    font-size: 42px;
  }
  .brand-particles--medium,
  .brand-particles--cloud {
    transform: scale(0.9);
  }
}
</style>
