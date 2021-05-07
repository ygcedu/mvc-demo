import $ from 'jquery';
import EventBus from "./EventBus";

class View extends EventBus{
    // 这里的参数需要注意一下，接受一个包含三个已知属性的对象参数
    // constructor({el, html, render, data, eventBus, events}) {
    constructor(options) {
        super() // EventBus#constructor()
        Object.assign(this, options)// 取出options中的所有属性，然后复制到this上
        this.el = $(this.el)
        this.render(this.data)// view = render(data)
        this.autoBindEvents()
        this.on('m:updated', () => {
            this.render(this.data)
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