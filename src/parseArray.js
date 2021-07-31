/**
 * 处理数组，结合renderTemplate递归实现
 */
import lookup from './lookup.js'
import renderTemplate from './renderTemplate.js'

export default function parseArray(token, data) {
  let resultStr = ''
  const v = lookup(data, token[1])

  //'.': item   表示 <li>{{.}}</li> 模版里循环输出数组
  for (let item of v) {
    resultStr += renderTemplate(token[2], {
      ...item,
      '.': item
    })
  }

  return resultStr
}
