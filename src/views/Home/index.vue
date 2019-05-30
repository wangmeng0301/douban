<template>
    <div class="home">
        <div class="pd60">
             <Banner></Banner>
        </div>
        <MovieBox></MovieBox>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
export default {
    components:{
        Tabbar,Banner,MovieBox
    }
}
</script>
<style lang="scss" scoped>
    .home{
        padding-bottom:50px;
    }
</style>

