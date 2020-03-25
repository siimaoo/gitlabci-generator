<template>
  <form onSubmit="return false">
    <input 
      type="text" 
      name="user" 
      id="user" 
      v-model="user" 
      placeholder="Ex: root"
      @focus="userFocus = true"
      @blur="userFocus = user.length > 0 ? true : false"
      :class="{'inputFocus': userFocus}"
    />

    <label 
      for="user"
      :class="{'active': userFocus}"
    >
      User
    </label>

    <input 
      type="text" 
      name="ip" 
      id="ip" 
      v-model="ip" 
      placeholder="Ex: 192.168.1.2"
      pattern="\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b"
      maxlength="17"
      @focus="ipFocus = true"
      @blur="ipFocus = user.length > 0 ? true : false"
      :class="{'inputFocus': ipFocus}"
    />

    <label 
      for="ip"
      :class="{'active': ipFocus}"
    >
      Ip
    </label>

    <input 
      type="text" 
      name="path" 
      id="path" 
      v-model="path" 
      placeholder="Ex: var/www/your-site-files"
      @focus="pathFocus = true"
      @blur="pathFocus = user.length > 0 ? true : false"
      :class="{'inputFocus': pathFocus}"
    />

    <label 
      for="path"
      :class="{'active': pathFocus}"
    >
      Path
    </label>

    <buttonLoading class="btn btn-primary">
      Generate CI File
    </buttonLoading>
  </form>
</template>

<script>
  import buttonLoading from 'components/components/forms/button-loading'
  export default {
    components: {
      buttonLoading
    },

    data: () => ({
      user: '',
      ip: '',
      path: '',
      userFocus: false,
      ipFocus: false,
      pathFocus: false
    }),
  }
</script>

<style lang="scss">
  form {
    box-shadow: 0px 0px 3px 1px #ddd;
    padding: 5%;
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 30px;

    input {
      width: 100%;
      border: 1px solid #c4e2ec;
      padding: {
        left: 10px;
        right: 10px;
        top: 20px;
      };
      margin: 5px 0px;
    }

    label {
      position: relative;
      top: -50px;
      left: 12px;
      font-size: 1.4rem;
      transition: all .1s ease-in; 
    }
  }

  .active {
    color: #00afe6;
    font-size: 1.3rem;
    top: -55px;
  }

  .inputFocus {
    outline: none;
    border: 1px solid #00c3e6;
  }
</style>