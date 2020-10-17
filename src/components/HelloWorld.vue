<template>
  <h1 class="mt-8">
    {{ msg }}
  </h1>
  <button @click="count++">
    count is: {{ count }}
  </button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
