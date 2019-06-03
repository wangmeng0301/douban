<template>
  <div class="moviedetail">
    <div class="loading" v-if="!movie"></div>
      <div v-else>
         <mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">back</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        <div class="img-box">
          <img :src="getImages(movie.images.small)" alt="">
        </div>
        <p>{{movie.title}}</p>
        <p>演员：</p>
        <div
        v-for="cast in movie.casts"
        :key="cast.id"

        >
            <img width="85" height="85" :src="getImages(cast.avatars.small)" alt="">
            <p>{{cast.name}}</p>
        </div>
        <div>{{movie.summary}}</div>
      </div>
    </div>      
</template>
<script>
import getImages from "@/modules/getImages"
export default {
    data(){
      return {
        movie:null,
      }
    },
    methods:{
      getImages,
       getMovie(){
            this.$http.get("/api/db/movie_detail/"+this.$route.params.id).then(res=>{
                this.movie = res.data
            })
        }
    },
    created(){
     this.getMovie()
    }
}
</script>


<style lang="scss" scoped>

</style>
