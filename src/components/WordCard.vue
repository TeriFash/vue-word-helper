<template>
  <div class="word-card" :class="{ 'word-card--hr': !textKey }">
    <word-clipboard :hendler="!!header">
      <p class="m-0 paragraph" v-html="setText(text)"></p>
    </word-clipboard>
  </div>
</template>

<script>
import WordClipboard from '@/components/WordClipboard.vue'

export default {
  name: 'WordCard',
  components: {
    WordClipboard,
  },
  data() {
    return {}
  },
  computed: {
    nameDownLine() {
      return this.textKey
    },
  },
  methods: {
    setText(val) {
      const newHeader = this.header ? this.header : `<span>{ name }</span>`
      const newHeaderFixer = `${newHeader[0].toUpperCase()}${newHeader.slice(
        1
      )}`
      const newText = val.replace(/{ }/i, newHeaderFixer)
      return `${newText}`
    },
  },
  props: {
    header: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    textKey: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.paragraph span {
  color: rgb(251, 148, 148);
  font-weight: 500;
}

.word-card {
  position: relative;

  .paragraph {
    padding-bottom: 20px;
    padding-right: 60px;
  }

  &--hr {
    &::after {
      // margin-top: 1rem;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      content: '';
    }
  }
}
</style>
