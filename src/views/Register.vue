<template>
  <section class="dark:accent-dark-primary-bg">

    <div
        class="flex flex-col items-center justify-center items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class=" flex mb-6 text-2xl font-semibold text-gray-900 dark:bg-dark-text-white">
        <img class="w-8 h-8 mr-2" src="../assets/Logo.svg" alt="logo">
        Jacks pets
      </a>
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an Account </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                email</label>
              <input type="email" v-model="email" id="myEmail" name="myEmail" required
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
              <label for="myPassword"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" v-model="password" id="myPassword" name="myPassword"
                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required="">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox"
                         class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                         required="">
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                password?</a>
            </div>
            <button @click="register"
                    class="w-full bg-green-500 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:accent-dark-button-primary dark:accent-dark-primary-bg ">
              Register
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              already have an account
              <RouterLink to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter, RouterLink} from "vue-router";
import Footer from "@/components/Footer.vue";


let email = ref("")
let password = ref("")
let router = useRouter()

function register() {

  console.log("register");

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(
          (data) => {
            console.log("Logged in");
            router.push('/');
          })
      .catch((error) => {
            console.log(error.code);
            alert("Sorry you could not sign up" + error.message);
          }
      );
}

// export default {
//   name: "LoginView",
//   components: {}
// }
</script>

<!--<style scoped>-->

<!--</style>-->