import EventBus from "./EventBus";

class Model extends EventBus{
    constructor(options) {
        super() // EventBus#constructor()
        const keys = ['data', 'update', 'create', 'delete', 'get']
        keys.forEach((key) => {
            if (key in options) {
                this[key] = options[key]
            }
        })
        // this.data = options.data
        // this.update = options.update
        // this.delete = options.delete
        // this.get = options.get
    }

    create() {
        console && console.error && console.error('你还没有实现 create')
    }

    delete() {
        console && console.error && console.error('你还没有实现 delete')
    }

    update() {
        // 新语法
        console?.error?.('你还没有实现 update')
    }

    get() {
        console?.error?.('你还没有实现 get')
    }
}

export default Model