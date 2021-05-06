class Model {
    constructor(options) {
        this.data = options.data
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