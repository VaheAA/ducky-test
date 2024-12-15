<template>
  <div>
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
</script>

<style scoped></style>
