<template>
  <div class="check-con">
    <p class="check-con-info" v-if="back">请退出</p>
  </div>
</template>

<script>
export default {
  name: "check",
  data() {
    return {
      back: false
    };
  },
  created() {
    const url = window.location.href;
    let wrong = url.substring(url.lastIndexOf("?") + 1);
    if (wrong === 1) {
      this.open("请使用微信扫一扫", "请退出重新扫码");
      this.back = true;
    } else if (wrong === 2) {
      this.open("你已参加过本次活动", "你已参加过本次活动");
      this.back = true;
    } else if (wrong === 3) {
      this.open("当前没有活动", "当前没有活动，请关注XXX");
      this.back = true;
    } else if (wrong === 4) {
      this.open("错误：网络原因", "请关注XXX");
      this.back = true;
    } else {
      this.back = false;
      sessionStorage.setItem("openid", wrong);
      console.log(wrong);
    }
  },
  methods: {
    open(tit, info) {
      this.$alert(tit, `操作错误`, {
        confirmButtonText: "确定",
        // center: true,
        customClass: "messageBox-prompt-test",
        callback: action => {
          this.$message({
            type: "info",
            message: info
          });
        }
      });
    }
  }
};
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
.messageBox-prompt-test {
  width: 9rem;
}
</style>
