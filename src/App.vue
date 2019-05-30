<template>
  <div id="app"> 
    <AppHeader></AppHeader>
    <router-view></router-view>
   
  </div>
</template>

<style lang="scss">

</style>
<script>
import AppHeader from "@/components/Header"
export default {
  components:{
    AppHeader
  }
}
</script>
