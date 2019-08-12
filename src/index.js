import Vue from 'vue';
import sitemap from './components/Sitemap.vue';

new Vue({
  el: '#webb-app',
  template:'<main id="webb-app"><sitemap/></main>',
  components: {sitemap},
});
