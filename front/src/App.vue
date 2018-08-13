<template>
  <div id="app">
    <i-menu mode="horizontal"
      theme="dark"
      active-name="taskManager"
      @on-select="gotoPage">
      <i-menu-item name="taskManager">
        <i-icon type="code-download"></i-icon>
        {{$t("nav.taskManager")}}
      </i-menu-item>
      <i-submenu name="toolList">
        <template slot="title">
          <i-icon type="settings"></i-icon>
          {{$t("nav.toolList")}}
        </template>
        <i-menu-item name="3-1">待添加</i-menu-item>
      </i-submenu>
      <i-menu-item name="softwareSetting">
        <i-icon type="gear-a"></i-icon>
        {{$t("nav.softwareSetting")}}
      </i-menu-item>
      <i-menu-item name="aboutProject">
        <i-icon type="ios-navigate"></i-icon>
        {{$t("nav.aboutProject")}}
      </i-menu-item>
      <i-menu-item name="supportUs">
        <i-icon type="ios-star"></i-icon>
        {{$t("nav.supportUs")}}
      </i-menu-item>
    </i-menu>
    <i-content :style="{padding: '1.25rem 3.125rem 0'}">
      <router-view/>
    </i-content>
  </div>
</template>

<script>
export default {
  created () {
    this.checkRouter()
  },
  methods: {
    gotoPage (name) {
      this.$router.push(name)
    },
    checkRouter () {
      // 如果当前首页为/，则跳转到taskManager
      if (this.$route.path === '/') {
        this.$router.push('taskManager')
      }
    }
  },
  watch: {
    '$route': 'checkRouter'
  }
}
</script>
