import axios from 'axios'
import starships from '../data/starships'
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getOneStarshipFromLink(ctx, link) {
      try {

        const response=await axios.get(link)
        const res=response.data

        const r=/\d+/;
        const id= +link.match(r)[0];

        starships.forEach(element => {
          if (element.name===res.name) {
            res.img=element.link;
          }

          if (!res.img)
            res.img=`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        });

        res.id=id

        return res
      } catch (e) {
        console.log(e, 'getOneStarshipFromLink');
      }
    },
    async getOneStarship(ctx, id) {
      try {
        const response=await axios.get(`https://swapi.dev/api/starships/${id}`)
        const res=response.data

        starships.forEach(element => {
          if (element.name===res.name) {
            res.img=element.link;
          }

          if (!res.img)
            res.img=`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        });

        res.id=id

        return res
      } catch (e) {
        console.log(e, 'getOneStarship');
      }
    },
    async fetchAllStarships(ctx, page) {
      try {
        const response=await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
        const data=response.data.results.map(p => {

          starships.forEach(element => { //модернизируем данные на выход клиенту (не достаёт картинок в api)
            if (p.name===element.name) p.img=element.link
          });

          const r=/\d+/;
          const url=+p.url.match(r)[0];
          return {
            id: url,
            pages: Math.ceil(response.data.count/10),
            ...p,
            image: `https://starwars-visualguide.com/assets/img/starships/${url}.jpg`
          };
        });
        return data;
      } catch (e) {
        throw e
      }
    }
  },
}
