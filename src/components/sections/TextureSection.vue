<template>
  <section id="texturas" class="texture-section">
    <section ref="particlesSection" class="particles-section">
      <h2 data-particle-reveal>Partículas</h2>
      <div class="particles">
        <article class="particle-item" data-particle-reveal>
          <div class="particle-media">
            <video src="/videos/bandada1.mp4" autoplay muted loop playsinline aria-label="Bandada de estorninos"></video>
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
            <video src="/videos/Bandada%20simple%20.mp4" autoplay muted loop playsinline aria-label="Vídeo de partículas"></video>
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
        <video src="/videos/1.mp4" autoplay muted loop playsinline aria-label="Vídeo de textura 1"></video>
      </div>
      <div class="texture-video-slot texture-video-slot--medium">
        <video src="/videos/2.mp4" autoplay muted loop playsinline aria-label="Vídeo de textura 2"></video>
      </div>
      <div class="texture-video-slot texture-video-slot--cloud">
        <video src="/videos/3.mp4" autoplay muted loop playsinline aria-label="Vídeo de textura 3"></video>
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

</style>