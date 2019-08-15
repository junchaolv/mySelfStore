<template>
    <div>
        我是test4
    </div>
</template>

<script>
    export  default {
        name:'test4',
        data () {
            return{
                arr1: [
                    {name: '西游记', id: 1},
                    {name: '三国演义', id: 2},
                    {name: '水浒传', id: 3},
                    {name: '红楼梦', id: 4},
                ],
                arr2:[// 用户信息列表
                    {id:240201,code:'nqctedp80pc8',desc:'推广',type:'41'},
                    {id:240202,code:'nqh5q6j5vyss',desc:'推广',type:'41'},
                    {id:240203,code:'nqkvv2eqkenh',desc:'科技',type:'22'},
                    {id:240204,code:'nqkvneeqke83',desc:'推广',type:'41'},
                    {id:240205,code:'nqkvqweqk3gw',desc:'科技',type:'22'},
                    {id:240206,code:'nqkv6heqkebf',desc:'测试',type:'16'},
                    {id:240207,code:'nqkvndeqkeee',desc:'测试',type:'16'},
                    {id:240208,code:'nqkv2heqkjhf',desc:'推广',type:'41'},
                    {id:240209,code:'nqkvk7eqk6hd',desc:'推广',type:'41'}
                ],
                arr3:[
                    {id:'0',name:'吕英俊'},
                    {id:'1',name:'大头姗'},
                    {id:'2',name:'刘钰暖'},
                    {id:'3',name:'金佩奇'},
                    {id:'4',name:'亿丽蕊'},
                    {id:'5',name:'弓长铭'},
                    {id:'6',name:'六品健'},
                    {id:'7',name:'终极跟'},
                    {id:'8',name:'高田'},
                    {id:'9',name:'张淘'},
                    {id:'1',name:'贾富贵'},
                    {id:'2',name:'丁老头'},
                    {id:'3',name:'李丁丁'},
                    {id:'4',name:'转琪'}
                ],
                arr4:['洪七公','黄药师','郭靖','黄蓉','杨过','周伯通']
            }
        },
        methods:{

             // checkModel ({id,name} = {}) {
             //     if(!id&&!name){
             //         console.log('no id   no name')
             //     }
             //     console.log(id)
             //     console.log(name)
             //     return `我的id是'${id}',我的名字是'${name}'`
             // }

            // checkModel (model) {
            //     console.log('model',model)
            //     return this.arr1.some((cur)=> {
            //         return cur.name===model
            //         //如果加了括号，必须return 出去， 可以简写，不加括号
            //     })
            // }

            // checkModel1 (model) {
            //     return this.arr1.every(cur => cur.name === model)
            // },
            //
            // checkModel2 (model) {
            //     return this.arr1.find(cur => cur.name !== model) === undefined;
            // }

            // checkModel (model) {
            //     if(this.arr4.includes(model)) {
            //         return true
            //     }else{
            //         return false
            //     }
            // }
            // checkModel (model) {
            //     this.arr3.forEach((cur,index)=>{
            //         if(cur.name.includes(model)){
            //             console.log('有')
            //         }else{
            //             console.log('没有')
            //         }
            //     });
            // }
        },
        mounted () {

            const carState = {
                usa:['ford','Dpdge'],
                france:['reanff','fasdfa'],
                china:['gibnqf','hongqi','baojun']
            }

            let carStateFn = (val) =>{
                return carState[val] || []
            }


            console.log(carStateFn('china'))

            // const cars = new Map()
            // .set ('usa',['福特','雪佛兰'])
            // .set ('china',['宝骏','红旗'])
            // .set ('deguo',['宝马','奥迪'])
            // console.log(cars);
            //
            // const getCar = (val) =>{
            //     return cars.get(val) || []
            // }

            // console.log(getCar('china'))
            // console.log(this.checkModel('西游记'))
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