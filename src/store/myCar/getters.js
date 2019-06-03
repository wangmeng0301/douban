//依靠于几个的变化 来 派发出
export default {
    computeTotal(state){
         let cars = state.cars;
         let total = { price: 0, num: 0 }
         cars.forEach(item=>{
             total.price += item.OriginalPrice * item.num;
             total.num += item.num
         })
         total.price = total.price.toFixed(2);//保留2位小数 3.45
         return total
    }
 }