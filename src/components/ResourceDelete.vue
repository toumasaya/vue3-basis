<template>
  <button @click="deleteResource" class="button is-danger">Delete</button>
</template>

<script>
import { deleteResourceAPI } from '@/actions';
export default {
  props: {
    activeId: String,
  },
  emits: ['on-resource-delete'],
  methods: {
    async deleteResource() {
      const deleteResource = await deleteResourceAPI(this.activeId);
      this.$emit('on-resource-delete', deleteResource);
    },
  },
};
</script>

<style lang="scss" scoped></style>
