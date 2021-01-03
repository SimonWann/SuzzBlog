<template>
    <div id="otherArea">
        <content>
            <router-link v-for="(item,index) in viewArticle" :key="item._id" tag="div" :to="'/article/'+(index+page*5)" class="articleArea">
            <article-box :index="index+page*5" :key="item._id"></article-box>
            </router-link> 
        </content>
        <footer>
            <button @click="lastA()">Last</button>
            <button @click="nextA(fromData, endData)">Next</button>
        </footer>
    </div>
</template>
<script>
import articleBox from './article-box'


export default {
    data: function() {
        return {
            items:
                ['Javascript',
                'Golang',
                '数据结构'
                ],
            endData: 4,
            fromData: 0,  
            page: 0
        }
    },
    computed: {
        article() {
            return this.$store.state.article
        },
        viewArticle() {
            return this.article.filter((value, index, array) => {
                return index<=this.endData && index>=this.fromData
            })
        }
    },
    components: {
        articleBox
    },
    methods: {
        getInfo(index) {
            // console.log('get')
            this.$store.commit('currentPage', index)
        },
        nextA(){
            // console.log('next')
            this.fromData += 5
            this.endData = this.fromData + 4
            this.page++
            if(this.fromData >= this.article.length) {
                this.fromData = 0
                this.endData = this.fromData + 4
                this.page = 0
                // console.log('got')
            }
            // console.log(this.article)
            // console.log(this.viewArticle, this.page)
        },
        lastA() {
            if(this.page < 1) {return}
            // console.log('last')
            this.endData -= 5
            this.fromData = this.endData - 4
            this.page--
            if(this.endData < 0) {
                this.endData = this.article.length - 1
                this.fromData = this.endData - 4
                this.page = Math.ceil(this.article.length/5)
                // console.log('got')
            }
            // console.log(this.article)
            // console.log(this.viewArticle, this.page)
        }
    }
}
</script>
<style lang="less">
    @keyframes change{
        from{
            box-shadow: 0px 0px 3px #7032a6;
            background: #8c4abc;
        }
        to{
            box-shadow: 0px 0px 5px #7032a6;
            background: #7032a6;
        }
    }
    #otherArea{
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1160px) {
            flex-direction: column;
        }
        content{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
    .articleArea{
        position: relative;
        top: -124px;
        margin: 40px auto;
        flex-basis: 30vw;
        @media screen and (max-width: 1160px) {
            margin: 20px auto;
        }
    }
    footer{
        margin: 0 auto 20px;
        width: 140px;
        position: relative;
        top: -50px;
        // transform: translate(25%, 0%);
        button{
            
            overflow: hidden;
            padding: 10px 20px;
            color: #fff;
            box-shadow: 0px 0px 3px #7032a6;
            background: #8c4abc;
            border: 1px solid #7032a6;
            outline: 0px;
            &:first-child{
                border-radius: 5px 0px 0px 5px;
                // border-right: 1px solid #fff;
            }
            &:last-child{
                border-radius: 0px 5px 5px 0px;
                // border-left: 1px solid #fff;
            }
            &:hover{
                animation: change 0.3s;
                animation-fill-mode: forwards;
            }
        }
    }
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>