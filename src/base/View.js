class View {
    // 这里的参数需要注意一下，接受一个包含三个已知属性的对象参数
    constructor({el, html, render}) {
        this.el = $(el)
        this.html = html
        this.render = render
    }

    // render()暂时还不能抽离成公共的，在Vue.js里面是有这个渲染函数的负责虚拟dom的渲染
}

export default View