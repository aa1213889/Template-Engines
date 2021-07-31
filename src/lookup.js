/**
 * 功能是可以在dataObj对象中，寻找用连续点符号的keyName属性
 * 比如:
 *  databbj = {
 *   a: { b: { c: 100 } }
 *  }
 *
 * 那么lookup(databbj, 'a,b.c') 结果就是100
 */

export default function lookup(dataObj, keyName) {
  if (keyName.indexOf('.') !== -1 && keyName !== '.') {
    const keys = keyName.split('.')
    let temp = dataObj
    for (let item of keys) {
      temp = temp[item]
    }
    return temp
  }
  return dataObj[keyName]
}
