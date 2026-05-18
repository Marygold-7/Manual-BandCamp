
<script setup>
import ParticleCloud from "../ui/ParticleCloud.vue";
</script>
<template>
  <section id="motion" class="motion-section">
    <h2>Curvas de velocidad</h2>
    <div class="curves">
      <p>
        A pesar de la variedad, el movimiento se entiende en conjunto. Las
        partículas se agrupan, se desplazan y evolucionan como una bandada.
      </p>
      <div class="chart"><span></span><span></span><span></span></div>
    </div>
    <h2>Pantalla de carga</h2>
    <div class="loader"><ParticleCloud /></div>
    <h2>Bandada</h2>
    <div class="bandada"><ParticleCloud /></div>
    <div class="club-card">
      <h2>Card BandCamp Clubs</h2>
      <article>
        <ParticleCloud /><small>NOW PLAYING</small>
        <h3>Jazz-ish Jazz</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          sem sed lacus rhythmus mollis.
        </p>
        <button>Explorar sonido</button>
      </article>
    </div>
    <h2>Animaciones isotipo</h2>
    <div class="icons"><b>B</b><b>B</b><b>B</b><b>B</b></div>
  </section>
</template>
<style scoped lang="scss">
.motion-section {
  padding: 140px 0;
}
.motion-section > h2 {
  text-align: center;
  margin: 0 0 70px;
}
.curves {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 80px;
  max-width: 1000px;
  margin: 0 auto 170px;
  align-items: center;
}
.chart {
  height: 320px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: linear-gradient(#eee 1px, transparent 1px),
    linear-gradient(90deg, #eee 1px, transparent 1px);
  background-size: 60px 60px;
  position: relative;
}
.chart span {
  position: absolute;
  width: 85%;
  height: 80%;
  border-top: 4px solid #ddd;
  border-radius: 50%;
  left: 30px;
  top: 40px;
  transform: rotate(-15deg);
}
.chart span:nth-child(2) {
  top: 90px;
  transform: rotate(-35deg);
}
.chart span:nth-child(3) {
  top: 140px;
  transform: rotate(-5deg);
}
.loader {
  height: 420px;
  display: grid;
  place-items: center;
}
.bandada {
  height: 540px;
  display: flex;
  align-items: center;
  padding-left: 8vw;
}
.club-card {
  background: linear-gradient(100deg, #f3f1e6, #eef6ef);
  padding: 70px 0 90px;
  display: grid;
  justify-items: center;
}
.club-card article {
  width: 310px;
  background: #fff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.18);
}
.club-card h3 {
  font-size: 34px;
  margin: 8px 0;
}
.club-card button {
  background: #000;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 12px 16px;
}
.icons {
  display: grid;
  grid-template-columns: repeat(2, 120px);
  gap: 20px;
  justify-content: center;
}
.icons b {
  font-size: 120px;
  line-height: 1;
}
@media (max-width: 800px) {
  .curves {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
  .chart {
    height: 240px;
  }
  .bandada {
    padding: 0;
    justify-content: center;
  }
}
</style>
