(function(e){function t(t){for(var n,a,i=t[0],p=t[1],l=t[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var p=o[i];0!==r[p]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={app:0},s=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/popper-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=p;s.push(["6e3f","chunk-vendors"]),o()})({"2f51":function(e,t,o){},"6e3f":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"app"}},[o("article",{staticClass:"py-12"}),e._m(0),o("section",[e._m(1),e._m(2),o("p",[e._v(" The framed element is the boundary of the green button, and when you scroll, you will see popper's power to reposition itself. When the reference (green button) is out of sight, the tooltip disappears ")]),o("p",[e._v(" Feel free to resize and scroll inside the frame 😄 ")]),o("article",{staticClass:"container m-auto scrollable overflow-auto",attrs:{id:"tooltipContainer"}},[o("section",{staticClass:"overflowed"},[o("Tooltip",{staticClass:"offset-300",attrs:{show:e.showTooltip,"boundary-id":"tooltipContainer",options:{placement:"auto-start"}},scopedSlots:e._u([{key:"tooltip",fn:function(){return[o("article",{staticClass:"flex flex-center"},[o("p",{staticClass:"p-2"},[e._v(" I am the tooltiped element ")]),o("button",{staticClass:"ml-3 btn bg-red-500 hover:bg-red-700",on:{touchstart:function(t){return e.setShowTooltip(!1)}},nativeOn:{click:function(t){return e.setShowTooltip(!1)}}},[e._v(" X ")])])]},proxy:!0}])},[o("button",{staticClass:"btn bg-green-400 text-white p-2 hover:bg-green-600",on:{touchstart:function(t){return e.setShowTooltip(!0)}},nativeOn:{click:function(t){return e.setShowTooltip(!0)}}},[e._v(" I have a tooltip activated on click ")])])],1)])]),o("section",[e._m(3),o("p",[e._v(" This example consists in a popup element that changes position every second, in a clock-wise fashion. ")]),o("article",{staticClass:"container m-auto scrollable overflow-auto h-500 flex flex-center justify-center items-center"},[o("popper-vue",{attrs:{show:e.showClock,options:{placement:e.placement,modifiers:[{name:"offset",options:{offset:[0,10]}}]},"popper-class":"shadow-lg"},scopedSlots:e._u([{key:"popper",fn:function(){return[o("article",{staticClass:"text-gray-500 bg-white rounded shadow-lg p-3"},[o("div",{attrs:{role:"paragraph"}},[e._v(" I am the popped element ")]),o("div",{staticClass:"py-8"}),o("div",{attrs:{role:"paragraph"}},[e._v(" Size is not an issue ")])])]},proxy:!0}])},[o("button",{staticClass:"btn bg-blue-500 text-white hover:bg-blue-700",on:{click:e.toggleShowClock}},[e._v(" I have a tooltip toggled on click ")])])],1)])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",{staticClass:"text-3xl"},[e._v(" Examples built with "),o("a",{attrs:{href:"https://www.npmjs.com/package/@soldeplata/popper-vue",target:"_blank"}},[e._v("popper-vue ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("h2",[e._v(" Tooltip with a boundary ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" This tooltip is built setting the "),o("strong",[e._v(" boundary ")]),e._v(" option modifier of "),o("a",{attrs:{href:"https://popper.js.org/",target:"_blank"}},[e._v(" popper ")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("h2",[e._v("Simple jumping popover ")])])}],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"popper-vue"},[o("span",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],ref:"popper",class:["popper-vue__popper",e.popperClass]},[e._t("popper"),o("span",{directives:[{name:"show",rawName:"v-show",value:e.arrow,expression:"arrow"}],staticClass:"popper-vue__arrow_wrapper",attrs:{"data-popper-arrow":""}},[o("span",{class:["popper-vue__arrow",e.arrowClass]})])],2),o("div",{ref:"reference",staticClass:"popper-vue__reference",attrs:{role:"button"}},[e._t("default")],2)])},i=[],p=o("39c3"),l=n["a"].extend({name:"PopperVue",model:{prop:"show"},props:{arrow:{type:Boolean,default:!1},arrowClass:{type:[Object,Array,String],default:void 0},options:{type:Object,default:function(){}},popperClass:{type:[Object,Array,String],default:void 0},show:{type:Boolean,default:!1}},data:function(){return{vuePopperInstance:void 0}},watch:{options:{handler:function(e){var t;null===(t=this.vuePopperInstance)||void 0===t||t.setOptions(e)},deep:!0}},mounted:function(){this.vuePopperInstance=Object(p["a"])(this.$refs.reference,this.$refs.popper,this.options),this.$emit("popper",this.vuePopperInstance)}}),c=l,u=(o("e8ec"),o("2877")),f=Object(u["a"])(c,a,i,!1,null,null,null),d=f.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("popper-vue",{attrs:{"popper-class":"fade rounded-md shadow-lg",arrow:"","arrow-class":"bg-black text-white shadow-lg",show:e.show,options:e.tooltipOptions},scopedSlots:e._u([{key:"popper",fn:function(){return[o("section",{staticClass:"bg-black text-white rounded-md"},[e._t("tooltip")],2)]},proxy:!0}],null,!0)},[e._t("default")],2)},v=[],w=o("2ef0"),m=o.n(w),b=n["a"].extend({name:"TooltipExample",components:{PopperVue:d},props:{show:{type:Boolean},options:{type:Object,default:function(){}},boundaryId:{type:String}},data:function(){return{tooltipOptions:m.a.merge({placement:"right",modifiers:[{name:"offset",options:{offset:[0,10]}},{name:"arrow",options:{padding:4}}]},this.options)}},mounted:function(){if(this.boundaryId){var e,t=null!==(e=document.getElementById(this.boundaryId))&&void 0!==e?e:document.body,o={name:"preventOverflow",options:{boundary:t,rootBoundary:"document.body"}};this.tooltipOptions.modifiers.push(o)}}}),_=b,g=Object(u["a"])(_,h,v,!1,null,null,null),y=g.exports,C=["top","right","bottom","left"],x=n["a"].extend({name:"ServeDev",components:{PopperVue:d,Tooltip:y},data:function(){return{showTooltip:!0,positionCounter:0,showClock:!0}},methods:{setShowTooltip:function(e){this.showTooltip=e},toggleShowClock:function(){this.showClock=!this.showClock}},created:function(){var e=this;setInterval((function(){e.positionCounter+=1}),1e3)},computed:{placement:function(){return C[this.positionCounter%4]}}}),O=x,k=(o("7d7a"),Object(u["a"])(O,r,s,!1,null,null,null)),j=k.exports;o("2f51");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},"7d7a":function(e,t,o){"use strict";var n=o("869e"),r=o.n(n);r.a},"869e":function(e,t,o){},bd93:function(e,t,o){},e8ec:function(e,t,o){"use strict";var n=o("bd93"),r=o.n(n);r.a}});
//# sourceMappingURL=app.fe6adb68.js.map