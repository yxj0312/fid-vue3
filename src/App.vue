<template>
  <FidHeader />
  <router-view />
</template>

<script>
import FidHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    FidHeader,
  },
};
</script>
