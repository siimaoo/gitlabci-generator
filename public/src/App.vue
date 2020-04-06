<template>
  <div id="app">
    <CIPage />
  </div>
</template>

<script>
  import CIPage from './pages/ci';

  export default {
    name: 'App',
    
    components: {
      CIPage
    }
  }
</script>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif ;
  }
</style>
