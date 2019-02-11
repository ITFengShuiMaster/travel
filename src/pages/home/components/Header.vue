<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩</div>
        <div class="header-right">城市<span class="iconfont">&#xe612;</span></div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    // 样式中引入样式使用@import
    @import '~styles/varibles.styl';
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex: 1
            background #ffffff
            border-radius .1rem
            height .62rem
            line-height .62rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2rem
            color #cccccc
        .header-right
            width: 1.24rem
            float: right
            text-align center
</style>
