<template>
  <div class="submit">
    <div class="header">
      XX区答题活动
    </div>
    <div class="submit-input">
      <label class="submit-input-info">您的姓氏 </label><br />
      <input type="text" class="input" /><br />
      <label class="submit-input-info">您的名字 </label><br />
      <input type="text" class="input" /><br />
      <label class="submit-input-info">您的电话 </label><br />
      <input type="tel" class="input" /><br />
    </div>
    <!-- <p class="prompt">提交查看答案解析和排名</p> -->
    <div class="btn">
      <button class="btn-back" @click="btnback">上一页</button>
      <button class="btn-submit" @click="btnsubmit">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "submit",
  methods: {
    btnback() {
      this.$router.go(-1);
    },
    btnsubmit() {
      this.$router.push("/ranking");
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 1rem;
  background-color: #6495ed;
  color: #fff;
  font-size: 0.5rem;
  line-height: 1rem;
  text-align: center;
}
.submit-input {
  padding-left: 0.5rem;
}

.submit-input-info {
  font-size: 0.5rem;
}

label.submit-input-info:after {
  content: "* ";
  color: red;
}

.input {
  width: 9rem;
  height: 1.2rem;
  border-radius: 0.3rem;
  border: 0.05rem solid #ededed;
}
.prompt {
  font-size: 0.4rem;
  color: red;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
}
.btn {
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  .btn-back {
    height: 1.5rem;
    width: 4rem;
    font-size: 0.5rem;
    border: none;
    border-radius: 0.3rem;
  }
  .btn-submit {
    height: 1.5rem;
    width: 4rem;
    font-size: 0.5rem;
    color: #fff;
    background-color: #2571fb;
    border: none;
    border-radius: 0.3rem;
  }
}
</style>
