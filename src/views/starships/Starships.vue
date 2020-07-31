<template>
  <div class="home mt-3">
    <span v-if="!loading && starships.length > 0">
      <span style="display: flex; align-items: center">
        <img
          style="width: 40px; height: 40px;"
          src="../../assets/iconfinder_chewbacca_1626612.svg"
          alt="Sed"
        />
        <h2 class="display-3 mb-3 logo_family" style="color: tomato;">Star Wars Starships</h2>
        <img
          style="width: 40px; height: 40px;"
          src="../../assets/iconfinder_boba-fett_1626610.svg"
          alt="boba"
        />
      </span>

      <div class="card_wrapper">
        <div class="card mb-3" v-for="(elem, i) of starships" :key="elem.id + i">
          <div class="card-body">
            <img :src="elem.image" :alt="elem.name" @error="functionError(elem)" />
            <router-link tag="div" :to=" `/starships/${elem.id}` " class="name">{{elem.name}}</router-link>
            <router-link tag="i" :to=" `/starships/${elem.id}` " class="material-icons">east</router-link>
          </div>
        </div>
      </div>

      <Pagination :page="page" :data="starships" />
    </span>

    <Loader v-else-if="loading" />

    <span v-else>
      <div class="card mb-3">
        <div class="card-body" style="flex-direction: inherit;">
          <h2>Наши корабли были уничтожены</h2>
          <p>Записка офицера</p>
          <p>Мы боролись до конца. Дроиды слишком сильны, прощайте!</p>
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
      starships: [],
      page: this.$route.query.page || 1,
      loading: false,
      pages: null
    };
  },
  watch: {
    async $route(value) {
      this.page = +value.query.page;
      await this.getAllStarships();
    }
  },
  methods: {
    functionError(er) {
      er.image = er.img;
    },
    async getAllStarships() {
      try {
        this.loading = true;
        this.starships = await this.$store.dispatch(
          "fetchAllStarships",
          this.page
        );
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    }
  },
  async mounted() {
    const res = await this.getAllStarships();
    console.log(res);
  }
};
</script>