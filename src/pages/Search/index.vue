<template>
  <div>
    <TypeNav />
    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag" @click="deleteSearchParams">
            <!-- TypeNav带过来的数据 -->
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName }}
              <i :data-categoryName="''">×</i>
            </li>
            <!-- 搜索的关键字 -->
            <li class="with-x" v-if="searchParams.keyword">
              {{ searchParams.keyword }}
              <i :data-keyword="''">×</i>
            </li>
            <!-- 搜索的品牌 -->
            <li class="with-x" v-if="searchParams.trademark">
              {{ searchParams.trademark.split(":")[1] }}
              <i :data-trademark="''">×</i>
            </li>
            <!-- 搜索的分类属性 -->
            <template v-if="searchParams.props.length">
              <li
                class="with-x"
                v-for="(item, index) in searchParams.props"
                :key="index"
              >
                {{ item.split(":")[1] }}
                <i :data-props="index">×</i>
              </li>
            </template>
          </ul>
        </div>
        <Selector
          :trademarkList="trademarkList"
          :attrsList="attrsList"
          @addTrademark="addTrademark"
          @addProps="addProps"
        />
        <Details
          :goodsList="goodsList"
          :order="searchParams.order"
          @orderChange="orderChange"
        />
        <HotSale :goodsList="goodsList" />
        <Pagination :total='total' :pageNo='searchParams.pageNo'/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Bread from "./Bread";
import Selector from "./Selector";
import Details from "./Details";
import HotSale from "./HotSale";
export default {
  name: "Search",
  components: { Bread, Selector, Details, HotSale },
  data() {
    return {
      //用来给后端发送请求的参数
      /*   示例  
      searchParams: {
          category3Id: "61",
          categoryName: "手机",
          keyword: "小米",
          order: "1:desc",
          pageNo: 1,
          pageSize: 10,
          props: ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
          trademark: "4:小米",
        }, 
      */
      searchParams: {
        //产品相应的id
        category1Id: "",
        category2Id: "",
        category3Id: "",
        //产品的名字
        categoryName: "",
        //搜索的关键字
        keyword: "",
        //排序:初始状态应该是综合且降序 排序方式 1: 综合,2: 价格 asc: 升序,desc: 降序  示例: "1:desc"
        order: "1:desc",
        //第几页
        pageNo: 1,
        //每一页展示条数
        pageSize: 3,
        //平台属性的操作 商品属性的数组格式: ["属性ID:属性值:属性名"]
        props: [],
        //品牌 品牌: "ID:品牌名称" 示例: "1:苹果"
        trademark: "",
      },
    };
  },
  created() {
    // 刚进入的时候 searchParams 参数来自于路由信息，并初始化 data 中的 searchParams 值
    Object.assign(this.searchParams, this.$route.query, this.$route.params);
  },
  computed: {
    ...mapGetters(["goodsList", "attrsList", "trademarkList",'total']),
  },
  methods: {
    //功能说明：面包屑删除,针对 keyword 和 props 需要特别处理
    // keyword 需要同步清除掉搜索框中的数据：因为是跨组件通信这里通过数据总线来处理
    deleteSearchParams(e) {
      if (e.target.nodeName !== "I") return;
      const eleProps = e.target.dataset;
      if (eleProps.hasOwnProperty("props")) {
        const index = eleProps.props;
        this.searchParams.props.splice(index, 1);
      }
      if (eleProps.hasOwnProperty("keyword")) {
        const keyword = eleProps.keyword;
        const {
          category1Id = undefined,
          category2Id = undefined,
          category3Id = undefined,
          categoryName = undefined,
        } = this.searchParams;

        !keyword && this.$bus.$emit("clearKeyword");
        this.$router.push({
          name: "search",
          query: {
            categoryName,
            category1Id,
            category2Id,
            category3Id,
          },
        });
      }
      const {
        categoryname: categoryNameFromProps = this.searchParams.categoryName,
        trademark = this.searchParams.trademark,
      } = eleProps;
      Object.assign(this.searchParams, {
        categoryName: categoryNameFromProps,
        trademark,
      });
    },
    addTrademark(tmId, tmName) {
      // this.searchParams.trademark = `${tmId}:${tmName}`;
      Object.assign(this.searchParams, {
        trademark: `${tmId}:${tmName}`,
        category1Id: "",
        category2Id: "",
        category3Id: "",
      });
    },
    addProps(id, attrVals, attrName) {
      const propsTemp = this.searchParams.props;
      const val = `${id}:${attrVals}:${attrName}`;
      //如果添加相同值，不做处理
      if (propsTemp.indexOf(val) != -1) return;
      propsTemp.push(`${id}:${attrVals}:${attrName}`);
      Object.assign(this.searchParams, {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        props: propsTemp,
      });
    },
    orderChange(order) {
      if (this.searchParams.order == order) return;
      this.searchParams.order = order;
    },
  },
  watch: {
    searchParams: {
      handler(newVal) {
        // 功能说明： 1. 重新发起请求 2. 路由path变化
        console.log("searchParams change", newVal);
        this.$store.dispatch("getSearchList", newVal);
      },
      deep: true,
    },
    $route: {
      handler() {
        // route 的变化主要来源于两大方面，
        // 由于搜索关键字的变化引起的params变化，TypeNav 的选项和 searchParams.props 的变化引起的 query 的变化
        console.log("routeChange");
        if (Object.keys(this.$route.params).length) {
          // 由于 params 变化引起的
          this.searchParams = Object.assign(
            this.searchParams,
            {
              keyword: this.$route.params.keyword,
            },
            this.$route.query
          );
        } else {
          // 由于 query 的变化引起的
          this.searchParams = Object.assign(
            this.searchParams,
            this.$route.query,
            { props: [], keyword: "" }
          );
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
.outer .main {
  margin: 10px 0;
}
.outer .main .py-container {
  width: 1200px;
  margin: 0 auto;
}
.outer .main .py-container .bread {
  margin-bottom: 5px;
  overflow: hidden;
}
.outer .main .py-container .bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
.outer .main .py-container .bread .sui-breadcrumb li {
  display: inline-block;
  line-height: 18px;
}
.outer .main .py-container .bread .sui-breadcrumb li a {
  color: #666;
  text-decoration: none;
}
.outer .main .py-container .bread .sui-breadcrumb li a:hover {
  color: #4cb9fc;
}
.outer .main .py-container .bread .sui-tag {
  margin-top: -5px;
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  margin-bottom: 18px;
  float: left;
}
.outer .main .py-container .bread .sui-tag .with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.outer .main .py-container .bread .sui-tag .with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.outer .main .py-container .bread .sui-tag .with-x:hover {
  color: #28a3ef;
}
</style>
