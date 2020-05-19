<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item active nav-link">Home</router-link>
          <router-link to="/product" class="nav-item  nav-link">Products</router-link>
          <!--<a class="nav-item active nav-link" href="#">Home</a>-->
          <!--<a class="nav-item active nav-link" href="#">Products</a>-->
        </div>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
            0 Cart
          </button>
          <div @click="$event.stopPropagation()">
            <mini-cart></mini-cart>
          </div>
        </div>
      </div>
    </nav>


  </div>

</template>

<script>
    import MiniCart from './MiniCart'
    export default {
        name: "app-header",
        components: {
            MiniCart
        }
    }
</script>

<style scoped>

</style>