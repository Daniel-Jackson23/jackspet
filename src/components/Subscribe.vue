<template>
  <div>
    <div v-if="!userLoggedIn">
      <button>Subscribe</button>
    </div>
    <div v-if="userLoggedIn">
      <!--      add link for voucher-->
      <p>You are not logged in</p>
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
  methods: {
    NewUser() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = true
        } else {
          this.user = false

        }
      });
    }
  }
}
</script>

<style scoped>

</style>