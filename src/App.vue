<template>
  <div id="app" ref="app">
    <NavBar />

    <div class="container">
      <div class="row">
        <div class=" col-sm-12 col-md-12 col-lg-10 mx-auto">
          <router-view />
        </div>
      </div>
    </div>
    <button @click="scrollTop" v-if="showButton" class="btn btn-outline-warning totop">
      <i class="material-icons">arrow_upward</i>
    </button>
  </div>
</template>



<script>
import NavBar from "./components/Navbar";
export default {
  name: "app",
  data() {
    return {
      showButton: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.myScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.myScroll);
  },
  methods: {
    scrollTop() {
      this.$refs.app.scrollIntoView();
    },
    myScroll(e) {
      window.scrollY > 1000
        ? (this.showButton = true)
        : (this.showButton = false);
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./global.scss";
.totop {
  border-radius: 50%;
  position: fixed;
  right: 100px;
  bottom: 50px;
  border-width: 3px;
  z-index: 1000;
}
@media screen and (max-width: 576px) {
  .totop{
    right: 42%;
  }
}
body {
  background-image: url("assets/star-wars-backgrounds-25.jpg");
  background-size: cover;
}
</style>
