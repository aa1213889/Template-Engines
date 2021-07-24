import parseTemplateToTokens from './parseTemplateToTokens.js'

class TemplateEngine {
  constructor() {}
  render(templateStr, args) {
    const tokens = parseTemplateToTokens(templateStr)
    console.log(tokens)
  }
}

globalThis['TemplateEngine'] = TemplateEngine

/**
 * 1.render()
 *  1.1 scanner
 *
 */
