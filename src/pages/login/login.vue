<template>
  <div class="login">
    <div class="login_box">
      <h2>登录</h2>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <i class="el-icon-user-solid"></i>
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="el-icon-user-solid"></i>
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        loginForm: {
          username: 'admin',
          password: '111111'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.login {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
</style>
