<template>
  <div>
    Home
    <product-list></product-list>
  </div>

</template>

<script>
  import ProductList from '../components/ProductList'
    export default {
        name: "home",
        components: {
            ProductList
        }
    }
</script>

<style scoped>

</style>