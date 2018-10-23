import {chain} from 'lodash'

const justMyJob = (name) => {
  return chain(name).camelCase().capitalize().value()
}
