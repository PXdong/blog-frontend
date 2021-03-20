/*
 * @Author: dongpx
 * @Date: 2021-03-15 20:48:51
 * @LastEditTime: 2021-03-20 11:50:20
 * @LastEditors: dongpx
 * @Description: 
 * @FilePath: /laziji/src/main.js
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import Vuex from 'vuex'
// import token from './store/modules/token'
// import user from './store/modules/user'
// import configuration from './store/modules/configuration'
// import getters from './store/getters'
import store from './store'
import util from './utils/util'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(ElementUI)
  Vue.use(mavonEditor)

  Vue.prototype.$markdown = function (value) {
    return mavonEditor.markdownIt.render(value)
}

  Vue.prototype.$util = util

  

  appOptions.store = store

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
