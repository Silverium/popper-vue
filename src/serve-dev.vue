<script lang="ts">
import Vue from 'vue';
import PopperVue from '@/popper-vue.vue';
import Tooltip from './tooltip.vue';
export default Vue.extend({
  name: 'ServeDev',
  components: {
    PopperVue,
    Tooltip,
  },
  data() {
    return {
      show: false,
    };
  },
});
</script>

<template>
  <div id="app">
    <div class="separator" />
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sint
    nulla provident error dolor quam, ipsam repudiandae pariatur omnis nisi
    quibusdam vel! Nemo deleniti quae, facilis deserunt maiores ex sint!
    <section class="container center scrollable" id="tooltipContainer">
      <section class="overflowed">
        <Tooltip
          :show="show"
          class="offset-300"
          boundary-id="tooltipContainer"
          :options="{placement: 'auto-start'}"
          @mouseenter.native="() => (show = true)"
        >
          I have a tooltip activated on mouse enter
          <template #tooltip>
            <div @mouseleave="show = false">
              I am the tooltiped element, closed on mouse leave
            </div>
          </template>
        </Tooltip>
      </section>
    </section>
  </div>
</template>
<style lang="scss">
body {
  background-color: lightgoldenrodyellow;
}
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
.container {
  width: 600px;
  max-width: 80%;
  margin-top: 48px;
  border: 2px solid brown;
}
.scrollable {
  max-height: 320px;
  overflow: auto;
}
.center {
  margin: auto;
}
.separator {
  padding-top: 3em;
}
.overflowed {
  width: 2000px;
  height: 2000px;
}
.offset {
  &-300 {
    margin-left: 300px;
    margin-top: 300px;
  }
}
</style>
