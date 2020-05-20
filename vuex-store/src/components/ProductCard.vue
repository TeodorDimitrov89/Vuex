<template>
  <div class="col-3 mt-3">
    <div class="card-group">
      <div class="card">
        <img class="w-100" :src="product.image" alt="">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="{name: 'product', params: {id: product.id}}">{{product.title}}</router-link>
          </h5>
          <strong>${{product.price}}</strong>
          <p class="card-text">{{product.description}}</p>

        </div>
        <div class="px-4 pb-3">
          <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        name: "product-card",
        props: ['product'],
        methods: {
            ...mapActions(['addProductToCart']),
            addToCart() {
                this.addProductToCart({
                    product: this.product,
                    quantity: 1
                })
            }
        }
    }
</script>

<style scoped>

</style>