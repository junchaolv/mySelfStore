// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import ElementUI from 'element-ui'
import store from './vuex'

import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */

//注册全局指令
Vue.directive('focus', {
    // bind声明周期, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    bind(el, binding, vnode, oldVnode){
        console.log('bind回调');
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    inserted(el, binding, vnode, oldVnode){
        console.log('el:',el);
        el.focus();
        console.log('inserted回调', binding, vnode, oldVnode);
        // 设置了v-focus 并且值不为空
        if(binding.name == 'focus' && binding.value){
            el.focus()
        }
    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
    update(el, binding, vnode, oldVnode){
        console.log('update回调', binding);
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated(el, binding, vnode, oldVnode){
        console.log('componentUpdated回调', binding);
    },
    unbind(el, binding, vnode, oldVnode){
        console.log('unbindd回调', binding);
    }
})

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
