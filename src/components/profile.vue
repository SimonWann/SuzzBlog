<template>
    <div id="profile">
        <img src="../../public/img/system-software-install.svg" alt="avator">
        <h3>{{name}}</h3>
        <p>{{sentence}}</p>
        <button class="btn btn-default">
            <img src="../../public/img/icons8-github-96.png" alt="">
        </button>
    </div> 
</template>
<script>
export default {
    data: function() {
        return {
            name: this.$store.state.username,
            sentence: '......而大海那么蔚蓝',
            isrc: '../../public/img/system-software-install.svg'
        }
    }
}
</script>
<style lang="less">
    #profile{
        color: #fff;
        width: 33vw;
        margin:140px auto 0px;
        text-align: center;
        // border: 1px solid #000;
        overflow: hidden;
        h3{
            font-size: 50px;
            font-weight: 700;
            text-shadow: 1px 1px 3px #50188d;
        }
        p{
            font-size: 15px;
            text-shadow: 1px 1px 3px #50188d;
        }
        button{
            overflow: auto;
            padding: 5px;
            border-radius: 3px;
            background: #3a3a3a;
            box-shadow: inset 0px 1px 0.5px #6a6a6a,
                        inset 0px -0.5px 0.5px #6a6a6a;
            border: 1px solid #0a0a0a;
            &:hover,&:active{
                box-shadow: 1px 1px 2px #3a3a3a;
                
            }
            
            img{
                max-width: 30px;
                
            }
        }
    }
</style>