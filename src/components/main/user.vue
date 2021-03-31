<template>
  <div class="hello">
    <input v-if="username == ''" v-model="userset">
    <button v-if="username == ''" @click="setNick()">setNickName</button>
    <h3>{{username}}</h3>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      username: ''
    }  
  },
  methods: {
    setNick() {
      this.username = this.userset
      this.$emit("userEmit", this.username);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
