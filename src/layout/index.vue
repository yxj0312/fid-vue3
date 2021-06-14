<template>
  <FidHeader />
  <!-- <main>
    <tabsView />
  </main>
  <FidFooter /> -->
</template>

<script lang="ts">
import { defineComponent, ref, h, computed } from 'vue'
import FidHeader from './header/index.vue'

export default defineComponent({
  name: 'Layout',

  components: {
    FidHeader
  },

  setup() {
    const test = () => {
      console.log('123')
    }
    return {
      test
    }
  }
})
</script>
