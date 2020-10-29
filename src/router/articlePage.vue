<template>
    <div id="articlePage">
        <top-info></top-info>
        <div id="title">{{title}}</div>
        <!-- <div>
            <router-view></router-view>
        </div> -->
        <div id="acontent" v-html="content"/>
    </div>
</template>
<script>
import topInfo from '../components/top-info'
import showdown from 'showdown'
showdown.setFlavor('github')

export default {
    data: function() {
        return{
            data: ''
        }
    },
    computed: {
        query() {
            return parseInt(this.$route.params.id)
        },
        title() {
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
    #articlePage{
        background: #d1c2d3;
        // background-image: linear-gradient(to bottom right, #50188d, #8d4bbd);
        height: 330px;
        padding: 0px 0px 0px 0px;
        #info li a{
            color: #894276;
            &:hover{
                color: #4e2a40;
            }
        }
        #info p a{
            color: #894276;
            &:hover{
                color: #4e2a40;
            }
        }
        h3{

        }
        code{
            background: #f7f7f9;
            border: 2px solid #ececf0;
            padding: 10px 20px;
            border-left: 7px solid #95d095;
            width: 40vw;
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
        #title{
            height: 50px;
            width: 500px;
            margin: 0px auto;
            margin-top: 100px;
            font-size: 30px;
            font-weight: 400;
            text-align: center;
        }
    }
    #acontent{
        background: #fff;
        padding: 30px 80px;
        width: 70vw;
        margin: 150px auto;
        // border: 1px solid #f9f4dc;
        // box-shadow: 1px 1px 3px #f9f4dc, 1px 1px 3px #f9f4dc;
        // border-radius: 5px;
    }
</style>