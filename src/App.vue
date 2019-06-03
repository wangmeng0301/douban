<template>
  <div id="app">
    <AppHeader></AppHeader>
    <keep-alive include="home"> 
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
</style>
<script>
import AppHeader from "@/components/Header";
export default {
  components: {
    AppHeader
  },
  created(){

    this.$router.push("/")
    //初始化购物车
    this.$store.dispatch("initCar")
  }
};
</script>
