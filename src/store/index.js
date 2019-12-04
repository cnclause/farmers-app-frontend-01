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
      state.topics=topics
    },
    addTopic(state, topic){
      state.topics=[topic, ...state.topics]
    },
    addComment(state, comment){
      if(!comment.parent_id){
        state.topics.filter(topic => {
          if(comment.topic_id === topic.id){
            topic.comments.push(comment)
          }
        })
      } else {
        state.topics.filter(topic => {
          if(comment.topic_id === topic.id){
            topic.comments.filter(firstComment => {
             if(comment.parent_id === firstComment.id){
              firstComment.comments.push(comment)
             } else {
                firstComment.comments.filter(secondComment => {
                  if(comment.parent_id === secondComment.id){
                    secondComment.comments.push(comment)
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

    }, postTopics({ commit }, topic){
        fetch('http://localhost:3000/topics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(topic)
        }).then(response => response.json())
            .then(topic => commit('addTopic', topic))
    }, postComment({ commit }, comment){
        fetch('http://localhost:3000/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(comment)
        }).then(response => response.json())
            .then(comment => commit('addComment', comment))
  }

  },
  modules: {
  },
})
