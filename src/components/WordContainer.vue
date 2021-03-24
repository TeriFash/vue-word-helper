<template>
  <div>
    <b-form class="form-main" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        description="Enter in this field the text that will be applied to all scripts."
      >
        <b-input-group>
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Enter word"
            required
          ></b-form-input>

          <b-input-group-append>
            <b-button
              :disabled="!form.name"
              type="reset"
              class="pl-3"
              variant="danger"
              >Reset
              <b-icon icon="trash2-fill" class="ml-1" />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-form>

    <b-card class="mt-3 mb-3" no-body>
      <b-tabs
        nav-wrapper-class="font-weight-bold text-success"
        card
        v-model="tabIndex"
      >
        <b-tab
          v-for="(tab, el) in isDataTabs"
          :key="el"
          :title="tab.title"
          :active="tab.active"
        >
          <b-card-text>
            <template v-for="(item, i) in tab.info">
              <word-card
                :key="i"
                :textKey="isTextKey === i || isTextKey.length < 2"
                :header="form.name"
                :text="item.text"
              ></word-card>
            </template>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import info from '@/data'
import WordCard from '@/components/WordCard.vue'

export default {
  name: 'WordContainer',
  components: {
    WordCard,
  },
  data() {
    return {
      tabIndex: 0,
      arrItems: ['simple', 'accompanying', 'rare'],
      info: info.sections,
      form: {
        name: '',
      },
      show: true,
    }
  },
  computed: {
    isTextKey() {
      const setList = this.info[this.arrItems[this.tabIndex]]
      const lastKey = setList[setList.length - 1]
      return setList.lastIndexOf(lastKey)
    },
    isDataTabs() {
      const { simple, accompanying, rare } = this.info

      const tabs = [
        { info: simple, title: 'Simple questions', active: true },
        { info: accompanying, title: 'Accompanying', active: false },
        { info: rare, title: 'Rare questions', active: false },
      ]

      return tabs
    },
  },

  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="scss">
.form-main {
  .input-group {
    min-height: 48px;

    .form-control {
      min-height: 48px;
      transition: all 0.5s ease-in-out;
      z-index: 4;

      &:focus {
        border-color: #dc3545;
        box-shadow: none;
      }

      &::placeholder {
        color: #49505775;
        font-size: 16px;
      }
    }

    .input-group-append {
      z-index: 6;
    }
  }
}
</style>
