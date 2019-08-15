<template>
    <div>
        <div id="div1" class="box left">拖拽-我是div1</div>
        <div id="div2" class="box right">拖拽-我是div2</div>
    </div>
</template>

<script>
    export  default {
        name:'test3',
        props:['messages'],
        data () {
            return{
                info:'我是info信息'
            }
        },
        mounted () {
            //offsetLeft :


            //普通拖拽
            class Drag{
                constructor(id){//将被执行的id名传进来
                    this.oDiv = document.querySelector(id);//获取该html标签
                    this.disX = 0;
                    this.disY = 0;
                    this.init();
                }
                init(){
                    this.oDiv.onmousedown = function(ev){
                        this.disX = ev.clientX - this.oDiv.offsetLeft;
                        this.disY = ev.clientY - this.oDiv.offsetTop;
                        document.onmousemove = this.fnMove.bind(this);
                        document.onmouseup = this.fnUp.bind(this);
                        return false;
                    }.bind(this);
                }
                fnMove(ev){
                    this.oDiv.style.left = ev.clientX - this.disX + 'px';
                    this.oDiv.style.top = ev.clientY - this.disY + 'px';
                }
                fnUp(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
            //限制范围拖拽--子类（es6继承）
            class LimitDrag extends Drag{
                //重写move方法
                fnMove(ev){
                    super.fnMove(ev);//调用父类的方法，必须写，否则会子类方法会将父类的覆盖
                    //限制范围
                    if(this.oDiv.offsetLeft <= 0){
                        this.oDiv.style.left = 0;
                    }
                    if(this.oDiv.offsetTop <= 0){
                        this.oDiv.style.top = 0;
                    }
                    if(ev.clientX - disX>=document.body.clientWidth-oDiv2.offsetWidth){ //当拖动dom超过页面右边边界
                        oDiv2.style.left = document.body.clientWidth-oDiv2.offsetWidth + 'px';
                    }
                    if(this.oDiv.offsetBottom <= 0){
                        this.oDiv.style.bottom = 0;
                    }
                }
            }
            //调用
            new Drag('#div1');
            new LimitDrag('#div2')
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        background-color: blue;
        color: #fff;
        width:120px;
        height:120px;
        position: absolute;
        top:0;
        cursor: pointer;
    }
    .left{
        left:0;
    }
    .right{
        right:0;
    }

</style>