<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <transition :name="transitionName">
      <router-view class="view"> </router-view>
    </transition>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('FETCH_SECTIONS')
    this.$store.dispatch('SET_CLIPBOARD_DATA')
  },
  data() {
    return {
      transitionName: null,
    }
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

#nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 30px;
  z-index: 10;
  // background: rgb(239, 239, 239);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--teal);
    }
  }
}

.view {
  padding-top: 64px;
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
