import Vue, { VNode } from 'vue';
import Dev from '@/serve-dev.vue';
import '../styles.css';

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
