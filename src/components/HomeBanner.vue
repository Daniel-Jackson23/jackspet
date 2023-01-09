<template>
  <section class="max-w-8xl mx-auto px-6 sm:px-6 md:px-8 bg-blue">
    <div class="container
          px-5
          py-3
          mx-auto flex flex-row sm:max-lg:flex-col">
      <div class="relative w-45">
        <TextContainer class="pb-5">
          <h2 class="text-dark-blue text-l pb-2 font-bold text-primary-text">Welcome to Jack Pet Supply</h2>
          <p>Hello and welcome to Jacks Pet Supplies we are a local pet shop based in the Stoke on trent area. We are
            also in partnership with Sherlock Dog Rescue.</p><br>
          <p class="">We are currently offering a limited discount of 10% on all products if you subscribe to our
            website.</p><br>

          <p class="font-bold">Please look at our current products that we have on offer to claim your 10% discount when
            your subscribe.</p>
        </TextContainer>
        <div class="flex">
          <router-link to="/sherlock" custom v-slot="{navigate}">
            <button @click="navigate" role="link" type="button"
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sherlock Rescue
                </span>
            </button>
          </router-link>
          <router-link to="/login" custom v-slot="{navigate}">
            <button @click="navigate" role="link" type="button"
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black-400 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-primary-100 group-hover:from-cyan-500 group-hover:to-button-primary-100 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span
                      class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Login Or Sign Up
                  </span>
            </button>
          </router-link>
        </div>
      </div>
      <div class="w-300 h-218">
        <img src="../assets/images/petshop.png" alt="pet shop" class="bannerImage rounded pl-0.5 " width="612"
             height="408">
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
.bannerImage {
  width: 750px;
  height: auto;
}
</style>