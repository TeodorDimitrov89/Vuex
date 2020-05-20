<template>
  <div class="dropdown-menu" style="min-width: 320px; right: 0; left: auto;" aria-labelledby="dropdownMenuButton">
    <div>
      <div class="px-2 d-flex justify-content-between">
       <div>
         <strong>Product title</strong>
         <br>
         1 x $23
       </div>
        <div>
          <a href="#" class="badge badge-secondary">remove</a>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total: $23</span>
      <a href="#">Clear Cart</a>

    </div>
  </div>
</template>

<script>
    export default {
        name: "mini-cart"
    }
</script>

<style scoped>

</style>