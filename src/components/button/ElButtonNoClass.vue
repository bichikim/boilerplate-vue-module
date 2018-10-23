<template lang="pug">
  .button
    button(@click="click") {{text}}
</template>

<script>
  export default {
    props: {
      content: {type: Object, default: () => ({text: 'button'})},
    },
    methods: {
      click(payload){
        console.log(payload)
        console.log(this.content)
        this.$emit(payload)
      }
    },
    components: {
      text(){
        return this.content.text
      }
    }
  }
</script>

<style scoped lang="stylus">
  .button
    display block
</style>