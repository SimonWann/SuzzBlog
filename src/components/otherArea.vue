<template>
    <div id="otherArea">
        <router-link v-for="(item,index) in article" :key="item._id" tag="div" :to="'/article/'+index" class="articleArea">
            <article-box :index="index" :key="item._id"></article-box>
        </router-link> 
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
                ]
        }
    },
    computed: {
        article() {
            return this.$store.state.article
        } 
    },
    components: {
        articleBox
    },
    methods: {
        getInfo(index) {
            console.log('get')
            this.$store.commit('currentPage', index)
        }
    }
}
</script>
<style lang="less">
    #otherArea{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        @media screen and (max-width: 1160px) {
            flex-direction: column;
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
</style>