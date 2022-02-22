<template>
  <!--hotsale-->
  <div class="clearfix hot-sale">
    <h4 class="title">热卖商品</h4>
    <div class="hot-list">
      <ul class="yui3-g">
        <li class="yui3-u-1-4" v-for="goods in goodsList2" :key="goods.id">
          <div class="list-wrap">
            <div class="p-img">
              <img :src="goods.defaultImg" />
            </div>
            <div class="attr">
              <em>{{ goods.title }}</em>
            </div>
            <div class="price">
              <strong>
                <em>¥ </em>
                <i>{{ goods.price }}</i>
              </strong>
            </div>
            <div class="commit">
              <i class="command">已有700人评价</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotSale",
  props: {
    goodsList: {
      type: Array,
      default: () => [],
      require: true,
    },
  },
  computed: {
    goodsList2() {
      return this.goodsList.length > 2
        ? this.goodsList.splice(0, 1)
        : this.goodsList;
    },
  },
};
</script>

<style scoped>
.outer .main .py-container .hot-sale {
  margin-bottom: 5px;
  border: 1px solid #ddd;
}
.outer .main .py-container .hot-sale .title {
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #333;
  margin: 0;
  padding: 5px 0 5px 15px;
}
.outer .main .py-container .hot-sale .hot-list {
  padding: 15px;
}
.outer .main .py-container .hot-sale .hot-list ul {
  display: flex;
}
.outer .main .py-container .hot-sale .hot-list ul li {
  width: 25%;
  height: 100%;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .p-img,
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price,
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .attr,
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
  padding-left: 15px;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .p-img img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .attr {
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price {
  font-size: 18px;
  color: #c81623;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.outer
  .main
  .py-container
  .hot-sale
  .hot-list
  ul
  li
  .list-wrap
  .price
  strong
  i {
  margin-left: -5px;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
</style>