<template>
  <div class="hello">
    <div v-for="message in orderedDate" @key="message.name">
      <h3>{{message.name}}</h3>
      <p>{{message.text}}</p>
      <button @click="removeMessage(message)">remove</button>
      <button @click="editState = true">Edit</button>
      <div v-show="editState">
        <textarea v-model="editText"/>
        <button @click="passTextEdit(message)">ok</button>
      </div>
    </div>
  </div>
</template>

<script>
import orderBy from "lodash/orderBy";
import { db } from "@/firebase";
export default {
  data() {
    return {
      editState: false,
      editText: ""
    };
  },
  props: {
    messageobj: Array
  },
  computed: {
    orderedDate: function() {
      return orderBy(this.messageobj, ["date"], ["asc"]);
    }
  },
  firestore() {
    return {
      messageobj: db.collection("boards")
    };
  },
  methods: {
    removeMessage(message) {
      this.$emit("removeBtn", message);
    },
    passTextEdit(message) {
      this.$firestore.messageobj
        .doc(message[".key"])
        .update({ text: this.editText });
        this.editState = false
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
