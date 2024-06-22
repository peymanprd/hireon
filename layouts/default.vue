<script lang="ts" setup></script>

<template>
  <div class="flex min-h-dvh flex-col justify-between">
    <section class="bg-white">
      <TheNavbar />
      <TheHero />
    </section>
    <main class="flex-grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
