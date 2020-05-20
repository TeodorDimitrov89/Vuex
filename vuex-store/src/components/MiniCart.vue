<template>
  <div class="dropdown-menu" style="min-width: 320px; right: 0; left: auto;" aria-labelledby="dropdownMenuButton">
    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.product.id">
        <div class="px-2 d-flex justify-content-around align-items-center"  v-if="item">
          <div class="img-fluid" >
            <img :src="item.product.image" alt="" style="width: 100px">
          </div>
          <div>
            <strong>{{item.product.title}} </strong>
            <br>
            {{item.quantity}} x ${{item.product.price}}
          </div>
          <div>
            <a href="#" class="badge badge-secondary" @click.prevent="removeItemFromCart(item.product)">remove</a>
          </div>
        </div>
        <hr/>
      </div>
      <div class="d-flex justify-content-between px-2">
          <span>Total: ${{cartTotalPrice}}</span>
        <a href="#" @click.prevent="removeAllCartItems()">Clear Cart</a>
      </div>
    </div>
  </div>

</template>

<script>
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        name: "mini-cart",
        computed: {
            ...mapState([
                'cart'
            ]),
            ...mapGetters([
                'cartTotalPrice'
            ])
        },
        mounted() {
            this.$store.dispatch('getCartItems')
        },
        methods: {
            removeItemFromCart(product) {
                this.$store.dispatch('removeProductFromCart', product)
            },
            removeAllCartItems() {
                this.$store.dispatch('removeAllCartItems')
            }
        }
    }
</script>

<style scoped>

</style>