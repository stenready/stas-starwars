import Vue from 'vue'
import Vuex from 'vuex'
import people from './people'
import starships from './starships'
import planets from './planets'
import films from './films'

Vue.use(Vuex)

import axios from "axios";
export default new Vuex.Store({
  state: {
  },
  getters: {

  },
  mutations: {
  },
  actions: {
   async  populateData(ctx, data) {
      const response=[];
      data.forEach(async element => {
        const res=await axios.get(`${element}`);
        const r=/\d+/;
        const id=+res.data.url.match(r)[0];
        res.data.id=id
        response.push(res);
      });
      return response;
    },
   async  populateSingle(ctx, data) {
     const response = await axios.get(`${data}`)
     const data_r = response.data
     const r=/\d+/;
     const id= +data_r.url.match(r)[0];
     data_r.id = id
     return data_r
    },
  },
  modules: {
    people, starships, planets, films
  }
})
