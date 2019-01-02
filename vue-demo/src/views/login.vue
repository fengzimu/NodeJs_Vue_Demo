<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html"><b>Voga</b>Li</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">{{ $t('title.LoginIn') }}</p>

      <form novalidate @submit.stop.prevent="login">
        <div class="form-group has-feedback">
          <input v-model="email" type="email" name="name" class="form-control" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input v-model="password" type="password" name="password" class="form-control" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox" name="checkbox"> {{ $t('message.RememberMe') }}
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">{{ $t('button.SignIn') }}</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
      </div>
      <!-- /.social-auth-links -->

      <a href="#">{{ $t('shareMenu.fragment.ForgotPassword') }}</a><br>
      <a href="register.html" class="text-center">{{ $t('shareMenu.fragment.RegisterMembership') }}</a>

    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login(){
      console.log(this.email)
      console.log(this.password)
      this.$axios
      .post('http://localhost:8088/login')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
