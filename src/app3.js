import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click', ()=>{
    // $square.addClass('active')
    $square.toggleClass('active')//没有class就加上，有就去掉
})