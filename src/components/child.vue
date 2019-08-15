<template>
    <div>
        <ul>
            <li><router-link tag="p" to="/test1">test1</router-link></li>
            <li @click="jumpTest2">test2</li>
            <li @click="jumpTest3">test3</li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
    export  default {
        name:'children',
        data () {
            return{
                info:''
            }
        },
        methods:{
            jumpTest1(){
                this.$router.push({path:'/test1'});
            },
            jumpTest2(){
                this.$router.push({path:'/test2'});
            },
            jumpTest3(){
                this.$router.push({path:'/test3'});
            }

        }
    }
</script>

<style scoped lang="scss">
    ul{
        width: 500px;
        overflow: hidden;
        margin: 0 auto;
        li{
            float: left;
            margin-right: 10px;
            width: 100px;
            height: 30px;
            line-height: 30px;
            background-color: #d8d8d8;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
        }
    }
</style>