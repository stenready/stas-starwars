import axios from 'axios'

import planets from './../data/planets'

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getOnePlanetFromLink(ctx, link) {
      try {

        const response=await axios.get(link)
        const res=response.data

        const r=/\d+/;
        const id= +link.match(r)[0];

        planets.forEach(element => {
          if (element.name===res.name) {
            res.img=element.link;
          }

          if (!res.img)
            res.img=`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        });

        res.id=id

        return res
      } catch (e) {
        console.log(e, 'getOnePlanetFromLink');
      }
    },
    async getOnePlanet(ctx, id) {
      try {
        const response=await axios.get(`https://swapi.dev/api/planets/${id}`)
        const res=response.data

        planets.forEach(element => {
          if (element.name===res.name) {
            res.img=element.link;
          }

          if (!res.img)
            res.img=`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
        });

        res.id=id
        
        return res
      } catch (e) {
        console.log(e, 'getOnePlanet');
      }
    },
    async fetchAllPlanets(ctx, page) {
      try {
        const response=await axios.get(`https://swapi.dev/api/planets/?page=${page}`)

        const data=response.data.results.map(p => {

          planets.forEach(element => { //модернизируем данные на выход клиенту (не достаёт картинок в api)
            if (p.name===element.name) p.img=element.link
          });
          const r=/\d+/;
          const url=+p.url.match(r)[0];
          return {
            id: url,
            pages: Math.ceil(response.data.count/10),
            ...p,
            image: `https://starwars-visualguide.com/assets/img/planets/${url}.jpg`
          };
        });
        return data;
      } catch (e) {
        throw e
      }
    }
  },
}
