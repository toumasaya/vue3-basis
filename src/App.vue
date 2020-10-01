<template>
  <nav class="navbar is-black">
    <div class="navbar-brand">
      <router-link :to="{ name: 'resourceHome' }" class="navbar-item"
        >Brand Name</router-link
      >
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <suspense>
          <template #default>
            <UserPanel />
          </template>
          <template #fallback>Loading...</template>
        </suspense>
      </div>
    </div>
  </nav>
  <div class="section">
    <div class="container">
      <ResourceHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader';
import UserPanel from '@/components/UserPanel';

export default {
  name: 'App',
  components: {
    ResourceHeader,
    UserPanel,
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
