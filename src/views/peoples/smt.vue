      <div class="row">
        <div class="col-md-4">
          <img style="padding: 5px;" :src="single.img" class="card-img" :alt="single.name" />
        </div>

        <div class="col-md-8">
          <div class="card-body" style="display: block;">
            <h5 style="color: cadetblue; font-size: 2rem;" class="card-title">{{ single.name }}</h5>

            <span class="wrap-text">
              <table class="table table-borderless table-hover">
                <thead>
                  <tr style="color: brown;">
                    <th scope="col">Gender</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Eye color</th>
                    <th scope="col">Height</th>
                    <th scope="col">Mass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="color: darkorange; font-size: 1.1rem;">
                    <th style="font-weight: 400;">{{single.gender}}</th>
                    <td>{{single.birth_year}}</td>
                    <td>{{single.eye_color}}</td>
                    <td>{{single.height}}</td>
                    <td>{{single.mass}}</td>
                  </tr>
                </tbody>
              </table>

              <!-- single planet -->
              <div class="planet block" v-if="single.pPlanet">
                <span @click="showPlanet = !showPlanet" class="single-title">
                  <h3>Home planet</h3>
                  <i class="material-icons">keyboard_arrow_down</i>
                </span>

                <hr />

                <transition-group name="slide-fade">
                  <div key="div" class="card" v-show="showPlanet" style="padding: 1rem; margin-bottom: 0.7rem;">
                    <div class="row">
                      <div class="col-md-4">
                        <img
                          style="display: block; width: 100%; height: 100%;"
                          :src="single.pPlanet.img"
                          :alt="single.pPlanet.name"
                        />
                      </div>
                      <div class="col-md-8">
                        <router-link
                          class="planet_name"
                          :to=" `/planets/${single.pPlanet.id}` "
                        >{{ single.pPlanet.name }}</router-link>
                        <div class="detail_planet_message">
                          <small>Climate: {{ single.pPlanet.climate }}</small>
                        </div>
                        <div class="detail_planet_message">
                          <small>Diameter: {{ single.pPlanet.diameter || 1000 }}</small>
                        </div>
                        <div class="detail_planet_message">
                          <small>Population: {{ single.pPlanet.population }}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition-group>
              </div>

              <!-- films -->
              <div class="films block" v-if="single.pFilms.length">
                <span @click="showFilms = !showFilms" class="single-title">
                  <h3>Films</h3>
                  <i class="material-icons">keyboard_arrow_down</i>
                </span>

                <hr />

                <transition-group name="slide-fade">
                  <div
                    v-show="showFilms"
                    class="card"
                    style="padding: 1rem; margin-bottom: 0.7rem;"
                    v-for="(film, i) of single.pFilms"
                    :key="i"
                  >
                    <router-link style="font-size: 1.3rem; cursor: pointer;" tag="div" :to=" '/films/' + film.data.id " >{{ film.data.title }}</router-link>
                    <div style="color: cadetblue;">
                      <small>Director: {{ film.data.director }}</small>
                    </div>
                    <div style="color: cadetblue;">
                      <small>Producer: {{ film.data.producer }}</small>
                    </div>
                    <div
                      style="    margin-top: 0.5rem; font-size: 0.9rem;"
                      class="desc"
                    >{{ film.data.opening_crawl }}</div>
                  </div>
                </transition-group>
              </div>

              <!-- starships -->
              <div class="starships block" v-if="single.pStarships.length">
                <span class="single-title" @click="showStarships = !showStarships">
                  <h3>Starships</h3>
                  <i class="material-icons">keyboard_arrow_down</i>
                </span>

                <hr />

                <transition-group name="slide-fade">
                  <div
                    v-show="showStarships"
                    class="card"
                    style="padding: 1rem; margin-bottom: 0.7rem;"
                    v-for="(starship, i) of single.pStarships"
                    :key="i"
                  >
                    <router-link
                      tag="div"
                      style="font-size: 1.3rem; text-decoration: underline;cursor: pointer; font-size: 1.3rem;"
                      :to=" `/starships/${starship.data.id}` "
                    >{{ starship.data.name }}</router-link>

                    <div style="color: cadetblue;">
                      <small>Model: {{ starship.data.model }}</small>
                    </div>

                    <div style="color: cadetblue;">
                      <small>Class: {{ starship.data.starship_class || 'unknown' }}</small>
                    </div>

                    <div style="color: cadetblue;">
                      <small>Cost Credit: {{ starship.data.cost_in_credits }}</small>
                    </div>

                    <div style="color: cadetblue;">
                      <small>Manufacturer: {{ starship.data.manufacturer }}</small>
                    </div>

                    <div style="color: cadetblue;">
                      <small>Max Speed: {{ starship.data.max_atmosphering_speed }}</small>
                    </div>
                  </div>
                </transition-group>
              </div>
            </span>
          </div>
        </div>
      </div>