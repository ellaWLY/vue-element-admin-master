<template>
  <div class="login">
    <el-form class="login_box" ref="loginForm" :model="loginForm" :rules="loginRules">
      <h2>登录</h2>
      <el-form-item prop="username">
        <i class="icon el-icon-user-solid"></i>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <i class="icon el-icon-unlock"></i>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.native="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
        loginForm: {
          username: 'admin',
          password: '111111'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.login {
  min-height: 100vh;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  .el-form {
    width: 50%;
    margin: 0 auto;
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    h2 {
      font-size: 24px;
      color: #fff;
      margin-bottom: 50px;
    }
    .el-form-item {
      border: 1px solid rgba(255,255,255,0.1);
      background: #fff;
      border-radius: 5px;
      color: #454545;
      .icon {
        font-size: 20px;
      }
      .el-input {
        display: inline-block;
        width: 85%;
      }
    }
  }
}
</style>
