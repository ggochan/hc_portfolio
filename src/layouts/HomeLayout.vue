<script setup lang="ts"></script>
<template>
  <div class="w-full">
    <div class="mx-auto flex flex-col">
      <main class="bg-surface-point flex-1">
        <router-view />
      </main>
      <footer class="bg-secondary-light px-10 py-16 lg:px-20 lg:py-20"></footer>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
