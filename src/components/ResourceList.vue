<template>
  <a class="panel-block">
    <header class="header">
      <h3 class="title is-size-6">Resource 1</h3>
      <span class="tag is-info">Type</span>
    </header>
    <p class="desc">Brief description</p>
  </a>
  <a class="panel-block">
    <header class="header">
      <h3 class="title is-size-6">Resource 2</h3>
      <span class="tag is-info">Type</span>
    </header>
    <p class="desc">Brief description</p>
  </a>
  <a class="panel-block">
    <header class="header">
      <h3 class="title is-size-6">Resource 3</h3>
      <span class="tag is-info">Type</span>
    </header>
    <p class="desc">Brief description</p>
  </a>
  {{ resources }}
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
