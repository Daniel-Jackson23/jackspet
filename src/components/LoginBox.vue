<template>
  <div id="LoginComponent">
    <div v v-if="!authenticed" class="bg-white shadow-md rounded p-1 flex flex-row w-1/2">
      <p class="m-2">
        <input type="email" v-model="email"
               class="myEmail bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
               name="myEmail" required>
        <label for="myEmail" class="text-gray-700 text-sm font-bold md-2">Email</label>
      </p>
      <p class="m-2">
        <input type="password" v-model="password"
               class="myPassword bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
               name="myPassword" required/>
        <label for="myPassword" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
      </p>
      <button @click="logIn"
              class="mt-2 px-3 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">
        Login
      </button>
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
  <div v-if="authenticated">
    <button @click="logOut"
            class="myLogout mt-3 px-6 h-12 uppercase font-semibold tracking-wide border-2 border-black bg-teal-400 text-black">
      Logout
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useRoute} from "vue-router";
import {data} from "autoprefixer";

let loggedIn = ref(false);
let email = ref();
let password = ref();
let router = useRoute();
let errMsg = ref();
let auth = getAuth();

//authenticating the user
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedIn.value = true;
    } else {
      loggedIn.value = false;
    }
  });
})
let authenticated = computed(() => {
  return loggedIn.value;
});

//login function for existing users
function logIn() {
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("logged in");
        this.router.push("/")
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid Email";
            break;
          case "auth/user-not-found" :
            errMsg.value = "not account with this email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Password incorrect";
            break;
          default:
            errMsg.value = "Email or Password was incorrect"
        }
      });
}

//function for logging out
function logOut() {
  signOut(auth).then(() => {
    loggedIn.value = false;
    email.value = "";
    password.value = "";
    router.push("/");
  })
}

//
// export default {
//   name: "LoginBox"
// }


</script>

<style scoped>

</style>