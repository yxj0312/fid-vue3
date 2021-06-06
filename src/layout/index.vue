<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
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
