<template>
  <div class="singleStarship mt-3" v-if="starship">
    <div class="card mb-3" style="border: none;">
      <div class="row">
        <div class="col-md-6">
          <img class="single_starship_img" :src="starship.img" :alt="starship.name" />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="display: block;">
            <h5 style="color: cadetblue; font-size: 2rem;" class="card-title">{{ starship.name }}</h5>

            <div class="subtitle">
              <span class="subtitle_prev">Cargocapacity:</span>
              <span class="subtitle_data">{{ starship.cargo_capacity }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Cost Credit:</span>
              <span class="subtitle_data">{{ starship.cost_in_credits }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">crew:</span>
              <span class="subtitle_data">{{ starship.crew }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">manufacturer:</span>
              <span class="subtitle_data">{{ starship.manufacturer }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">max speed:</span>
              <span class="subtitle_data">{{ starship.max_atmosphering_speed }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">model:</span>
              <span class="subtitle_data">{{ starship.model }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">passengers:</span>
              <span class="subtitle_data">{{ starship.passengers }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">MGLT:</span>
              <span class="subtitle_data">{{ starship.MGLT }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-films" v-if="films">
      <span class="single-title super_title" @click="filmsShow = !filmsShow">
        <h3 class="card-title">Films</h3>
        <i class="material-icons" :class="{'active_rotate' : filmsShow}">keyboard_arrow_down</i>
      </span>
      <transition-group name="slide-fade">
        <div class="body" key="div" v-if="filmsShow">
          <div
            class="one_film"
            @click="$router.push('/films/' + el.data.id)"
            v-for="(el, i) of films"
            :key="i"
          >
            <div class="overlay"></div>
            <img
              class="films_img"
              :src="`https://starwars-visualguide.com/assets/img/films/${el.data.id}.jpg`"
              :alt="el.data.title"
            />
            <span>{{ el.data.title }}</span>
            <i class="material-icons">arrow_downward</i>
          </div>
        </div>
      </transition-group>
    </div>

  </div>
</template>

<script>
export default {
  name: "single-starship",
  data() {
    return {
      starship: [],
      films: [],
      filmsShow: true,
    };
  },
  async mounted() {
    this.starship = await this.$store.dispatch(
      "getOneStarship",
      this.$route.params.id
    );

    this.films = await this.$store.dispatch(
      "populateData",
      this.starship.films
    );
  },
};
</script>

<style lang="scss">
.singleStarship {
  i {
    font-size: 2.5rem;
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.card-title {
  font-size: 2rem;
  font-weight: 800;
}
.card-films {
  padding: 1.3rem;
}

.single_starship_img {
  display: block;
  width: 100%;
  height: 100%;
}
.subtitle_data {
  font-size: 1.4rem;
  color: darkblue;
}
.subtitle {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.subtitle_prev {
  font-size: 1.3rem;
  text-transform: uppercase;
  color: coral;
  padding: 6px 0;
}
</style>