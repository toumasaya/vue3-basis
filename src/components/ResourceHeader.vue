<template>
  <teleport to="#teleportContent">
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
  </teleport>
  <header class="app-header">
    <h1 class="title">Keep Resources</h1>
    <p class="desc">Keep your resource at once place</p>
    <div class="buttons">
      <router-link
        :to="{ name: 'resourceHome' }"
        class="button is-primary is-outlined"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'resourceNew' }"
        class="button is-primary is-outlined"
        >New</router-link
      >
      <SettingsModal />
    </div>
  </header>
</template>

<script>
import UserPanel from '@/components/UserPanel';
import SettingsModal from '@/components/SettingsModal';

export default {
  components: {
    UserPanel,
    SettingsModal,
  },
};
</script>

<style lang="sass" scoped>
.buttons
  justify-content: center
  margin-top: 1rem
</style>
