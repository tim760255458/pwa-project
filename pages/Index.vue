<template>
    <div class="page-index">
        <h2>LAVAS</h2>
        <h4>[ˈlɑ:vəz]</h4>
        <banner>关于约定</banner>
        <card class="card">
            <p class="card_title" slot="title">这里是标题</p>
            <p class="card_content" slot="content">这里是标题要说的内容</p>
            <p class="card_footer" slot="footer">这里是说明或示例</p>
        </card>
        <banner>关于路由</banner>
        <card class="card">
            <p class="card_title" slot="title">路由规则</p>
            <p class="card_content" slot="content">
                /pages/ 目录中的所有页面都会自动生成一条路由规则，无需用户再行配置。
            </p>
            <p class="card_footer" slot="footer">
                <span class="warning">说明：</span>
                <span>假如 pages 文件夹中有一个名为 Detail.vue 的文件，那么页面跳转时可以通过 /detail 访问到它。</span>
                <button @click="goDetail">去 detail 页</button>
            </p>
        </card>
        <card class="card">
            <p class="card_title" slot="title">动态参数</p>
            <p class="card_content" slot="content">
                有些页面需要一个动态参数来进行访问。例如某博客站点需要展现某篇博客的内容详情，它的路由规则就很可能是 /detail/[id]， 其中 [id] 可能是数字，用来标识博客文章的 ID。
                这种情况我们需要用到 Lavas 动态参数功能。
            </p>
            <p class="card_footer" slot="footer">
                <span class="warning">说明：</span>
                <button @click="goDetailById">去 id 为 1 的 detail 页</button>
            </p>
        </card>
    </div>
</template>

<script>
function setState(store) {}

import Card from '../components/common/Card'
import Banner from '../components/common/Banner'
export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    components: {
        Card,
        Banner
    },
    methods: {
        goDetail () {
            this.$router.push({
                path: '/detail'
            })
        },
        goDetailById () {
            
        }
    }
};
</script>

<style lang="stylus" scoped>

.page-index
    display flex
    justify-content center
    align-items center
    flex-direction column
    overflow auto

    h2
        font-size 46px
        font-weight 500
        margin-bottom 0
    
    p
        margin 5px
        line-height 1.5em

.card
    display flex
    justify-content center
    align-items flex-start
    flex-direction column
    text-align left

.card_title
    font-size 18px
    font-weight bold

.card_content
    color #aaaaaa

.card_footer
    color #aaaaaa
    font-size 14px

.warning
    color orangered
</style>
