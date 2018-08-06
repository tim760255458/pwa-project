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
                <span>
                    假如 pages 文件夹中有一个名为 Home.vue 的文件，那么页面跳转时可以通过 /home 访问到它。注意文件命名问题，<span class="warning">H</span>ome.vue。
                    文件首字母大写，文件夹小写。
                </span>
                <button @click="goHome">去 home 页</button>
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
                <span>此时路由地址为 /detail/1 ，目录结构为 pages/detail/_id.vue 。</span>
            </p>
        </card>
        <card class="card">
            <p class="card_title" slot="title">嵌套路由</p>
            <p class="card_content" slot="content">
                开发者需要在 /pages 目录中新建两个同名的目录和 Vue 文件(但首字母大小写不同，目录小写，文件大写)即可实现。
            </p>
            <p class="card_footer" slot="footer">
                <span class="warning">说明：</span>
                <button @click="goUser">去 /home/user 页</button>
                <span>此时路由地址为 /home/user ，目录结构为 pages/home/User.vue 。</span>
            </p>
        </card>
        <banner>关于状态管理</banner>
        <card class="card">
            <p class="card_title" slot="title">lavas 中 vuex 使用</p>
            <p class="card_content" slot="content">
                所有位于 /store 目录的 js 文件都会以 Vuex 模块 (module) 进行加载。因此开发者只需要提供一个完整的 Vuex 模块就可以在 vue 中使用它。下方示例实现在 /store/detail.js 。
                午安网的 PWA 项目中采用路由导航完成前获取数据，与 lavas 保持一致。
            </p>
            <p class="card_footer" slot="footer">
                <span class="warning">说明：</span>
                <button @click="setUserInfo">设置 user 数据</button>
                <button @click="cancelUserInfo">还原</button>
                <span>姓名：{{ user.name }}，年龄：{{ user.age }}</span>
            </p>
        </card>
        <banner>关于站点添加至首屏</banner>
        <card class="card">
            <p class="card_title" slot="title">站点添加至首屏</p>
            <p class="card_content" slot="content">
                PWA 提供了一个 manifest.json 配置文件，可以自定义图标、名称、启动方式等。具体配置项说明见
                <a href="https://lavas.baidu.com/pwa/engage-retain-users/add-to-home-screen/introduction" target="_blank">manifest.json 简介</a>
            </p>
        </card>
        <p class="footer_line">v1.0</p>
    </div>
</template>

<script>
function setState(store) {}

import { mapState, mapMutations } from 'vuex'
import Card from '../components/common/Card'
import Banner from '../components/common/Banner'
import { test } from '../api'
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
    data () {
        return {
            backData: null
        }
    },
    components: {
        Card,
        Banner
    },
    computed: {
        ...mapState('detail', ['user'])
    },
    methods: {
        ...mapMutations('detail', ['setUser']),
        goHome () {
            this.$router.push({
                path: '/home'
            })
        },
        goDetailById () {
            this.$router.push({
                path: '/detail/1'
            })
        },
        goUser () {
            this.$router.push({
                path: '/home/user'
            })
        },
        setUserInfo () {
            this.setUser({
                name: 'buer',
                age: 18
            })
        },
        cancelUserInfo () {
            this.setUser({
                name: '未设置',
                age: '未设置'
            })
        },
        getToday () {
            test({
                email: '111@qq.com',
                password: '111'
            }).then(response => {
                console.log(response)
                this.backData = response.data
            }).catch(error => {
                console.log(error)
            })
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

.footer_line
    color #dddddd
    font-size 12px
</style>
