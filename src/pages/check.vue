<template>
  <div class="check-con"></div>
</template>

<script>
export default {
  name: 'check',
  data() {
    return {}
  },
  created() {
    const url = window.location.href
    console.log(url)

    // const url =
    // 'http://oea.fuhaoyun.cn/dist/index.html?unionid=oQ2y0uLUtJdR6ZOfTDn78Y9_S3Yo&activity=1'
    //   'http://oea.fuhaoyun.cn/dist/index.html?unionid=oQ2y0uLUtJdR6ZOfTDn78Y9_S3Yo&activity=2#/'
    //   'http://oea.fuhaoyun.cn/dist/index.html?wrong=2&unionid=oQ2y0uLUtJdR6ZOfTDn78Y9_S3Yo&activity=1'
    console.log(url)
    if (url.indexOf('wrong') > -1 || url.indexOf('union') > -1) {
      let data = url.substring(url.lastIndexOf('?') + 1)
      let unionid = url.substring(url.lastIndexOf('unionid') + 8).slice(0, 28)
      console.log(unionid)
      let activity = url.substring(url.lastIndexOf('&') + 1).slice(9, 10)
      sessionStorage.setItem('acid', activity)

      console.log(activity)

      let wrong = Number(data.slice(6, 7))
      if (wrong) {
        if (wrong === 1) {
          this.$message('请使用微信扫一扫')
        } else if (wrong === 2) {
          this.$message('你已参加过本次活动')
          this.$axios
            .post('/rank', { activity: activity, unionid: unionid })
            .then(res => {
              sessionStorage.setItem('rankdata', JSON.stringify(res))
              this.$router.push('/ranking')
            })
        } else if (wrong === 3) {
          this.$message('当前没有活动')
        } else if (wrong === 4) {
          this.$message('错误：网络原因')
        }
      } else {
        console.log(unionid)
        sessionStorage.setItem('unionId', unionid)
        this.$router.push('/home')
      }
    } else {
      this.$message('请使用微信扫一扫')
    }
  }
  // methods: {
  //   open(tit, info) {
  //     this.$alert(tit, `操作错误`, {
  //       confirmButtonText: '确定',
  //       // center: true,
  //       customClass: 'messageBox-prompt-test',
  //       callback: action => {
  //         this.$message({
  //           type: 'info',
  //           message: info
  //         })
  //       }
  //     })
  //   }
  // }
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
