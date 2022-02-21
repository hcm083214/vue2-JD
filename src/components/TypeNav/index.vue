<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="showSort" @mouseleave="hideSort">
        全部商品分类
      </h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="fade">
        <div
          class="sort"
          v-show="isShowSort"
          @mouseenter="showSort"
          @mouseleave="hideSort"
        >
          <div class="all-sort-list2" @click.prevent="goSearch">
            <!-- 一级分类 -->
            <div
              class="item"
              v-for="category in categoryList"
              :key="category.categoryId"
            >
              <h3>
                <a
                  href=""
                  :data-categoryName="category.categoryName"
                  :data-category1Id="category.categoryId"
                  >{{ category.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix">
                <!-- 二级分类 -->
                <div
                  class="subitem"
                  v-for="categorys in category.categoryChild"
                  :key="categorys.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        href=""
                        :data-categoryName="categorys.categoryName"
                        :data-category2Id="categorys.categoryId"
                        >{{ categorys.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <!-- 三级分类 -->
                      <em
                        v-for="item in categorys.categoryChild"
                        :key="item.categoryId"
                      >
                        <a
                          href=""
                          :data-categoryName="item.categoryName"
                          :data-category3Id="item.categoryId"
                          >{{ item.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      isShowSort: false,
    };
  },
  computed: mapState({
    categoryList: (state) => state.homeStore.categoryList,
  }),
  mounted() {
    this.isShowSort = this.$route.path == "/" ? true : false;
  },
  methods: {
    goSearch(e) {
      if (e.target.nodeName !== "A") return;
      let {
        category1id: category1Id = undefined,
        category2id: category2Id = undefined,
        category3id: category3Id = undefined,
        categoryname: categoryName = undefined,
      } = e.target.dataset;
      this.$router.push({
        name: "search",
        query: { category1Id, category2Id, category3Id, categoryName },
      });
    },
    showSort() {
      if (this.$route.path == "/") return;
      this.isShowSort = true;
    },
    hideSort() {
      if (this.$route.path == "/") return;
      this.isShowSort = false;
    },
  },
};
</script>

<style scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
}
.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 25px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
}
.type-nav .container .fade-enter,
.type-nav .container .fade-leave-to {
  height: 0;
}
.type-nav .container .fade-enter-to,
.type-nav .container .fade-leave {
  height: 461px;
}
.fade-enter-active {
  transition: all 0.5s;
}
</style>
