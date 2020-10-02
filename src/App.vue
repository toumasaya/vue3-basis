<template>
  <div id="teleportContent"></div>
  <div :class="['resources-app', theme]">
    <div class="section">
      <div class="container">
        <ResourceHeader />
        <router-view />
      </div>
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
  data() {
    return {
      settings: this.getSettings(),
    };
  },
  provide() {
    return {
      getTheme: () => this.theme,
      setSettings: (settings) => (this.settings = settings),
    };
  },
  computed: {
    theme() {
      return this.settings?.theme ? this.settings.theme : '';
    },
  },
  methods: {
    getSettings() {
      const settings = localStorage.getItem('resources-settings');
      return settings ? JSON.parse(settings) : {};
    },
  },
};
</script>

<style lang="sass">
.app-header
  text-align: center
  margin-bottom: 2rem

.navbar-brand
  font-weight: bold

.resources-app
  min-height: 100vh

.resources-app.dark
  background: hsl(0, 0%, 14%)
</style>
