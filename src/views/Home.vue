<template>
  <div />
</template>

<script>
import store from '../store';

export default {
  name: 'Home',
  mounted() {
    console.log('!"3');
    console.log(`${store.state}`);
  },
};
</script>
