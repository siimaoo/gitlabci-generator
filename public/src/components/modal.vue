<template>
  <div class="modal-alert">
    <div 
      class="bg" 
      @click="$emit('closeModal')"
    />

    <div class="dialog">
      <p>{{message}}</p>

      <div class="col-sm-12">
        <button
          class="btn btn-primary" 
          @click="downloadFile"
        >
          Download your CI file
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .bg {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  .dialog {
    box-shadow: 0px 0px 3px 1px #ddd;
    padding: 5%;
    width: 90%;
    max-width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 1;
    animation: showModal .4s ease-in;
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      top: 60%
    }

    100% {
      opacity: 1;
      top: 50%;
    }
  }
</style>

<script>
import Axios from "axios";
export default {
  props: {
    url: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    }
  },

  methods: {
    downloadFile() {
      this.$emit("closeModal");
      window.open(`http://localhost:3000${this.url}`, "_blank");
    }
  }
};
</script>