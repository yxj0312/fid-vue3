<template>
  <FidHeader />
  <main class="pt-16 flex flex-col flex-grow overflow-hidden">
    <router-view />
  </main>
  <FidFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FidHeader from './components/TheHeader.vue';
import FidFooter from './components/TheFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    FidHeader,
    FidFooter,
  },
})
</script>
