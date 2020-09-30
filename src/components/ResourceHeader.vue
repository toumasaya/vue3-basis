<template>
  <header class="app-header">
    <h1 class="title">Keep Resources</h1>
    <p class="desc">Keep your resource at once place</p>
    <div class="buttons">
      <router-link
        :to="{ name: 'resourceHome' }"
        class="button is-primary is-outlined"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'resourceNew' }"
        class="button is-primary is-outlined"
        >New</router-link
      >
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
