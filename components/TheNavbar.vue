<script lang="ts" setup>
const isOpen = ref(false)
</script>

<template>
  <nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
    <div class="flex items-center justify-between">
      <a href="#">
        <img
          class="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt=""
        />
      </a>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button
          x-cloak
          @click="isOpen = !isOpen"
          type="button"
          class="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
          aria-label="toggle menu"
        >
          <svg
            x-show="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>

          <svg
            x-show="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
      x-cloak
      :class="[
        isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
      ]"
      class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
    >
      <div class="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
        <a class="text-gray-700 lg:mx-6 hover:text-blue-500" href="#">Home</a>
        <a class="text-gray-700 lg:mx-6 hover:text-blue-500" href="#"
          >Components</a
        >
        <a class="text-gray-700 lg:mx-6 hover:text-blue-500" href="#"
          >Pricing</a
        >
        <a class="text-gray-700 lg:mx-6 hover:text-blue-500" href="#"
          >Contact</a
        >
        <a class="text-gray-700 lg:mx-6 hover:text-blue-500" href="#">FAQ</a>
      </div>

      <a
        class="block px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md lg:mt-0 hover:bg-gray-100 lg:w-auto"
        href="#"
      >
        Contact Us
      </a>
    </div>
  </nav>
</template>
