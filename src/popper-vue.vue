<script lang="ts">
import Vue from 'vue';
import {createPopper, Instance} from '@popperjs/core';

interface PopperVueData {
  vuePopperInstance: Instance|undefined;
}

export default Vue.extend({
  name: 'PopperVue',
  model: {
    prop: 'show',
    event: 'change',
  },
  props: {
    arrow: {
      type: Boolean,
      default: false,
    },
    arrowClass: {
      type: [Object, Array, String],
      default: undefined,
    },
    /**
     * Any options should follow popper documentation
     * https://popper.js.org/docs/v2/
     */
    options: {
      type: Object,
      default: () => {},
    },
    popperClass: {
      type: [Object, Array, String],
      default: undefined,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data(): PopperVueData {
    return {
      vuePopperInstance: undefined,
    };
  },
  watch: {
    options: {
      handler(options) {
        this.vuePopperInstance?.setOptions(options);
      },
      deep: true,
    },
  },
  mounted() {
    this.vuePopperInstance = createPopper(
      this.$refs.reference as HTMLElement,
      this.$refs.popper as HTMLElement,
      this.options
    );
    this.$emit('popper', this.vuePopperInstance);
  },
});
</script>

<template>
  <div class="popper-vue">
    <span
      v-show="show"
      ref="popper"
      :class="['popper-vue__popper', popperClass]"
    >
      <slot name="popper" />
      <span v-show="arrow" class="popper-vue__arrow_wrapper" data-popper-arrow>
        <span :class="['popper-vue__arrow', arrowClass]" />
      </span>
    </span>
    <span ref="reference" role="button">
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
$arrow-size: 8px !default;
$arrow-half: $arrow-size / 2;
.popper-vue {
  $block: &;

  &__popper {
    &[data-popper-placement^='top'] {
      #{$block}__arrow_wrapper {
        bottom: -$arrow-half;
      }
    }

    &[data-popper-placement^='bottom'] {
      #{$block}__arrow_wrapper {
        top: -$arrow-half;
      }
    }

    &[data-popper-placement^='right'] {
      #{$block}__arrow_wrapper {
        left: -$arrow-half;
      }
    }

    &[data-popper-placement^='left'] {
      #{$block}__arrow_wrapper {
        right: -$arrow-half;
      }
    }
  }

  &__arrow {
    &,
    &_wrapper {
      position: absolute;
      z-index: -1;
    }

    width: 100%;
    height: 100%;
    transform: rotate(45deg) scale(0.7071); // 1 / sqrt(2) => diagonals are bigger than sides

    &_wrapper {
      width: $arrow-size; // sqrt(2)
      height: $arrow-size;
    }
  }
}
</style>
