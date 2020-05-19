<template>
  <div id="app">
    <h1> Hello From Vuex</h1>
    <ul>
      <li v-for="(item, index) in items" :key="index + '_1'">
        <h2>{{item.id}}: {{item.title}} {{item.done}}</h2>
        <button @click="toggleTodo(item.id)" class="toggle">Toggle TODO</button>
        <button @click="deleteToDo(item.id)" class="danger">X</button>
      </li>
    </ul>
    <input type="text" v-model="todo">
    <button class="add" @click="addTodo">Add new Todo</button>
  </div>
</template>


<script>
    import {mapState} from 'vuex'

    export default {
        name: 'App',

        mounted() {
            this.$store.dispatch('loadPosts')
        },
        computed: {
            ...mapState([
                'items',
            ]),
            todo: {
                get () {
                    return this.$store.state.newTodo
                },
                set (value) {
                    this.$store.commit('UPDATE_TODO', value)
                }
            }
        },
        methods: {
            toggleTodo(id) {
                this.$store.dispatch('toggleToDo', id)
            },
            deleteToDo(id) {
                this.$store.dispatch('deleteToDo', id)
            },
            addTodo() {
                this.$store.dispatch('addToDo')
            }
        }
    }
</script>

<style scoped lang="scss">
  button {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
  }

  input {
    height: 30px;
  }

  ul {
    list-style: none;
  }

  .toggle {
    background: aqua;
  }

  .danger {
    margin-left: 10px;
    background: #ff1c31;
  }

  .add {
    background: #2fff0b;
  }
</style>
