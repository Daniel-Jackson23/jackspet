<template>
  <div class=" flex justify-center py-4">
    <div v-if="userLoggedIn">
      <button>Subscribe</button>
      <img src="../assets/images/voucher.jpg" alt="Voucher"/>
      <p class="font-bold">Please collect your Voucher! </p>
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