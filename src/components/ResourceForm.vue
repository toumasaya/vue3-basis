<template>
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
</template>

<script>
export default {
  props: {
    alert: Object,
    resource: Object,
  },
  data() {
    return {
      uResource: { ...this.resource },
      resourceTypes: ['book', 'video', 'blog'],
    };
  },
  emits: ['on-submit-form'],
  watch: {
    resource(newResource) {
      this.uResource = { ...newResource };
    },
  },
  methods: {
    submitForm() {
      this.$emit('on-submit-form', this.uResource);
    },
  },
};
</script>

<style lang="scss" scoped></style>
