<template>
  <div class="single-people mt-3">
    <div v-if="single">
      <div class="card mb-3">
        <div class="row">
          <div class="col-md-6">
            <img class="single_people_img" :src="single.img" :alt="single.name" />

            <div class="home_planet" @click="$router.push('/planets/' + homePlanet.id)">
              <div class="wrap">
                <img :src="homePlanet.img" :alt="homePlanet.name" />
                <div class="sub_title">{{ homePlanet.name }}</div>
              </div>
              <i class="material-icons">trending_flat</i>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-body" style="display: block;">
              <h5 style="color: cadetblue; font-size: 2rem;" class="card-title">{{ single.name }}</h5>
              <div class="subtitle">
                <span class="subtitle_prev">Birthday:</span>
                <span class="subtitle_data">{{ single.birth_year }}</span>
              </div>

              <div class="subtitle">
                <span class="subtitle_prev">Gender:</span>
                <span class="subtitle_data">{{ single.gender }}</span>
              </div>

              <div class="subtitle">
                <span class="subtitle_prev">Eye color:</span>
                <span class="subtitle_data">{{ single.eye_color }}</span>
              </div>

              <div class="subtitle">
                <span class="subtitle_prev">Height:</span>
                <span class="subtitle_data">{{ single.height }}</span>
              </div>

              <div class="subtitle">
                <span class="subtitle_prev">Mass:</span>
                <span class="subtitle_data">{{ single.mass }}</span>
              </div>

              <div class="desc" style="color: darkcyan;">{{ single.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="starships_people" v-if="starhips.length">
        <div class="card">
          <span class="single-title super_title" @click="showStarships = !showStarships">
            <h3 class="card-title">Starships</h3>
            <i class="material-icons" :class="{'active_rotate' : showStarships}">keyboard_arrow_down</i>
          </span>

          <transition-group name="slide-fade">
            <div class="row" key="div" v-if="showStarships">
              <div
                class="col-sm-12 col-md-6 one_film"
                @click="$router.push('/starships/' + el.id)"
                v-for="(el, i) of starhips"
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

      <div class="films_people" v-if="films.length">
        <div class="card">
          <span class="single-title super_title" @click="showFilms = !showFilms">
            <h3 class="card-title">Films</h3>
            <i class="material-icons" :class="{'active_rotate' : showFilms}">keyboard_arrow_down</i>
          </span>

          <transition-group name="slide-fade">
            <div class="row" key="div" v-if="showFilms">
              <div
                class="col-sm-12 col-md-6 one_film"
                @click="$router.push('/films/' + el.id)"
                v-for="(el, i) of films"
                :key="i"
              >
                <div class="card" style="padding: 0; margin-bottom: 1rem;">
                  <img class="starship_img" :src="el.img" :alt="el.title" />
                  <div class="title">{{ el.title }}</div>
                  <div class="overlay"></div>
                  <i class="material-icons">arrow_downward</i>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import planets from "../../data/planets.js";
import people from "../../data/people.js";
export default {
  name: "single-people",
  data() {
    return {
      single: null,
      starhips: [],
      films: [],
      showFilms: true,
      showStarships: true,
      homePlanet: [],
    };
  },

  async mounted() {
    //get single people data
    const response = await this.$store.dispatch(
      "getOnePeople",
      this.$route.params.id
    );

    //get decription frpm file (bad api)
    people.forEach((el) => {
      if (el.name === response.name) {
        response.desc = el.desc;
        if (el.img) response.img = el.img;
      }
    });

    // starships from link
    const starships = response.starships;
    let response_starships = [];
    const res = starships.forEach(async (el) => {
      const starship = await this.$store.dispatch("getOneStarshipFromLink", el);
      response_starships.push(starship);
    });
    this.starhips = response_starships;

    // home platen from link
    const homePlanet = await this.$store.dispatch(
      "getOnePlanetFromLink",
      response.homeworld
    );
    this.homePlanet = homePlanet;

    // films from link
    const response_films = [];
    response.films.forEach(async (f) => {
      const film = await this.$store.dispatch("getOneFilmsFromLink", f);
      response_films.push(film);
    });
    this.films = response_films;

    // output
    this.single = response;
  },
};
</script>

<style lang="scss">
.single-people {
  .home_planet {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
    background: black;
    padding: 0.5rem;
    &:hover {
      transform: translateY(-5px);
      opacity: 0.9;
      transition: all 0.5s;
    }
    i {
      color: crimson;
    }
    .wrap {
      display: flex;
      align-items: center;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    .sub_title {
      font-size: 1.5rem;
      margin-left: 1rem;
      color: crimson;
    }
  }
  .card-title {
    font-size: 2rem;
    font-weight: 800;
  }
  i {
    font-size: 2.5rem;
  }
  .card {
    padding: 1rem;
  }
  .title {
    background: brown;
    color: white;
    padding: 1.5rem;
    font-size: 1.3rem;
  }
}
.starship_img {
  display: block;
  width: 100%;
  height: 400px;
}
.single-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
}
.single_people_img {
  display: block;
  width: 100%;
  max-height: 400px;
}
.subtitle {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
}
.subtitle_data {
  font-size: 1.4rem;
  color: darkblue;
}
.subtitle_prev {
  font-size: 1.3rem;
  text-transform: uppercase;
  color: coral;
  padding: 6px 0;
}
.card {
  padding: 10px;
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>