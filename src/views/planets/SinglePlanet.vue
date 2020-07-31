<template>
  <div class="single_planet mt-3">
    <div class="card mb-3" style="border: none;" >
      <div class="row">
        <div class="col-md-6">
          <img class="single_planet_img" :src="planet.img" :alt="planet.name" />
        </div>
        <div class="col-md-6">
          <div class="card-body" style="display: block;">
            <h5 style="color: cadetblue; font-size: 2rem;" class="card-title">{{ planet.name }}</h5>

            <div class="subtitle">
              <span class="subtitle_prev">Climate:</span>
              <span class="subtitle_data">{{ planet.climate }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Diameter:</span>
              <span class="subtitle_data">{{ planet.diameter }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Gravity:</span>
              <span class="subtitle_data">{{ planet.gravity }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Orbital Period:</span>
              <span class="subtitle_data">{{ planet.orbital_period }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">population:</span>
              <span class="subtitle_data">{{ planet.population }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Rotation Period:</span>
              <span class="subtitle_data">{{ planet.rotation_period }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Terrain:</span>
              <span class="subtitle_data">{{ planet.terrain }}</span>
            </div>

            <div class="subtitle">
              <span class="subtitle_prev">Water:</span>
              <span class="subtitle_data">{{ planet.surface_water }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img_planets from "../../data/planets";
export default {
  name: "single-planet",
  data() {
    return {
      planet: []
    };
  },
  async mounted() {
    const response = await this.$store.dispatch(
      "getOnePlanet",
      this.$route.params.id
    );
    this.planet = response;
    console.log(response);
  }
};
</script>

<style lang="scss">

.single_planet_img {
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