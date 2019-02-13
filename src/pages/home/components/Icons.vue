<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key='item.id'>
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.img">
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
  data () {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        // loop: true
      },
      iconList: [{
        id: '001',
        img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '002',
        img: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '003',
        img: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '北京必游'
      }, {
        id: '004',
        img: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '溜娃'
      }, {
        id: '005',
        img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
        desc: '爬长城'
      }, {
        id: '006',
        img: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        desc: '故宫'
      }, {
        id: '007',
        img: 'http://img1.qunarzz.com/piao/fusion/1803/22/98cbc1ff9e33fe02.png',
        desc: '北京庙会'
      }, {
        id: '008',
        img: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
        desc: '北京滑雪'
      }, {
        id: '009',
        img: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '北京温泉'
      }]
    }
  },
  computed: {
    pages () {
        // 计算需要分几页
        const pages = []
        this.iconList.forEach((item, index) => {
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
