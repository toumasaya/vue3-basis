<template>
  <div id="teleportContent"></div>
  <div class="section">
    <div class="container">
      <ResourceHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader';

export default {
  name: 'App',
  components: {
    ResourceHeader,
  },
};
</script>

<style lang="sass">
.app-header
  text-align: center
  margin-bottom: 2rem

.navbar-brand
  font-weight: bold
</style>
