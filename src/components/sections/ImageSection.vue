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