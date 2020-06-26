import Vue from 'vue';
import { createPopper } from '@popperjs/core';

var script = Vue.extend({
  name: 'PopperVue',
  model: {
    prop: 'show'
  },
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    arrowClass: {
      type: [Object, Array, String],
      default: undefined
    },

    /**
     * Any options should follow popper documentation
     * https://popper.js.org/docs/v2/
     */
    options: {
      type: Object,
      default: () => {}
    },
    popperClass: {
      type: [Object, Array, String],
      default: undefined
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      vuePopperInstance: undefined
    };
  },

  watch: {
    options: {
      handler(options) {
        var _this$vuePopperInstan;

        (_this$vuePopperInstan = this.vuePopperInstance) === null || _this$vuePopperInstan === void 0 ? void 0 : _this$vuePopperInstan.setOptions(options);
      },

      deep: true
    }
  },

  mounted() {
    this.vuePopperInstance = createPopper(this.$refs.reference, this.$refs.popper, this.options);
    this.$emit('popper', this.vuePopperInstance);
  }

});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "popper-vue"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    ref: "popper",
    class: ['popper-vue__popper', _vm.popperClass]
  }, [_vm._t("popper"), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.arrow,
      expression: "arrow"
    }],
    staticClass: "popper-vue__arrow_wrapper",
    attrs: {
      "data-popper-arrow": ""
    }
  }, [_c('span', {
    class: ['popper-vue__arrow', _vm.arrowClass]
  })])], 2), _vm._v(" "), _c('div', {
    ref: "reference",
    staticClass: "popper-vue__reference",
    attrs: {
      "role": "button"
    }
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6bf3ad88_0", {
    source: ".popper-vue__popper[data-popper-placement^=top] .popper-vue__arrow_wrapper{bottom:-4px}.popper-vue__popper[data-popper-placement^=bottom] .popper-vue__arrow_wrapper{top:-4px}.popper-vue__popper[data-popper-placement^=right] .popper-vue__arrow_wrapper{left:-4px}.popper-vue__popper[data-popper-placement^=left] .popper-vue__arrow_wrapper{right:-4px}.popper-vue__popper[data-popper-reference-hidden]{visibility:hidden;pointer-events:none}.popper-vue__arrow{width:100%;height:100%;transform:rotate(45deg) scale(.7071)}.popper-vue__arrow,.popper-vue__arrow_wrapper{position:absolute;z-index:-1}.popper-vue__arrow_wrapper{width:8px;height:8px}.popper-vue__reference{display:inline-block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
const install = function installPopperVue(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('PopperVue', __vue_component__);
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
// eslint-disable-next-line @typescript-eslint/no-explicit-any


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
