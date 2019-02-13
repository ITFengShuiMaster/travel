<template>
  <div>
    <div class="recommend-title">
      热门推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top .2rem
    line-height .8rem
    text-indent .2rem
    background #eee
  .item
    height 1.9rem
    overflow hidden
    display flex
    .item-img
      height 1.7rem
      width 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .45rem
        font-size .26rem
        color #ccc
        ellipsis()
      .item-button
        margin-top .20rem
        line-height .44rem
        padding 0 .2rem
        background-color #ff9300
        color #ffffff
        border-radius .3rem
</style>
