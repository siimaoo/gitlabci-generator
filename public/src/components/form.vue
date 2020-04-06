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

      <button 
        class="btn btn-primary"
        @click="submitForm()"
      >
        Generate CI File
      </button>
    </div>
  </form>
</template>

<script>
  import axios from 'axios';

  export default {
    data: () => ({
      user: '',
      ip: '',
      path: '',
      userFocus: false,
      ipFocus: false,
      pathFocus: false,
    }),

    methods: {
      submitForm() {
        axios.post("localhost:3000/generate", {
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
  @import '../assets/components/form.scss';
</style>