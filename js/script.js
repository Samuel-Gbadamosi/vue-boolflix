var app = new Vue({
  el: '#app',
  data: {
    en:'https://media.istockphoto.com/photos/full-frame-image-of-england-flag-picture-id479199262?b=1&k=6&m=479199262&s=170667a&w=0&h=sH0p8ZZNIajvX-0CRPPmXfXWWRErSlXFYQ8g5ldQR0M=',
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
    }




  }






});
