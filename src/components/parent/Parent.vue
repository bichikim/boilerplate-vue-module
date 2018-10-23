<template lang="pug">
  .parent
    white-space(:content="describe")
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'nuxt-property-decorator'
  import {WhiteSpace} from '../vue-white-space'

  @Component({
    components: {
      WhiteSpace,
    }
  })
  export default class Parent extends Vue {
    describe: string = 'this is white space \n is it working?'
  }
</script>

<style scoped lang="stylus">
  .parent
    display block
</style>