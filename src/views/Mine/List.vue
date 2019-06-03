<template>
  <div class="mine-list">
    <mt-cell
      :title="good.CommodityName"
      :label="'￥' + good.OriginalPrice"
      v-for="good in goods"
      :key="good.CommodityId"
    >
      <mt-button @click="addGoodInCar(good)" type="danger" size="small">购物</mt-button>
      <img width="60" height="60" slot="icon" :src="good.SmallPic" alt>
    </mt-cell>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  data() {
    return {
      goods: []
    };
  },
  methods: {
    ...mapActions(["addGoodInCar"]),
    getGoods() {
      this.$http.get("/api/fruit.json").then(res => {
        console.log(res);
        this.goods = res.data.CommodityList;
      });
    }
  },
  created() {
    this.getGoods();
  }
};
</script>
<style lang="scss">
.mint-cell{
  display: flex;
  margin-bottom: 10px;
  background: rgb(255, 255, 255);
  img {
    float: left;
  }
}
.mint-cell-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
   
  }
   .mint-cell-label {
      color: rgb(255, 118, 118);
      font-size: 18px;
    }
</style>
