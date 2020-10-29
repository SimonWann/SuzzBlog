<template>
    <div id="centerArea">
        <top-info></top-info>
        <profile></profile>
    </div>
</template>
<script>
import topInfo from './top-info'
import profile from './profile'

export default {
    components: {
        topInfo,
        profile
    }
}
</script>
<style lang="less">
    #centerArea{
        background-image: linear-gradient(to bottom right, #50188d, #8d4bbd);
        height: 730px;
        
    }
</style>