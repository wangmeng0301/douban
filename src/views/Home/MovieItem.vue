<template>
    <router-link 
    class="movieItem"
    tag="div"
    :to="{name:'moviedetail',params:{id:movie.id}}"
    >
        <div class="img-box">
            <img width="100%" v-lazy="getImages(movie.images.small)" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <div class="title">{{movie.title}}</div>
                <div class="count">{{movie.collect_count | filterData}}</div>
            </div>
            <div class="info-right">
                <div class="director">{{movie.directors[0].name}}</div>
                <div class="rating">{{movie.rating.average}}分</div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props:{
        movie:Object
    },
     methods:{
         getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    filters:{
        filterData(data){
           if(data > 10000){
               data = (data / 10000).toFixed(2) + "万";
           }
           return data
        }
    }
}
</script>
<style lang="scss" scoped>
    .movieItem{
        margin:14px;
        background:#fff;
        .img-box{
            width:1005;
            height:2.4rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .info{
            display:flex;
            justify-content:space-between;
            padding:.1rem .2rem;
            .title{
                font-size:18px;
                font-weight: bold;
                color:rgb(247, 79, 28);
                padding-bottom:4px;
            }
            .rating{
                padding-top:4px;
                color:orange;
                font-size:13px;
                font-weight: bold;
                text-align: center;
            }
        }
    }
       
</style>
