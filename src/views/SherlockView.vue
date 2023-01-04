<template class="container px-5 py-3 mx-auto flex flex-row sm:max-lg:flex-col">
  <h2></h2>
  <!--  <DogData />-->
  <div class="grid grid-rows-2 grid-flow-col flex sm:max-lg:flex flex-col justify-center">
    <RescueDogList v-for="DogList in DogLists" :name="DogList.name" :image="DogList.image" :age="DogList.age"
                   :breed="DogList.breed"/>
  </div>
</template>

<script>
// import DogData from "../components/DogData.vue";
import RescueDogList from "@/components/RescueDogList.vue";
import JsonData from "../assets/RescueData.json"


export default {
  name: "SherlockView",
  data() {
    return {
      DogLists: JsonData
    }
  },
  components: {
    RescueDogList,
    // DogData,
  }
}
</script>

<style scoped>

</style>