<template>
  <div class="check-con">
    <p class="check-con-info" v-if="back">请退出</p>
  </div>
</template>

<script>
export default {
  name: 'check',
  data() {
    return {
      back: false
    }
  },
  created() {
    const url = window.location.href
    // console.log(url)

    // const url =
    //   'http://oea.fuhaoyun.cn/dist/index.html?openid=oAahPw8NSQpWgyk1nEhn7qWMnXAw&activity=1'
    // 'http://oea.fuhaoyun.cn/dist/index.html?openid=oAahPw3NIquaai9R5NXp_dlzM4zo&activity=1#/'
    // 'http://oea.fuhaoyun.cn/dist/index.html?openid=oAahPw3NIquaai9R5NXp_dlzM4zo&activity=1'
    // 'http://oea.fuhaoyun.cn/dist/index.html?openid=oAahPw2NVHG5eymK3MlXdTfHU8Kg&activity=1'
    // "http://oea.fuhaoyun.cn/dist/index.html?openid=oAahPw2NVHG5eymK3MlXdTfHU9Kg#/";
    // 'http://oea.fuhaoyun.cn/dist/index.html?wrong=4'

    if (url.indexOf('wrong') > -1 || url.indexOf('open') > -1) {
      let data = url.substring(url.lastIndexOf('?') + 1)
      let activity = url.substring(url.lastIndexOf('&') + 1)
      sessionStorage.setItem('acid', activity)

      console.log(activity)

      let wrong = Number(data.slice(6, 7))
      if (wrong) {
        if (wrong === 1) {
          this.open('请使用微信扫一扫', '请退出重新扫码')
          this.back = true
        } else if (wrong === 2) {
          this.open('你已参加过本次活动', '你已参加过本次活动')
          this.back = true
        } else if (wrong === 3) {
          this.open('当前没有活动', '当前没有活动，请关注XXX')
          this.back = true
        } else if (wrong === 4) {
          this.open('错误：网络原因', '请关注XXX')
          this.back = true
        }
      } else {
        this.back = false
        let openid = data.slice(7, 35)
        console.log(openid)
        sessionStorage.setItem('openid', openid)
        this.$router.push('/home')
      }
    } else {
      this.open('请使用微信扫一扫', '请退出重新扫码')
      this.back = true
    }
  },
  methods: {
    open(tit, info) {
      this.$alert(tit, `操作错误`, {
        confirmButtonText: '确定',
        // center: true,
        customClass: 'messageBox-prompt-test',
        callback: action => {
          this.$message({
            type: 'info',
            message: info
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.check-con {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .check-con-info {
    margin-top: 1rem;
    font-size: 0.4rem;
    text-align: center;
  }
}
.el-message-box__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .messageBox-prompt-test {
    width: 85%;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // margin: 0 !important;
    // transform: translate(-50%, -50%);
  }
}
</style>
