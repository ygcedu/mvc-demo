import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
const localKey = 'app3.active'//'yes'、'no'、undefined
const active = localStorage.getItem(localKey) === 'yes'

// if (active) {
//     $square.addClass('active')
// } else {
//     $square.removeClass('active')
// }
// 等价于：
$square.toggleClass('active', active)//如果active值为true，则加active这个class属性，反之不加。

$square.on('click', () => {
    // $square.addClass('active')
    // $square.toggleClass('active')//没有class就加上，有就去掉

    // 以下代码等价于toggleClass
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem(localKey, 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem(localKey, 'yes')
    }
})