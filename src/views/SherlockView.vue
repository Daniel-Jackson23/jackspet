<template class="container px-5 py-3 mx-auto flex flex-row sm:max-lg:flex-col">
  <h2 class=" flex justify-center font-bold underline text-center sm:text-md">Sherlock Dog Rescue Center</h2>
  <p class="w-70 m-5">For every dog, for every owner, we’re by their side through thick and thin, throughout their lives. The bond they
    have is special to us. It changes lives, making each day happier and more complete. It’s why we believe A dog is for
    life.

    Discover who we are, what we do, and how we’ll never stop fighting to make tomorrow’s world a better place for all
    dogs. </p>
  <p class="w-70 m-5">If you like more information about adopting a dog please get intouch ourselves through email or phone call or contact Jacks Pet supplies.</p>
  <div class="grid grid-rows-2 grid-flow-col flex sm:max-lg:flex flex-col justify-center bg-gray-700">
    <RescueDogList v-for="DogList in DogLists" :name="DogList.name" :image="DogList.image" :age="DogList.age"
                   :breed="DogList.breed"/>
  </div>
  <div class="flex flex-row justify-center py-9">
    <div class="w-50">
      <h4 class="font-bold text-lg text-center py-0.2 font-bold underline">Here is a collection of dogs</h4>
      <DogData class="flex justify-center"/>
      <p class="justify-center w-50">All these dogs are found there forever home and have since enjoyed a happy and
        filled life. </p>
      <a href="">For more information please get intouch with us at test12345@mail.com</a>
    </div>
  </div>
  <Footer/>
</template>

<script>
import DogData from "../components/DogData.vue";
import RescueDogList from "@/components/RescueDogList.vue";
import JsonData from "../assets/RescueData.json"
import Footer from "@/components/Footer.vue";


export default {
  name: "SherlockView",
  data() {
    return {
      DogLists: JsonData
    }
  },
  components: {
    Footer,
    RescueDogList,
    DogData,
  }
}
</script>

<style scoped>

</style>