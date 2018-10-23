import Vuex, {StoreOptions} from 'vuex'
interface IRootState {
  version: string
  name: string
  count: number
}

const storeOptions: StoreOptions<IRootState> = {
  state: {
    version: '0.0.1',
    name: 'bichi',
    count: 0,
  },
  mutations: {
    add(state) {
      state.count += 1
    },
    changeName(state, payload: string) {
      state.name = payload
    },
  },
}

export default storeOptions
