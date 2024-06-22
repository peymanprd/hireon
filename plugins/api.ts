export default defineNuxtPlugin(() => {
  const modules = {}

  return {
    provide: {
      api: modules
    }
  }
})
