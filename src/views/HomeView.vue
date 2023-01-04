<script>
import ProductCard from "../components/productCard.vue";
import HomeBanner from "../components/HomeBanner.vue";
import json from "../assets/products.json";
import HealthData from "../assets/PetHealth.json";
import PetHealth from "@/components/PetHealth.vue";
import ProductTitle from "../components/ProductTitle.vue";
import Subscribe from "@/components/Subscribe.vue";


export default {
  data() {
    return {
      products: json,
      Healthtips: HealthData
    }
  },
  components: {
    Subscribe,
    ProductTitle,
    HomeBanner,
    ProductCard,
    PetHealth
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
    <div class="grid grid-rows-2 grid-flow-col flex sm:max-lg:flex flex-col justify-center">
      <PetHealth v-for="Healthtip in Healthtips" :title="Healthtip.title" :image="Healthtip.image"
                 :description="Healthtip.description" :animal="Healthtip.animal"/>
    </div>
    <!--    subscribe-->
    <Subscribe/>
    <div>

    </div>
  </main>


</template>
