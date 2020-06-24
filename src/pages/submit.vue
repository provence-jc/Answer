<template>
  <div class="submit">
    <div class="header">
      XX区答题活动
    </div>
    <div class="submit-input">
      <label class="submit-input-info">您的姓氏 </label><br />
      <input type="text" class="input" @change="lastnamechange" /><br />
      <label class="submit-input-info">您的名字 </label><br />
      <input type="text" class="input" @change="firstnamechange" /><br />
      <label class="submit-input-info">您的电话 </label><br />
      <input type="tel" ref="tel" class="input" @change="telchange" /><br />
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
  data() {
    return {
      lastname: 0,
      firstname: 0,
      tel: 0
    };
  },
  methods: {
    btnback() {
      this.$router.go(-1);
    },
    btnsubmit() {
      const phonenum = this.$refs.tel.value;
      console.log(/^1[34578]\d{9}$/.test(phonenum));

      if (this.lastname === 0) {
        this.$message("请填写姓氏");
        return;
      }
      if (this.firstname === 0) {
        this.$message("请填写名字");
        return;
      }
      if (this.tel === 0 && !/^1[34578]\d{9}$/.test(phonenum)) {
        this.$message("请填写正确的电话号码");
        return;
      }
      this.$router.push("/ranking");
    },
    lastnamechange() {
      this.lastname = 1;
    },
    firstnamechange() {
      this.firstname = 1;
    },
    telchange() {
      this.tel = 1;
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
