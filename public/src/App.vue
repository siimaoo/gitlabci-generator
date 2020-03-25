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
  @import 'components/assets/scss/_variables';
  @import 'bootstrap/scss/bootstrap';
  @import 'components/assets/scss/general';
  @import 'components/assets/scss/skins/alerts';
  @import 'components/assets/scss/skins/animation';
  @import 'components/assets/scss/skins/buttons';
  @import 'components/assets/scss/skins/inputs';
  @import 'components/assets/scss/skins/types';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif ;
  }
</style>
