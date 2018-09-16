<style lang="scss" scoped>
.search_wrap{
    display: flex;
    justify-content: center;
    margin-top: .266667rem;
    margin-bottom: .266667rem;
    height: 1.066667rem;
    position: relative;
    padding: 0 .266667rem;
    .input_wrap{
        flex: 1;
        border: 1px #CCC solid;
        padding: 0 .933333rem;
        position: relative;
        background: #fff;
        .icon-sousuo{
            position: absolute;
            left: .266667rem;
            line-height: 1.066667rem;
            font-size: 20px;/*px*/
            color: #666;
        }
        input{
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0);
            border: none;
            outline: none;
            font-size: 14px;/*px*/
            color:#666;
            &.getp{
                padding: 0px;
                color:#333;
            }
        }
        .close_wrap{
            position: absolute;
            right: 0;
            top: 0px;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            width: .933333rem;
            height: 100%;
            .closebtn{
                width: .533333rem;
                height: .533333rem;
                background: #B5B5B5;
                border-radius: 50%;
                color: #fff;
                font-size: 12px;/*px*/
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    span.button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.6rem;
        padding: 0 .1333334rem;
        background-color: #dcdcdc;
        color: #999;
        margin-left: .266667rem;
        font-size: 14px;/*px*/
    }
}
.hotsearch{
    min-height: 4.8rem;
    width: 100%;
    ul.hotclass{
        padding: 0px 0px .533333rem;
        margin: 0px;
        font-size: 14px;/*px*/
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        background: #fff;
        border-bottom: 1px solid #ccc;
        li{
            width: 25%;
            height: .533333rem;
            line-height: .533333rem;
            font-size: 14px;/*px*/
            text-overflow: ellipsis;
            overflow: hidden;
            white-space:nowrap;
            margin: .266667rem 0;
            text-align: center;
            box-sizing: border-box;
            &:first-child{
                color: #fdb338;
            }
        }
        li+li{
            border-left: 1px solid #ddd8ce;
        }
    }
    ul.searchlist{
        background: #fff;
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        li{
            height: 1.066667rem;
            line-height: 1.066667rem;
            padding: 0 .373333rem;
            background-color: #FDFDFC;
            border-bottom: 1px solid #ccc;
            color: #999999;
            i{
                font-size: 15px;/*px*/
                vertical-align:middle;
                font-weight: bold;
            }
            .pull_right{
                float: right;
            }
        }
    }
    ul.searchhistory{
        margin-top: .133333rem;
        li:first-child{
            font-weight: bold;
            font-size: 14px;/*px*/
        }
        li{
            color: #333;
            padding-right: .266667rem;
        }
    }
}
.footer_wrapper{
    border-top: 0px!important;
}
</style>

<template>
    <div class="search">
        <my-header  leftInfo="back" centerInfo="搜索" rightInfo="home"></my-header>
        <bannerDown></bannerDown>
        <div class="search_mian">
            <div class="search_wrap">
                <div class="input_wrap">
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="输入商家名、品类或商圈" v-model="searchp" :class="{'getp':searchp}" @focus="changehotbol()" @blur="changehotbol()">
                    <span class="close_wrap" @click="clearword" v-if="searchp">
                        <span class="closebtn">X</span>
                    </span>
                </div>
                <span class="button">搜索</span>
            </div>
            <div class="hotsearch">
                <ul class="hotclass" v-if="hotbol&&!searchp">
                    <li>周边热门</li>
                    <li v-for="(item,index) in hotlist" :key="index">{{item.p1}}</li>
                </ul>
                <ul class="searchlist" v-else>
                    <li v-for="(item,index) in searchdata" :key="index">
                        <i class="iconfont icon-sousuo"></i>
                        <span>{{item.p1}}</span>
                        <span class="pull_right">共{{item.num}}个团购</span>
                    </li>
                </ul>
                <ul class="searchlist searchhistory" v-if="searchhistory.length">
                    <li>搜索历史：</li>
                    <li v-for="(item,index) in searchhistory" :key="index">
                        {{item}}
                        <span class="closebtn">X</span>
                    </li>
                </ul>
            </div>
        </div>
        <designFooter></designFooter>
    </div>
</template>
<script>
import bannerDown from '@/components/common/banner-down'
import designFooter from '@/components/common/myfooter'

export default {
    name:'search',
    data(){
        return{
            searchp:'',
            hotlist:[],
            hotbol:true,
            searchdata:[],
            timernum:0,
            timer:false,
            searchhistory:['s','As'],
        }
    },
    async mounted(){
        this.hotlist = await this.$ajax.Get(this.$ApiSetting.nearbyhotUrl);
    },
    methods:{
        clearword(){
            this.searchp = '';
            console.log(this.searchp)
        },
        changehotbol(){
            this.hotbol = !this.hotbol;
        },
        async getsearchdata(word){
            console.log(word)
            if(!word){
                return;
            }
            this.searchdata = await this.$ajax.Get(this.$ApiSetting.searchdataUrl);  
        },
    },
    computed:{

    },
    watch:{
        searchp(){
            if(this.searchp){
                let timerobj;
                console.log(this.timer,this.searchp)
                if (!this.timer) {
                    this.timer = !this.timer;
                    clearTimeout(timerobj)
                    timerobj = setTimeout(() => {
                        this.getsearchdata(this.searchp);
                        this.timer = !this.timer;
                    }, 300)
                }
            }
        }
    },
    components: {
        bannerDown,
        designFooter
    }
}
</script>
