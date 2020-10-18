<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700
            focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            @click="state.isOn = !state.isOn"
          >
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              :class="{ hidden: state.isOn }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="h-6 w-6"
              :class="{ hidden: !state.isOn }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://stc.fidcdn.net/assets/img-redesign/logo-peek-und-cloppenburg.03c0.svg"
              alt="logo"
            >
            <img
              class="hidden lg:block h-8 w-auto"
              src="https://stc.fidcdn.net/assets/img-redesign/logo-peek-und-cloppenburg.03c0.svg"
              alt="logo"
            >
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >Dashboard</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'TheHeader',
  setup() {
    const state = reactive({
      isOn: false,
    });
    return {
      state,
    };
  },
};
</script>

<style scoped>

</style>
