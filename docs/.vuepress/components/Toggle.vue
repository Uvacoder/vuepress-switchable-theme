<template>
  <div class="InputWrapper">
    <div
      :id="id"
      role="checkbox"
      tabindex="0"
      @keypress="handleKey"
      :aria-checked="value.toString()"
      @click="$emit('input', !value)"
      :class="{
        'Toggle': true,
        'Toggle--checked': value
      }"
    >
      <div class="Toggle-button"></div>
    </div>
    <label :for="id" @click="$emit('input', !value)">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    id: 'toggle-' + Math.floor(Math.random() * 10000)
  }),
  methods: {
    handleKey (evt) {
      if (evt.key !== ' ') return
      evt.preventDefault()
      evt.stopPropagation()
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="stylus">
.InputWrapper
  display: inline-block
  & > *
    vertical-align: middle
  label
    user-select: none

$width = 40px
$height = 16px
$transition-duration = 0.2s
.Toggle
  display: inline-block
  width: $width
  height: $height
  border: 2px solid lightgrey
  border-radius: $height
  position: relative
  cursor: pointer
  background-color: lightgrey
  transition: all $transition-duration
  .ToggleButton
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    border-radius: 999px
    transition: $transition-duration !important;
    &::before
      content: ""
      cursor: pointer
      display: inline-block
      width: 16px
      height: 16px
      background-color: lightgrey
      border-radius: inherit
      transition: $transition-duration
  &--checked
    border: 2px solid red
    background-color: red
    transition: $transition-duration
    .ToggleButton
      &::before
        background-color: red
        transform: translateX($width - $height)
        transition: $transition-duration
</style>