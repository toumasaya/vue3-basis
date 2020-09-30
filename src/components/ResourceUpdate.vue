<template>
  <div v-if="alert?.success" class="notification is-success is-light">
    <button class="delete"></button>
    {{ alert.success }}
  </div>
  <div v-else-if="alert?.error" class="notification is-danger is-light">
    <button class="delete"></button>
    {{ alert.error }}
  </div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Resource Name
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ResourceForm
          :alert="alert"
          :resource="resource"
          @on-submit-form="updateResource"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { updateResourceAPI } from '@/actions';
import alertMixin from '@/mixins/alert';
import ResourceForm from '@/components/ResourceForm';

export default {
  components: { ResourceForm },
  props: {
    resource: Object,
  },
  mixins: [alertMixin],
  beforeUnmount() {
    this.clearAlertTimeout();
  },
  emits: ['on-resource-update'],
  watch: {
    resource(newResource, previousResource) {
      if (newResource && newResource._id !== previousResource._id) {
        this.clearAlertTimeout();
        this.alert = this.initAlert();
      }
    },
  },
  methods: {
    async updateResource(resource) {
      try {
        const updatedResource = await updateResourceAPI(resource._id, resource);
        this.$emit('on-resource-update', updatedResource);
        this.setAlert('success', 'Resource is updated! :)');
      } catch (errorMessage) {
        this.setAlert('error', errorMessage);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
