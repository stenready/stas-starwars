<template>
  <div class="home mt-3">
    <span v-if="!loading && planets.length > 0">
      <span style="display: flex; align-items: center">
        <img
          style="width: 40px; height: 40px;"
          src="../../assets/iconfinder_chewbacca_1626612.svg"
          alt="Sed"
        />
        <h2 class="display-3 mb-3 logo_family" style="color: tomato;">Star Wars Planets</h2>
        <img
          style="width: 40px; height: 40px;"
          src="../../assets/iconfinder_boba-fett_1626610.svg"
          alt="boba"
        />
      </span>
      <div class="card_wrapper">
        <div class="card mb-3" v-for="(elem, i) of planets" :key="elem.id + i">
          <div class="card-body">
            <img :src="elem.image" :alt="elem.name" @error="functionError(elem)" />
            <router-link tag="div" :to=" `/planets/${elem.id}` " class="name">{{elem.name}}</router-link>
            <router-link tag="i" :to=" `/planets/${elem.id}` " class="material-icons">east</router-link>
          </div>
        </div>
      </div>

      <Pagination :page="page" :data="planets" />
    </span>

    <Loader v-else-if="loading" />

    <span v-else>
      <div class="card mb-3">
        <div class="card-body" style="flex-direction: inherit;">
          <h2>Звезда смерти!!!!</h2>
          <p>На нас напала звезда смерти. Все планеты данной звёздной системы уже были уничтожены!</p>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      planets: [],
      page: this.$route.query.page || 1,
      loading: false,
      pages: null
    };
  },
  watch: {
    async $route(value) {
      this.page = +value.query.page || 1;
      await this.getAllPlanets();
    }
  },
  methods: {
    functionError(el) {
      el.image = el.img;
    },
    async getAllPlanets() {
      try {
        this.loading = true;
        this.planets = await this.$store.dispatch("fetchAllPlanets", this.page);
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    }
  },
  async mounted() {
    await this.getAllPlanets();
  }
};
</script>

<style lang="scss">
</style>