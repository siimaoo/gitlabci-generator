<template>
  <div>
    <Header />
       
    <Modal 
      v-if="isVisible"
      :data="modalData"
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
      isVisible: false,
      modalData: ''
    }),

    methods: {
      getData(evt) {
        this.modalData = evt;
        this.isVisible = true; 
      },

      closeModal() {
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
