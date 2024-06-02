<script lang="ts" setup></script>

<template>
  <div class="flex flex-col justify-between min-h-dvh">
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
