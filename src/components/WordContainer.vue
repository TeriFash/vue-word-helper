<template>
  <div>
    <b-form class="form-main" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Enter in this field the text that will be applied to all scripts."
        label-for="input-1"
      >
        <b-input-group>
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Enter your text"
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

    <b-card class="mt-3 mb-3 card-main" no-body>
      <b-tabs
        nav-wrapper-class="font-weight-bold text-success"
        card
        v-model="tabIndex"
      >
        <b-tab
          class="p-0"
          v-for="(tab, el) in isSectionsData"
          :key="el"
          :title="tab.title"
          :active="tab.active"
        >
          <b-card-text>
            <template v-for="(item, i) in tab.info">
              <word-card
                :key="i"
                :header="form.name || isHeader"
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
import { mapGetters, mapActions } from 'vuex'
import WordCard from '@/components/WordCard.vue'

export default {
  name: 'WordContainer',
  components: {
    WordCard,
  },
  data() {
    return {
      tabIndex: 0,
      form: {
        name: '',
      },
      show: true,
    }
  },
  computed: {
    ...mapGetters(['getSectionsList', 'getClipboardData']),
    isHeader() {
      return this.getClipboardData || ''
    },
    isSectionsData() {
      const list = this.getSectionsList
      const { simple = [], accompanying = [], rare = [] } = list
      return [
        {
          info: simple,
          title: 'Simple questions',
          active: true,
        },
        {
          info: accompanying,
          title: 'Accompanying',
          active: false,
        },
        {
          info: rare,
          title: 'Rare questions',
          active: false,
        },
      ]
    },
  },

  methods: {
    ...mapActions(['SET_CLIPBOARD_DATA']),
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.SET_CLIPBOARD_DATA(true)
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="scss">
.card.card-main {
  background-color: transparent;

  & .card-header {
    background: #fff;
  }
}

.form-main {
  .form-group {
    label {
      font-size: 0.7rem;
      opacity: 0.5;
    }
  }

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

      .btn {
        border: none;
        // border-top-color: #ced4da;
        // border-right-color: #ced4da;
        // border-block-color: #ced4da;

        &:focus {
          outline: none;
          box-shadow: none;
          border: none;
        }
      }
    }
  }
}
</style>
