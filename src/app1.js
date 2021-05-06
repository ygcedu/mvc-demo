import './app1.css'
import $ from 'jquery'
import Model from "./base/Model.js";

const eventBus = $(window)//使用jquery，不需要选择一个dom对象，所以传进去一个window对象，只需要使用jquery对象的原型方法on和trigger
console.log(eventBus.on);
console.log(eventBus.trigger);

// 数据相关都放到m中
const m = new Model({
    data: {
        // 初始化数据
        n: parseInt(localStorage.getItem('n'))
    },
    // 这里不建议使用箭头函数，在面向对象里使用箭头函数很容易出错
    update: function (data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n', m.data.n)
    }
})

// 其他的都放到c中
const c = {
    el: null,
    html: `
    <div>
        <div class="output">
            <span id="number">{{n}}</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </div>
    `,
    init(container) {
        c.init(container)

        c.el = $(container)


        c.render(m.data.n)// view = render(data)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            c.render(m.data.n)
        })
    },
    render(n) {
        if (c.el.children.length !== 0) {
            c.el.empty()
        }
        $(c.html.replace('{{n}}', n)).appendTo(c.el)
    },
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'div',
    },
    add() {
        m.update({n: m.data.n + 1})
    },
    minus() {
        m.update({n: m.data.n - 1})
    },
    mul() {
        m.update({n: m.data.n * 2})
    },
    div() {
        m.update({n: m.data.n / 2})
    },
    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex)
            console.log(part1, ',', part2, value);
            c.el.on(part1, part2, value)
        }
    }
    // bindEvents() {
    //     // 绑定鼠标事件
    //     v.el.on('click', '#add1', () => {
    //         m.data.n += 1;
    //         v.render(m.data.n)
    //     });
    //
    //     v.el.on('click', '#minus1', () => {
    //         m.data.n -= 1;
    //         v.render(m.data.n)
    //     });
    //
    //     v.el.on('click', '#mul2', () => {
    //         m.data.n *= 2;
    //         v.render(m.data.n)
    //     });
    //
    //     v.el.on('click', '#divide2', () => {
    //         m.data.n /= 2;
    //         v.render(m.data.n)
    //     });
    // }
}

export default c