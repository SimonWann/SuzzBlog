<template>
    <div :style="{top: distance + 'px'}" id="articleBox" ref="card" >
        <h3><span class="glyphicon" :class="stylefont[index%stylefont.length]" ></span></h3>
        <h3>{{title}}</h3>
        <p>{{content}}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            title: this.$store.state.article[this.index].title,
            content: this.$store.state.article[this.index].introduction,
            distance: 0,
            stylefont: ['glyphicon-tag',
                        'glyphicon-plane',
                        'glyphicon-erase',
                        'glyphicon-tree-deciduous']
        }
    },
    props: {
        index: Number
    },
    computed: {
        thisFont(font, index) {
            return font
        }
    },
    methods: {
        
    }
}
</script>
<style lang="less">
    @keyframes move{
        from{
            box-shadow: 0px 1px 6px #a6a6a6;
            top: 0px;
        }
        to{
            box-shadow: 0px 1px 13px #a6a6a6;
            top: -3px;
        }
    }
    #articleBox{
        padding: 10px 20px;
        margin: 0px auto;
        overflow: hidden;
        border: 1px solid #dadada;
        border-bottom-color: #a6a6a6;
        border-radius: 3.5px;
        box-shadow: 0px 1px 6px #a6a6a6;
        width: 300px;
        height: 240px;
        background: #fff;
        text-align: center;
        position: relative;
        &:hover{
            cursor: pointer;
        }
        h3{
            color: #7a36b1;
            font-size: 33px;
            &:first-child{
                margin-top: 22px;
                font-size: 36px;
                margin-bottom: 8px;   
            }
            &:nth-child(2){
                margin-top: 0px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        p{
            padding-top: 10px;
            line-height: 22px;
        }
        &:hover{
            animation: move 0.5s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
        }
    }
    @media screen and (max-width: 960px){
        
    }
    
    
</style>