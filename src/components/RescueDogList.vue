<template>
  <div class="container px-3 py-3 mx-auto md:flex md:justify-center">
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" :src="image" alt=""/>
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <ul>
          <li class="list-disc" v-for="(value, key,) in DogInfo">
            {{ key }}: {{ value }}
          </li>
          <li class="list-disc">Age: {{ age }}</li>
          <li class="list-disc">Breed: {{ breed }}</li>
        </ul>
        </p>
        <a href="#"
           class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray bg-green-500 rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RescueDogList",
  components: {},
  props: {
    image: String,
    name: String,
    age: String,
    breed: String
  },
  data() {
    return {
      DogInfo: {
        Kennal: 'Sherlock Rescue',
        Owner: 'unknown',
        DOB: 'unknown'
      }
    }
  }
}
</script>

<style scoped>

</style>