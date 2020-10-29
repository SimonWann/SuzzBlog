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

</style>