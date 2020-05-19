<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
    // import {mapState} from 'vuex'
    import AppHeader from './components/AppHeader'
    export default {
        name: 'App',
        components: {
            AppHeader
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
