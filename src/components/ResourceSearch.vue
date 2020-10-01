<template>
  <div class="control">
    <input
      @keyup="$emit('on-search', $event.target.value)"
      class="input"
      type="text"
      placeholder="Find resource"
    />
  </div>
</template>

<script>
export default {
  emits: ['on-search'],
};
</script>

<style lang="scss" scoped></style>
