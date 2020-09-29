<template>
  <a class="panel-block" v-for="resource in resources" :key="resource.id">
    <header class="header">
      <h3 class="title is-size-6">{{ resource.title }}</h3>
      <span class="tag is-link">{{ resource.type }}</span>
    </header>
    <p class="desc">{{ resource.description }}</p>
  </a>
</template>

<script>
export default {
  props: {
    resources: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="sass" scoped>
.panel-block
  flex-direction: column
  .header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding-bottom: 7px
    .title
      margin-bottom: 0
  .desc
    width: 100%
    color: hsl(0, 0%, 71%)
</style>
