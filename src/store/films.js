import axios from 'axios'
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getOneFilmsFromLink(ctx, link) {
      try {
        const response=await axios.get(link)
        const res=response.data
        const r=/\d+/;
        const id=+link.match(r)[0];

        res.img = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
        res.id = id
        return res
      } catch (e) {
        console.log(e, 'getOneFilmsFromLink');
      }
    },

    async getOneFilm(ctx, id) {
      try {
        const response=await axios.get(`https://swapi.dev/api/films/${id}`)
        const res=response.data

        res.img = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
        return res
      } catch (e) {
        console.log(e, 'getOneFilm');
      }
    },
    async fetchAllFilms(ctx) {
      try {
        const response=await axios.get(`https://swapi.dev/api/films`)
        const data=response.data.results.map(p => {
          const r=/\d+/;
          const url=+p.url.match(r)[0];
          return {
            id: url,
            ...p,
            image: `https://starwars-visualguide.com/assets/img/films/${url}.jpg`
          };
        });
        return data;
      } catch (e) {
        throw e
      }
    }
  },
}
