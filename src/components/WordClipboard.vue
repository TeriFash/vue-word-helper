<template>
  <div
    class="clipboard-wrapper"
    :class="{ 'clipboard-select': isDblclick }"
    @dblclick="isDblclick = !isDblclick"
  >
    <b-button
      variant="outline-success"
      size="sm"
      :disabled="!hendler"
      class="btn-clipboard"
      v-clipboard:copy="$slots.default[0].data.domProps.innerHTML"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      Copy
      <b-icon
        class="ml-1"
        icon="stickies-fill"
        variant="outline-success"
      ></b-icon>
    </b-button>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'WordClipboard',
  data() {
    return {
      text: '',
      isDblclick: false,
    }
  },
  props: {
    hendler: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onCopy(e) {
      this.$bvToast.toast(e.text, {
        title: `Success текст добавлен в буфер обмена`,
        variant: 'success',
        solid: true,
        autoHideDelay: 3000,
        appendToast: false,
      })
    },
    onError() {
      this.$bvToast.toast(
        'Возникла непредвиденная ошибка, попробуйте еще раз',
        {
          title: `Error текст не добавлен`,
          variant: 'danger',
          solid: true,
        }
      )
    },
  },
}
</script>

<style lang="scss">
.clipboard-wrapper {
  .btn-clipboard {
    line-height: 15px;
    bottom: 20px;
    right: 20px;
    position: absolute;
    // line-height: 1;
    font-size: 12px;
  }
}

.clipboard-select p {
  -webkit-user-select: all;
  user-select: all;

  &:focus {
    border: 2px dashed #7afa90;
    outline: none;
    animation: select 100ms step-end forwards;
  }
}

@keyframes select {
  to {
    -webkit-user-select: text;
    user-select: text;
  }
}
</style>
