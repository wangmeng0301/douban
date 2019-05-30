<template>
  <div class="moviebox">
    <div class="loading" v-if="!movies"></div>
    <MovieItem 
        v-else 
        v-for="movie in movies" 
        :key="movie.id" 
        :movie="movie"
    ></MovieItem>
  </div>
</template>
<script>
import MovieItem from "./MovieItem";
export default {
  data() {
    return {
      movies: null
    };
  },
  created() {
    this.$http
      .get("/api/db/in_theaters", {
        params: {
          limit: 6
        }
      })
      .then(res => {
        console.log(this);
        this.movies = res.data.object_list;
      });
  },
  components: {
    MovieItem
  }
};
</script>
<style lang="scss" scoped>
</style>
