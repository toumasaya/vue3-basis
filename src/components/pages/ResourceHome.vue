<template>
  <div class="section">
    <div class="container">
      <header class="app-header">
        <h1 class="title">Keep Resources</h1>
        <p class="desc">Keep your resource at once place</p>
      </header>
      <div class="resource-content columns">
        <div class="column is-8">
          <h2 class="title is-size-4">Updated Resource</h2>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                Resource Name
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <p>
                  Resource description...
                </p>
                <span class="tag is-light">Type</span>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
              </footer>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <h3 class="title aside-title is-size-4 has-text-grey">
            <span>Your Resources</span>
            <span class="badge">6</span>
          </h3>
          <nav class="panel">
            <div class="panel-block">
              <div class="field has-addons">
                <div class="control">
                  <input class="input" type="text" placeholder="Find resource" />
                </div>
                <div class="control">
                  <a class="button is-primary">
                    Search
                  </a>
                </div>
              </div>
            </div>
            <p class="panel-tabs"></p>
            <a class="panel-block">
              <header class="header">
                <h3 class="title is-size-6">Resource 1</h3>
                <span class="tag is-info">Type</span>
              </header>
              <p class="desc">Brief description</p>
            </a>
            <a class="panel-block">
              <header class="header">
                <h3 class="title is-size-6">Resource 2</h3>
                <span class="tag is-info">Type</span>
              </header>
              <p class="desc">Brief description</p>
            </a>
            <a class="panel-block">
              <header class="header">
                <h3 class="title is-size-6">Resource 3</h3>
                <span class="tag is-info">Type</span>
              </header>
              <p class="desc">Brief description</p>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.app-header
  text-align: center
  margin-bottom: 2rem

.badge
  display: inline-flex
  justify-content: center
  align-items: center
  width: 32px
  height: 32px
  border-radius: 50%
  background: hsl(0, 0%, 48%)
  color: #fff
  font-size: 1rem

.aside-title
  display: flex
  justify-content: space-between
  align-items: center

.panel-block
  flex-direction: column
  .header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    padding-bottom: 7px
    .title
      margin-bottom: 0
  .desc
    width: 100%
    color: hsl(0, 0%, 71%)
</style>
