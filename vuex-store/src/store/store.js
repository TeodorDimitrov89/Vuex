import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios);

export default new vuex.Store({
    strict: true,
    state: {
        items: [
            { id: 1, title: 'TODO', done: true },
            { id: 2, title: 'TODO', done: false },
            { id: 3, title: 'TODO', done: true },
            { id: 4, title: 'TODO', done: false },
            { id: 5, title: 'TODO', done: false }
        ],
        newTodo: ''
    },
    actions: { // Make a API call async
        loadPosts() {

           // axios
           //     .get('https://jsonplaceholder.typicode.com/posts')
           //     .then((response) => {
           //         let posts = response.data;
           //         commit('SET_POSTS', posts);
           //     })
           //     .catch((err) => console.log(err));
        },
        toggleToDo ({commit}, id) {
            commit('TOGGLE_TODO', id)
        },
        deleteToDo ({commit}, id) {
            commit('DELETE_TODO', id)
        },
        addToDo({commit}) {
            commit('ADD_TODO')
        },
        updateToDo(){}

    },
    mutations: { // assign new state, or refresh the state
        SET_POSTS(state, items) {
            state.items = items
        },
        TOGGLE_TODO(state, id) {
            state.items.map(item => {
                if(item.id === id) {
                    return item.done = !item.done
                }
            })
        },
        DELETE_TODO(state, id) {
            state.items = state.items.filter(item => {
                if(item.id !== id) {
                    return item
                }
            })
        },
        UPDATE_TODO(state, value) {
            state.newTodo = value;
        },
        ADD_TODO(state) {
            let todoLength = state.items.length + 1;
            state.items.push({id: todoLength, title: state.newTodo, done: false})
        }
    },
    getters: {

    }
})
