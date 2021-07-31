import parseTemplateToTokens from './parseTemplateToTokens.js'
import renderTemplate from './renderTemplate.js'

class TemplateEngine {
  constructor(id) {
    this.id = id
  }
  render(templateStr, data, cb) {
    const tokens = parseTemplateToTokens(templateStr)
    const domStr = renderTemplate(tokens, data)
    document.querySelector(`#${this.id}`).innerHTML = domStr
    cb(domStr)
  }
}

globalThis['TemplateEngine'] = TemplateEngine

/**
 * 1.render()
 *  1.1 tokens 调用parseTemplateToTokens函数，让模版字符串变为tokens数组
 *  1.2 renderTemplate() 使tokens数组变为dom字符串
 */
