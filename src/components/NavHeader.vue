<template>
  <div class="nav-header-wrapper" :class="{ fixed: fixed }">
    <div class="nav-header nav-header--overlay">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavHeader',
  props: {
    fixed: Boolean,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.nav-header-wrapper {
  height: 0;
  width: 100%;
  position: relative;

  // transition: all 0.5s ease;

  &.fixed {
    position: sticky;
    top: 0;
    z-index: 10;

    .nav-header--overlay {
      background: rgb(230, 230, 230);
      box-shadow: 0 0 2px 0 rgba(51, 51, 51, 0.05),
        0 1px 4px 0 rgba(51, 51, 51, 0.15);
    }
  }
}

#navs .nav-header {
  // display: flex;
  // transition: all 0.5s ease;
  padding: 20px;
  z-index: 1;
  // background: rgb(239, 239, 239);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--teal);
    }
  }

  // &--overlay {
  //   background: rgb(230, 230, 230);
  //   box-shadow: 0 0 2px 0 rgba(51, 51, 51, 0.05),
  //     0 1px 4px 0 rgba(51, 51, 51, 0.15);
  // }
}
</style>
