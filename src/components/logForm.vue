<template>
  <div>
    <div class="log-wrap">
      <div class="log-username">
        <label for="username">用户名:</label>
        <input type="text" placeholder="请输入用户名" id="username" v-model="usernameModel">
        <span>{{userErrors.errorText}}</span>
      </div>
      <div class="log-password">
        <label for="password">密码:</label>
        <input type="password" placeholder="请输入密码"
        v-model="passwordModel">
        <span>{{passwordErrors.errorText}}</span>
      </div>
      <button class="log-button" @click="onLogin">登录</button>
      <p>{{errorText}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors () {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false
          errorText = '格式不正确,需有@'
        } else {
          status = true
          errorText = ''
        } if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false
          errorText = '格式不正确,需为1-6位'
        } else {
          status = true
          errorText = ''
        } if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
        if (this.userErrors.status === false || this.passwordErrors.status === false) {
          this.errorText = '部分选项未通过'
        } else {
          this.errorText = ''
          this.$http.get('api/login')
          .then((res) => {
            this.$emit('has-log', res.body.data)
          }, (error) => {
            console.login(error)
          })
        }
      }
    }
  }
</script> 

<style scoped>
.log-wrap {
  line-height: 2;
}
.log-password, .log-username {
  margin-top: 20px;
}
span {
  color: red;
}
label {
  width: 80px;
  display: inline-block;
  font-size: 16px;
}
.log-wrap input {
  width: 233px;
  padding: 0 10px;
  border: 1px solid #ccc;
  line-height: 30px;
}
.log-button {
  background: #4fc08d;
 color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 85px;
} 
</style>