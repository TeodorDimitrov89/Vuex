<template>
  <div>
    <div class="row mt-5" >
      <div class="col-4">
        <img src="https://via.placeholder.com/150x100" class="w-100" />
      </div>
      <div class="col-8">
        <h1>Product Title</h1>
        <h3>$34</h3>
        <input type="text" class="text-center col-1 mr-2 p-1" />
        <button class="btn btn-primary">Add to Cart</button>

        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, nobis, perferendis? A accusamus amet consectetur doloremque eveniet expedita harum incidunt iusto, laboriosam nihil officia officiis rerum soluta ullam voluptatibus? Odio.</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "product",
        props: ['id']
    }
</script>

<style scoped>

</style>