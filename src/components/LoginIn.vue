<template>
  <h2 class="flex justify-center m-2 text-xl">Create an account</h2>
  <div class="flex justify-center">
    <main class="-bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" v-model="email" id="myEmail" name="myEmail" required
               class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-tell-500">
      </div>
      <div>
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" v-model="password" id="password" name="password" required
               class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500">
      </div>
      <button @click="register"
              class="mt-3 px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
        Register
      </button>
    </main>
  </div>
</template>

<script>


export default {
  name: "LoginIn"
}
</script>

<style scoped>

</style>