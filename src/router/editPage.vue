<template>
    <div id="editPage">
        <div id="menu" >
            <a href="#" @click='chooseAr(index)' v-for="(item,index) in number" class="list-group-item" :class="{active: isClick === index }">{{article[index].title}}</a>
            <a href="" v-if="newArticle" @click.prevent='newPaper' class="list-group-item" :class="{active: isNewActive}">{{newArticleC.title}}</a>
            <a href="" @click.prevent="addPaper" class='list-group-item' id="addpaper"><span class="glyphicon glyphicon-plus"></span></a>
            
        </div>
        <div id="editArea" class="jumbotron">
            <div v-if="!isNewActive" id="article">
                <input type="text" v-model="article[currentNum].title">
                <div id="control" v-if="isDone">
                    <button v-for="item in btn" @click="getEdited(item, currentNum, article[currentNum])" class="btn btn-default" type="submit">{{item}}</button>
                </div>
                <div id="success" v-else="isDone" class="alert alert-success" role="alert">修改成功~</div>
                <div v-if="isMarkDownInfo" id="markdown" class="alert alert-info" role="alert" v-html="markdownInfo"></div>
                <textarea name="" v-model="article[currentNum].content" id="content" cols="30" rows="10" class="well"></textarea>
            </div>
            <div v-else="!isNewActive" id="articleNew">
                <input type="text" v-model="newArticleC.title">
                <div id="control2" v-if="isDone">
                    <button v-for="item in btn" @click="getEdited(item, -1, newArticleC)" class="btn btn-default" type="submit">{{item}}</button>
                </div>
                <div id="success2" v-else="isDone" class="alert alert-success" role="alert">修改成功~</div>
                <div v-if="isMarkDownInfo" id="markdown2" class="alert alert-info" role="alert" v-html="markdownInfo"></div>
                <textarea name="" v-model="newArticleC.content" id="content2" cols="30" rows="10" class="well"></textarea>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            currentNum: 0,
            isClick: -1,
            // number: this.$store.state.paperNum,
            // article: this.$store.state.article,
            username: this.$store.state.username,
            btn: ['提交修改', '删除文章', 'markdown提示'],
            edited: {

            },
            isDone: true,
            markdownInfo: `# 一级标题 <br/>
                            ## 二级标题 <br/>
                            ##### 五级标题 <br/>
                            - 列表第一项 <br/>
                            - 列表第二项 <br/>
                            1. 有序列表第一项 <br/>
                            2. 有序列表第二项 <br/>
                            [标题](链接地址) <br/>
                            ![图片描述](图片链接地址) <br/>
                            *斜体* <br/>
                            **粗体** <br/>
                            > 引用段落 <br/>
                            \`\`\` <br/>
                            代码块 <br/>
                            \`\`\` <br/>
                            `,
            isMarkDownInfo: false,
            newArticle: false,
            isNewActive: false,
            newArticleC: 
                {
                    title: '新文章',
                    content: '新内容',
                    data: Date.now()
                } 
            
            
        }
    },
    computed: {
        articleA() {
            if(!this.$store.state.article)
            return [
                {
                    title: '',
                    introduction: '',
                    content: ''
                }
            ]
        },
        number() {
            return this.$store.state.paperNum
        },
        article() {
            return this.$store.state.article
        }
    },
    methods: {
        getEdited(item, currentNum, article) {
            if(item === '提交修改'){
                console.log(article)
                this.$store.dispatch('editSubmot' , {
                    article: article,
                    currentNum: currentNum,
                    username: this.username
                })
                .then( (data) => {
                    console.log(data)
                    if(data.data === 'modified ok') {
                        this.isDone = false
                        setTimeout(() => {
                            this.isDone = true
                            this.refresh()
                        }, 5000);
                    }
                })

            } else if (item === '删除文章') {
                console.log(article)
                this.$store.dispatch('deleteSubmit' , {
                    article: article,
                    currentNum: currentNum,
                    username: this.username
                }).then( data => {
                    this.currentNum = 0
                    this.isClick = -1
                    console.log(data)
                    if(data.data === 'deleted~') {
                        this.isDone = false
                        setTimeout(() => {
                            this.isDone = true
                            this.refresh()
                        }, 1000);
                    }
                } )
            } else if(item === 'markdown提示') {
                this.isMarkDownInfo = !this.isMarkDownInfo
            }
        },
        chooseAr(index) {
            this.isClick = index
            this.currentNum = index
            this.isNewActive = false
            // this.newArticle = false
            return index
        },
        addPaper() {
            this.isClick = -1
            // this.currentNum = -1
            this.newArticle = true
            // this.$store.dispatch('addSubmit', {
            //     article: this.article[this.currentNum],
            //     currentNum: this.currentNum,
            //     username: this.username
            // })
        },
        newPaper() {
            this.isClick = -1
            this.isNewActive = true
            return this.article.length
        },
        refresh(data) {
            this.$store.dispatch('askProfile')
            .then(data => {
                console.log('refresh!!!', data.data)

                this.currentNum = 0
                this.isClick = -1
                this.newArticle = false
                this.isNewActive = false
                if(this.newArticleC) {
                    this.newArticleC.title = '新文章' 
                    this.newArticleC.content = '新内容'
                    this.newArticleC.data= Date.now()
                }
            })
        }
    },
    created() {
        this.chooseAr(0)
    }
}
</script>
<style lang="less">
    #editPage{
        display: flex;
        justify-content: space-around;
        width:100vw;
        height: 100vh;
        #menu{
            width: 20vw;
            height: 100vh;
            a{
                padding: 20px;
                font-size: 18px;
                text-align: center;
            }
            #addpaper{
                text-align: center;
            }
        }
        #editArea{
            width: 80vw;
            height: 100vh;
            background: #f7f7f9;
            padding: 0px;
            #article{
                #markdown{
                   position: absolute; 
                   left: 50%;
                   top: 30vh;
                }
                #success{
                    margin-bottom: 0px;
                }
                input{
                    display: block;
                    width: 100%;
                    height: 10vh;
                    padding: 50px;
                    font-family: sans-serif;
                    font-size: 35px;
                    font-weight: 700;
                    color: #777;
                    border: 1px solid #dddddd;
                    &:focus{
                        outline: 1px solid #dddddd;
                        box-shadow:inset 0px 0px 7px #ddd;
                    }
                }
                #control{
                    padding: 5.5px 50px;
                    width: 100%;
                    height: 5vh;
                    border-left: 1px solid #dddddd;
                    button{
                        margin: 0px 30px 0px 0px;
                    }
                }
                textarea{
                    display: block;
                    width: 100%;
                    height: 85vh;
                    padding: 50px;
                    background: #f7f7f9;
                    border: 1px solid #dddddd;
                    color: #777;
                    font-size: 18px;
                    &:focus{
                        outline: 1px solid #dddddd;
                        box-shadow:inset 0px 0px 7px #ddd;
                    }
                }
            }
            #articleNew{
                #markdown2{
                   position: absolute; 
                   left: 50%;
                   top: 30vh;
                }
                #success2{
                    margin-bottom: 0px;
                }
                input{
                    display: block;
                    width: 100%;
                    height: 10vh;
                    padding: 50px;
                    font-family: sans-serif;
                    font-size: 35px;
                    font-weight: 700;
                    color: #777;
                    border: 1px solid #dddddd;
                    &:focus{
                        outline: 1px solid #dddddd;
                        box-shadow:inset 0px 0px 7px #ddd;
                    }
                }
                #control2{
                    padding: 5.5px 50px;
                    width: 100%;
                    height: 5vh;
                    border-left: 1px solid #dddddd;
                    button{
                        margin: 0px 30px 0px 0px;
                    }
                }
                textarea{
                    display: block;
                    width: 100%;
                    height: 85vh;
                    padding: 50px;
                    background: #f7f7f9;
                    border: 1px solid #dddddd;
                    color: #777;
                    font-size: 18px;
                    &:focus{
                        outline: 1px solid #dddddd;
                        box-shadow:inset 0px 0px 7px #ddd;
                    }
                }
            }
        }
    }
</style>