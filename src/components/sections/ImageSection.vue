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