<template>
  <div class="section">
    <div class="container">
      <ResourceHeader />
      <div class="resource-content columns">
        <div class="column is-8">
          <h2 class="title is-size-4">
            Updated Resource
            <button @click="toggleView" class="button">Toggle</button>
          </h2>
          <ResourceDetail v-if="isDetailView" />
          <ResourceUpdate v-else />
        </div>
        <div class="column is-4">
          <h3 class="title aside-title is-size-4 has-text-grey">
            <span>Your Resources</span>
            <span class="badge">{{ resourceLength }}</span>
          </h3>
          <nav class="panel">
            <div class="panel-block">
              <ResourceSearch />
            </div>
            <ResourceList :resources="resources" />
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader';
import ResourceSearch from '@/components/ResourceSearch';
import ResourceList from '@/components/ResourceList';
import ResourceDetail from '@/components/ResourceDetail';
import ResourceUpdate from '@/components/ResourceUpdate';

export default {
  components: {
    ResourceHeader,
    ResourceSearch,
    ResourceList,
    ResourceDetail,
    ResourceUpdate,
  },
  data() {
    return {
      isDetailView: true,
      resources: [
        {
          id: '1',
          title: 'Resource 1',
          description: 'lalala lalalalal',
          type: 'book',
          link: '',
        },
        {
          id: '2',
          title: 'Resource 2',
          description: 'wawawawa',
          type: 'video',
          link: '',
        },
        {
          id: '3',
          title: 'Resource 3',
          description: 'hahaha hahahahhaha',
          type: 'blog',
          link: '',
        },
      ],
    };
  },
  computed: {
    resourceLength() {
      return this.resources.length;
    },
  },
  methods: {
    toggleView() {
      this.isDetailView = !this.isDetailView;
    },
  },
};
</script>

<style lang="sass" scoped>
.app-header
  text-align: center
  margin-bottom: 2rem

.badge
  display: inline-flex
  justify-content: center
  align-items: center
  width: 32px
  height: 32px
  border-radius: 50%
  background: hsl(0, 0%, 48%)
  color: #fff
  font-size: 1rem

.aside-title
  display: flex
  justify-content: space-between
  align-items: center
</style>
