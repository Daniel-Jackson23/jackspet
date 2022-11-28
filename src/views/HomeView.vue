<script>
import ProductCard from "../components/productCard.vue";
import HomeBanner from "../components/HomeBanner.vue";
import json from "../assets/products.json";
import ProductTitle from "../components/ProductTitle.vue";


export default {
  data() {
    return {
      products: json
    }
  },
  components: {
    ProductTitle,
    HomeBanner,
    ProductCard
  },

}

</script>

<template class="container
          px-5
          py-3
          mx-auto flex flex-row sm:max-lg:flex-col">
  <main>
    <HomeBanner/>
    <ProductTitle>
      <h2 class="text-center">Current Products</h2>
    </ProductTitle>
    <div class="grid grid-rows-2 grid-flow-col flex sm:max-lg:flex flex-col justify-center">
      <ProductCard v-for="product in products" :Name="product.Name" :image="product.image" :price="product.price"/>
    </div>
  </main>


</template>
