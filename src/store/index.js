import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: null,
    currentUser: {},
    news: {}
  },
  mutations: {
    setToken(state,token){
      state.token = token
    },
    setUser(state, user){
      state.user = user
    },
    setCurrentUser(state, currentUser){
      state.currentUser = currentUser
    },
    setNewsArticles(state, news){
      state.news = news
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user
    }
  },
  actions: {
    login({ commit }, token){
      if(token){
        commit('setToken', token)
        localStorage.token = token
        // use jwt library to parse
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_','/')
        const user = JSON.parse(window.atob(base64))
        // console.log("user", user)
        commit('setUser', user)
        // console.log("state", this.state.user.google_id)
      } 
      // else {
      //   commit('setToken', '')
      //   commit('setUser', null)
      // }
  
    }, fetchUser({ commit }){
        const id = this.state.user.google_id
        fetch(`http://localhost:3000/user/${id}`)
          .then(response => response.json())
          .then(currentUser => commit("setCurrentUser", currentUser))
    // }, postUser(userInfo){
    //     const id = this.state.user.google_id
    //     fetch(`http://localhost:3000/user/${id}`, {
    //       method: 'PATCH',
    //       headers: { 'Content-Type': 'application/json'},
    //       body: JSON.stringify({ userInfo })
    //     }).then(console.log)
    }, fetchNews({ commit }){
      fetch('https://newsapi.org/v2/everything?q=cannabis&sortBy=popularity&apiKey=fd5ace6ad0b54f9c9dae1cc5004a9fb5')
        .then(response => response.json())
        .then(news => commit("setNewsArticles", news.articles))
    }

  },
  modules: {
  },
})
