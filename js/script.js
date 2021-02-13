var app = new Vue({
  el: '#app',
  data: {
    stars:0,
    empty:'error 404 Unavailable',
    tvseries: [],
    movies: [],
    query: '',
    api_key: 'bede71d7cf28ae38c82b3b2d891569c0',
    lang: 'en-US'
  },
  methods: {
    search() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.api_key,
            query: this.query,
            language: this.lan
          }
        })
        .then((result) => {
          this.movies = result.data.results;
          console.log(this.movies);

        })
        .catch((error) => alert('errori'));

    },
    seriesTv() {
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: this.api_key,
            query: this.query,
            language: this.lan
          }
        })
        .then((result) => {
          this.tvseries = result.data.results;
          console.log(this.tvseries);

        })
        .catch((error) => alert('errori'));

    },
    iconVote(index){

      return this.stars = Math.ceil(index / 2);
    },
    






  }






});
