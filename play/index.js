import plugin from '../src'
import Vue from 'vue'
import {play} from 'vue-play'
import store from '../src/store'
import Vuex from 'vuex'
Vue.use(plugin)
Vue.use(Vuex)
play('Element')

.add('parent', {
  template: '<div><parent/></div>',
  data() {
    return {
      value: 'init',
    }
  },
})

.add('el-button', {
  template: '<div><el-button @click="onClick" :content="content"/></div>',
  data() {
    return {
      content: {
        text: 'button',
      },
    }
  },
  methods: {
    onClick(payload) {
      console.log('passed payload', payload)
    },
  },
})

.add('el-button-no-emit', {
  template: '<div><el-button-no-emit @click="onClick"/></div>',
  data() {
    return {
      value: 'init',
    }
  },
  methods: {
    onClick(payload) {
      console.log('passed payload', payload)
    },
  },
})

.add('el-button-master', {
  template: '<div><el-button-master @click="onClick"/></div>',
  data() {
    return {
      value: 'init',
    }
  },
  methods: {
    onClick(payload) {
      console.log('passed payload', payload)
    },
  },
})

.add('el-button-no-single', {
  template: '<div><el-button-no-single :content="content"/></div>',
  store: new Vuex.Store(store),
  data() {
    return {
      content: {
        text: 'button-no-single',
      },
    }
  },
})


