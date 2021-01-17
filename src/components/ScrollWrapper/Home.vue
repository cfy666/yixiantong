<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
    </div>
  </div>
</template>

<script>
import CategoryIcons from './CategoryIcons';
import BetterScroll from 'better-scroll';
export default {
  name: 'HomeScrollWrapper',
  components: {
    CategoryIcons
  },
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper);
  }
}
</script>

<style>

</style>