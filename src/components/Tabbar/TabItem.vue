<template>
    <div class="tabItem">
        <span v-if="!flag"><slot name="normalImg"></slot></span>
        <span v-else><slot name="activeImg"></slot></span>
        <span  class="title">{{txt}}</span>
    </div>
</template>
<script>
export default {
    props:["txt"],
    data(){
        return {
            flag:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabItem{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        img{
            width:40px;
            height:40px;
        }
    }
</style>
