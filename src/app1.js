import './app1.css'
import $ from 'jquery'

// 数据相关都放到m中
const m = {
    data: {
        // 初始化数据
        n: localStorage.getItem('n')
    }
}

// 视图相关都放到v中
const v = {
    html: `
    <section id="app1">
        <div class="output">
            <span id="number">100</span>
        </div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">÷2</button>
        </div>
    </section>
    `,
    render() {
        const $element = $(v.html).appendTo($('body>.page'))
    },
    update() {
        // 将数据渲染到页面
        c.ui.number.text(m.data.n || 100)
    }
}
// 其他的都放到c中
const c = {
    init() {
        c.ui = {
            // 寻找重要的元素
            button1: $("#add1"),
            button2: $("#minus1"),
            button3: $("#mul2"),
            button4: $("#divide2"),
            number: $('#number')
        }
        c.bindEvents()
    },
    bindEvents() {
        console.log('bindEvents 执行了');
        console.log(c.ui.button1);
        // 绑定鼠标事件
        c.ui.button1.on('click', () => {
            let n = parseInt(c.ui.number.text());
            n += 1;
            localStorage.setItem('n', n)
            c.ui.number.text(n);
        });

        c.ui.button2.on('click', () => {
            let n = parseInt(c.ui.number.text());
            n -= 1;
            localStorage.setItem('n', n)
            c.ui.number.text(n);
        });

        c.ui.button3.on('click', () => {
            let n = parseInt(c.ui.number.text());
            n *= 2;
            localStorage.setItem('n', n)
            c.ui.number.text(n);
        });

        c.ui.button4.on('click', () => {
            let n = parseInt(c.ui.number.text());
            n /= 2;
            localStorage.setItem('n', n)
            c.ui.number.text(n);
        });
    }
}

// 第一次渲染html
v.render()
c.init()