
<script setup>
import ParticleCloud from "../ui/ParticleCloud.vue";
</script>
<template>
  <section id="logotipos" class="logo-section">
    <p class="label">Logotipo</p>
    <h2>BandCamp</h2>
    <div class="safe">
      <span>B</span><strong>BandCamp</strong><span>B</span>
    </div>
    <div class="sizes">
      <article>
        <p>Pantalla</p>
        <strong>BandCamp</strong>
      </article>
      <article>
        <p>Impresión</p>
        <strong>BandCamp</strong>
      </article>
    </div>
    <h3>Exposición y positivo</h3>
    <div class="contrast">
      <strong>BandCamp</strong><strong>BandCamp</strong>
    </div>
    <h3>Isotipo</h3>
    <ParticleCloud />
    <div class="icon-row"><b>B</b><b>B</b></div>
  </section>
</template>
<style scoped lang="scss">
.logo-section {
  padding: 140px 24px;
  display: grid;
  justify-items: center;
  gap: 70px;
}
.label {
  color: #77c9e5;
  font-weight: 700;
}
.logo-section h2 {
  font-size: 56px;
}
.safe {
  display: flex;
  align-items: center;
  gap: 16px;
  background: repeating-linear-gradient(
    90deg,
    #eee 0 18px,
    transparent 18px 36px
  );
  padding: 30px 60px;
}
.safe strong {
  font-size: 42px;
}
.safe span {
  color: #ccc;
  font-size: 36px;
}
.sizes {
  display: flex;
  gap: 120px;
}
.sizes strong {
  font-size: 24px;
  border-left: 2px solid #e42924;
  padding-left: 8px;
}
.contrast {
  display: flex;
  gap: 28px;
}
.contrast strong {
  font-size: 26px;
  padding: 16px 28px;
  border: 1px solid #000;
}
.contrast strong:first-child {
  background: #000;
  color: #fff;
}
.icon-row {
  display: flex;
  gap: 80px;
}
.icon-row b {
  font-size: 120px;
  font-weight: 900;
  filter: contrast(2);
}
@media (max-width: 700px) {
  .sizes,
  .contrast {
    flex-direction: column;
    gap: 24px;
  }
  .logo-section h2 {
    font-size: 42px;
  }
}
</style>
