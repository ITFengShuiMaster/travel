<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
      list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    // 解决受scoped影响而不能修改子组件样式问题
    .wrapper >>> .swiper-pagination-bullet-active
        background-color: red !important
    // 解决图片加载慢造成页面抖动问题
    .wrapper
        width 100%
        height 0
        // 比例为图片高度相对于图片宽度的比例， 相对于的是wrapper的宽度
        padding-bottom 31.25%
        overflow hidden
        background-color #eee
        .swiper-img
            width 100%
</style>
