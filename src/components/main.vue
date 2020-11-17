<template>
    <div>
        <center-area>
        </center-area>
        <other-area></other-area>
    </div>
</template>
<script>
import centerArea from './centerArea'
import github from '../../public/img/icons8-github-96.png'
import otherArea from './otherArea'

export default {
    data: function() {
        return {
            
        }
    },
    components: {
        centerArea,
        otherArea
    },
    methods: {
       
    },
    created() {
        console.log('send msg')
            this.$store.dispatch('askProfile', {
                username: 'Simooo'
            })
    }
}
</script>
<style lang="less">
    @dco: darken(#e8e8ed, 30%);
    @p: #535353;
    @lp: lighten(@p, 20%);
    body{
        &::-webkit-scrollbar{
            width: 10px;
            background: #e8e8ed;
            box-shadow: inset 0px 0px 5px @dco;
            border-radius: 5px;
            height: 0px;
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 5px;
            background: @lp;
        }
    }
</style>