
<script setup>
import { appImages } from "../../data/brandData";
</script>
<template>
  <section id="aplicaciones" class="application-section">
    <div class="browser">
      <div class="bar">
        <i></i><i></i><i></i><span>https://bandcamp.com</span>
      </div>
    </div>
    <div class="mock-grid">
      <img
        v-for="img in appImages"
        :key="img"
        :src="img"
        alt="Aplicación BandCamp"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
.application-section {
  background: #1e1e1e;
  padding-top: 80px;
}
.browser {
  max-width: 760px;
  height: 320px;
  background: #fff;
  margin: 0 auto;
}
.bar {
  height: 72px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 24px;
}
.bar i {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ff5f57;
}
.bar i:nth-child(2) {
  background: #ffbd2e;
}
.bar i:nth-child(3) {
  background: #28c840;
}
.bar span {
  background: #fff;
  border-radius: 4px;
  padding: 12px 90px;
  color: #777;
}
.mock-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0;
}
.mock-grid img {
  width: 100%;
  height: 620px;
  object-fit: cover;
}
.mock-grid img:nth-child(3),
.mock-grid img:nth-child(4),
.mock-grid img:nth-child(5),
.mock-grid img:nth-child(6) {
  grid-column: 1/-1;
  height: 760px;
}
@media (max-width: 800px) {
  .browser {
    margin: 0 20px;
    height: 220px;
  }
  .mock-grid {
    grid-template-columns: 1fr;
  }
  .mock-grid img,
  .mock-grid img:nth-child(n) {
    height: 420px;
  }
}
</style>
