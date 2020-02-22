<script lang="ts">
import Vue from 'vue';
import VuePopper from '@/vue-popper.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VuePopper
  }
});
</script>

<template>
  <div id="app">
    <vue-popper />
  </div>
</template>
