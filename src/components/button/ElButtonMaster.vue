<template lang="pug">
  .el-button-master
    el-button(:content=content)
</template>

<script lang="ts">
  import {Vue, Component, Emit, Prop} from 'nuxt-property-decorator'
  import ElButton from './ElButton.vue'
  import {IButtonContents} from './props'
  @Component({
    components: {
      ElButton,
    }
  })
  export default class ElButtonMaster extends Vue {
    content: IButtonContents = {
      text: 'Button Master'
    }
  }
</script>

<style scoped lang="stylus">
  .el-button-master
    display block
</style>