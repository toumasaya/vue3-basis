<template>
  <button @click="isOpen = true" class="button is-link is-outlined">
    Settings
  </button>
  <Modal
    :isOpen="isOpen"
    @on-close="isOpen = false"
    @on-submit="submitSettings"
  >
    <SettingsForm v-model:fontSize="fontSize" v-model:theme="theme" />
    <!--would be the follow -->
    <!-- <SettingsForm
      v-model:fontSize="fontSize"
      v-model:theme="theme"
      @update:fontSize="fontSize = $event"
      @update:theme="theme = $event" /> -->
  </Modal>
</template>

<script>
import Modal from '@/components/shared/Modal';
import SettingsForm from '@/components/SettingsForm';

export default {
  components: { Modal, SettingsForm },
  data() {
    return {
      isOpen: false,
      fontSize: '16',
      theme: 'dark',
    };
  },
  methods: {
    submitSettings() {
      const settings = {
        fontSize: this.fontSize,
        theme: this.theme,
      };
      alert(JSON.stringify(settings));
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
