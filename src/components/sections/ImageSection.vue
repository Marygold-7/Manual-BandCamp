
<script setup>
import { imageCards } from "../../data/brandData";
</script>
<template>
  <section id="imágenes" class="image-section">
    <h2>Contenido de imágenes</h2>
    <p class="intro">
      La dirección de arte fotográfica refleja el espíritu de comunidad
      mostrando artistas, público y escenas de la vida musical desde una mirada
      cercana.
    </p>
    <div class="two">
      <figure v-for="img in imageCards.slice(0, 2)" :key="img.label">
        <img :src="img.src" :alt="img.label" />
        <figcaption>{{ img.label }}</figcaption>
      </figure>
    </div>
    <h2>Imágenes horizontales</h2>
    <div class="horizontal">
      <img
        v-for="img in imageCards"
        :key="img.src"
        :src="img.src"
        alt="Imagen horizontal"
      />
    </div>
    <h2>Imágenes verticales</h2>
    <div class="vertical">
      <img
        v-for="img in imageCards.slice(1)"
        :key="img.label"
        :src="img.src"
        alt="Imagen vertical"
      />
    </div>
    <h2>Factor común</h2>
    <div class="placeholders"><span></span><span></span></div>
  </section>
</template>
<style scoped lang="scss">
.image-section {
  padding: 140px 8vw;
}
.image-section h2 {
  text-align: center;
  font-size: 30px;
  margin: 0 0 70px;
}
.intro {
  max-width: 650px;
  margin: 0 auto 70px;
  font-size: 18px;
}
.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
  max-width: 760px;
  margin: 0 auto 160px;
}
.two img,
.horizontal img,
.vertical img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.two img {
  height: 230px;
}
.two figcaption {
  text-align: center;
  margin-top: 14px;
}
.horizontal {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 34px;
  max-width: 780px;
  margin: 0 auto 170px;
}
.horizontal img {
  height: 250px;
}
.vertical {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px;
  max-width: 920px;
  margin: 0 auto 180px;
}
.vertical img {
  height: 520px;
}
.placeholders {
  display: flex;
  justify-content: center;
  gap: 120px;
}
.placeholders span {
  background: #ddd;
  border-radius: 10px;
  width: 350px;
  height: 230px;
}
.placeholders span:nth-child(2) {
  width: 280px;
  height: 420px;
}
@media (max-width: 800px) {
  .two,
  .horizontal,
  .vertical {
    grid-template-columns: 1fr;
  }
  .vertical img {
    height: 360px;
  }
  .placeholders {
    flex-direction: column;
    align-items: center;
  }
}
</style>
