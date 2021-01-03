<template>
<div id="info">
     <ul>
        <li v-for="item in items">
            <a href="#">
                {{item}}
            </a>
        </li>
    </ul>
    <p id="menuu">
        <span class="glyphicon glyphicon-th-list"></span>
    </p>
    <p><router-link to="/" tag="div"><a href="#"><span class='glyphicon glyphicon-leaf'></span></a></router-link></p>
</div>
</template>
<script>

export default {
    data: function() {
        return {
            items: ['Javascript', 'Node', 'DataStructure', 'Golang']
        }
    },
    components: {

    }
    
}
</script>
<style lang="less">
#info{
    display: flex;
    justify-content: space-between;
    #menuu{
        display: none;
    }
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
    #menuu{
        color: #fff;
            font-size: 16px;
            &:hover{
                text-decoration: none;
                color: #ffdfff;
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
    @media screen and (max-width:1360px) {
            ul{
                display: none;
            }
            #menuu{
                display: block;
            }
        }
}

</style>