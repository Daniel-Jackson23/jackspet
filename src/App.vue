<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import './assets/style.css'

</script>

<template>
  <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 bg-blue">
    <header>
      <div class="">
        <Navigation/>

      </div>

    </header>
  </div>
  <RouterView/>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

