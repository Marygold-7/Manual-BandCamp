
<script setup>
import ParticleCloud from "../ui/ParticleCloud.vue";
</script>
<template>
  <section id="texturas" class="texture-section">
    <h2>Partículas</h2>
    <div class="particles">
      <img
        src="/src/assets/albums/hands-light.png"
        alt="Estorninos"
      /><ParticleCloud />
    </div>
    <p class="copy">
      La identidad se inspira en bandadas: elementos individuales que generan un
      comportamiento colectivo.
    </p>
    <h2>Texturas sólidas</h2>
    <div class="texture-grid solid"><span v-for="n in 12" :key="n"></span></div>
    <h2>Texturas mixtas</h2>
    <div class="texture-grid mixed"><span v-for="n in 15" :key="n"></span></div>
    <h2>Texturas a trazos</h2>
    <div class="texture-grid strokes">
      <span v-for="n in 14" :key="n"></span>
    </div>
    <div class="brand-particles">
      <h2>BandCamp</h2>
      <ParticleCloud />
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
.particles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 900px;
  margin: auto;
}
.particles img {
  width: 100%;
  height: 190px;
  object-fit: cover;
}
.copy {
  max-width: 520px;
  margin: 42px auto;
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
.brand-particles {
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.brand-particles h2 {
  font-size: 64px;
}
@media (max-width: 800px) {
  .particles {
    grid-template-columns: 1fr;
  }
  .texture-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .brand-particles {
    flex-direction: column;
  }
  .brand-particles h2 {
    font-size: 42px;
  }
}
</style>
