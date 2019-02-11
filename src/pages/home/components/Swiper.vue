<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0adc5198ad3a6d8bc79e28c08719eee3.jpg_750x200_6d98c1d8.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/8325a1b70b5a582c6add3320a8627588.jpg_750x200_51b7cbfd.jpg'
      }]
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
        padding-bottom 26.7%
        overflow hidden
        background-color #eee
        .swiper-img
            width 100%
</style>
