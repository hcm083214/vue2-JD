<template>
  <!--details-->
  <div class="details clearfix">
    <div class="sui-navbar">
      <div class="navbar-inner filter">
        <ul class="sui-nav">
          <li
            :class="{ active: orders.isActive }"
            v-for="orders in orderList"
            :key="orders.id"
          >
            <a href="#" @click.prevent="orderHandler($event, orders)"
              >{{ orders.name }}
              <span v-show="orders.isActive">{{
                orders.order === "asc" ? "⬆" : "⬇"
              }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods-list">
      <ul class="yui3-g">
        <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
          <div class="list-wrap">
            <div class="p-img">
              <a href="" target="_blank"><img :src="goods.defaultImg" /></a>
            </div>
            <div class="price">
              <strong>
                <em>¥ </em>
                <i>{{ goods.price }}</i>
              </strong>
            </div>
            <div class="attr">
              <a
                target="_blank"
                href=""
                title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
              >
                {{ goods.title }}
              </a>
            </div>
            <div class="commit">
              <i class="command">已有<span>2000</span>人评价</i>
            </div>
            <div class="operate">
              <a
                href="success-cart.html"
                target="_blank"
                class="sui-btn btn-bordered btn-danger"
                >加入购物车</a
              >
              <a href="javascript:void(0);" class="sui-btn btn-bordered"
                >收藏</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: {
    goodsList: {
      type: Array,
      require: true,
      default: () => [],
    },
    //排序:初始状态应该是综合且降序 排序方式 1: 综合,2: 价格 asc: 升序,desc: 降序  示例: "1:desc"
    order: String,
  },
  computed: {
    orderList() {
      const orderListTemp = [
        { name: "综合", id: 1, order: "asc", isActive: false },
        { name: "价格", id: 2, order: "asc", isActive: false },
      ];
      const orderArr = this.order.split(":");
      orderListTemp.map((orders) => {
        orders.isActive = false;
        if (orderArr[0] == orders.id) {
          orders.order = orderArr[1];
          orders.isActive = true;
        }
      });
      return orderListTemp;
    },
  },
  methods: {
    orderHandler(e, orders) {
      
      if (e.target.nodeName === "SPAN") {
        orders.order = orders.order === "asc" ? "desc" : "asc";
      }
      let order = `${orders.id}:${orders.order}`;
      this.$emit('orderChange',order)
    },
  },
};
</script>

<style scoped>
.outer .main .py-container .details {
  margin-bottom: 5px;
}
.outer .main .py-container .details .sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.outer .main .py-container .details .sui-navbar .filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li {
  float: left;
  line-height: 18px;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px;
  color: #777;
  text-decoration: none;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li.active a {
  background: #e1251b;
  color: #fff;
}
.outer .main .py-container .details .goods-list {
  margin: 20px 0;
}
.outer .main .py-container .details .goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.outer .main .py-container .details .goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .p-img a {
  color: #666;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .price {
  padding-left: 15px;
  font-size: 18px;
  color: #c81623;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .price
  strong
  i {
  margin-left: -5px;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .attr {
  padding-left: 15px;
  width: 85%;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .attr a {
  color: #333;
  text-decoration: none;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .commit span {
  font-weight: 700;
  color: #646fb0;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .operate {
  padding: 12px 15px;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered:hover {
  border: 1px solid #666;
  color: #fff !important;
  background-color: #666;
  text-decoration: none;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger {
  border: 1px solid #e1251b;
  color: #e1251b;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white !important;
  text-decoration: none;
}
.outer .main .py-container .details .page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
}

</style>