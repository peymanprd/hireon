<script lang="ts" setup>
const jobService = useJobService()

const { data } = await jobService.categories()
console.log(data.value)
</script>

<template>
  <div class="p-8 h-96">Home Page</div>
</template>
