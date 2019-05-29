<template>
  <div class="tabbar">
    <TabItem txt="首页">
        <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
        <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
    </TabItem>
    <TabItem txt="书影音">
        <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
         <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
    </TabItem>
    <TabItem txt="广播">
        <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
        <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
    </TabItem>
    <TabItem txt="小组">
        <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
        <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
    </TabItem>
    <TabItem txt="我的">
        <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
         <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
    </TabItem>
  </div>
</template>
<script>
import TabItem from "./TabItem";
export default {
  components: {
    TabItem
  }
};
</script>
<style lang="scss" scoped>
    .tabbar{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        display:flex;
        border-top:1px solid #ccc;
    }
</style>
