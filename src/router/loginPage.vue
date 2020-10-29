<template>
    <div id="login">
        <div id="loginInfo">
            <img src="../../public/img/utilities-terminal.svg" alt="">
            <form>
                <label for="username">昵称</label>
                
                <input v-model="username" type="text" name="" id="username">
                <label for="passwd">密码</label>
                <input v-model="passwd" type="password" name="" id="passwd">
                <button type="submit" @click.prevent="submit">Login</button>
                <div v-show="err" id="errInfo">{{getErr}}</div>
            </form>
        </div>
    </div>
</template>
<script>
import CryptoJS from 'crypto-js';

export default {
    data: function() {
        return {
            username: '',
            passwd: '',
            err: false
        }
    },
    computed: {
        encryptoPw() {
            return CryptoJS.AES.encrypt(this.passwd, 'guilinmifen').toString()
        },
        decryptoPw() {
            let bytes  = CryptoJS.AES.decrypt(this.encryptoPw, 'guilinmifen')
            return bytes.toString(CryptoJS.enc.Utf8)
        },
        getErr() {
            if(this.$store.state.err.length > 0){
                console.log('err')
                this.err = true
            }
            return this.$store.state.err
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('loginSubmit', {
                username: this.username,
                passwd: this.encryptoPw
            }).then(data => {
                if(data.err) {
                    return null
                }
                this.$router.push('/edit')
            })
        }
    }
}
</script>
<style lang="less">
    #login{
        background-image: linear-gradient(to bottom right, #50188d, #8d4bbd);
        background: #d1c2d3;
        height: 100vh;
        width: 100vw;
        padding: 10px;
        #loginInfo{
            width: 20vw;
            height: 50vh;
            background: #fff;
            margin: 25vh auto;
            border-radius: 5px;
            box-shadow: 0px 0px 15px #bdaead;
            padding: 10px 0;
            img{
              margin: 50px auto 10px;
              display: block;  
            }
            form{
                padding: 0% 10px;
                input{
                    border-radius: 3px;
                    border: 1px solid #bdaead;
                    width: 85%;
                    height: 10%;
                    display: block;
                    padding: 8px;
                    margin: 0px auto;
                    margin-bottom: 10%;
                    &:focus{
                       outline: 1px solid #f2e7e5; 
                    }
                }
                label{
                    font-weight: 400;
                    margin: 0px auto;
                    width: 85%;
                    height: 10%;
                    display: block;
                    color: #918072;
                    padding: 5px 0;
                }
                button{
                    border: 0px solid #fff;
                    width: 85%;
                    height: 10%;
                    padding: 8px;
                    margin: 0px auto;
                    display: block;
                    background: #d1c2d3;
                    color: #918072;
                    border-radius: 3px;
                    &:hover{
                       background: #d5c7d7; 
                    }
                    &:focus{
                       outline: 0px solid #fff;
                        background: #d5c7d7; 
                        box-shadow: 0px 0px 8px #d5c7d7;
                    }
                }
                #errInfo{
                    border: 0px solid #fff;
                    width: 85%;
                    height: 10%;
                    padding: 8px;
                    margin: 10px auto;
                    background: #d9534f;
                    color: #fff;
                    text-align: center;
                    border-radius: 3px;
                }
            }
        }
        
    }
    body{
        &::-webkit-scrollbar{
            display: none;
        }
    }
</style>