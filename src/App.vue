<template>
  <div id="app">
    <NavHeader :navs-fixed="navsFixed" ref="navs" />

    <transition :name="transitionName">
      <router-view class="view"> </router-view>
    </transition>
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader'

export default {
  components: {
    NavHeader,
  },
  created() {
    this.$store.dispatch('FETCH_SECTIONS')
    this.$store.dispatch('SET_CLIPBOARD_DATA')
  },
  data() {
    return {
      navsTop: 0,
      navsFixed: false,
      transitionName: null,
    }
  },
  mounted() {
    // записываем значение расположения табов (относительно начала экрана)
    this.navsTop = this.$refs.navs.offsetTop

    console.log(' ---➜  ', this.navsTop)

    // запускаем функцию проверки фиксации табов, на случай если скролл находится не в начале экрана
    this.setNavsFixed()

    // отслеживаем скролл
    window.addEventListener('scroll', this.setNavsFixed)
  },
  beforeDestroy() {
    // дропаем прослушивание ивента на скролл
    window.removeEventListener('scroll', this.setNavsFixed)
  },
  methods: {
    setNavsFixed() {
      if (window.scrollY) {
        if (window.scrollY >= this.navsTop) {
          this.navsFixed = true
        } else {
          this.navsFixed = false
        }
      }
      console.log(' ---➜  ', this.navsFixed, this.navsTop)
    },
  },
  watch: {
    $route(to, from) {
      if (from.path === '/about') {
        this.transitionName = 'drain'
      } else {
        this.transitionName = 'slither'
      }
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: rgb(22, 22, 22);
  position: relative;
}

.view {
  padding-top: 94px;
  background: rgb(230, 230, 230);
  width: 100%;
  min-height: 100vh;
}

.slither-enter-active,
.slither-leave-active {
  position: absolute;
  transition: transform 0.85s ease;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}

.slither-enter,
.slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to,
.slither-leave {
  transform: translateX(0);
}

.drain-enter-active,
.drain-leave-active {
  position: absolute;
  transition: transform 0.85s ease;
  // transition: transform 1s;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
}

.drain-enter,
.drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to,
.drain-leave {
  transform: translateY(0);
}
</style>
