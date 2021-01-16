<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '~styles/mixins.scss';
 html,
 body,
 #app,
 .container{
   height: 100%;
 }
</style>