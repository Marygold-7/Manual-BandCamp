
<script setup>
import { navItems } from "../../data/brandData";
const props = defineProps({
  active: { type: String, default: "Cómo nos expresamos" },
});
</script>
<template>
  <header class="brand-header">
    <a class="brand-logo" href="#top">BandCamp</a>
    <nav class="brand-nav" aria-label="Navegación principal">
      <a
        v-for="item in navItems"
        :key="item"
        :href="`#${item.toLowerCase().replaceAll(' ', '-')}`"
        :class="{ active: item === props.active }"
        >{{ item }}</a
      >
    </nav>
  </header>
</template>
<style scoped lang="scss">
.brand-header {
  position: sticky;
  top: 12px;
  z-index: 20;
  margin: 12px auto 0;
  max-width: 1380px;
  width: calc(100% - 32px);
  height: 34px;
  padding: 0 34px;
  border-radius: 4px;
  background: black;
  display: flex;
  align-items: center;
  gap: 52px;
}
.brand-logo {
  font-size: 28px;
  font-weight: 800;
  color: #000;
  text-decoration: none;
  white-space: nowrap;
}
.brand-nav {
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 18px;
}
.brand-nav a {
  font-size: 12px;
  color: white;
  text-decoration: none;
  white-space: nowrap;
}
.brand-nav a.active {
  color: #bc8ebf;
}
@media (max-width: 900px) {
  .brand-header {
    height: auto;
    align-items: flex-start;
    padding: 16px;
    flex-direction: column;
    gap: 12px;
  }
  .brand-nav {
    overflow: auto;
    width: 100%;
    justify-content: flex-start;
    padding-bottom: 6px;
  }
}
</style>
