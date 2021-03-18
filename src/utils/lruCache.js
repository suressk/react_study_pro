/**
 * hash 表 + 双向链表
 */

// 节点类型
class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

export class LRUCache {
    constructor(capacity) {
        this.capacity = capacity // 缓存容量
        this.hash = {} // hash 表
        this.count = 0 // 已存储值数量
        this.dummyHead = new ListNode() // 头节点
        this.dummyTail = new ListNode() // 尾节点
        this.dummyHead.next = this.dummyTail // 初始化，首尾相接
        this.dummyTail.prev = this.dummyHead
    }

    // 取值：未存储则返回 -1；否则返回值并移动此节点到头部
    get(key) {
        const node = this.hash[key]
        if (node === undefined) return -1
        this.moveToHead(node)
        return node.value
    }

    // 赋值：
    put(key, value) {
        const node = this.hash[key]
        // 新值
        if (node === undefined) {
            // 存储达到上限，移除最远节点
            if (this.count === this.capacity) {
                this.removeLRUItem()
            }
            // 新值插入头部，存储数量 +1
            const newNode = new ListNode(key, value)
            this.hash[key] = newNode
            this.addToHead(newNode)
            this.count++
        } else {
            // 已存此 key，更新值并移动到头部
            node.value = value
            this.moveToHead(node)
        }
    }

    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }

    removeFromList(node) {
        const temp1 = node.prev
        const temp2 = node.next
        temp1.next = temp2
        temp2.prev = temp1
    }

    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    removeLRUItem() {
        let tail = this.popTail()
        delete this.hash[tail.key]
        this.count--
    }

    popTail() {
        let tail = this.dummyTail.prev
        this.removeFromList(tail)
        return tail
    }
}