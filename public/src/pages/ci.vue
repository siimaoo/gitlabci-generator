<template>
  <div>
    <Header />
       
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <Form />
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

  export default {
    components: {
      Header,
      Instructions,
      Form
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
