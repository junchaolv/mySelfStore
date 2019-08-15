<template>
    <div id="app">
        <!--<el-button @click="jump">afdasdf</el-button>-->
        <!--<test2></test2>-->
        <!--<div>-->
            <!--&lt;!&ndash;<p>用Array实现：</p>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-select v-model="selectId" @change="changeItem">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-option v-for="(item,index) in showList" :value="item.id" :label="item.name" :key="index"></el-option>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
            <!--&lt;!&ndash;<p v-show="selectId">{{`当前选择：${showText},id为${selectId}`}}</p>&ndash;&gt;-->

            <!--<p>用Map实现：</p>-->
            <!--<el-select v-model="selectId">-->
                <!--<el-option v-for="(val,key) in showMap" :value="key" :label="val" :key="key"></el-option>-->
            <!--</el-select>-->
            <!--<p v-show="selectId">{{`当前选择：${showMap[selectId]},id为${selectId}`}}</p>-->
        <!--</div>-->

        <!--<div>-->
            <!--<b>专家姓名：</b>-->
            <!--<input type="text" v-model="testText" @blur="blurText">-->
            <!--<span>{{testText}}</span>-->
        <!--</div>-->

        <!--<div>-->
            <!--<ul class="header">-->
               <!--<li v-for="(item,indx) in personList">-->
                   <!--<p>-->
                       <!--<input type="checkbox" @change="singleChecked" :value="item.id" v-model="checkedCode" />-->
                       <!--<b>id：  </b><span>{{item.id}}</span>-->
                       <!--<b>code：</b><span>{{item.code}}</span>-->
                       <!--<b>desc：</b><span>{{item.desc}}</span>-->
                       <!--<b>type：</b><span>{{item.type}}</span>-->
                   <!--</p>-->
               <!--</li>-->
            <!--</ul>-->
            <!--<div class="contentBottom">-->
                <!--<label class="chooseAll">-->
                    <!--<input type="checkbox" class="allCheckedInput" v-model='isAllChecked' @click='chooseAll'/>-->
                    <!--全部选择-->
                <!--</label>-->
                <!--<span class="batchExport" @click="batchExport">批量导出</span>-->
            <!--</div>-->

        <!--</div>-->

        <!--<div>-->
            <!--<el-button type="primary">hahaha</el-button>-->
            <!--<div id="myChart" :style="{width: '1000px', height: '300px'}"></div>-->
            <!--<childComponents :messages="father"></childComponents>-->
            <!--<p>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
            <!--<div class="box">-->
                <!--<ul>-->
                    <!--<p><b>ullist</b></p>-->
                    <!--<input type="checkbox" @input="checkAll()" :value="ulList" v-model="allCheckData"/>全选-->
                    <!--<li v-for="(item,index) in ulList">-->
                        <!--<p>-->
                            <!--<input type="checkbox" v-model="ulCheckData" :value="item">-->
                            <!--id：{{item.id}} -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;name：{{item.name}}-->
                        <!--</p>-->
                    <!--</li>-->
                <!--</ul>-->
                <!--<p class="add" @click="addData">添加</p>-->
                <!--<dl>-->
                    <!--<p><b>dllist</b>-&#45;&#45;&#45;&#45;<b class="add" @click="delData">删除所选项</b></p>-->
                    <!--<p><b>全选</b><input type="checkbox" v-model="allCheckData" :value="dlList" @input="allBindData"></p>-->
                    <!--<dd v-for="(item,index) in dlList">-->
                        <!--<p>-->
                            <!--<input type="checkbox" v-model="dlCheckData" :value="item" @input="dlBindData(item)">-->
                            <!--id：{{item.id}} -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;name：{{item.name}}-->
                        <!--</p>-->
                    <!--</dd>-->
                <!--</dl>-->
            <!--</div>-->
        <!--</div>-->
        <child></child>
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    import child from '@/components/child';
    import test2 from '@/components/test2';
    import childComponents from '@/components/child';
    // 引入基本模板
    // let echarts = require('echarts/lib/echarts');
    // 引入柱状图组件
    // require('echarts/lib/chart/bar');
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name: 'App',
        data () {
            return{
                selectId:'',
                selectMapId:'',
                showText:'',
                showList: [
                    {name: '西游记', id: 1},
                    {name: '三国演义', id: 2},
                    {name: '水浒传', id: 3},
                    {name: '红楼梦', id: 4}
                ],
                testText:'',
                checkedCode: [],        // 用于保存被选中的数据
                isAllChecked: false,    // 正在进行中的数据是否被选中
                personList:[// 用户信息列表
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
                allCheckData:[],
                ulCheckData:[],
                dlCheckData:[],
                father:'我是你爸爸带过来的',
                tempList:[],
                dlList:[
                    {id:'1',name:'大头珊'},
                    {id:'2',name:'刘愚涵'},
                    {id:'3',name:'金佩奇'},
                    {id:'4',name:'亿丽蕊'},
                    {id:'5',name:'弓长铭'},
                    {id:'6',name:'六品健'}
                ],
                ulList:[
                    {id:'0',name:'吕英俊'},
                    {id:'1',name:'大头珊'},
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
                chartList:[],
                chartList2:[]
            }
        },
        watch:{
            // ulList:function () {
            //     console.log(123)
            // }
        },
        computed: {
            // showMap(){
            //     let mapBox = {};
            //     this.showList.forEach(row =>{
            //         mapBox[row.id] = row.name
            //     });
            //     return mapBox
            // }
        },
        methods:{
            jump(){
              this.$router.push({path:'/rest2'})
            },
            // changeItem() {
            //     for (let i in this.showList) {
            //         if (this.showList[i].id === this.selectId) {
            //             this.showText = this.showList[i].name;
            //             break
            //         }
            //     }
            // },
            // blurText () {
            //     var reg=/^[1-9]\d*$|^0$/; // 注意：故意限制了 0321 这种格式，如不需要，直接reg=/^\d+$/;
            //     if(reg.test(this.testText)==true){
            //         alert("都是数字！通过");
            //         return true;
            //     }else{
            //         alert("不是纯数字！失败！");
            //         return false;
            //     }
            // },
            // // 用户单选
            // singleChecked: function(){
            //     // 判断每一个CheckBox是否选中，全选中让全选按钮选中,只要有一个checkbox不选中，让全选按钮不选中
            //     if(this.personList.length === this.checkedCode.length){
            //         this.isAllChecked = true;
            //     }else{
            //         this.isAllChecked = false;
            //     }
            // },
            // // 用户全选
            // chooseAll: function(e){
            //     console.log('event:',e);
            //     var that = this;
            //     //如果已选择若干条数据，则每次点击都会清空选中的数据
            //     if(that.checkedCode.length !== 0){
            //         that.checkedCode = [];
            //     }
            //     //如果全选按钮被选中
            //     if(!that.isAllChecked){
            //         that.personList.forEach(function(data){
            //             that.checkedCode.push(data.id)
            //         },that)
            //     }else{
            //         that.checkedCode = [];
            //     }
            //     console.log('that.checkedCode',that.checkedCode)
            // },
            // // 一键导出
            // batchExport: function(){
            //     var that = this;
            //     var len = that.checkedCode.length;
            //     if(len !== 0){
            //         var code_list = "";
            //         // code_list参数要以"'dasfdghdfg','dfe4vxv','rtersdc'"形式传入，每个后台需求不一样
            //         for(var i=0;i<len;i++){
            //             code_list += "'" + that.checkedCode[i] + "',";
            //         }
            //         code_list = code_list.substring(0,code_list.lastIndexOf(','));
            //         that.code_list = code_list;
            //         that.batchExportFunc();
            //     }else{
            //         console.log('您还未选中任一选项！');
            //     }
            // },
            // // 一键导出处理函数
            // batchExportFunc: function(){
            //     var that = this;
            //     var requestUrl = index.baseApiUrl + "?m=movlib&c=giftcard&a=eportCodeList";
            //     var formData = {
            //         code_list: that.code_list
            //     };
            //     $.post(
            //         requestUrl,
            //         formData,
            //         res => {
            //             // 将生成的csv文件保存在本地
            //             var link = document.createElement("a");
            //             var blob = new Blob(["\ufeff" + res], {
            //                 type: 'text/csv'
            //             });
            //             link.setAttribute("href", URL.createObjectURL(blob));
            //             document.body.appendChild(link);
            //             link.click();
            //         }
            //     )
            // },
            // checkAll () {
            //
            // },
            // allBindData () {
            //     console.log(this.allCheckData)
            // },
            // addData () {
            //     let obj = {};
            //     this.tempList = this.ulCheckData.reduce((cur,next)=>{
            //         obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
            //         return cur
            //     },[]);
            //     for(var i = 0 ; i < this.tempList.length ; i++ ){
            //         var flag = true;
            //         for(var j = 0 ; j < this.dlList.length ; j++ ){
            //             if(this.tempList[i].id === this.dlList[j].id){
            //                 flag = false;
            //             }
            //         }
            //         if(flag){
            //             this.dlList.push(this.tempList[i]);
            //         }
            //     }
            // },
            // delData () {
            //     this.dlList = this.dlList.filter(i => {
            //         return i.powerTemp !== true
            //     });
            // },
            // dlBindData (item) {
            //     item.powerTemp = true;
            // },
            // drawLine () {
            //     // 基于准备好的dom，初始化echarts实例
            //     let myChart = echarts.init(document.getElementById('myChart'))
            //     // 绘制图表
            //     myChart.setOption({
            //         title: { text: 'ECharts实例' },
            //         tooltip: {},
            //         xAxis: {
            //             // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","帽子","羽绒服"]
            //             data: this.chartList
            //         },
            //         yAxis: {},
            //         series: [{
            //             name: '销量',
            //             type: 'bar',
            //             data: this.chartList2
            //         }]
            //     });
            // }
        },
        created(){
            // var log = console.log.bind(console);
            // var newarr = [
            //     { num: 1, val: 'ceshi', flag: 'aa' },
            //     { num: 2, val: 'ceshi2', flag: 'aa2'  }
            // ];
            // console.log(newarr.filter(item => item.num===2 ))

            // //实际上是把返回值没有2的项打印了出来
            // var arr = ['10','12','23','44','42']
            // var newArr = arr.filter(item => item.indexOf('2')<0)
            // console.log(newArr)

            // var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
            // var arr2 = arr.filter((x, index,self)=>{console.log(self.indexOf(x)===index);
            // // var arr2 = arr.filter((x, index,self)=>{console.log( self.indexOf(x) === index); return self.indexOf(x)===index})
            // console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 0, 56]

            // for (let index of [{'a':"123"}, {'b':"456"}].keys()) {
            //     console.log(index);
            // }

            //
            // for (let elem of ['a', 'b'].values()) {
            //     console.log(elem);
            // }
            //
            // for (let [index, elem] of ['a', 'b'].entries()) {
            //     console.log(index, elem);
            // }
        },
        mounted(){
            // var that = this;
            // this.ulList.forEach(function(v){
            //     that.chartList.push(v.name);
            //     that.chartList2.push(v.id)
            // });
            // this.drawLine();
        },
        components:{
            childComponents,test2,child
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        font-family: "微软雅黑";
    }
    li,dd,dt{
        list-style: none;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .box{
        display: flex;
        align-items: center;
        justify-content: center;
        dl,ul p{
            text-align: left;
            b{
                display: inline-block;
                font-size: 24px;
                margin: 0  0 10px;
            }
        }
        .add{
            padding: 0 20px;
            margin: 0 20px;
            font-size: 14px;
            font-weight: normal;
            text-align: center;
            height:30px;
            line-height: 30px;
            color: #fff;
            background-color: #4385f4;
            border-radius: 20px;
            cursor: pointer;
            transition: .4s all;
        }
        .add:hover{
            background-color: deepskyblue;
        }
    }
    .header{
        text-align: left;
        padding-left: 50px;
        width: 900px;
        li{
            p{
                width: 100%;
                height: 32px;
                line-height: 32px;
                border: 1px solid skyblue;
                padding-left: 10px;
            }
        }
        b{
            border-right: 1px solid #000;
        }
        span{
            display: inline-block;
            padding: 0 20px 0;
            border-right: 1px solid skyblue;

        }
        span:nth-of-type(2){
            width: 150px;
        }
    }
    .contentBottom{
        width: 98%;
        height: 30px;
        line-height: 30px;
        text-align: right;
        margin-top: 10px;
        padding: 0 50px;
        font-size: 14px;
    }

    .batchExport,.chooseAll{
        float: left;
        display: inline-block;
        padding: 0 10px;
        border: 1px solid #CCC;
        border-radius: 5px;
        cursor: pointer;
    }

    .batchExport,.chooseAll{
        margin-left: 20px;
    }

    .allCheckedInput{
        vertical-align: middle;
    }
</style>
