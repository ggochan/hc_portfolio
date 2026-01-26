<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div>
    <h1>404</h1>
    <p>Page not found</p>
    <button @click="router.push('/')">Go Home</button>
  </div>
</template>
