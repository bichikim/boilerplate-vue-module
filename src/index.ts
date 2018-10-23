import * as components from '@/components'
import 'element-ui/lib/theme-chalk/index.css'
import {PluginObject, VueConstructor} from 'vue'
export {components}

export interface IElementWrapperOptions {
}

let _vue: VueConstructor

const plugin: PluginObject<IElementWrapperOptions> = {
  install(vue: VueConstructor, options: IElementWrapperOptions = {}) {
    if(_vue && _vue === vue){
      if(process.env.NODE_ENV !== 'production'){
        console.error(
          '[element-wrapper] already installed Vue.use(~) should be called only once',
        )
      }
    }
    _vue = vue
    const myComponents = components.default || components
    Object.keys(myComponents).forEach((name: string) => {
      vue.component(name, myComponents[name])
    })
  },
}

export default plugin
