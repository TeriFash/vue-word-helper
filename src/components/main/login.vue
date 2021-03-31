<template>
  <div class="hello">
   
    <div v-if="authUser">
      <h2>login come {{authUser.email}}</h2>
      <button @click="signOut()">logout</button>
    </div>
    
    <div v-else="!authUser">
      <button v-if="!loginSection" @click="registerSection = true ; loginSection = false">Register</button>
      <div v-if="registerSection">
        <form @submit.prevent="register">
          <h2>Register</h2>
          <input type="mail" v-model="email" placeholder="mail">
          <input type="password" v-model="password" placeholder="password">
          <button>login</button>
        </form>
      </div>
      <button v-if="!registerSection" @click="loginSection = true ; registerSection = false">Login</button>
      <div v-if="loginSection">
        <form @submit.prevent="login">
          <h2>Login</h2>
          <input type="mail" v-model="email" placeholder="mail">
          <input type="password" v-model="password" placeholder="password">
          <button>login</button>
        </form>
      </div>
    </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "login",
  data() {
    return{
      email: '',
      password: '',
      authUser: null,
      loginSection: false,
      registerSection: false
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(this.$emit('unblock'))
      .catch(error => alert (error.message))
    },
    signOut() {
      firebase.auth().signOut()
      .then(this.$emit('block'))
    },
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(this.$emit('unblock'))
      .catch(error => alert (error.message))
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user
    })
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
