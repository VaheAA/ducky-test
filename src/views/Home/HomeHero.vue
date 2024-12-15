<template>
  <div :class="$style.hero">
    <div :class="$style.col">
      <app-button label="More bonuses" />
    </div>
    <div :class="$style.col">
      <app-button label="Invite" variant="secondary" />
      <app-button variant="secondary">
        <template #icon>
          <AnchorIcon />
        </template>
      </app-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnchorIcon from '@/components/icons/AnchorIcon.vue'
import AppButton from '@/components/app/AppButton.vue'
</script>

<style module>
.hero {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero .col {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: relative;
  height: 145px;
  border: 2px solid var(--border-blue);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero .col:nth-of-type(1) {
  background-image: url('../../assets/images/img-1.jpg');
}

.hero .col:nth-of-type(2) {
  background-image: url('../../assets/images/img-2.jpg');
}

@media (min-width: 500px) {
  .hero {
    flex-direction: row;
  }

  .hero .col {
    flex-direction: row;
    width: 100%;
    align-items: end;
  }
}
</style>
