<script lang="ts">
  import Vue from 'vue';
  import PopperVue from '@/popper-vue.vue';
  import Tooltip from './tooltip.vue';

  const positions = [
    'top',
    'right',
    'bottom',
    'left',
  ]
  export default Vue.extend({
    name: 'ServeDev',
    components: {
      PopperVue,
      Tooltip,
    },
    data() {
      return {
        showTooltip: true,
        positionCounter: 0,
        showClock: true,
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
      }, 1000)
    },
    computed: {
      placement(): any {
        return positions[this.positionCounter % 4]
      }
    },
  });
</script>

<template>
  <section id="app">
    <div class="separator" />
    <h1>
      Examples built with <a href="https://www.npmjs.com/package/@soldeplata/popper-vue" target="_blank">popper-vue </a>
    </h1>
    <section>
      <header>
        <h2>
          Tooltip with a boundary
        </h2>
      </header>
      <p>
        This tooltip is built setting the <strong> boundary </strong> option modifier of <a
          href="https://popper.js.org/" target="_blank"> popper </a>
      </p>
      <p>
        The framed element is the boundary of the green button, and when you scroll, you will see popper's power to
        reposition itself. When the reference (green button) is out of sight, the tooltip disappears
      </p>
      <p>
        Feel free to resize and scroll inside the frame 😄
      </p>
      <article class="container margin-auto scrollable" id="tooltipContainer">
        <section class="overflowed">
          <Tooltip :show="showTooltip" class="offset-300" boundary-id="tooltipContainer" :options="{placement: 'auto-start'}">
            <button @click="setShowTooltip(true)" @touchstart="setShowTooltip(true)" class="btn btn-green">
              I have a tooltip activated on click
            </button>
            <template #tooltip>
              <article class="flex">
                <p> I am the tooltiped element </p>
                <button @click="setShowTooltip(false)" class="ml btn btn-red">X</button>
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
      <article class="container margin-auto scrollable h-500 flex flex-center">
        <popper-vue :show="showClock" :options="{placement,modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 10], // separation from reference object
              },
            },
            
          ],}" popper-class="shadow">
          <button @click="toggleShowClock" class="btn btn-yellow">
            I have a tooltip toggled on click
          </button>
          <template #popper>
            <article class="white-and-grey tooltip">
              <div role="paragraph"> I am the popped element </div>
              <div class="separator" />
              <div role="paragraph"> Size is not an issue </div>
            </article>
          </template>
        </popper-vue>
      </article>
    </section>
  </section>
</template>
<style lang="scss">
  body {
    background-color: lightgoldenrodyellow;
  }

  .fade {
    display: inherit !important;
    /* override v-show display: none */
    transition: opacity 0.3s;

    &[style*='display: none;'] {
      pointer-events: none;
      /* disable user interaction */
      user-select: none;
      /* disable user selection */
      opacity: 0;
    }
  }

  .black-and-white {
    color: white;
    background-color: black;
  }

  .white-and-grey {
    color: darkgray;
    background-color: white;
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

  .margin-auto {
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

  .h-500 {
    height: 500px;
  }

  .ml,
  .mx {
    margin-left: 12px;
  }

  .mr,
  .mx {
    margin-right: 12px;
  }

  .flex {
    display: flex;

    &-center {
      align-items: center;
      justify-content: center;
    }
  }

  @mixin button-bg($bg) {
    background: $bg;

    &:hover {
      background: darken($bg, 8%);
      transition: all 0.3s ease;
    }

    &:active {
      background: darken($bg, 25%);
    }
  }

  .btn {
    color: white;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 1em;


    &-green {
      @include button-bg(#2ecc71);
    }

    &-blue {
      @include button-bg(#3498db);
    }

    &-yellow {
      @include button-bg(#f1c40f);
    }

    &-red {
      @include button-bg(#e74c3c);
    }
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .shadow {
    box-shadow: 0px 0px 25px 6px rgba(0, 0, 0, 0.52);
  }
</style>