<script setup>
defineProps({
  navProjects: {
    type: String,
    default: 'Projects',
  },
  navArea: {
    type: String,
    default: 'Area',
  },
  navResources: {
    type: String,
    default: 'Resources',
  },
  navArchives: {
    type: String,
    default: 'Archives',
  },
})

defineEmits([ 'hover' ])
</script>

<template>
  <ul class="nav">
    <li class="nav__link nav__link--projects" @mouseenter="$emit('hover', 0)">{{ navProjects }}</li>
    <li class="nav__link nav__link--area" @mouseenter="$emit('hover', 1)">{{ navArea }}</li>
    <li class="nav__link nav__link--resources" @mouseenter="$emit('hover', 2)">{{ navResources }}</li>
    <li class="nav__link nav__link--archives" @mouseenter="$emit('hover', 3)">{{ navArchives }}</li>
  </ul>
</template>

<style>
.nav {
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
  .nav {
    --circle-size: 75px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: unset;
    justify-items: center;
  }
}

.nav__link {
  display: grid;
  grid-template-columns: min-content max-content;
  gap: calc(var(--padding-vertical) / 2);
  align-items: center;
  font-size: var(--header-2-size);
  text-align: center;
  line-height: 1;
}

@media (min-width: 630px) {
  .nav__link {
    justify-self: center;
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: unset;
    justify-content: center;
  }
}

.nav__link:hover {
  cursor: pointer;
}

.nav__link:hover.nav__link--projects::before {
  background-color: var(--y-2023-color);
}

.nav__link:hover.nav__link--area::before {
  background-color: var(--y-2013-color);
}

.nav__link:hover.nav__link--resources::before {
  background-color: var(--y-2003-color);
}

.nav__link:hover.nav__link--archives::before {
  background-color: var(--y-1993-color);
}

.nav__link::before {
  justify-self: center;
  content: ' ';
  height: var(--circle-size);
  width: var(--circle-size);
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.nav__link--projects::before {
  background-color: var(--it-color);
}

.nav__link--area::before {
  background-color: var(--ego-color);
}

.nav__link--resources::before {
  background-color: var(--super-ego-color);
}

.nav__link--archives::before {
  background-color: var(--universe-color);
}
</style>