<template>
  <div class="home">
    <router-view></router-view>
    <mt-tabbar fixed>
      <mt-tab-item v-for="nav in navs" :key="nav.id" >
        <router-link :to="{name:nav.name}" active-class="active">
           <i :class="['fa', 'fa-'+nav.icon]"></i>
          {{nav.title}}
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name:"mine",
  data(){
    return {
      navs :[
        {id:1,title:"列表",icon:"list",name:"list"},
        {id:2,title:"购物",icon:"shopping-cart",name:"car"},
       
      ]
    }
  },
  components: {
  },
  created() {
    console.log(this);
  }
};
</script>
<style lang="scss" scoped>
  .mint-tab-item{
    padding:18px 0;
    font-size:18px;
  }
  .active{
    color:orange;
  }
</style>
