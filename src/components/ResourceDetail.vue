<template>
  <div v-if="!resource?._id" class="card">
    <div class="card-content">
      <div class="content">
        <p>No resource is selected...</p>
      </div>
    </div>
  </div>
  <div v-else class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ resource?.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>
          {{ resource?.description }}
        </p>
        <span class="tag is-light">{{ resource?.type }}</span>
      </div>
    </div>
    <footer class="card-footer">
      <a :href="resource.link" target="_blank" class="card-footer-item">Link</a>
      <router-link
        :to="{ name: 'resourceDetail', params: { id: resource._id } }"
        class="card-footer-item"
        >Detail Page</router-link
      >
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      validator: (prop) => typeof prop === 'object' || prop === null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
