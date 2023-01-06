<template>
  <div id="DogContainer" class="w-120 h-auto">
    <div v-if="errored">
      <p>
        We are sorry, we are not able to receive this information at the moment please try again later. </p>
    </div>
    <div v-else>
      <div v-if="loading">Loading...</div>
      <p v-else v-for="dog in myJson" :key="dog.message">
        <img v-bind:src="dog.message" alt="" class="dogimages border-2">
      </p>
    </div>
  </div>

</template>

<script>
import axios from "axios"

export default {
  name: "DogData",
  components: {},
  data() {
    return {
      myJson: [],
      loading: true,
      errored: false,
    };
  },
  beforeMount() {
    this.getDogs();
  },
  methods: {
    getDogs() {
      axios
          .get("https://dog.ceo/api/breeds/image/random")
          .then((response) => {
            this.myJson = response;
          })
          .catch((error) => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
    },
  },
};
</script>
<style scoped>
.dogimages {
  width: 500px;
  height: auto;
}
@media  (min-width: 370px) {
.dogimages {
  height: auto;
  width: auto;
}

}
</style>