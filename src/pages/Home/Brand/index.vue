<template>
        <!--商标-->
        <div class="brand">
            <div class="py-container">
                <ul class="brand-list">
                    <li class="brand-item" v-for='brands in brandList' :key="brands.id">
                        <img :src="brands.imgUrl" />
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name:'brand',
        created(){
            this.$store.dispatch('getBrandList')
        },
        computed:{
            ...mapState({brandList:state=>state.homeStore.brandList})
        }
    }
</script>

<style scoped>
 .brand {
  margin: 10px 0;
}
 .brand .py-container {
  width: 1200px;
  margin: 0 auto;
}
 .brand .py-container .brand-list {
  overflow: hidden;
  padding: 15px 0;
  background: #f7f7f7;
  line-height: 18px;
}
 .brand .py-container .brand-list .brand-item {
  width: 120px;
  float: left;
  height: 37px;
}
 .brand .py-container .brand-list .brand-item img {
  border-left: 1px dotted #ccc;
  padding: 0 10px;
}
 .brand .py-container .brand-list .brand-item:first-child img {
  border-left: 0;
}
</style>