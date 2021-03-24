<template>
  <div class="home container">
    <word-container />
  </div>
</template>

<script>
import WordContainer from "@/components/WordContainer.vue";

export default {
  name: "Home",
  components: {
    WordContainer,
  },
};
</script>
