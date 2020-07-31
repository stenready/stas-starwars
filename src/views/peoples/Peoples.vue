<template>
  <div class="home mt-3">
    <span v-if="!loading && peopleData.length > 0">
     <span style="display: flex; align-items: center">
       <img style="width: 40px; height: 40px;" src="../../assets/iconfinder_chewbacca_1626612.svg" alt="Sed">
        <h2 class="display-3 mb-3 logo_family" style="color: tomato;">Star Wars People</h2>
        <img style="width: 40px; height: 40px;" src="../../assets/iconfinder_boba-fett_1626610.svg" alt="boba">
     </span>
      <div class="card_wrapper">
        <div class="card mb-3" v-for="(elem, i) of peopleData" :key="elem.id + i">
          <div class="card-body">
            <img :src="elem.image" :alt="elem.name" />
            <router-link tag="div" :to=" `/people/${elem.id}` " class="name">{{elem.name}}</router-link>
            <router-link tag="i" :to=" `/people/${elem.id}` " class="material-icons">east</router-link>

          </div>
        </div>
      </div>

      <Pagination :page="page" :data="peopleData" />
    </span>

    <Loader v-else-if="loading" />

    <span v-else>
      <div class="card mb-3">
        <div class="card-body" style="flex-direction: inherit;">
          <h2>Не зафиксировано признаков жизни</h2>
          <p>Записка офицера</p>
          <p>Звезда смерти напала на нашу планету. Через несколько секунд она нанесёт удар и уничтожит все живое.</p>
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
      peopleData: [],
      page: this.$route.query.page || 1,
      loading: false,
      pages: null
    };
  },
  watch: {
    async $route(value) {
      this.page = +value.query.page || 1;
      await this.getAllPeople();
    }
  },
  methods: {
    async getAllPeople() {
      try {
        this.loading = true;
        this.peopleData = await this.$store.dispatch(
          "fetchAllPeople",
          this.page
        );
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
  },
  async mounted() {
    await this.getAllPeople();
  }
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>