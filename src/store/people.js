import axios from 'axios'
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getOnePeopleFromLink(ctx, link) {
      try {
        const response=await axios.get(link)
        const res=response.data
        const r=/\d+/;
        const id=+link.match(r)[0];

        res.img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        res.id = id
        return res
      } catch (e) {
        console.log(e, 'getOnePeopleFromLink');
      }
    },
    async getOnePeople(ctx, id) {
      try {
        const response=await axios.get(`https://swapi.dev/api/people/${id}`)
        const res=response.data

        res.img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        return res
      } catch (e) {
        console.log(e, 'getOnePeople');
        throw e
      }
    },
    async fetchAllPeople(ctx, page) {
      try {
        const response=await axios.get(`https://swapi.dev/api/people/?page=${page}`)
        const data=response.data.results.map(p => {
          const r=/\d+/;
          const url=+p.url.match(r)[0];
          return {
            id: url,
            pages: Math.ceil(response.data.count/10),
            ...p,
            image: `https://starwars-visualguide.com/assets/img/characters/${url}.jpg`
          };
        });
        return data;
      } catch (e) {
        throw e
      }
    }
  },
}
