<template>
    <div style="text-align: left;margin-left: 50px">




        search：<el-input style="width:200px;" v-model="searchValue" placeholder="请输入内容"></el-input>
        <ul style="margin: 30px;">
            <li v-for="(item,index) in fliterPersons">
                {{index}}----{{item.name}}----age：{{item.age}}
            </li>
        </ul>
        <el-button type="primary" @click="setOrderBy(1)">年龄升序</el-button>
        <el-button type="primary" @click="setOrderBy(2)">年龄降序</el-button>
        <el-button type="primary" @click="setOrderBy(0)">原本顺序</el-button>
    </div>
</template>

<script>
    export  default {
        name:'test2',
        data () {
            return{
                searchValue:'',
                orderType:0,
                persons:[
                    {id:'111',name:'吕俊超1',age:18},
                    {id:'222',name:'刘钰涵2',age:68},
                    {id:'333',name:'张传铭2',age:88},
                    {id:'444',name:'刑大珊1',age:43},
                    {id:'111',name:'吕俊超1',age:18},
                    {id:'444',name:'刑大珊1',age:43}
                ],
                fromData:[
                    {
                        id:'1',
                        pid:0,
                        lv:0,
                        label:'一级 1',
                        children:[
                            {
                                id:'1-1',
                                pid:'1',
                                label:'二级 1-1',
                                children:[]
                            },
                            {
                                id:'1-2',
                                pid:'1',
                                label:'二级 1-2',
                                children:[
                                    {
                                        id:'1-2-1',
                                        pid:'1-2',
                                        label:'二级 1-2-1',
                                        children:[]
                                    },
                                    {
                                        id:'1-2-2',
                                        pid:'1-2',
                                        label:'二级 1-2-2',
                                        children:[]
                                    }
                                ]
                            },
                        ],
                        toData:[],
                    }
                ],
                arrTemp:['哈哈','嘿嘿','吼吼','嘻嘻','嘎嘎'],
                objTemp:[],
                fruitColor:{
                    red:['apple','strawberry'],
                    yellow:['banana','pineapple'],
                    purple:['grape','plum'],
                }
            }
        },
        mounted() {

            // let a = {a:'11',b:'22',c:'33'};
            // let b = {d:'44',e:'55',f:'66'};
            // let merged = {...a,...b}
            // console.log(merged)

            // let bbb = this.pick(...this.persons);
            // console.log(bbb)

            // for( const [i,v] of this.arrTemp.entries()){
            //     // console.log('i-v：',i,v)
            // }
            // var aaa = this.test('red');
        },
        computed:{
            fliterPersons() {
                //取出相关数据
                const {searchValue,persons,orderType} = this;
                //定义返回最终数据
                let newPersons = [];
                //过滤不符合的数据
                newPersons = persons.filter((current)=>current.name.indexOf(searchValue) >= 0);
                //排序，1为升序，2为降序
                if(orderType!==0){
                    newPersons.sort((p1,p2)=>{//如果返回负数p1在前，返回正数p2在前面
                        if(orderType === 2){
                            return p2.age-p1.age;
                        } else {
                            return p1.age-p2.age;
                        }
                    })
                }
                return newPersons
            }
        },
        methods:{
            setOrderBy(orderType) {
                this.orderType = orderType;
            },
            test(color) {
                return this.fruitColor[color] || [];
            },
            pick({id,name,age}) {
                console.log(id)
                console.log(name)
                console.log(age)
                return {
                    guid:id,
                    ...( name && {name} ),
                    ...( age && {age} )
                }
            }
        }
    }
</script>

<style>

</style>