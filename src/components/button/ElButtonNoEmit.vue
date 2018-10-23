<template lang="pug">
  .button
    button(@click="click") button
</template>

<script lang="ts">
  import {Vue, Component} from 'nuxt-property-decorator'

  @Component
  export default class ElButtonNoEmit extends Vue{
    click(payload: MouseEvent){
      console.log(payload)
      this.$emit('click', payload)
    }
  }
</script>

<style scoped lang="stylus">
  .button
    display block
</style>