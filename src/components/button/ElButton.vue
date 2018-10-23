<template lang="pug">
  .button
    button(@click="click") {{text}}
</template>

<script lang="ts">
  import {Vue, Component, Emit, Prop} from 'nuxt-property-decorator'
  import {IButtonContents} from './props'

  @Component
  export default class ElButton extends Vue{
    @Prop({
      type: Object as () => IButtonContents,
      default: () => ({text: 'button'})
    })
    content: IButtonContents

    @Emit() click(payload: MouseEvent): MouseEvent{
      console.log(payload)
      console.log(this.content)
      return payload
    }

    get text(): string{
      return this.content.text
    }
  }
</script>

<style scoped lang="stylus">
  .button
    display block
</style>