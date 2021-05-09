import './app1.css'
// import Vue from "vue"
// 切换到vue runtime模式(参考：https://blog.csdn.net/wxl1555/article/details/83187647)
import Vue from 'vue/dist/vue.esm.js'

// 所有代码都放到view中
const init = (el) => {
    new Vue({
        el: el,
        data: {n: parseFloat(localStorage.getItem('n'))},
        methods: {
            add() {
                this.n += 1
            },
            minus() {
                this.n -= 1
            },
            mul() {
                this.n *= 2
            },
            div() {
                this.n /= 2
            },
        },
        watch: {
            n() {
                localStorage.setItem('n', this.n)
            }
            // n变化的时候触发后面的函数（这里不能是箭头函数）
            // n: function() {
            //     localStorage.setItem('n', this.n)
            // }
        },
        template: `
          <section id="app1">
          <div>
            <div class="output">
              <span id="number">{{ n }}</span>
            </div>
            <div class="actions">
              <button @click="add">+1</button>
              <button @click="minus">-1</button>
              <button @click="mul">*2</button>
              <button @click="div">÷2</button>
            </div>
          </div>
          </section>
        `
    })
}

export default init