<template>
  <form>
    <div class="field">
      <label class="label">Font Size</label>
      <div class="control">
        <input
          :value="fontSize"
          @input="handleChange"
          name="fontSize"
          class="input"
          type="text"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Theme</label>
      <div class="control">
        <div class="select">
          <select :value="theme" @change="handleChange" name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    fontSize: {
      type: String,
    },
    theme: {
      type: String,
    },
  },
  emits: ['update:fontSize', 'update:theme'],
  methods: {
    handleChange(event) {
      const { value, name } = event.target;
      this.$emit(`update:${name}`, value);
    },
    // handleFontSize(fontSize) {
    //   this.$emit('update:fontSize', fontSize);
    // },
    // handleTheme(theme) {
    //   this.$emit('update:theme', theme);
    // },
  },
};
</script>

<style lang="scss" scoped></style>
