<script lang="ts">
import Vue from 'vue';
import PopperVue from '@/popper-vue.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    PopperVue,
  },
  data() {
    return {
      show: false,
      tooltipOptions: {
        placement: 'top-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8], // separation from reference object
            },
          },
          {
            name: 'arrow',
            options: {
              padding: 4, // 4px from the edges of the popper
            },
          },
        ],
      },
    };
  },
  computed: {
    
  },
});
</script>

<template>
  <div id="app">
    <popper-vue
      popper-class="fade"
      arrow
      arrow-class="black-and-white"
      :show="show"
      :options="tooltipOptions"
    >
      <button @click="show = !show">
        Toggle on click
      </button>
      <template #popper>
        <section class="black-and-white tooltip">
          I am the popped element
        </section>
      </template>
    </popper-vue>
  </div>
</template>
<style lang="scss">
.fade {
  display: inherit !important; /* override v-show display: none */
  transition: opacity 0.3s;

  &[style*='display: none;'] {
    pointer-events: none; /* disable user interaction */
    user-select: none; /* disable user selection */
    opacity: 0;
  }
}
.black-and-white {
  color: white;
  background-color: black;
}
.tooltip {
  border-radius: 4px;
  padding: 8px;
}
</style>
