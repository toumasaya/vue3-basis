<template>
  <div class="section">
    <div class="container">
      <ResourceHeader />
      <div class="resource-content columns">
        <div class="column is-8">
          <h2 class="title is-size-4">
            Resource {{ activeResource?._id }}
            <button @click="toggleView" :class="toggleBtnClass" class="button">
              {{ isDetailView ? 'Update' : 'Detail' }}
            </button>
          </h2>
          <ResourceDetail v-if="isDetailView" :resource="activeResource" />
          <ResourceUpdate
            v-else
            :resource="activeResource"
            @on-resource-update="hydrateResource"
          />
        </div>
        <div class="column is-4">
          <h3 class="title aside-title is-size-4 has-text-grey">
            <span>Your Resources</span>
            <span class="badge">{{ resourceLength }}</span>
          </h3>
          <nav class="panel ">
            <div class="panel-block">
              <ResourceSearch />
            </div>
            <div class="resource-list">
              <ResourceList
                :resources="resources"
                :activeId="activeResource?._id"
                @on-item-click="selectResource"
              />
            </div>
          </nav>
          <button @click="addResource" class="button is-primary">
            Add Resource
          </button>
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
import { fetchResources } from '@/actions';

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
      selectedResource: null,
      resources: [],
    };
  },
  async created() {
    const resources = await fetchResources();
    this.resources = resources;
  },
  computed: {
    resourceLength() {
      return this.resources.length;
    },
    toggleBtnClass() {
      return this.isDetailView ? 'is-warning' : '';
    },
    hasResource() {
      return this.resourceLength > 0;
    },
    activeResource() {
      return (
        this.selectedResource || (this.hasResource && this.resources[0]) || null
      );
    },
  },
  methods: {
    toggleView() {
      this.isDetailView = !this.isDetailView;
    },
    addResource() {
      const id =
        '_' +
        Math.random()
          .toString(36)
          .slice(2);
      const type = ['book', 'video', 'blog'][Math.floor(Math.random() * 3)];
      const newResource = {
        id,
        title: `Resource ${id} title`,
        description: `Resource ${id} desc`,
        link: '',
        type,
      };

      this.resources.unshift(newResource);
    },
    selectResource(selectedResource) {
      this.selectedResource = selectedResource;
    },
    hydrateResource(newResource) {
      const index = this.resources.findIndex((r) => r._id === newResource._id);
      this.resources[index] = newResource;
      this.selectResource(newResource);
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

.resource-list
  max-height: 360px
  overflow-y: auto
</style>
