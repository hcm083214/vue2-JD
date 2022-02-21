<template>
  <!-- 猜你喜欢 -->
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li v-for='likes in likeList' :key='likes.id'>
            <img :src="likes.imgUrl" alt="" />
            <div class="like-text">
              <p>{{likes.title}}</p>
              <h3>¥{{likes.price.toFixed(2)}}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "like",
  created() {
    this.$store.dispatch("getLikeList");
  },
  computed: {
    ...mapState({ likeList: (state) => state.homeStore.likeList }),
  },
};
</script>

<style scoped>
.outer .like {
  margin-top: 15px;
}
.outer .like .py-container {
  width: 1200px;
  margin: 0 auto;
}
.outer .like .py-container .title {
  overflow: hidden;
}
.outer .like .py-container .title .fl {
  float: left;
  font-size: 20px;
  line-height: 30px;
}
.outer .like .py-container .title .fr {
  float: right;
  background-image: url(/images/icons.png);
  width: 66px;
  height: 25px;
  background-position: 182px -104px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 400;
  color: #666;
  text-decoration: none;
}
.outer .like .py-container .bd .favourate {
  border: 1px solid #e4e4e4;
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
}
.outer .like .py-container .bd .favourate li {
  height: 250px;
  margin: 0 -1px;
  overflow: hidden;
  background: #fff;
  position: relative;
  width: 16.667%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.outer .like .py-container .bd .favourate li img {
  width: 142px;
  height: 142px;
  transition: all 400ms;
}
.outer .like .py-container .bd .favourate li img:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
.outer .like .py-container .bd .favourate li .like-text {
  padding: 0;
  width: 142px;
  border-right: 1px solid #e4e4e4;
}
.outer .like .py-container .bd .favourate li .like-text p {
  margin: 5px 0;
}
.outer .like .py-container .bd .favourate li .like-text h3 {
  color: #df3033;
  font-size: 20px;
  line-height: 30px;
  margin: 9px 0;
  font-weight: 700;
}
</style>