<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floors in floorList" :key="floors.id" :list="floors" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapState } from "vuex";
export default {
  name: "home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  created() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({ floorList: (state) => state.homeStore.floorList }),
  },
};
</script>

<style lang="scss" scoped>
</style>
