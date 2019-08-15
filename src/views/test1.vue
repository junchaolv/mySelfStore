<template>
    <div id="myInput">
        <el-button type="success" @click="changeHistory()">点我改变URL</el-button>
        <div class="divStyle" style="width: 100px;height: 100px;background-color: deepskyblue"></div>

        <input type="text" v-focus>
    </div>
</template>

<script>
    export  default {
        name:'test1',
        props:['messages'],
        data () {
            return{
                info:'我是info信息'
            }
        },
        methods:{
            changeHistory(){
                // history.pushState('哈哈哈',null,'www.baidu.com');
                history.replaceState('heiheihei',null,'www.baidu.com');
                let href = location.href;
                console.log(href);
                console.log(href.split('/').slice(-1).toString())
            }
        },
        mounted () {

        },
        // directives:{
        //     focus:{
        //         inserted:function (el) {
        //             console.log('我是el:',el);
        //             el.focus()
        //             el.style.width = '400' + 'px';
        //         }
        //     }
        // }
    }
</script>

<style>
    .divStyle{
        background-color: deeppink !important;
    }
</style>