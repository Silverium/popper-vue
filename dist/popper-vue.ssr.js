'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var Vue=_interopDefault(require('vue')),core=require('@popperjs/core');var script = Vue.extend({
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
      default: function _default() {}
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
  data: function data() {
    return {
      vuePopperInstance: undefined
    };
  },
  watch: {
    options: {
      handler: function handler(options) {
        var _this$vuePopperInstan;

        (_this$vuePopperInstan = this.vuePopperInstance) === null || _this$vuePopperInstan === void 0 ? void 0 : _this$vuePopperInstan.setOptions(options);
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.vuePopperInstance = core.createPopper(this.$refs.reference, this.$refs.popper, this.options);
    this.$emit('popper', this.vuePopperInstance);
  }
});function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "popper-vue"
  }, [_vm._ssrNode("<span" + _vm._ssrClass(null, ['popper-vue__popper', _vm.popperClass]) + _vm._ssrStyle(null, null, {
    display: _vm.show ? '' : 'none'
  }) + ">", "</span>", [_vm._t("popper"), _vm._ssrNode(" <span data-popper-arrow class=\"popper-vue__arrow_wrapper\"" + _vm._ssrStyle(null, null, {
    display: _vm.arrow ? '' : 'none'
  }) + "><span" + _vm._ssrClass(null, ['popper-vue__arrow', _vm.arrowClass]) + "></span></span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div role=\"button\" class=\"popper-vue__reference\">", "</div>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6bf3ad88_0", {
    source: ".popper-vue__popper[data-popper-placement^=top] .popper-vue__arrow_wrapper{bottom:-4px}.popper-vue__popper[data-popper-placement^=bottom] .popper-vue__arrow_wrapper{top:-4px}.popper-vue__popper[data-popper-placement^=right] .popper-vue__arrow_wrapper{left:-4px}.popper-vue__popper[data-popper-placement^=left] .popper-vue__arrow_wrapper{right:-4px}.popper-vue__popper[data-popper-reference-hidden]{visibility:hidden;pointer-events:none}.popper-vue__arrow{width:100%;height:100%;transform:rotate(45deg) scale(.7071)}.popper-vue__arrow,.popper-vue__arrow_wrapper{position:absolute;z-index:-1}.popper-vue__arrow_wrapper{width:8px;height:8px}.popper-vue__reference{display:inline-block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-6bf3ad88";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
var install = function installPopperVue(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('PopperVue', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

var GlobalVue = null;

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
exports.default=__vue_component__;