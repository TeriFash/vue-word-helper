<template>
  <div class="hello">
    <textarea v-if="!editState" :value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    value: String
  }
  // data() {
  //   return {
  //     textMessage: ""
  //   };
  // },
  // watch: {
  //   textMessage(val) {
  //     this.$emit('input', val);
  //   }
  // },
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
