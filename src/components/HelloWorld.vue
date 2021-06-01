<template>
  <div class="box">
    <div>
      <button @click="refreshActiveUser">get user</button>
    </div>
    <div>
      <button @click="login">login</button>
    </div>
    <div>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    let cc = localStorage.getItem('cctest')
    if (!cc) cc = 0
    cc++
    localStorage.setItem('cctest', cc)
    console.log('执行一次')
  },
  methods: {
    login() {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser() {
      const hasToken = await this.$auth.isAuthenticated()
      const email = await this.$auth.getUser()
      console.info('用户名：' + email)
      console.info('isAuthenticated：' + hasToken)
      alert(email)
    },
    async logout() {
      await this.$auth.logout('/')
      alert('登出')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
  div {
    margin-top: 10px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
