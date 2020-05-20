<template>
  <div>
    <div class="row mt-5"  v-if="product" >
      <div class="col-4">
        <img :src="product.image" class="w-100" />
      </div>
      <div class="col-8">
        <h1>{{product.title}}</h1>
        <h3>${{product.price}}</h3>
        <input type="text" v-model.number = "quantity" class="text-center col-1 mr-2 p-1"  />
        <button class="btn btn-primary" @click="addToCart()">Add to Cart</button>
        <p class="mt-4">{{product.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "product",
        props: ['id'],
        data() {
            return {
                quantity: 1
            }
        },
        mounted() {
            // this.$store.dispatch('getProduct', this.id)
            this.getProduct(this.id)
        },
        computed: {
            ...mapState(['product'])
        },
        methods: {
            ...mapActions(['getProduct', 'addProductToCart']),
            addToCart() {
                this.addProductToCart({
                    product: this.product,
                    quantity: this.quantity
                })
            }
        }
    }
</script>

<style scoped>

</style>