<template>
  <button @click="isOpen = true" class="button is-link is-outlined">
    Settings
  </button>
  <Modal
    :isOpen="isOpen"
    @on-close="isOpen = false"
    @on-submit="submitSettings"
  >
    <div>My content</div>
  </Modal>
</template>

<script>
import Modal from '@/components/shared/Modal';

export default {
  components: { Modal },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    submitSettings() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
