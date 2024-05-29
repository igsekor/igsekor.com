import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const siteName = ref('igsekor')
  const logoAlt = ref('igsekor logo')
  const navProjects = ref('Projects')
  const navArea = ref('Area')
  const navResources = ref('Resources')
  const navArchives = ref('Archives')
  const descriptionProjects = ref('I have a few projects which I\'m actively working on in my work or personal life that I take on with a certain goal in mind. In this site chapter I\'m collected current projects like that.')
  const descriptionArea = ref('I have areas of responsibility. It\'s important parts of my work and life that require ongoing attention. In this site chapter there are items like that.')
  const descriptionResources = ref('I have resources on a range of topics which are interested for me. I\'m constantly learning something, teaching something or research something which are collected in this site chapter.')
  const descriptionArchives = ref('I have archives, which include anything from the previous three chapters that is no longer active for me, but I\'m saving all my experience for the future in this site chapter.')

  return { siteName, logoAlt, navProjects, navArea, navResources, navArchives, descriptionProjects, descriptionArea, descriptionResources, descriptionArchives }
})
