<template>
  <a
    v-for="resource in resources"
    :key="resource.id"
    @click="onItemClick(resource)"
    :class="['panel-block', activeItemClass(resource)]"
  >
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
    activeId: String,
  },
  computed: {
    activeItemClass() {
      // return function(resource) {
      //   return resource.id === this.activeId ? 'is-active' : '';
      // };
      return (resource) => (resource.id === this.activeId ? 'is-active' : '');
    },
  },
  emits: ['on-item-click'],
  methods: {
    onItemClick(resource) {
      this.$emit('on-item-click', resource);
    },
    // activeItemClass(resource) {
    //   return resource.id === this.activeId ? 'is-active' : '';
    // },
  },
};
</script>

<style lang="sass" scoped>
.panel-block
  flex-direction: column
  &.is-active
    background: whitesmoke
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
