<template>

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

</style>