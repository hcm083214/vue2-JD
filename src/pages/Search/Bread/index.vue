<template>
  <!--bread-->
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">
      <li class="with-x" v-if="categoryName">{{ categoryName }}</li>
      <li class="with-x" v-if="keyword">{{ keyword }}</li>
      <li class="with-x" v-if="trademark">{{ trademark }}</li>
      <template v-if="props.length">
        <li class="with-x" v-for="(item,index) in props" :key="index">{{item}}<i>×</i></li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Bread",
  props: ["categoryName", "keyword", "trademark", "props"],
};
</script>

<style scoped>
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
