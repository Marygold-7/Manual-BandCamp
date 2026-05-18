
<template>
  <section id="retículas" class="grid-section">
    <h2>Retículas</h2>
    <div class="grid-samples">
      <article>
        <div class="grid-box cols-12"></div>
        <p>12 columnas / 20 margen</p>
      </article>
      <article>
        <div class="grid-box cols-8"></div>
        <p>8 columnas / 20 margen</p>
      </article>
      <article>
        <div class="grid-box cols-4"></div>
        <p>4 columnas / 20 margen</p>
      </article>
    </div>
    <div class="copy">
      <p>
        El sistema de retícula se basa en una estructura modular que permite
        organizar los contenidos de forma clara y coherente en distintos
        formatos.
      </p>
      <p>
        Este sistema facilita la flexibilidad del diseño sin perder orden,
        permitiendo adaptarse a diferentes soportes y necesidades.
      </p>
    </div>
    <div class="device desktop">
      <h3>Escritorio</h3>
      <p>
        Los fanáticos les pagaron a los artistas <b>1,68 mil millones</b> de
        dólares mediante Bandcamp y, solamente ayer, compraron
        <b>68.225 discos.</b>
      </p>
      <small
        >El sistema de retícula se adapta a distintos dispositivos manteniendo
        la coherencia visual.</small
      >
    </div>
    <div class="device-row">
      <div class="device tablet">
        <h3>Tablet</h3>
        <p>
          Los fanáticos les pagaron a los artistas <b>1,68 mil millones</b> de
          dólares mediante Bandcamp.
        </p>
      </div>
      <div class="device mobile">
        <h3>Móvil</h3>
        <p>
          Los fanáticos les pagaron a los artistas <b>1,68 mil millones</b> de
          dólares.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.grid-section {
  padding: 140px 7vw;
}
.grid-section h2 {
  text-align: center;
  font-size: 30px;
  margin-bottom: 70px;
}
.grid-samples {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr 0.45fr;
  gap: 64px;
  align-items: start;
}
.grid-box {
  height: 300px;
  border: 1px solid #000;
  background: repeating-linear-gradient(90deg, #fdeeee 0 32px, #fff 32px 52px);
}
.cols-8 {
  height: 350px;
}
.cols-4 {
  height: 300px;
}
.copy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  max-width: 980px;
  margin: 70px auto 110px;
  font-size: 19px;
}
.device {
  border: 1px solid #000;
  background: repeating-linear-gradient(90deg, #fdeeee 0 78px, #fff 78px 112px);
  display: grid;
  place-items: center;
  text-align: center;
  padding: 60px;
}
.desktop {
  min-height: 640px;
}
.desktop p {
  font-size: 54px;
  max-width: 900px;
}
.desktop small {
  max-width: 420px;
  font-size: 16px;
}
.device-row {
  display: flex;
  gap: 180px;
  justify-content: center;
  margin-top: 70px;
}
.tablet {
  width: 560px;
  height: 760px;
}
.tablet p {
  font-size: 28px;
}
.mobile {
  width: 300px;
  height: 640px;
}
.mobile p {
  font-size: 18px;
}
@media (max-width: 900px) {
  .grid-samples,
  .copy {
    grid-template-columns: 1fr;
  }
  .device-row {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .desktop p {
    font-size: 32px;
  }
  .tablet,
  .mobile {
    width: 100%;
    height: auto;
    min-height: 500px;
  }
}
</style>
