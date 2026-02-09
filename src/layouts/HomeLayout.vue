<script setup lang="ts">
import SideNav from '@/components/layout/nav/SideNav.vue'
import Footer from '@/components/layout/footer/Footer.vue'
</script>
<template>
  <div class="relative flex flex-col" id="container">
    <main class="bg-surface-point flex-1">
      <router-view />
    </main>
    <Footer id="contact" />
    <SideNav />
  </div>
</template>
<style lang="scss" scoped></style>
