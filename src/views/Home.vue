<template>
  <div class="home ">
    <div class="container">
      <word-container />
    </div>
  </div>
</template>

<script>
import WordContainer from '@/components/WordContainer.vue'

export default {
  name: 'Home',
  components: {
    WordContainer,
  },
}
</script>
