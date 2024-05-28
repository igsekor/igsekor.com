<script setup>
import { computed } from 'vue'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()
const navProjects = computed(() => configStore.navProjects)
const navArea = computed(() => configStore.navArea)
const navResources = computed(() => configStore.navResources)
const navArchives = computed(() => configStore.navArchives)
</script>

<template>
  <main class="home">
    <ul class="home__nav">
      <li class="home__link home__link--projects">{{ navProjects }}</li>
      <li class="home__link home__link--area">{{ navArea }}</li>
      <li class="home__link home__link--resources">{{ navResources }}</li>
      <li class="home__link home__link--archives">{{ navArchives }}</li>
    </ul>
    <div class="home__logo"></div>
  </main>
</template>

<style>
.home {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--padding-vertical);
  align-items: center;
  justify-content: flex-end;
  min-height: calc(100vh - var(--header-1-size) - var(--border-spacer) * 3 - var(--border-header) * 3 - (var(--padding-vertical) - var(--border-spacer)) * 2);
  padding: var(--padding-vertical) 0px 0px;
}

@media (min-width: 630px) {
  .home {
    gap: 0px;
    justify-content: center;
  }
}

.home__logo {
  --logo-size: 377px;
  align-self: center;
  justify-self: center;
  display: block;
  width: min(var(--logo-size), 75.625vw);
  height: min(var(--logo-size), 75.625vw);;
  background-image: url(/logo.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

@media (min-width: 630px) {
  .home__logo {
    flex: 1;
  }
}

.home__nav:has(.home__link--projects:hover) ~ .home__logo {
  background-image: url(/logo-2023.svg);
}

.home__nav:has(.home__link--area:hover) ~ .home__logo {
  background-image: url(/logo-2013.svg);
}

.home__nav:has(.home__link--resources:hover) ~ .home__logo {
  background-image: url(/logo-2003.svg);
}

.home__nav:has(.home__link--archives:hover) ~ .home__logo {
  background-image: url(/logo-1993.svg);
}

.home__nav {
  --circle-size: 44px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: var(--padding-vertical);
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
}

@media (min-width: 630px) {
  .home__nav {
    --circle-size: 75px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: unset;
  }
}

.home__link {
  display: grid;
  grid-template-columns: min-content max-content;
  gap: calc(var(--padding-vertical) / 2);
  align-items: center;
  font-size: var(--header-2-size);
  text-align: center;
  line-height: 1;
}

.home__link:hover {
  cursor: pointer;
}

.home__link:hover.home__link--projects::before {
  background-color: var(--y-2023-color);
}

.home__link:hover.home__link--area::before {
  background-color: var(--y-2013-color);
}

.home__link:hover.home__link--resources::before {
  background-color: var(--y-2003-color);
}

.home__link:hover.home__link--archives::before {
  background-color: var(--y-1993-color);
}

@media (min-width: 630px) {
  .home__link {
    justify-self: center;
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: unset;
    justify-content: center;
  }
}

.home__link::before {
  justify-self: center;
  content: ' ';
  height: var(--circle-size);
  width: var(--circle-size);
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.home__link--projects::before {
  background-color: var(--it-color);
}

.home__link--area::before {
  background-color: var(--ego-color);
}

.home__link--resources::before {
  background-color: var(--super-ego-color);
}

.home__link--archives::before {
  background-color: var(--universe-color);
}
</style>

