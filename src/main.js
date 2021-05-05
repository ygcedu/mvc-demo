import './reset.css'
import './global.css'//css文件里面也可以引入其他css文件，但是性能比较低不推荐使用

import x from './app1.js'
import y from './app2.js'
import './app3.js'
import './app4.js'

x.init('#app1')
y.init('#app2')