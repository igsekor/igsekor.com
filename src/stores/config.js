import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const siteName = ref('igsekor')
  const logoAlt = ref('igsekor logo')
  const navProjects = ref('Projects')
  const navArea = ref('Area')
  const navResources = ref('Resources')
  const navArchives = ref('Archives')

  return { siteName, logoAlt, navProjects, navArea, navResources, navArchives }
})
