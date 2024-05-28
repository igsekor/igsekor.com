<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
const siteName = computed(() => configStore.siteName)
</script>

<template>
  <header class="header">
    <section class="header__name">{{ siteName }}</section>
    <section class="header__year">{{ new Date().getFullYear() }}</section>
  </header>
</template>

<style>
.header {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: end;
  justify-content: space-between;
  padding-bottom: var(--border-spacer);
  border-bottom: var(--border-header) solid var(--primary-color);
  width: 100%;
}

.header__name {
  font-size: var(--header-1-size);
}

.header__year {
  font-size: var(--year-size);
}
</style>
