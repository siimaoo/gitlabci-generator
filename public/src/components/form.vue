<template>
  <form 
    onSubmit="return false"
    class="d-flex align-items-center"
  >
    <div class="content">
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

      <buttonLoading 
        class="btn btn-primary"
        @click="submitForm()"
      >
        Generate CI File
      </buttonLoading>
    </div>
  </form>
</template>

<script>
  import buttonLoading from 'components/components/forms/button-loading'
  import axios from 'axios';

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

    methods: {
      submitForm() {
        axios.post("http://localhost:3000/generate", {
          'user': user._value,
          'ip': ip._value,
          'path': path._value
        }).then((res) => {
          this.$emit('dataModal', res.data);
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style lang="scss">
  form {
    box-shadow: 0px 0px 3px 1px #ddd;
    padding: 5%;
    width: 90%;
    height: 80%;
    max-width: 400px;
    border-radius: 10px;
    margin: 30px auto;

    .btn {
      border-radius: 5px;
      width: 100%;
    }

    input {
      width: 100%;
      border: 1px solid #c4e2ec;
      border-radius: 5px;
      height: 50px;
      padding: {
        left: 10px;
        right: 10px;
        top: 20px;
      };
      margin: -10px 0px;
    }

    label {
      position: relative;
      top: -42px;
      left: 12px;
      font-size: 1rem;
      transition: all .1s ease-in; 
    }
  }

  .active {
    color: #00afe6;
    font-size: 0.8rem;
    top: -47px;
  }

  .inputFocus {
    outline: none;
    border: 1px solid #00c3e6;
  }
</style>