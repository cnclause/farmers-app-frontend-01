import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: null,
    currentUser: null,
    news: [],
    weather: {},
    topics: []
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
    setWeather(state, weather){
      state.weather = weather
    },
    setTopics(state, topics){
      state.topics = topics
    }
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
        commit('setUser', user)
      } 
  
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
    }, fetchWeather({ commit }){
        fetch('http://localhost:3000/weather/forecast')
          .then(response => response.json())
          .then(weather => commit('setWeather', weather))
    }, fetchTopics({ commit }){
        fetch('http://localhost:3000/comments/topics')
          .then(response => response.json())
          .then(topics => commit('setTopics', topics))

    }

  },
  modules: {
  },
})
