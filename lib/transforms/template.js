import { getFunctionResult } from './expression'

const deal = (prop, owner, options) => {
  const keyArray = prop.toString().split(':')
  const expr = owner[prop]
  const { context } = options

  if (keyArray.length <= 1) {
    return
  }

  const reKey = keyArray[1]

  owner[reKey] = undefined

  Object.defineProperty(owner, reKey, {
    get: () =>
      getFunctionResult(
        {
          $result: '`' + expr + '`',
          $scope: ['model', 'params', 'datasource'],
        },
        context
      ),
  })

  delete owner[prop]
}

export default (prop) => {
  const keyArray = prop.toString().split(':')

  if (keyArray.length <= 1) {
    return false
  }

  if (keyArray[0] === '#') {
    return deal
  }

  return false
}
