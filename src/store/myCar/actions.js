import { SYNC_UPDATE } from "./const"
export default {
    initCar(store) {
        //获取购物车
        let cars = getCar()
        store.commit(SYNC_UPDATE, cars)
    },
    addGoodInCar(store, goodInfo) {//添加商品到购物车
        setTimeout(() => {
            //获取后台返回的购物车
            let cars = getCar();
            let isHas = cars.some(item => {
                if (item.CommodityId === goodInfo.CommodityId) {
                    item.num++
                    return true
                }
            })

            if (!isHas) {
                goodInfo.num = 1;
                cars.push(goodInfo);
            }
            //通知后台 去更改cars
            localStorage.cars = JSON.stringify(cars)
            //前端通过mutations具体的方法去更改state的具体的数据
            store.commit(SYNC_UPDATE, cars)
        }, 1000)

    },
    reduceGoodInCar(store, goodInfo) {
        let cars = getCar();
        cars = cars.filter(item => {
            if (item.CommodityId === goodInfo.CommodityId) {
                item.num--;
                if(item.num <= 0){
                    return false
                }
            }
            return true
        })
        localStorage.cars = JSON.stringify(cars)
        //前端通过mutations具体的方法去更改state的具体的数据
        store.commit(SYNC_UPDATE, cars)
    }
}


//依靠loaclStorage作为后台模拟 后台数据库 存储cars

function getCar() {
    //console.log(localStorage.cars)
    return JSON.parse(localStorage.cars ? localStorage.cars : '[]')

}