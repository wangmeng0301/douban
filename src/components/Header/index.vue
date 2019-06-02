<template>
  <div class="app-header" v-if="isShow" v-backTop:dblclick>
    <div class="left">
      <i :class="['fa','fa-'+icon]"></i>
      <span>{{title}}</span>
    </div>
    <div class="right">
      <span>城市</span>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      icon: "home",
      title: "豆瓣首页",
      isShow: true
    };
  },
  created() {
    //全局前置路由钩子
    router.beforeEach((to, from, next) => {
      switch (to.name) {
        case "home":
          this.icon = "home";
          this.title = "电影";
          this.isShow = true;
          break;
        case "audio":
          this.icon = "audio-description";
          this.title = "影院";
          this.isShow = true;
          break;
        case "broadcast":
          this.icon = "volume-up";
          this.title = "特惠";
          this.isShow = true;
          break;
        case "group":
          this.icon = "group";
          this.title = "我的";
          this.isShow = true;
          break;
        case "mine":
          this.icon = "gear";
          this.title = "我的豆瓣";
          this.isShow = true;
          break;

        default:
          this.isShow = false;
          break;
      }
      next();
    });
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  width: 3.75rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background: rgba(243, 145, 33, 0.8);
  color: #fff;
  justify-content: space-between;
  padding: 0 0.2rem;
  position:fixed;
  z-index: 10;
  i {
    font-size: 1.2em;
    padding-right: 0.1rem;
  }
}
</style>
