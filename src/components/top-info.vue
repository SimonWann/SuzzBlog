<template>
<div id="info">
     <ul>
        <li v-for="item in items">
            <a href="#">
                {{item}}
            </a>
        </li>
    </ul>
    <p><router-link to="/" tag="div"><a href="#"><span class='glyphicon glyphicon-leaf'></span></a></router-link></p>
</div>
</template>
<script>
export default {
    data: function() {
        return {
            items: ['Javascript', 'Node', 'DataStructure', 'Golang']
        }
    }
    
}
</script>
<style lang="less">
#info{
    display: flex;
    justify-content: space-between;
    ul{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: baseline;
        width: 25vw;
    }
    li{
        margin: 10px;
        font-size: 15px;
        color: #ffffff;
        font-family: sans-serif;
        a{
            color: #fff;
            overflow: hidden;
            &:hover{
                text-decoration: none;
                color: #ffdfff;
            }
        }
    }
    p{
        padding: 10px;
        padding-right: 20px;
        a{
            color: #fff;
            font-size: 16px;
            &:hover{
                text-decoration: none;
                color: #ffdfff;
            }
        }
    }
}

</style>