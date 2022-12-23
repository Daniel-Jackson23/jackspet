<template>
  <div class="w-full max-w-xs">
    <p class="m-2 text-2xl">Create an account</p>
    <main class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <label for="myEmail" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" v-model="email" id="myEmail" name="myEmail" required
               class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"/>
      </div>
      <div>
        <label for="myPassword" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" v-model="password" id="myPassword" name="myPassword" required
               class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"/>
      </div>
      <button @click="register"
              class="mt-3 px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
        Register
      </button>
    </main>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router";


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