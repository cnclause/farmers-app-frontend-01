import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseURL = 'http://localhost:3000'
// const baseURL = 'https://cannect-01.herokuapp.com'

export default new Vuex.Store({
  state: {
    token: '',
    user: {
      email: 'cnclause123@gmail.com',
      display_name: 'cnclause',
      role_id: '1',
      status: 'owner'
    },
    currentUser: {
      email: 'cnclause123@gmail.com',
      display_name: 'cnclause',
      role_id: '1',
      status: 'owner'
    },
    news: [],
    weather: {},
    articles:[],
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
    logoutUser(state){
      state.currentUser = null
      state.user = null
      state.token = null
    },
    setNewsArticles(state, news){
      state.news = news
    },
    setWeather(state, weather){
      state.weather = weather
    },
    setArticles(state, articles){
      state.articles = articles
    },
    setTopics(state, topics){
      state.topics=topics
    },
    addTopic(state, topic){
      state.topics=[topic, ...state.topics]
    },
    addComment(state, comment){
      if(!comment.parent_id){
        state.topics.filter(topic => {
          if(comment.topic_id === topic.id){
            topic.comments.unshift(comment)
          }
        })
      } else {
        state.topics.filter(topic => {
          if(comment.topic_id === topic.id){
            topic.comments.filter(firstComment => {
             if(comment.parent_id === firstComment.id){
              firstComment.comments.unshift(comment)
             } else {
                firstComment.comments.filter(secondComment => {
                  if(comment.parent_id === secondComment.id){
                    secondComment.comments.unshift(comment)
                  } else {
                    secondComment.comments.filter(thirdComment => {
                      if(comment.parent_id === thirdComment.id){
                        thirdComment.comments.unshift(comment)
                      }
                    })
                  }
                })
             }
            })
          }
        })
      }
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
        fetch(`${baseURL}/user/${id}`)
          .then(response => response.json())
          .then(currentUser => commit("setCurrentUser", currentUser))
    }, 
    postUser({ commit }, currentUser){
        const id = currentUser.id
        fetch(`${baseURL}/user/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(currentUser)
        }).then(response => response.json())
          .then(currentUser => commit('setCurrentUser', currentUser))
    }, 
    fetchNews({ commit }){
        fetch('https://newsapi.org/v2/everything?q=cannabis&sortBy=popularity&apiKey=fd5ace6ad0b54f9c9dae1cc5004a9fb5')
          .then(response => response.json())
          .then(news => commit("setNewsArticles", news.articles))
    }, 
    fetchWeather({ commit }){
        fetch(baseURL + '/weather/forecast')
          .then(response => response.json())
          .then(weather => commit('setWeather', weather))
    }, 
    fetchTopics({ commit }){
        fetch(baseURL +'/topics')
          .then(response => response.json())
          .then(topics => commit('setTopics', topics))

    }, 
    fetchArticles({ commit }){
        fetch(baseURL +'/articles')
          .then(response => response.json())
          .then(articles => commit('setArticles', articles))

    }, 
    postTopics({ commit }, topic){
        fetch(baseURL +'/topics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(topic)
        }).then(response => response.json())
            .then(topic => commit('addTopic', {...topic, comments:[]}))
    }, 
    postComment({ commit }, comment){
        fetch(baseURL + '/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(comment)
        }).then(response => response.json())
            .then(comment => commit('addComment', {...comment, comments:[]}))
  },
    postArticle({ commit }, article){
        fetch(baseURL + '/articles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(article)
        }).then(response => response.json())
            .then(article => commit('addArticle', {...article}))
  },
    logoutUser({ commit }){
      commit('logoutUser')
    }

  },
  modules: {
  },
})
