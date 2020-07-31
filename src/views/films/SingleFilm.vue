<template>
  <span v-if="!loading">
    <div class="single_planet mt-3">
      <div class="card mb-3" style="border: none;">
        <div class="row">
          <div class="col-md-6">
            <img class="single_film_img" :src="singleFilm.img || null" :alt="singleFilm.title" />
          </div>
          <div class="col-md-6">
            <div class="card-body" style="display: block;">
              <h5
                style="color: cadetblue; font-size: 2rem;"
                class="card-title"
              >{{ singleFilm.title }}</h5>

              <div class="subtitle">
                <span class="subtitle_prev">created:</span>
                <span class="subtitle_data">{{ new Date(singleFilm.created).toLocaleDateString() }}</span>
              </div>

              <div class="subtitle">
                <span class="subtitle_prev">director:</span>
                <span class="subtitle_data">{{ singleFilm.director }}</span>
              </div>

              <div class="subtitle">
                <span class="subtitle_prev">producer:</span>
                <span class="subtitle_data">{{ singleFilm.producer }}</span>
              </div>

              <div class="desc" style="color: darkcyan;">{{ singleFilm.opening_crawl }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- planets -->
      <div class="details">
        <div class="card">
          <span class="single-title super_title" @click="showPlanets = !showPlanets">
            <h3 class="card-title">Planets</h3>
            <i class="material-icons" :class="{'active_rotate' : showPlanets}">keyboard_arrow_down</i>
          </span>

          <transition-group name="slide-fade">
            <div class="row" key="div" v-if="showPlanets">
              <div
                class="col-md-6 one_film"
                @click="$router.push('/planets/' + el.id)"
                v-for="(el, i) of planets"
                :key="i"
              >
                <div class="card" style="padding: 0; margin-bottom: 1rem;">
                  <img class="starship_img" :src="el.img" :alt="el.title" />
                  <div class="title">{{ el.name }}</div>
                  <div class="overlay"></div>
                  <i class="material-icons">arrow_downward</i>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <!-- characters -->
      <div class="details">
        <div class="card">
          <span class="single-title super_title" @click="showPeople = !showPeople">
            <h3 class="card-title">Characters</h3>
            <i class="material-icons" :class="{'active_rotate' : showPeople}">keyboard_arrow_down</i>
          </span>

          <transition-group name="slide-fade">
            <div class="row" key="div" v-if="showPeople">
              <div
                class="col-md-6 one_film"
                @click="$router.push('/people/' + el.id)"
                v-for="(el, i) of people"
                :key="i"
              >
                <div class="card" style="padding: 0; margin-bottom: 1rem;">
                  <img class="starship_img" :src="el.img" :alt="el.name" />
                  <div class="title">{{ el.name }}</div>
                  <div class="overlay"></div>
                  <i class="material-icons">arrow_downward</i>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <div class="details">
        <div class="card">
          <span class="single-title super_title" @click="showStarships = !showStarships">
            <h3 class="card-title">Starships</h3>
            <i class="material-icons" :class="{'active_rotate' : showStarships}">keyboard_arrow_down</i>
          </span>

          <transition-group name="slide-fade">
            <div class="row" key="div" v-if="showStarships">
              <div
                class="col-md-6 one_film"
                @click="$router.push('/starships/' + el.id)"
                v-for="(el, i) of starships"
                :key="i"
              >
                <div class="card" style="padding: 0; margin-bottom: 1rem;">
                  <img class="starship_img" :src="el.img" :alt="el.name" />
                  <div class="title">{{ el.name }}</div>
                  <div class="overlay"></div>
                  <i class="material-icons">arrow_downward</i>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

    </div>
  </span>
  <Loader v-else />
</template>

<script>
export default {
  name: "single-film",
  data() {
    return {
      loading: true,
      singleFilm: null,
      planets: [],
      showPlanets: true,
      showPeople: true,
      people: [],
      starships: [],
      showStarships: true,
    };
  },
  async mounted() {

    const response = await this.$store.dispatch(
      "getOneFilm",
      this.$route.params.id
    );
    this.singleFilm = response;

    // get planet
    let response_planet = [];
    response.planets.forEach(async (el) => {
      const planet = await this.$store.dispatch("getOnePlanetFromLink", el);
      response_planet.push(planet);
    });
    this.planets = response_planet;

    // get people
    let response_people = [];
    response.characters.forEach(async (el) => {
      const people = await this.$store.dispatch("getOnePeopleFromLink", el);
      response_people.push(people);
    });
    this.people = response_people;

    console.log(response);

    // get starships
    let response_starships = [];
    response.starships.forEach(async (el) => {
      const starship = await this.$store.dispatch("getOneStarshipFromLink", el);
      response_starships.push(starship);
    });
    this.starships = response_starships;

    // end loading
    this.loading = false;
  },
};
</script>

<style lang="scss">
.details {
  .card-title {
    font-size: 2rem;
    font-weight: 800;
  }
  i {
    font-size: 2.5rem;
  }
  .single-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .starship_img {
    display: block;
    width: 100%;
    height: 400px;
  }
  .title {
    background: brown;
    color: white;
    padding: 1.5rem;
    font-size: 1.3rem;
  }
  .card {
    padding: 10px;
  }
}
.single_film_img {
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