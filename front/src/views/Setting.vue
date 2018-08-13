<template>
  <div class="setting">
    <v-container>
      <div class="server">
        <h2 class="header">服务端配置</h2>
        <i-form ref="server" :model="config.server" :rules="ruleCustom" :label-width="80">
          <i-form-item label="下载路径" prop="filePath">
            <i-input class="context" type="file" v-model="config.server.filePath"></i-input>
          </i-form-item>
          <i-form-item label="HTTP连接数" prop="connections">
            <i-slider class="context" v-model="config.server.connections" :max=256 show-input :tip-format="formatTips.bind(this, '个')"></i-slider>
          </i-form-item>
          <i-form-item label="超时时间" prop="timeOut">
            <i-input class="context" type="text" v-model="config.server.timeOut"></i-input>
          </i-form-item>
          <i-form-item>
            <i-button type="primary" @click="handleSubmit('server')">提交</i-button>
            <i-button @click="handleReset('formCustom')" style="margin-left: 8px">恢复默认值</i-button>
          </i-form-item>
        </i-form>
      </div>
    </v-container>
  </div>
</template>

<script>
import Container from '../components/Container'
export default {
  created () {
    this.$http
      .get('http://127.0.0.1:26339/config')
      .then(({data}) => {
        this.$set(this.config, 'server', data)
      })
  },
  data () {
    return {
      config: {
        server: {
          filePath: '',
          connections: 32,
          timeOut: 21,
          autoRename: false,
          port: 26339,
          proxyConfig: null,
          retryCount: 3,
          speedLimit: 3,
          totalSpeedLimit: 3
        }
      }
    }
  },
  methods: {
    formatTips (unit, val) {
      return val + ' ' + unit
    }
  },
  components: {
    'v-container': Container
  }
}
</script>

<style lang="less" scoped>
.server{
  .header {
    display: block;
    margin-bottom: 1.25rem;
  }
  .context {
    width: 60%;
  }
}
</style>

