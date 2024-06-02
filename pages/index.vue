<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()

async function getJobs() {
  const res = await $fetch(`${runtimeConfig.public.apiBaseUrl}/categories`, {
    withCredentials: false,
    crossorigin: false,
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
  console.log(res)
}
if (import.meta.client) {
  getJobs()
}
</script>

<template>
  <div class="p-8 h-96">Home Page</div>
</template>
