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
  @import '../assets/components/modal.scss'
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