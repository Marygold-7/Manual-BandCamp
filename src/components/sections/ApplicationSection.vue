<script setup>
import { appImages } from "../../data/brandData";

const applications = {
  phoneFlat: appImages[0],
  instagramHand: appImages[1],
  frame: appImages[2],
  posterBlack: appImages[3],
  posterWhite: appImages[4],
  tickets: appImages[5],
  tshirt: appImages[0],
  box: appImages[1],
};
</script>

<template>
  <section id="aplicaciones" class="application-section">
    <div class="application-phones">
      <figure data-application-reveal>
        <img :src="applications.phoneFlat" alt="Aplicación de Bandcamp en móvil" />
      </figure>
      <figure data-application-reveal>
        <img :src="applications.instagramHand" alt="Perfil de Bandcamp en móvil" />
      </figure>
    </div>

    <figure class="application-full" data-application-reveal>
      <img :src="applications.frame" alt="Poster Bandcamp en interior" />
    </figure>

    <div class="application-posters">
      <figure data-application-reveal>
        <img :src="applications.posterBlack" alt="Poster negro Bandcamp" />
      </figure>
      <figure data-application-reveal>
        <img :src="applications.posterWhite" alt="Poster blanco Bandcamp" />
      </figure>
    </div>

    <figure class="application-full" data-application-reveal>
      <img :src="applications.tickets" alt="Tickets Bandcamp" />
    </figure>

    <figure class="application-full" data-application-reveal>
      <img :src="applications.tshirt" alt="Camiseta y stickers Bandcamp" />
    </figure>

    <figure class="application-full application-box" data-application-reveal>
      <img :src="applications.box" alt="Caja Bandcamp" />
    </figure>
  </section>
</template>

<style scoped lang="scss">
.application-section {
  width: min(980px, calc(100% - 12vw));
  margin: 0 auto;
  padding: 130px 0 170px;
  display: grid;
  gap: 48px;
}

.application-phones,
.application-posters {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

figure {
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
  background: #f1f1f1;
}

img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.application-phones figure {
  aspect-ratio: 4 / 5;
}

.application-posters figure,
.application-full {
  aspect-ratio: 16 / 10;
}

.application-box {
  aspect-ratio: 16 / 9;
}

@media (max-width: 720px) {
  .application-phones,
  .application-posters {
    grid-template-columns: 1fr;
  }
}
</style>
