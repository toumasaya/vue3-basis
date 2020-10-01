<template>
  <div class="resource-content columns">
    <div class="column is-8">
      <h2 class="title is-size-4">
        Resource {{ activeResource?._id }}
        <template v-if="hasResources">
          <button
            @click="toggleView"
            :class="toggleBtnClass"
            class="button mx-3"
          >
            {{ isDetailView ? 'Update' : 'Detail' }}
          </button>
          <ResourceDelete
            @on-resource-delete="
              hydrateResource($event, 'delete');
              !hasResources ? (isDetailView = true) : null;
            "
            :activeId="activeResource?._id"
          />
        </template>
      </h2>
      <ResourceDetail v-if="isDetailView" :resource="activeResource">
        <router-link
          :to="{ name: 'resourceDetail', params: { id: activeResource?._id } }"
          class="card-footer-item"
          >Detail Page</router-link
        >
      </ResourceDetail>
      <ResourceUpdate
        v-else
        :resource="activeResource"
        @on-resource-update="hydrateResource($event, 'update')"
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
      <!-- <button @click="addResource" class="button is-primary">
        Add Resource
      </button> -->
    </div>
  </div>
</template>

<script>
import ResourceSearch from '@/components/ResourceSearch';
import ResourceList from '@/components/ResourceList';
import ResourceDetail from '@/components/ResourceDetail';
import ResourceUpdate from '@/components/ResourceUpdate';
import ResourceDelete from '@/components/ResourceDelete';
import { fetchResources } from '@/actions';

export default {
  components: {
    ResourceSearch,
    ResourceList,
    ResourceDetail,
    ResourceUpdate,
    ResourceDelete,
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
      return this.isDetailView ? 'is-black' : '';
    },
    hasResources() {
      return this.resourceLength > 0;
    },
    activeResource() {
      return (
        this.selectedResource ||
        (this.hasResources && this.resources[0]) ||
        null
      );
    },
  },
  methods: {
    toggleView() {
      this.isDetailView = !this.isDetailView;
    },
    selectResource(selectedResource) {
      this.selectedResource = selectedResource;
    },
    hydrateResource(newResource, operation) {
      const index = this.resources.findIndex((r) => r._id === newResource._id);

      if (operation === 'update') {
        this.resources[index] = newResource;
        this.selectResource(newResource);
      } else {
        this.resources.splice(index, 1);
        this.selectResource(this.resources[0] || null);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
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
