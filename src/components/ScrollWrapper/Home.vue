<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <div v-show="!errorShow">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelDatas="homeDatas.hotelDatas"></hotel-list>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageDatas="homeDatas.massageDatas"></massage-list>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvDatas="homeDatas.ktvDatas"></ktv-list>
      </div>
      <error :errorShow="errorShow"></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CategoryIcons from "./CategoryIcons";
import HomeTitle from "./Sub/HomeTitle";
import ViewList from "./ViewList";
import FoodList from "./FoodList";
import HotelList from "./HotelList";
import MassageList from "./MassageList";
import KtvList from "./KtvList";
import Error from "./Sub/Error";

import { IndexModel } from "models/index";
import { mapState } from "vuex";

import tools from "utils/tools";
export default {
  name: "HomeScrollWrapper",
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error
  },
  data() {
    return {
      currentCityId: 0,
      homeTitle: {
        foodTitle: "推荐美食",
        hotelTitle: "推荐酒店",
        ktvTitle: "推荐KTV",
        massageTitle: "推荐按摩",
        viewTitle: "推荐景点"
      },
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: []
      },
      errorShow: false
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    });
    this.getHomeDatas(this.cityId);
    this.currentCityId = this.cityId;
  },
  activated(){
    if(this.currentCityId !== this.cityId){
      this.currentCityId = this.cityId;
      this.getHomeDatas(this.cityId);
    }
  },
  computed: {
    ...mapState(["cityId"])
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel();
      indexModel.getHomeDatas(cityId).then(res => {
        if (res && res.status === 0) {
          const data = res.data;
          this.errorShow = false

          this.homeDatas.foodDatas = tools.formatJSON(
            data.foodDatas,
            "keyword"
          );
          this.homeDatas.hotelDatas = data.hotelDatas;
          this.homeDatas.ktvDatas = data.ktvDatas;
          this.homeDatas.massageDatas = data.massageDatas;
          this.homeDatas.viewDatas = data.viewDatas;
        }else{
          this.errorShow = true;
          console.log({
            statusCode: res.status,
            errorMsg: res.err
          });
        }
      });
    }
  }
};
</script>

<style></style>
