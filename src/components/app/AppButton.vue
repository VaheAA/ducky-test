<template>
  <button :class="[$style.button, $style[variantClass]]" :type="type">
    {{ label }}
    <slot name="icon"></slot>
    <slot name="secondary"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary'
  }>(),
  {
    variant: 'primary',
    type: 'button',
  },
)

const variantClass = computed(() => props.variant || 'primary')
</script>

<style module>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 25px;
  color: var(--text-white);
  cursor: pointer;
  text-shadow: var(--text-shadow);
  font-size: 0.75rem;
  font-family: 'Movavi', serif;
  position: relative;
  z-index: 10;
  max-width: 150px;
  width: 100%;
  height: 1.85rem;
}

button.primary {
  box-shadow:
    0 4px 0 var(--shadow-yellow-dark),
    0 4px 5px rgba(0, 0, 0, 0.3);
  background: var(--gradient-button-1);
}

.button.primary::before {
  box-shadow:
    0 -4px 0 var(--shadow-yellow-light),
    0 -4px 5px rgba(0, 0, 0, 0.3);
}

.button.primary::after {
  background-color: var(--shadow-yellow-light);
}

.button.secondary {
  box-shadow:
    0 4px 0 var(--secondary-blue),
    0 4px 5px rgba(0, 0, 0, 0.3);
  background: var(--gradient-button-2);
}

.button.secondary::before {
  box-shadow:
    0 -4px 0 var(--shadow-blue),
    0 -4px 5px rgba(0, 0, 0, 0.3);
}

.button.secondary::after {
  background-color: var(--shadow-blue);
}

.button::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-inline: 0.5rem;
  border-radius: 25px;
  z-index: -1;
}

button::after {
  content: '';
  position: absolute;
  right: 10px;
  top: -2px;
  width: 12px;
  height: 9px;
  rotate: 10deg;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .button {
    font-size: 1rem;
    padding: 0.3rem 0.75rem;
  }
}
</style>
