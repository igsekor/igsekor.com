<script setup>
import { ref, computed } from 'vue'
import { useConfigStore } from '@/stores/config'

import NavigationBlock from '../components/NavigationBlock.vue'

const navIndex = ref(0)

const configStore = useConfigStore()

const navProjects = computed(() => configStore.navProjects)
const navArea = computed(() => configStore.navArea)
const navResources = computed(() => configStore.navResources)
const navArchives = computed(() => configStore.navArchives)

const descriptionProjects = computed(() => configStore.descriptionProjects)
const descriptionArea = computed(() => configStore.descriptionArea)
const descriptionResources = computed(() => configStore.descriptionResources)
const descriptionArchives = computed(() => configStore.descriptionArchives)

function getHint() {
  switch (navIndex.value) {
    case 0: return descriptionProjects
    case 1: return descriptionArea
    case 2: return descriptionResources
    case 3: return descriptionArchives
  }
}
</script>

<template>
  <main class="home">
    <NavigationBlock class="home__nav" :navProjects="navProjects" :nav-area="navArea" :nav-resources="navResources" :nav-archives="navArchives" @hover="(index) => { navIndex = index }" />
    <div class="home__logo">
      <p class="home__description">{{ getHint() }}</p>
    </div>
  </main>
</template>

<style>
.home {
  --logo-size: 377px;
  --min-logo-width: 75.625vw;
  display: flex;
  flex-direction: column-reverse;
  gap: var(--padding-vertical);
  align-items: start;
  justify-content: flex-end;
  min-height: calc(100vh - var(--header-1-size) - var(--border-spacer) * 3 - var(--border-header) * 3 - (var(--padding-vertical) - var(--border-spacer)) * 2);
  padding: var(--padding-vertical) calc((100vw - min(var(--logo-size), var(--min-logo-width))) / 2);
}

@media (min-width: 630px) {
  .home {
    gap: 0px;
    align-items: center;
    justify-content: center;
  }
}

.home__logo {
  align-self: center;
  justify-self: center;
  display: grid;
  align-items: end;
  min-width: min(var(--logo-size), 75.625vw);
  min-height: min(var(--logo-size), 75.625vw);
  padding: var(--padding-vertical) 0px;
  background-image: url(/logo.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: min(var(--logo-size), 75.625vw);
}

@media (min-width: 630px) {
  .home__logo {
    flex: 1;
  }
}

.home__description {
  display: none;
  text-align: center;
  font-size: var(--paragraph-size);
  width: min(630px, 75.625vw);
}

@media (min-width: 630px) {
  .home__nav:has(.nav__link:hover) ~ .home__logo > .home__description {
    display: block;
  }
}

.home__nav:has(.nav__link--projects:hover) ~ .home__logo {
  background-image: url(/logo-2023.svg);
}

@media (min-width: 630px) {
  .home__nav:has(.nav__link--projects:hover) ~ .home__logo > .home__description {
    color: var(--y-2023-color);
  }
}

.home__nav:has(.nav__link--area:hover) ~ .home__logo {
  background-image: url(/logo-2013.svg);
}

@media (min-width: 630px) {
  .home__nav:has(.nav__link--area:hover) ~ .home__logo > .home__description {
    color: var(--y-2013-color);
  }
}

.home__nav:has(.nav__link--resources:hover) ~ .home__logo {
  background-image: url(/logo-2003.svg);
}

@media (min-width: 630px) {
  .home__nav:has(.nav__link--resources:hover) ~ .home__logo > .home__description {
    color: var(--y-2003-color);
  }
}

@media (min-width: 630px) {
  .home__nav:has(.nav__link--archives:hover) ~ .home__logo {
    background-image: url(/logo-1993.svg);
  }
}

@media (min-width: 630px) {
  .home__nav:has(.nav__link--archives:hover) ~ .home__logo > .home__description {
    color: var(--y-1993-color);
  }
}
</style>

