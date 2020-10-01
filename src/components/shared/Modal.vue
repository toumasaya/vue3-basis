<template>
  <div v-if="isOpen" id="myModal" class="app-modal">
    <div class="app-modal-body">
      <span @click="$emit('on-close')" class="close">&times;</span>
      <div class="app-modal-content">
        <slot>
          <p>Some text in the Modal..</p>
        </slot>
      </div>
      <div class="app-modal-footer">
        <div class="buttons">
          <button @click="$emit('on-submit')" class="button is-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['on-close', 'on-submit'],
};
</script>

<style lang="scss" scoped>
/* The Modal (background) */
.app-modal {
  // display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.app-modal-body {
  position: relative;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.app-modal-content {
  margin-bottom: 1rem;
}

.app-modal-footer {
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  .buttons {
    justify-content: center;
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
