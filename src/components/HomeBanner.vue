<template>
  <section class="max-w-8xl mx-auto px-6 sm:px-6 md:px-8 bg-blue">
    <div class="container
          px-5
          py-3
          mx-auto flex flex-row sm:max-lg:flex-col">
      <div class="relative w-50">
        <TextContainer class="pb-5">
          <h2 class="text-dark-blue text-l">Welcome to Jack Pet Supply</h2>
          <p>We are currently offering a limited discount of 10% on all Dog food if you subscribe to our website, Don't
            wait to long!!! </p>
          <br>
          <p>Please look at our current products that we have on offer, we are also partnered with a local dog rescue we
            are donating 10% of orders to Sherlock Rescue.</p>
        </TextContainer>
        <div class="flex">
          <router-link to="/sherlock" custom v-slot="{navigate}">
            <button @click="navigate" role="link" type="button"
                    class="text-white bg-dark-blue hover:bg-dark-green focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sherlock Rescue
            </button>
          </router-link>
          <router-link to="/login" custom v-slot="{navigate}">
            <button @click="navigate" role="link" type="button"
                    class="text-white bg-dark-blue hover:bg-dark-green focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login/Subscribe
            </button>
          </router-link>
        </div>
      </div>
      <div class="">
        <img src="../assets/images/petshop.png" alt="pet shop" class="petshop rounded">
      </div>
    </div>
  </section>
</template>

<script>
import TextContainer from "./TextContainer.vue";

export default {
  name: "HomeBanner",
  components: {
    TextContainer
  },
}
</script>

<style scoped>
.petshop {
  width: 750px;
  height: auto;
}
</style>