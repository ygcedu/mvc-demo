import $ from 'jquery';

class View {
    // 这里的参数需要注意一下，接受一个包含三个已知属性的对象参数
    constructor({el, html, render, data, eventBus, events}) {
        this.el = $(el)
        this.html = html
        this.render = render
        this.events = events
        this.data = data
        this.eventBus = eventBus
        this.render(data)// view = render(data)
        this.autoBindEvents()
        eventBus.on('m:updated', () => {
            this.render(data)
        })
    }
    autoBindEvents() {
        for (let key in this.events) {
            const value = this[this.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex)
            console.log(part1, ',', part2, value);
            this.el.on(part1, part2, value)
        }
    }
    // render()暂时还不能抽离成公共的，在Vue.js里面是有这个渲染函数的负责虚拟dom的渲染
}

export default View