
<template><div class="particle-cloud" aria-hidden="true"><span v-for="n in 160" :key="n" :style="{ '--x': `${(n*37)%100}%`, '--y': `${(n*19)%100}%`, '--s': `${1 + (n%4)}px`, '--o': `${0.15 + (n%7)/10}` }" /></div></template>
<style scoped lang="scss">.particle-cloud{position:relative;width:360px;height:130px;filter:blur(.15px);transform:rotate(-8deg)}.particle-cloud span{position:absolute;left:var(--x);top:var(--y);width:var(--s);height:var(--s);border-radius:50%;background:#000;opacity:var(--o)}@media(max-width:700px){.particle-cloud{width:220px;height:90px}}</style>
