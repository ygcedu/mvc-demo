import './app2.css'
import $ from 'jquery';

const html = `
    <section id="app2">
        <ol class="tab-bar">
            <li><span>1111</span></li>
            <li><span>2222</span></li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`

const $element = $(html).appendTo($('body>.page'))

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => {
    // console.log(e.currentTarget);
    const $li = $(e.currentTarget);
    $li.addClass('selected').siblings().removeClass('selected');
    const index = $li.index()
    localStorage.setItem(localKey, index)
    console.log(index)
    $tabContent.children()
        // .eq(index).css({display: 'block'})
        // .siblings().css({display: 'none'})
        // .eq(index).show()
        // .siblings().hide()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    // 经验：不要使用show、hide、css三个api，而使用addClass，达到样式与行为分离目的
    // js里永远不要操作css
});

// 默认值（0）时自动触发点击事件
$tabBar.children().eq(index).trigger('click')