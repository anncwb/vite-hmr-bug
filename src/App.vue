<template>
  <div>
    App
    <div v-for="item in routes" :key="item.path">
      {{ item.name }}
    </div>

    <br />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import router from './router';
  export default defineComponent({
    name: 'App',
    setup() {
      return {
        routes: router.getRoutes(),
      };
    },
  });
</script>
