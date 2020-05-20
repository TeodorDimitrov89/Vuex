<template>
  <div class="d-flex align-items-stretch flex-wrap">
      <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
  </div>
</template>

<script>
  import ProductCard from './ProductCard'
  import {mapState} from 'vuex'
    export default {
        name: "product-list",
        components: { ProductCard },
        mounted() {
            this.$store.dispatch('getProducts')
        },
        computed: {
            ...mapState([
                'products',
            ]),
        }
    }
</script>

<style scoped>

</style>