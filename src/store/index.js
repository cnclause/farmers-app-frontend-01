import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: null,
    currentUser: {
      display_name:"Catherine Clause",
      email:"cnclause123@gmail.com",
      first_name:"Catherine",
      google_id:"114516065743523704224",
      id:1,
      image_url:null,
      last_name:"Clause",
      latitude:null,
      longitude:null,
      role_id:null,
      status: "farmers"
    }
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
    }, postUser(currentUser){
        const id = this.state.user.google_id
        fetch(`http://localhost:3000/user/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ currentUser })
        }).then(console.log)
    }

  },
  modules: {
  },
})
