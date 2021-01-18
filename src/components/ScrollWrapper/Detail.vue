<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <swiper :picDatas="detailData.pics"></swiper>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import Swiper from './Sub/Swiper';

import tools from 'utils/tools';


import { DetailModel } from 'models/detail';
export default {
  name: 'DetailScrollWrapper',
  components: {
    Swiper
  },
  data(){
    return {
      id: 0,
      field: '',
      detailData: {}
    }
  },
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.id = this.$route.query.id;
    this.field = this.$route.query.field;
    this.getDetail(this.field, this.id)
  },
  methods: {
    getDetail(field, id){
      const detailModel = new DetailModel();
      detailModel.getDetail(field, id).then(res => {
        if(res && res.status === 0){
          const data = res.data;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
          console.log(this.detailData);
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>