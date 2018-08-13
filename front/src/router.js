import Vue from 'vue'
import Router from 'vue-router'
import Tasks from './views/Tasks.vue'
import Setting from './views/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/taskManager',
      name: 'taskManager',
      component: Tasks,
      meta: {
        title: '任务列表'
      }
    },
    {
      path: '/softwareSetting',
      name: 'softwareSetting',
      component: Setting,
      meta: {
        title: '软件设置'
      }
    }
  ]
})
