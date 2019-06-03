<template>
  <div class="mine-list">
      <div v-if="cars.length === 0">没有商品咯。。。。
          <router-link to="/mine/list">点击此处去购物</router-link>
      </div>
    <mt-cell 
        v-else
      :title="good.CommodityName"
      :label="'￥' + good.OriginalPrice + '*' + good.num "
      v-for="good in cars   "
      :key="good.CommodityId"
    >
      <mt-button @click="addGoodInCar(good)" type="danger" size="small">+</mt-button>
       <mt-button @click="reduceGoodInCar(good)"  type="danger" size="small">-</mt-button>
      <img width="60" height="60" slot="icon" :src="good.SmallPic" alt>
       <div class="total">
        <p>商品总价为:{{computeTotal.price}}</p>
        <p>商品总数为：{{computeTotal.num}}</p>
    </div>
    </mt-cell>
    
  </div>
</template>
<script>

import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
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
    .mint-button--small{
        margin-right:10px;
    }
    
    .mine-list{
        margin-bottom:70px;
    }
</style>
