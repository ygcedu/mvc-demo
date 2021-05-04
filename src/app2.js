import './app2.css'
import $ from 'jquery';

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

$tabBar.on('click', 'li', (e) => {
    // console.log(e.currentTarget);
    const $li = $(e.currentTarget);
    $li.addClass('selected').siblings().removeClass('selected');
    const index = $li.index()
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
$tabBar.children().eq(0).trigger('click')