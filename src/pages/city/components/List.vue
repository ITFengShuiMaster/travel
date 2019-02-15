<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">南京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom"><a href="#dis-B">A</a></div>
        <div class="item-list">
          <div class="item">阿拉尔阿拉尔阿拉尔阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔阿拉尔阿拉尔阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔阿拉尔阿拉尔阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔阿拉尔阿拉尔阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item">阿拉尔阿拉尔阿拉尔阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div id="dis-B" class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item">B阿拉尔阿拉尔阿拉尔阿拉尔</div>
          <div class="item">B阿拉尔</div>
          <div class="item">B阿拉尔</div>
          <div class="item">B阿拉尔</div>
          <div class="item">B阿拉尔</div>
          <div class="item">B阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .area
      overflow hidden
      .title
      // 1
        line-height .64rem
        padding-left .2rem
        background-color #eee
        color #666666
        font-size .26rem
      .button-list
        // 2
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
        // 3
          float left
          width 33.33%
          .button
            // 4
            padding .1rem 0
            text-align center
            margin .1rem
            border .02rem solid #777777
            border-radius .1rem
      .item-list
      // 5
        .item
          width 18%
          line-height .50rem
          margin .1rem
          padding .1rem .1rem .1rem .1rem
          font-size .28rem
          float left
          border .02rem solid #ccc
          border-left none 
          border-top none
          text-align center
          ellipsis()
</style>
