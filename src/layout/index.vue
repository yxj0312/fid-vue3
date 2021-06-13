<template>
  <FidHeader />
  <main>
    <tabsView />
  </main>
  <FidFooter />
</template>

<script lang="ts">
import { defineComponent, ref, h, computed } from 'vue'

export default defineComponent({
  name: 'Layout',

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
