<template>
  <nav class="container
          px-6
          py-4
          mx-auto
          md:flex md:justify-between md:items-center sm:border-b-2 border-dark-green md:border-none">
    <div class="flex items-center justify-between ">
      <router-link to="/" class="text-xl flex font-bold text-primary-text md:text-2xl "><img src="../assets/Logo.svg"
                                                                                             alt="logo">
        <p class="flex items-center">Jack Pet Supplies</p></router-link>
      <!--Mobile menu button-->
      <div @click="showMenu = !showMenu" class="flex md:hidden">
        <button type="button" class="text-dark-blue hover:text-gray-400 focus:outline-none focus:text-gray-400">
          <svg viewBox="0 0 24 24" class="w-6 h-6 text-dark-blue">
            <path fill-rule="evened"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu open: block menus closed and hidden -->
    <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
      <RouterLink class="text-lg font-bold hover:underline text-primary-text md:text-primary-text " to="/">Home
      </RouterLink>
      <RouterLink class="text-lg font-bold hover:underline text-primary-text md:text-primary-text" to="/sherlock">
        Sherlock
        Pet
        Rescue
      </RouterLink>
      <RouterLink class="text-lg font-bold hover:underline text-primary-text md:text-primary-text" to="/register">
        Register
      </RouterLink>
      <RouterLink class="text-lg font-bold hover:underline text-blue-500" to="/login">Login</RouterLink>
    </ul>
  </nav>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      showMenu: false,
    };
  },
}
</script>

<style scoped>

</style>