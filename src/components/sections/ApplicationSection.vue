<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const applicationSection = ref(null);
let applicationContext;

const applications = {
  phoneFlat: "/assets/applications/phone-flat.png",
  instagramHand: "/assets/applications/instagram-hand.png",
  frame: "/assets/applications/small-frame.png",
  posterBlack: "/assets/applications/poster-black.png",
  posterWhite: "/assets/applications/poster-white.png",
  tickets: "/assets/applications/tickets.png",
  tshirt: "/assets/applications/stickers-tshirt.png",
  box: "/assets/applications/mailer-box.png",
};

onMounted(() => {
  applicationContext = gsap.context(() => {
    const items = gsap.utils.toArray("[data-application-reveal]");

    gsap.set(items, {
      autoAlpha: 0,
      y: 42,
      scale: 0.985,
    });

    items.forEach((item) => {
      gsap.to(item, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 82%",
          once: true,
        },
      });
    });
  }, applicationSection);
});

onBeforeUnmount(() => {
  applicationContext?.revert();
});
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
  background: #fff;
}

.application-section figure {
  margin: 0;
  overflow: hidden;
}

.application-section img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.application-phones {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.application-phones figure {
  height: 730px;
}

.application-full {
  height: 760px;
}

.application-posters {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.application-posters figure {
  height: 760px;
}

.application-box {
  background: #f5f5f5;
}

.application-box img {
  object-fit: contain;
}

@media (max-width: 800px) {
  .application-full,
  .application-phones figure,
  .application-posters figure {
    height: 430px;
  }

  .application-phones,
  .application-posters {
    grid-template-columns: 1fr;
  }
}
</style>
