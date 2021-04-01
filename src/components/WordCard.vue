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

<style lang="scss">
.paragraph span {
  font-weight: 500;
  opacity: 0.5;
}

.word-card {
  position: relative;
  padding: 20px;
  transition: all 0.5s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:nth-child(odd) {
    background-color: #efefef;
  }

  &:first-child {
    // margin-top: 20px;
  }

  &:last-child {
  }

  &:only-child {
    border-color: transparent;
  }

  &:hover {
    // &:nth-child(odd) {
    //   background-color: rgba(255, 0, 251, 0.09);
    // }

    background-color: rgba(40, 167, 70, 0.1);
  }

  .paragraph {
    padding-right: 60px;
  }

  &--hr {
    &:nth-child(odd) {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
