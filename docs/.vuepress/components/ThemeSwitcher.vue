<template>
  <div class="theme-switcher" @click="toggleTheme">
      <div class="img-container">
      <img v-if="themeDark" src="../public/moon.png" height="26"/>
      <img v-else src="../public/sun.png" height="26"/>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ThemeSwitcher',
  props: {
    themeDark: {
      required: true,
      type: Boolean
    }
  },

  methods: {
    toggleTheme () {
      this.themeDark ? this.$emit('theme-toggled', false) : this.$emit('theme-toggled', true)
    }
  }
}
</script>

<style scoped>
.theme-switcher {
  padding: 0.25rem 0.75rem;
  user-select: none;
}
.img-container {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

</style>
