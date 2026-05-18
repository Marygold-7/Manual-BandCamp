
<script setup>defineProps({title:String,eyebrow:String,text:String,image:String,dark:Boolean})</script>
<template><article class="info-card" :class="{dark}"><img v-if="image" :src="image" :alt="title"><div><p v-if="eyebrow" class="eyebrow">{{eyebrow}}</p><h3>{{title}}</h3><p>{{text}}</p><slot /></div></article></template>
<style scoped lang="scss">.info-card{display:grid;grid-template-columns:180px 1fr;gap:20px;align-items:start}.info-card img{width:100%;aspect-ratio:1.2;object-fit:cover;border-radius:3px}.eyebrow{font-weight:700;margin:0}.info-card h3{font-size:32px;line-height:.9;margin:0 0 10px}.info-card p{font-size:14px;line-height:1.25}.dark{color:#fff}@media(max-width:700px){.info-card{grid-template-columns:1fr}.info-card h3{font-size:26px}}</style>
