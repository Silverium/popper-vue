<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import PopperVue from './popper-vue.vue';

export default Vue.extend({
  name: 'TooltipExample',
  components: {
    PopperVue,
  },
  props: {
    show: {
      type: Boolean,
    },
    options: {
      type: Object,
      default: () => {},
    },
    boundaryId: {
      type: String,
    },
  },
  data() {
    return {
      tooltipOptions: _.merge(
        {
          placement: 'right',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10], // separation from reference object
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
        this.options,
      ),
    };
  },

  mounted() {
    if (this.boundaryId) {
      const boundary =
        document.getElementById(this.boundaryId) ?? document.body;
      const boundaryModifier = {
        name: 'preventOverflow',
        options: {
          boundary,
          rootBoundary: 'document.body',
        },
      };
      this.tooltipOptions.modifiers.push(boundaryModifier);
    }
  },
});
</script>

<template>
  <popper-vue
    popper-class="fade rounded-md shadow-lg"
    arrow
    arrow-class="bg-black text-white shadow-lg"
    :show="show"
    :options="tooltipOptions"
  >
    <slot />
    <template #popper>
      <section class="bg-black text-white rounded-md">
        <slot name="tooltip" />
      </section>
    </template>
  </popper-vue>
</template>
