/**
 * parseTemplateToTokens: 将模版字符串变为tokens数组
 */

import Scanner from './Scanner.js'

export default function parseTemplateToTokens(templateStr) {
  const tokens = []
  const scanner = new Scanner(templateStr)

  let words = ''
  while (!scanner.pointerIsEnd()) {
    words = scanner.scanUntil('{{')
    if (words != '') {
      tokens.push(['text', words.trim()])
    }
    scanner.scan('{{')
    words = scanner.scanUntil('}}')
    if (words != '') {
      //这个words{{xxx}} 的内容是xxx
      if (words[0] === '#') {
        tokens.push(['#', words.substring(1)])
      } else if (words[0] === '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    scanner.scan('}}')
  }

  return nestTokens(tokens)
}

/**
 * nestTokenArr: 结果数组
 * section:栈结构 存放小token
 * collector:收集器 默认等于nestTokenArr
 */
function nestTokens(tokens) {
  const nestTokenArr = []
  const section = []
  let collector = nestTokenArr
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case '#':
        collector.push(token)
        section.push(token)
        token[2] = [] //给token添加下标为2的项，并让收集器指向它
        collector = token[2]
        break
      case '/':
        section.pop()
        section.length > 0 ? (collector = section[section.length - 1][2]) : (collector = nestTokenArr)
        break
      default:
        collector.push(token)
    }
  }
  return nestTokenArr
}
