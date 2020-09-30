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
        Create a resource
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <ResourceForm
          :alert="alert"
          :resource="resource"
          @on-submit-form="createResource"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createResourceAPI } from '@/actions';
import alertMixin from '@/mixins/alert';
import ResourceForm from '@/components/ResourceForm';

export default {
  components: { ResourceForm },
  data() {
    return {
      resource: {
        title: '',
        description: '',
        type: 'video',
        link: '',
      },
    };
  },
  mixins: [alertMixin],
  beforeUnmount() {
    this.clearAlertTimeout();
  },
  methods: {
    async createResource(resource) {
      try {
        await createResourceAPI(resource);
        this.$router.push({ name: 'resourceHome' });
      } catch (errorMessage) {
        this.setAlert('error', errorMessage);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
