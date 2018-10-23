import {Component, Prop, Vue} from 'nuxt-property-decorator'
import {CreateElement, VNode} from 'vue'
import {Mutation, State} from 'vuex-class'

export interface IContent {
  text: string
  color?: string
  size?: string
}

@Component
export default class ElButtonNoSingle extends Vue {
  @State('version') version: string
  @State('count') count: number
  @State('name') name: string

  @Mutation('add') add
  @Mutation('changeName') changeName

  @Prop({
    type: Object as () => IContent,
    default: () => ({text: 'button'}),
  })
  content: IContent

  click(payload: MouseEvent) {
    this.add()
  }

  change(payload: KeyboardEvent) {
    const value: string | null = payload.target && (payload.target as HTMLInputElement).value
    this.changeName(value)
  }

  render(createElement: CreateElement): VNode {
    return createElement(
      'div',
      {},
      [
        createElement('div', `version ${this.version}`),
        createElement('div', `count ${this.count}`),
        createElement('div', `name ${this.name}`),
        createElement(
          'button',
          {
            on: {
              click: this.click,
            },
          },
          this.content.text,
        ),
        createElement(
          'input',
          {
            on: {
              keyup: this.change,
            },
          },
        ),
      ],
    )
  }
}
