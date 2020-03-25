<template>
  <nav>
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-sm-12 d-flex align-items-center h-100">
          <img 
            src="https://www.letscloud.io/help/static/img/53d892a.svg" 
            title="Let`s Cloud" 
            alt="Let`s Cloud" 
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  nav {
    width: 100%;
    height: 80px;
    box-shadow: 0px 0px 3px 1px #ddd;
    display: flex;
    flex-direction: row;
    align-items: center;

    & img {
      width: 16%;
      min-width: 108px;
      min-height: 26px;
      height: auto;
    }
  }
</style>