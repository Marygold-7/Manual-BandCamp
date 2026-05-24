<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imageSection = ref(null);
const horizontalCarousel = ref(null);
const verticalCarousel = ref(null);
let imageContext;

const referenceImages = [
  {
    label: "Piper Ferguson",
    src: "/images/Piper%20Ferguson.png",
  },
  {
    label: "Rafa Ariño",
    src: "/images/Rafa%20Ariño.png",
  },
];

const horizontalImages = [1, 2, 3, 4].map((id) => ({
  id,
  src: `/images/Imagen%20horizontal%20${id}.png`,
}));

const verticalImages = [1, 2, 3].map((id) => ({
  id,
  src: `/images/Imagen%20vertical%20${id}.png`,
}));

onMounted(() => {
  imageContext = gsap.context(() => {
    const items = gsap.utils.toArray("[data-image-reveal]");

    gsap.set(items, {
      autoAlpha: 0,
      y: 42,
    });

    gsap.to(items, {
      autoAlpha: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.13,
      scrollTrigger: {
        trigger: imageSection.value,
        start: "top 70%",
        once: true,
      },
    });

    const referenceCards = gsap.utils.toArray("[data-reference-card]");

    if (referenceCards.length) {
      referenceCards.forEach((card, index) => {
        gsap.set(card, {
          autoAlpha: 0,
          x: index === 0 ? "-55vw" : "55vw",
          y: 0,
        });
      });

      gsap.to(referenceCards, {
        autoAlpha: 1,
        x: 0,
        duration: 1.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reference-grid",
          start: "top 82%",
          once: true,
        },
      });
    }

    const horizontalItems = gsap.utils.toArray("[data-horizontal-reveal]");
    gsap.set(horizontalItems, {
      autoAlpha: 0,
      y: 46,
    });

    gsap.to(horizontalItems, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".horizontal-block",
        start: "top 72%",
        once: true,
      },
    });

    const createHorizontalCarousel = (selector, startIndex = 1) => {
      const cards = Array.from(
        horizontalCarousel.value?.querySelectorAll(selector) || []
      );
      if (!cards.length) return;

      const total = cards.length;
      let active = startIndex;
      const getDistance = () => {
        const width = horizontalCarousel.value?.clientWidth || 840;
        return Math.min(width * 0.36, 310);
      };

      const render = (animate = false) => {
        cards.forEach((card, index) => {
          let slot = (index - active + total) % total;
          if (slot > total / 2) slot -= total;

          const vars = {
            xPercent: -50,
            yPercent: -50,
            x: slot * getDistance(),
            y: 0,
            scale: slot === 0 ? 1.06 : 0.82,
            autoAlpha: Math.abs(slot) <= 1 ? 1 : 0,
            zIndex: slot === 0 ? 5 : 2,
            duration: 0.85,
            ease: "power3.inOut",
          };

          if (animate) gsap.to(card, vars);
          else gsap.set(card, vars);
        });
      };

      render();
      gsap.timeline({ repeat: -1 })
        .to({}, { duration: 2.05 })
        .call(() => {
          active = (active + 1) % total;
          render(true);
        });
    };

    const verticalText = gsap.utils.toArray("[data-vertical-reveal]");
    gsap.set(verticalText, {
      autoAlpha: 0,
      y: 44,
    });

    gsap.to(verticalText, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.14,
      scrollTrigger: {
        trigger: ".vertical-block",
        start: "top 72%",
        once: true,
      },
    });

    const createImageCarousel = (selector, startIndex = 1) => {
      const cards = Array.from(
        verticalCarousel.value?.querySelectorAll(selector) || []
      );
      if (!cards.length) return;

      const total = cards.length;
      let active = startIndex;
      const getDistance = () => {
        const width = verticalCarousel.value?.clientWidth || 840;
        return Math.min(width * 0.34, 280);
      };

      const render = (animate = false) => {
        cards.forEach((card, index) => {
          let slot = (index - active + total) % total;
          if (slot > total / 2) slot -= total;

          const vars = {
            xPercent: -50,
            yPercent: -50,
            x: slot * getDistance(),
            y: 0,
            scale: slot === 0 ? 1.06 : 0.92,
            autoAlpha: Math.abs(slot) <= 1 ? 1 : 0,
            zIndex: slot === 0 ? 5 : 2,
            duration: 0.85,
            ease: "power3.inOut",
          };

          if (animate) gsap.to(card, vars);
          else gsap.set(card, vars);
        });
      };

      render();
      gsap.timeline({ repeat: -1 })
        .to({}, { duration: 2.05 })
        .call(() => {
          active = (active + 1) % total;
          render(true);
        });
    };

    createHorizontalCarousel("[data-horizontal-card]", 1);
    createImageCarousel("[data-vertical-card]", 1);

    const commonItems = gsap.utils.toArray("[data-common-reveal]");
    const commonArrows = gsap.utils.toArray("[data-common-arrow]");
    gsap.set(commonItems, {
      autoAlpha: 0,
      y: 42,
    });
    gsap.set(commonArrows, {
      autoAlpha: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".common-factor",
        start: "top 72%",
        once: true,
      },
    })
      .to(commonItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      })
      .to(commonArrows, {
        autoAlpha: 1,
        duration: 0.65,
        ease: "power2.out",
        stagger: 0.12,
      }, "+=0.2");
  }, imageSection);
});

onBeforeUnmount(() => {
  imageContext?.revert();
});
</script>

<template>
  <section id="imágenes" ref="imageSection" class="image-section">
    <div class="image-content">
      <h2 data-image-reveal>Contenido de imágenes</h2>

      <div class="image-intro" data-image-reveal>
        <p>
          La dirección de arte fotográfica refleja el espíritu de comunidad
          mostrando artistas, público y escenas de la vida musical desde una
          mirada cercana y documental.
        </p>
        <p>
          Como referentes tenemos a Piper Ferguson, Rafa Ariño y Adam Elmakias.
          Para mostrar encuentros entre artistas y comunidad, escena indie y
          vida en gira.
        </p>
      </div>

      <div class="reference-grid">
        <figure
          v-for="img in referenceImages"
          :key="img.label"
          class="reference-card"
          data-reference-card
        >
          <img :src="img.src" :alt="img.label" />
          <figcaption>{{ img.label }}</figcaption>
        </figure>
      </div>

      <section class="horizontal-block">
        <h2 class="next-heading" data-horizontal-reveal>Imágenes horizontales</h2>
        <div
          ref="horizontalCarousel"
          class="horizontal-carousel"
          aria-label="Carrusel de imágenes horizontales"
        >
          <figure
            v-for="img in horizontalImages"
            :key="img.id"
            class="horizontal-card"
            data-horizontal-card
          >
            <img :src="img.src" :alt="`Imagen horizontal ${img.id}`" />
          </figure>
        </div>
        <p class="horizontal-copy" data-horizontal-reveal>
          Las fotografías en horizontal mostrarán más al artista viendo a su
          público. De esta manera trasladamos la atención al mismo artista y su
          obra o actuación.
        </p>
      </section>

      <section class="vertical-block">
        <h2 data-vertical-reveal>Imágenes verticales</h2>
        <div
          ref="verticalCarousel"
          class="vertical-carousel"
          aria-label="Carrusel de imágenes verticales"
        >
          <figure
            v-for="img in verticalImages"
            :key="img.id"
            class="vertical-card"
            data-vertical-card
          >
            <img :src="img.src" :alt="`Imagen vertical ${img.id}`" />
          </figure>
        </div>
        <p class="vertical-copy" data-vertical-reveal>
          Nuestras fotos para redes sociales se enfocarán en captar momentos
          espontáneos y más accidentales que reflejen interacciones genuinas por
          parte del público.
        </p>
      </section>

      <section class="common-factor">
        <h2 data-common-reveal>Factor común</h2>
        <div class="common-layout">
          <article class="common-item common-item--horizontal" data-common-reveal>
            <span
              class="common-arrow common-arrow--left"
              data-common-arrow
              aria-hidden="true"
            ></span>
            <div class="common-shape"></div>
            <span class="common-measure">10px</span>
            <p>
              La condición para que todas nuestras imágenes guarden un grado de
              semejanza es un border radius de 10px
            </p>
          </article>
          <article class="common-item common-item--vertical" data-common-reveal>
            <span
              class="common-arrow common-arrow--right"
              data-common-arrow
              aria-hidden="true"
            ></span>
            <div class="common-shape"></div>
            <span class="common-measure">10px</span>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
.image-section {
  padding: 150px 8vw 0;
}

.image-content {
  width: min(760px, 100%);
  margin: 0 auto;
}

.image-content h2 {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  margin: 0 0 82px;
}

.image-intro {
  width: min(590px, 100%);
  margin: 0 auto 72px;
  display: grid;
  gap: 22px;
}

.image-intro p {
  margin: 0;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.17;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  margin: 0 auto 178px;
}

.reference-card {
  margin: 0;
}

.reference-card img {
  width: 100%;
  aspect-ratio: 16 / 11.1;
  display: block;
  object-fit: cover;
  border-radius: 10px;
}

.reference-card figcaption {
  margin-top: 14px;
  text-align: center;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
}

.next-heading {
  margin-bottom: 36px;
}

.horizontal-block {
  width: min(900px, 100%);
  margin: 0 auto;
}

.horizontal-carousel {
  position: relative;
  width: min(860px, 100%);
  height: 310px;
  display: grid;
  place-items: center;
  margin: 0 auto 62px;
  overflow: visible;
}

.horizontal-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 360px;
  height: 235px;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  transform-origin: center center;
  will-change: transform, opacity;
}

.horizontal-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.horizontal-copy {
  width: min(320px, 100%);
  margin: 0 auto 170px;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.14;
}

.vertical-block {
  width: min(900px, 100%);
  margin: 0 auto;
}

.vertical-block h2 {
  margin-bottom: 48px;
}

.vertical-carousel {
  position: relative;
  width: min(840px, 100%);
  height: 470px;
  display: grid;
  place-items: center;
  margin: 0 auto 74px;
  overflow: visible;
}

.vertical-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 405px;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  transform-origin: center center;
  will-change: transform, opacity;
}

.vertical-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.vertical-copy {
  width: min(320px, 100%);
  margin: 0 auto 185px;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.14;
}

.common-factor {
  width: min(880px, 100%);
  margin: 0 auto 160px;
}

.common-factor h2 {
  margin-bottom: 70px;
}

.common-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 66px;
  align-items: start;
}

.common-item {
  position: relative;
  display: grid;
}

.common-item--horizontal {
  padding-top: 22px;
}

.common-item--vertical {
  justify-items: center;
}

.common-shape {
  width: 100%;
  background: #d9d9d9;
  border-radius: 10px;
}

.common-item--horizontal .common-shape {
  aspect-ratio: 16 / 10.65;
}

.common-item--vertical .common-shape {
  width: min(300px, 100%);
  height: 420px;
}

.common-measure {
  margin-top: 20px;
  color: #ff1f1f;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}

.common-item--horizontal p {
  width: min(330px, 100%);
  margin: 46px 0 0 6px;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.14;
}

.vertical-block {
  width: min(900px, 100%);
  margin: 0 auto;
}

.vertical-block h2 {
  margin-bottom: 48px;
}

.vertical-carousel {
  position: relative;
  width: min(840px, 100%);
  height: 470px;
  display: grid;
  place-items: center;
  margin: 0 auto 74px;
  overflow: visible;
}

.vertical-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 405px;
  margin: 0;
  border-radius: 10px;
  overflow: hidden;
  transform-origin: center center;
  will-change: transform, opacity;
}

.vertical-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.vertical-copy {
  width: min(320px, 100%);
  margin: 0 auto 185px;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.14;
}

.common-factor {
  width: min(880px, 100%);
  margin: 0 auto 160px;
}

.common-factor h2 {
  margin-bottom: 70px;
}

.common-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 66px;
  align-items: start;
}

.common-item {
  position: relative;
  display: grid;
}

.common-item--horizontal {
  padding-top: 22px;
}

.common-item--vertical {
  justify-items: center;
}

.common-shape {
  width: 100%;
  background: #d9d9d9;
  border-radius: 10px;
}

.common-item--horizontal .common-shape {
  aspect-ratio: 16 / 10.65;
}

.common-item--vertical .common-shape {
  width: min(300px, 100%);
  height: 420px;
}

.common-measure {
  margin-top: 20px;
  color: #ff1f1f;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}

.common-item--horizontal p {
  width: min(330px, 100%);
  margin: 46px 0 0 6px;
  font-family: "POI Orbiter Trial", "POIOrbiterTrial", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.14;
}

</style>
