<template>
  <div> Page A111</div>
  <div v-for="item in routes" :key="item.path">
    {{ item.name }}
  </div>
  <hr />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import router from '../router';
  export default defineComponent({
    name: 'PageA',
    setup() {
      return {
        routes: router.getRoutes(),
      };
    },
  });
</script>
