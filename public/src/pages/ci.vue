<template>
  <div>
    <Header />
       
    <Modal 
      v-if="isVisible"
      :url="url"
      :message="message"
      @closeModal="closeModal"
    />

    <section id="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <Form @dataModal="getData"/>
          </div>

          <div class="col-sm-12 col-md-6">
            <Instructions />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from '../components/header';
  import Instructions from '../components/instructions';
  import Form from '../components/form';
  import Modal from '../components/modal';

  export default {
    components: {
      Header,
      Instructions,
      Form,
      Modal
    },

    data: () => ({
      message: '',
      isVisible: false,
      url: ''
    }),

    methods: {
      getData(evt) {
        this.message = evt.message;
        this.url = evt.urlDownload;
        this.isVisible = true;
      },

      closeModal() {
        this.message = '';
        this.url = '';
        this.isVisible = false; 
      }
    }
  }
</script>

<style lang="scss">
  #content {
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
  }
</style>
