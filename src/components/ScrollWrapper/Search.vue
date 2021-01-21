<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

      <div v-if="data.viewDatas && data.viewDatas.length > 0">
        <home-title
          title="景点结果"
        ></home-title>
        <view-list
          :viewDatas="data.viewDatas"
        ></view-list>
      </div>

      <div v-if="data.foodDatas && data.foodDatas.length > 0">
        <home-title
          title="美食结果"
        ></home-title>
        <food-list
          :foodDatas="data.foodDatas"
        ></food-list>
      </div>

      <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
        <home-title
          title="酒店结果"
        ></home-title>
        <hotel-list
          :hotelDatas="data.hotelDatas"
        ></hotel-list>
      </div>

      <div v-if="data.massageDatas && data.massageDatas.length > 0">
        <home-title
          title="按摩结果"
        ></home-title>
        <massage-list
          :massageDatas="data.massageDatas"
        ></massage-list>
      </div>

      <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
        <home-title
          title="KTV结果"
        ></home-title>
        <ktv-list
          :ktvDatas="data.ktvDatas"
        ></ktv-list>
      </div>

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import HomeTitle from "./Sub/HomeTitle";
import ViewList from "./ViewList";
import FoodList from "./FoodList";
import HotelList from "./HotelList";
import MassageList from "./MassageList";
import KtvList from "./KtvList";
export default {
  name: 'SearchScrollWrapper',
  components: {
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
  },
  props: {
    data: Object
  },
  data() {
    return {

    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>