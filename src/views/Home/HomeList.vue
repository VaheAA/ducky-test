<template>
  <div :class="$style.list">
    <div :class="$style['list-header']">
      <h2 :class="$style.title">List of your friends</h2>
      <app-button label="Claim">
        <template #icon>
          <coin-icon />
        </template>
        <template #secondary>
          <span>12.5K</span>
        </template>
      </app-button>
    </div>
    <div :class="$style['list-wrapper']">
      <ul :class="$style['list-data']">
        <li :class="$style['list-item']" v-for="item in listData" :key="item.id">
          <div :class="$style['list-item-image']">
            <img src="../../assets/images/question.png" :alt="item.name" />
          </div>
          <span>{{ item.name }}</span>
          <span>{{ item.level }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/app/AppButton.vue'
import CoinIcon from '@/components/icons/CoinIcon.vue'
import { DATA } from '@/shared/constants.ts'
import { computed } from 'vue'

const listData = computed(() => DATA)
</script>

<style module>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.list-header {
  max-width: 75%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.title {
  text-align: center;
  color: var(--text-white);
}

.list-wrapper {
  width: 100%;
  margin: 0 auto;
  border-radius: 0.75rem;
}

.list-data {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  padding-block: 0.75rem;
  padding-inline: 0.785rem;
  background: var(--main-gradient);
  border-radius: 15px;
  box-shadow:
    inset 4px 2px 1px rgba(0, 0, 0, 0.2),
    inset -4px 4px 1px rgba(0, 0, 0, 0.2);
}

.list-item {
  padding: 0.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  color: var(--text-white);
  border-bottom: 1px solid rgba(256, 255, 255, 0.25);
  box-shadow:
    inset 0px 11px 8px -10px rgba(0, 0, 0, 0.1),
    inset 0px -11px 8px -10px rgba(0, 0, 0, 0.1);
}

.list-item-image {
  background-color: var(--secondary-bg);
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  border-radius: 0.4rem;
  padding: 0.25rem;
}

.list-item span:last-of-type {
  margin-left: auto;
}
</style>
