import './app1.css'
import $ from 'jquery'
import Model from "./base/Model.js";
import View from "./base/View";

// 数据相关都放到m中
const m = new Model({
    data: {
        // 初始化数据
        n: parseFloat(localStorage.getItem('n'))
    },
    // 这里不建议使用箭头函数，在面向对象里使用箭头函数很容易出错
    update: function (data) {
        Object.assign(m.data, data)
        m.trigger('m:updated')
        localStorage.setItem('n', m.data.n)
    }
})

// 其他的都放到c中
const init = (el) => {
    const view = new View({
        el: el,
        data: m.data,
        eventBus: eventBus,
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
        render(data) {
            const n = data.n
            if (this.el.children.length !== 0) {
                this.el.empty()
            }
            $(this.html.replace('{{n}}', n)).appendTo(this.el)
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
        }
    })
}

export default init