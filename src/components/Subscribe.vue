<template>
  <div class=" flex justify-center py-4">
    <div v-if="userLoggedIn">
      <button>Subscribe</button>
      <img src="../assets/images/voucher.jpg" alt="Voucher"/>
      <p class="font-bold">Please collect your Voucher! </p>
      <button type="button" class=" flex justify-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Print</button>
    </div>
    <div v-if="!userLoggedIn">
      <!--      <p>You are not logged in</p>-->
    </div>
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default {
  name: "Subscribe",
  data() {
    return {
      userLoggedIn: false
    }
  },
  beforeMount() {
    this.NewUser();
  },
  methods: {
    NewUser() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userLoggedIn = true
        } else {
          this.userLoggedIn = false
        }
      });
    }
  }
}
</script>

<style scoped>

</style>