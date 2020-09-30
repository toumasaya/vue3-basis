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
        <form @submit.prevent="submitForm">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input
                v-model="uResource.title"
                class="input"
                type="text"
                placeholder="Resource title here..."
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                v-model="uResource.description"
                class="textarea"
                placeholder="Resource description..."
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <div class="select">
                <select v-model="uResource.type">
                  <option
                    v-for="resourceType in resourceTypes"
                    :key="resourceType"
                    :value="resourceType"
                    >{{ resourceType }}</option
                  >
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Link</label>
            <div class="control">
              <input
                v-model="uResource.link"
                class="input"
                type="text"
                placeholder="Resource link..."
              />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-primary">Submit</button>
            </div>
            <!-- <div class="control">
              <button class="button is-grey is-light">Cancel</button>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { updateResource } from '@/actions';

export default {
  props: {
    resource: Object,
  },
  data() {
    return {
      uResource: { ...this.resource },
      resourceTypes: ['book', 'video', 'blog'],
      alert: this.initAlert(),
      timeoutID: null,
    };
  },
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
      this.uResource = { ...newResource };
    },
  },
  methods: {
    initAlert() {
      return { success: null, error: null };
    },
    clearAlertTimeout() {
      this.timeoutID && clearTimeout(this.timeoutID);
    },
    setAlert(type, message) {
      this.alert = this.initAlert();
      this.alert[type] = message;
      this.timeoutID = setTimeout(() => {
        this.alert = this.initAlert();
      }, 2000);
    },
    async submitForm() {
      try {
        const updatedResource = await updateResource(
          this.uResource._id,
          this.uResource
        );
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
