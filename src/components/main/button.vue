<template>
  <div class="hello">
    <button @click="submitMessage()">Invia</button>
  </div>
</template>

<script>
export default {
  name: "btn",
  methods: {
    submitMessage() {
      this.$emit("btn");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
