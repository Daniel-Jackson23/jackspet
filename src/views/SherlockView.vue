<template>
  <!--  <DogData />-->
  <div class="grid grid-rows-2 grid-flow-col flex sm:max-lg:flex flex-col justify-center">
    <DogRescue v-for="RescueData in RescueDatas" :image:="RescueData.image" :name="RescueData.name" :age="RescueData.age"
               :breed="RescueData.breed" :status="RescueData.status"/>
  </div>
</template>

<script>
// import DogData from "../components/DogData.vue";
import DogRescue from "@/components/DogRescue.vue";
import jsonData from "../assets/DogRescue.json"

export default {
  name: "SherlockView",
  data() {
    return {
      RescueDatas: jsonData
    }
  },
  components: {
    // DogData,
    DogRescue
  }
}
</script>

<style scoped>

</style>