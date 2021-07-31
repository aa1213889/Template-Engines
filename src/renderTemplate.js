import lookup from './lookup.js'
import parseArray from './parseArray.js'

export default function renderTemplate(tokens, data) {
  let resultStr = ''
  for (let token of tokens) {
    if (token[0] === 'text') {
      resultStr += token[1]
    } else if (token[0] === 'name') {
      resultStr += lookup(data, token[1])
    } else if (token[0] === '#') {
      //递归处理
      resultStr += parseArray(token, data)
    }
  }
  return resultStr
}
