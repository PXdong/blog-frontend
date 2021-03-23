<!--
 * @Author: dongpx
 * @Date: 2021-03-19 14:00:34
 * @LastEditTime: 2021-03-23 15:27:51
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /laziji/src/layouts/components/Sidebar.vue
-->
<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active" @select="onSelect">
        <el-menu-item
          v-for="item in constantRouterMap"
          v-if="
            item.meta &&
              item.meta.type == 'user' &&
              (token || !item.meta.LoginRequired) &&
              (!mini || !item.meta.mini)
          "
          :key="item.path"
          :index="item.path"
        >
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-card>

    <el-card shadow="never" style="margin-top: 20px;text-align: center">
      <div
        v-if="!token"
        style="font-size: 0.9rem;line-height: 1.5;color: #606c71;"
      >
        <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp;
        Token未绑定&nbsp;&nbsp;
        <el-button type="text" @click="openTokenDialog">绑定</el-button>
      </div>
      <div
        v-if="token"
        style="font-size: 0.9rem;line-height: 1.5;color: #303133;"
      >
        <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp;
        Token已绑定&nbsp;&nbsp;
        <el-button type="text" @click="cancellation">注销</el-button>
      </div>
      <div style="margin-top: 10px;text-align: left">
        <el-alert
          title="Token获取"
          type="info"
          description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
          :closable="false"
        >
        </el-alert>
      </div>
    </el-card>
    <token-dialog ref="tokenDialog"></token-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TokenDialog from './TokenDialog'

export default {
  components: {
    TokenDialog,
  },
  data() {
    return {
      constantRouterMap: [
        {
          path: '/new',
          meta: {
            type: 'user',
            icon: 'el-icon-star-off',
            title: '最新动态',
          },
        },
        {
          path: '/social',

          meta: {
            type: 'user',
            icon: 'el-icon-mobile-phone',
            title: '社交圈',
          },
        },
        {
          path: '/blog',

          meta: {
            type: 'user',
            icon: 'el-icon-edit-outline',
            title: '博客列表',
          },
        },
        {
          path: '/project',

          meta: {
            type: 'user',
            icon: 'el-icon-service',
            title: '开源项目',
          },
        },
        {
          path: '/helper',
          meta: {
            type: 'user',
            icon: 'el-icon-printer',
            title: '使用帮助',
            mini: true,
          },
        },
        {
          path: '/readme',
          meta: {
            type: 'user',
            icon: 'el-icon-document',
            title: 'README.md',
          },
        },
        {
          path: '/configure',
          meta: {
            type: 'user',
            icon: 'el-icon-setting',
            title: '系统配置',
            LoginRequired: true,
          },
        },
      ],
      active: '',
      parentUrl: '',
      menuList: [],
    }
  },
  computed: {
    ...mapGetters(['token', 'githubUsername', 'mini']),
  },
  mounted() {
    let arr = this.$route.path.split('/')
    this.active = '/' + arr[1] + '/' + arr[2]
  },
  methods: {
    onSelect(index) {
      console.log(index)
      this.$router.push(index)
    },
    openTokenDialog() {
      this.$refs.tokenDialog.open(() => {})
    },
    cancellation() {
      this.$store.dispatch('Cancellation')
    },
  },
}
</script>
