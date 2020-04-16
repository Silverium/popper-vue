<script lang="ts">
import Vue from "vue";
import PopperVue from "@/popper-vue.vue";
import Tooltip from "./tooltip.vue";

const positions = ["top", "right", "bottom", "left"];
export default Vue.extend({
  name: "ServeDev",
  components: {
    PopperVue,
    Tooltip
  },
  data() {
    return {
      showTooltip: true,
      positionCounter: 0,
      showClock: true
    };
  },
  methods: {
    setShowTooltip(value: boolean) {
      this.showTooltip = value;
    },
    toggleShowClock() {
      this.showClock = !this.showClock;
    }
  },
  created() {
    setInterval(() => {
      this.positionCounter += 1;
    }, 1000);
  },
  computed: {
    placement(): any {
      return positions[this.positionCounter % 4];
    }
  }
});
</script>

<template>
  <section id="app">
    <article class="py-12" />
    <h1 class="text-3xl">
      Examples built with <a
        href="https://www.npmjs.com/package/@soldeplata/popper-vue"
        target="_blank"
      >popper-vue </a>
    </h1>
    <section>
      <header>
        <h2>
          Tooltip with a boundary
        </h2>
      </header>
      <p>
        This tooltip is built setting the <strong> boundary </strong> option modifier of <a
          href="https://popper.js.org/"
          target="_blank"
        > popper </a>
      </p>
      <p>
        The framed element is the boundary of the green button, and when you scroll, you will see popper's power to
        reposition itself. When the reference (green button) is out of sight, the tooltip disappears
      </p>
      <p>
        Feel free to resize and scroll inside the frame 😄
      </p>
      <article
        class="container m-auto scrollable overflow-auto"
        id="tooltipContainer"
      >
        <section class="overflowed">
          <Tooltip
            :show="showTooltip"
            class="offset-300"
            boundary-id="tooltipContainer"
            :options="{placement: 'auto-start'}"
          >
            <button
              @click="setShowTooltip(true)"
              class="btn bg-green-400 text-white p-2 hover:bg-green-600"
            >
              I have a tooltip activated on click
            </button>
            <template #tooltip>
              <article class="flex flex-center">
                <p class="p-2"> I am the tooltiped element </p>
                <button
                  @click="setShowTooltip(false)"
                  class="ml-3 btn bg-red-500 hover:bg-red-700"
                >
                  X
                </button>
              </article>
            </template>
          </Tooltip>
        </section>
      </article>
    </section>

    <section>
      <header>
        <h2>Simple jumping popover </h2>
      </header>
      <p>
        This example consists in a popup element that changes position every second, in a clock-wise fashion.
      </p>
      <article class="container m-auto scrollable overflow-auto h-500 flex flex-center justify-center items-center">
        <popper-vue
          :show="showClock"
          :options="{placement,modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10], // separation from reference object
              },
            },
            
          ],}"
          popper-class="shadow-lg"
        >
          <template #popper>
            <article class="text-gray-500 bg-white rounded shadow-lg p-3">
              <div role="paragraph"> I am the popped element </div>
              <div class="py-8" />
              <div role="paragraph"> Size is not an issue </div>
            </article>
          </template>
          <button
            @click="toggleShowClock"
            class="btn bg-blue-500 text-white hover:bg-blue-700"
          >
            I have a tooltip toggled on click
          </button>
        </popper-vue>
      </article>
    </section>
  </section>
</template>
<style lang="postcss">
body {
  background-color: lightgoldenrodyellow;
}

.fade {
  display: inherit !important;
  /* override v-show display: none */
  transition: opacity 0.3s;

  &[style*="display: none;"] {
    pointer-events: none;
    /* disable user interaction */
    user-select: none;
    /* disable user selection */
    opacity: 0;
  }
}

.container {
  width: 600px;
  max-width: 80%;
  margin-top: 48px;
  border: 2px solid brown;
}

.scrollable {
  max-height: 320px;
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

.h-500 {
  height: 500px;
}
</style>