<template>
    <div id="articlePage" >
        <top-info></top-info>
        <div id="title">{{title}}</div>
        <!-- <div>
            <router-view></router-view>
        </div> -->
        <div id="acontent" v-html="content" />
        <footer></footer>
        <div id="progressLine" :style="{ width: pw  + 'vw'}"></div>
    </div>
</template>
<script>
import topInfo from '../components/top-info'
import showdown from 'showdown'
showdown.setFlavor('github')

export default {
    data: function() {
        return{
            data: '',
            throttle: null,
            pw: 0
        }
    },
    created() {
        if(this.$store.state.article[0].content){
            return 
        }
        this.$store.commit('initArticle', this.query)
    },
    methods:{
        screenH() {
            return document.documentElement.clientHeight
        },
        currentP() {
            return document.documentElement.scrollTop
        },
        totalP() {
            return document.documentElement.scrollHeight
        },
        scrolltop() {
            if(this.throttle) return
            this.throttle = setTimeout(() => {
                this.pw =  parseInt((this.screenH()+this.currentP())/this.totalP()*100)
                clearTimeout(this.throttle)
                this.throttle = null
            }, 15);
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrolltop)
    },
    computed: {
        query() {
            return parseInt(this.$route.params.id)
        },
        title() {
            if(this.query >= this.$store.state.article.length) {
                console.log(404)
                this.$store.commit('initArticle', -1)
            }
            return this.$store.state.article[this.query].title
        },
        convertor() {
            return new showdown.Converter()
        },
        text() {
            return this.$store.state.article[this.query].content
        },
        content() {
            
            return this.convertor.makeHtml(this.text)
        }
        
    },
    components: {
        topInfo,
    }
}
</script>
<style lang="less">
    @gray-darker:  lighten(#000, 13.5%); // #222
    @gray-dark:    lighten(#000, 20%);   // #333
    @gray:         lighten(#000, 33.5%); // #555
    @gray-light:   lighten(#000, 46.7%); // #777
    @gray-lighter: lighten(#000, 93.5%); // #eee
    @dpink: darken(#d1c2d3, 30%);
    @pink: #f2dede;
    @keyframes changeColor{
        from {
            background: #fff;
            box-shadow: 0px 0px 5px #abacae;
        }
        to {
            background: darken(#fafafa, 10%);
            box-shadow: 0px 0px 12px #abacae;
        }
        
    }
    @red: #c6262e;
    #articlePage{
        footer{
            position: relative;
            height: 10px;
        }
        font-size: 16px;
        background-image: linear-gradient(to bottom right , @red, #ed5353);
        // background-image: linear-gradient(to bottom right, #50188d, #8d4bbd);
        height: 70vh;
        padding: 0px 0px 0px 0px;
        
        #info li a{
            color: #fff;
            &:hover{
                color: lighten(#ff8c82, 15%);
            }
        }
        // #info p a{
        //     color: #894276;
        //     &:hover{
        //         color: #4e2a40;
        //     }
            
        // }
        
        pre{
            padding: 0px;
            border-width: 0px;
        }
        code{
            background: #f7f7f9;
            border: 2px solid #ececf0;
            padding: 10px 20px;
            border-left: 7px solid #95d095;
            border-radius: 5px;
            display: block;
            overflow: auto;
        }
        h1{
            font-weight: 700;
            font-size: 50px;
            font-family: sans-serif;
            padding: 30px 0px;
            color: #482936;
        }
        h4{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 70%;
            margin: 17px auto;
        }
        #title{
            height: 50px;
            color: #fff;
            margin: 0px auto;
            margin-top: 100px;
            font-size: 30px;
            font-weight: 400;
            text-align: center;
            
        }
    }
    #acontent{
        border-radius: 7px;
        box-shadow: inset 0px 0px 5px #abacae;
        background: #fff;
        padding: 50px 80px;
        width: 70vw;
        margin: 150px auto;
        overflow: auto;
        // border: 1px solid #f9f4dc;
        // box-shadow: 1px 1px 3px #f9f4dc, 1px 1px 3px #f9f4dc;
        // border-radius: 5px;
        ul li{
            padding: 5px 20px;
            font-weight: 700;
        }
        blockquote{
                overflow: auto;
        }
        table{
            position: relative;
            overflow: hidden;
            border-collapse: collapse;
            margin: 50px auto;
            
            // background: @gray-lighter;
            // border: 1px solid @gray-light;
            border-radius: 5px;
            box-shadow: 0px 0px 5px #abacae;
            thead{
                tr{
                    background: lighten(@red, 5%);
                    color: #fff;
                    th{
                    padding: 10px 30px;
                    text-align: left;
                }
                }
            }
            tbody tr{
                border-radius: 5px;
                td{
                    padding: 10px 30px;
                    text-align: left;
                }
                &:hover{
                    animation: changeColor 0.5s;
                    animation-timing-function: ease-out;
                    animation-fill-mode: forwards;
            } 
            }
        }
        
    }
    @media screen and (max-width: 960px) {
        #acontent{
            background: #fff;
            padding: 40px 20px;
            width: 100vw;
            margin: 150px auto;
            
        }
    }
    #progressLine{
            position: fixed;
            bottom: 0px;
            height: 0.7vh;
            width: 100vw;
            background: #d1c2d3;
            box-shadow: 0px 0px 3px @dpink;
        }
    
</style>