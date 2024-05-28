<script setup>
import { RouterView } from 'vue-router'
import HeaderBlock from './components/HeaderBlock.vue'
</script>

<template>
  <HeaderBlock class="app__header" />
  <RouterView class="app__main"/>
</template>

<style>
.app {
  padding: calc(var(--padding-vertical) - var(--border-spacer)) calc(var(--padding-horizontal) - var(--border-spacer));
  margin: 0px;
  border: var(--border-spacer) solid var(--primary-color);
  background-color: var(--back-color);
  font-family: var(--font-family);
}
</style>
