<template>
  <span>
    <div class="films mt-3" v-if="films.length">
      <span style="display: flex; align-items: center">
        <img
          style="width: 40px; height: 40px;"
          src="../../assets/iconfinder_chewbacca_1626612.svg"
          alt="Sed"
        />
        <h2 class="display-3 mb-3 logo_family" style="color: tomato;">Star Wars Films</h2>
        <img
          style="width: 40px; height: 40px;"
          src="../../assets/iconfinder_boba-fett_1626610.svg"
          alt="boba"
        />
      </span>
      <div class="card">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 one_film"
              @click="$router.push('/films/' + el.id)"
              v-for="(el) of films"
              :key="el.id"
            >
              <img :src="el.image" :alt="el.title" />
              <div class="title">{{ el.title }}</div>
              <div class="overlay"></div>
              <i class="material-icons">arrow_downward</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </span>
</template>

<script>
export default {
  name: "Films",
  data() {
    return {
      films: [],
    };
  },
  async mounted() {
    this.films = await this.$store.dispatch("fetchAllFilms");
  },
};
</script>

<style lang="scss">
.films {
  .card {
    padding-top: 1rem;
    img {
      display: block;
      width: 100%;
      max-height: 400px;
    }
  }
  .title {
    background: brown;
    color: white;
    padding: 1.5rem;
    font-size: 1.3rem;
  }
}
</style>