<template>
  <div class="setting">
    <Container>
      <div class="server">
        <h2 class="header">服务端配置</h2>
        <i-form ref="server" :model="config.server" :rules="ruleCustom" :label-width="80">
          <i-form-item label="下载路径" prop="filePath">
            <FileChoose class="context" v-model="config.server.filePath"></FileChoose>
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
    </Container>
  </div>
</template>

<script>
import Container from '../components/Container'
import FileChoose from '../components/FileChoose'
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
    'Container': Container,
    'FileChoose': FileChoose
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

