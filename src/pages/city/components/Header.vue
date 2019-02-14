<template>
  <div class="header">
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    城市选择
  </div>  
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height $heightHigh
    line-height $heightHigh
    background-color $bgColor
    text-align center
    color #fff
    font-size .32rem
    .header-back
      position absolute
      left 0
      top 0
      width .64rem
      font-size .4rem
      text-align center
      color #fff
</style>
