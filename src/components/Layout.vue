<template>
<main class="uk-section uk-section-small">
  <div class="uk-container">
    <div class="uk-card uk-card-default uk-card-body">
      <sitemap/>
    </div>
  </div>

  <appmenu/>
</main>
</template>

<script>

// components
import appmenu from './Menu.vue';
import sitemap from './Sitemap.vue';

export default {
  components: {appmenu, sitemap}

};
</script>
