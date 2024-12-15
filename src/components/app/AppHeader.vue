<template>
  <header :class="$style.header">
    <h2 :class="$style.title">invite friends!</h2>
    <span :class="$style.subtitle">You and your friend will receive bonuses!</span>
  </header>
</template>

<script setup lang="ts"></script>

<style module>
.header {
  text-align: center;
  margin-bottom: 1rem;
  padding-block: 1.2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: var(--text-yellow);
  text-transform: uppercase;
  text-shadow: var(--text-shadow);
  font-family: 'Movavi', sans-serif;
}

.subtitle {
  font-size: 0.9rem;
  color: var(--text-white);
}
</style>
