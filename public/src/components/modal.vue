<template>
  <div class="modal-alert">
    <div class="bg" @click="$emit('closeModal')" />

    <div class="dialog">
      <p>Your CI File has been created! Click on the link below to download</p>

      <div class="col-sm-12">
        <button class="btn btn-primary" @click="downloadFile">Download your CI file</button>
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
  padding: 5%;
  width: 90%;
  max-width: 500px;
  position: fixed;
  top: 50%;
  border-radius: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1;
  animation: showModal 0.4s ease-in;

  button {
    width: 100%;
  }
}

@keyframes showModal {
  0% {
    opacity: 0;
    top: 60%;
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
    data: {
      type: String,
      required: true
    }
  },

  methods: {
    downloadFile() {
      var blob = new Blob([this.data], { type: "application/plain" });

      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "gitlab-ci.yml";
      link.click();

      this.$emit("closeModal");
    },

  }
};
</script>