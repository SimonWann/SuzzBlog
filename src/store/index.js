import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const blogAxios = Axios.create({
  baseURL: 'http://suzzz.top:3001'
})

export default new Vuex.Store({
  state: {
    username: '',
    paperNum: 1,
    article: [
      {
        title: '',
        introduction: '',
        content: ''
      }
    ],
    err: ''
  },
  mutations: {
    profile(state, payload) {
      state.username = payload.data.username
      state.paperNum = payload.data.paperNum
      state.article = payload.data.article
      state.article.reverse()
    },
    loginIn(state, payload) {
      console.log(payload.data)
      if(payload.data.err && payload.data.err.length>0) {
        state.err = payload.data.err
        return
      }
      state.username = payload.data.username
      state.paperNum = payload.data.paperNum
      state.article = payload.data.article
    },
    currentPage(state, payload) {
      console.log(payload.data)
    },
    initArticle(state, payload) {
      console.log(state.article[payload])
      if(state.article[payload] === undefined) {
        console.log(404)
        state.article[payload] = {
          title: '404',
          introduction: 'Not found',
          content: 'Not found 页面不存在'
        }
      } else {
        state.article[payload] = {
          title: '',
          introduction: '',
          content: ''
        }
      }
    }
  },
  actions: {
    askProfile(context) {
      return blogAxios({
        url: '/lo'
      })
      .then((data) => {
        // console.log(data)
        context.commit('profile', data)
        return new Promise((resolve, reject) => {
          resolve(data)
        })
      })
    },
    loginSubmit(context, payload) {
      return blogAxios({
        url: '/loginSubmit',
        method: 'post',
        data: payload
      }).then(data => {
        context.commit('loginIn', data)
        return new Promise((resolve, reject) => {
          resolve(data.data)
        })
      })
    },
    editSubmot(context, payload) {
      return blogAxios({
        url: '/editSubmit',
        method: 'post',
        data: payload
      }).then(data => {
        return new Promise((resolve, reject) => {
          resolve(data)
        })
      })
    },
    deleteSubmit(context, payload) {
      return blogAxios({
        url: 'deleSubmit',
        method: 'post',
        data: payload
      }).then(data => {
        return {
          data: this.dispatch('askProfile'),
          deleted: 'ok'
        }
      })
    },
    addSubmit(context, payload) {
      console.log('add')
      return blogAxios({
        url: '/addSubmit',
        method: 'post',
        data: payload
      }).then(data => {
        resolve(data)
      })
    },
    test(context) {
      return blogAxios({
        url: 'test',
        method: 'get'
      }).then(data => {
        console.log(data)
      })
    }
  },
  modules: {
  }
})
