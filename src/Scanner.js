/**
 * 扫描器
 * pointer:指针 初始0
 * tail: 尾巴 类似于双向链表 ，一开始为tempStr原文
 *
 * 1.scan 走过指定内容，无返回值
 * 2.scanUntil 让指针进行扫描，直到遇到指定字符后结束，并返回之前扫描路过的文字
 * 3.pointerIsEnd 指针是否到头了
 */
export default class {
  constructor(tempStr) {
    this.tempStr = tempStr
    this.pointer = 0
    this.tail = tempStr
  }

  scan(tag) {
    if (this.tail.indexOf(tag) != 0) return
    this.pointer += tag.length
    this.tail = this.tempStr.substring(this.pointer)
  }

  scanUntil(stopTag) {
    const pointerStart = this.pointer
    while (!this.pointerIsEnd() && this.tail.indexOf(stopTag) != 0) {
      this.pointer++
      this.tail = this.tempStr.substr(this.pointer)
    }
    return this.tempStr.substring(pointerStart, this.pointer)
  }

  pointerIsEnd() {
    return this.pointer >= this.tempStr.length
  }
}
