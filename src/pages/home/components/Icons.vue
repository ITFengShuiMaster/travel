<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key='item.id'>
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            <!-- <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png">
                    </div>
                    <p class="icon-desc">景点</p>
                </div>
            </swiper-slide> -->
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        // loop: true
      }
    }
  },
  computed: {
    pages () {
        // 计算需要分几页
        const pages = []
        this.list.forEach((item, index) => {
            const page = Math.floor(index / 8)
            if (!pages[page]) {
                pages[page] = []
            }
            pages[page].push(item)
        })
        return pages
        }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        // width 100%
        height 0
        padding-bottom 50%
        // overflow hidden
    .icon
        width 25%
        height 0
        padding-bottom 25%
        float left
        overflow hidden
        position relative
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .15rem
            .icon-img-content
                height 100%
                display block
                margin 0 auto
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()
</style>
