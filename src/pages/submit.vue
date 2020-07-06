<template>
  <div class="submit">
    <div class="header">
      XX区答题活动
    </div>
    <div class="submit-input">
      <label class="submit-input-info">您的姓名 </label><br />
      <input
        type="text"
        class="input"
        v-model="name"
        @change="namechange"
      /><br />
      <label class="submit-input-info">您的性别 </label><br />
      <el-radio v-model="gender" label="1" border default>男</el-radio>
      <el-radio v-model="gender" label="2" border>女</el-radio><br />
      <label class="submit-input-info">您的电话 </label><br />
      <input type="tel" class="input" v-model="tel" @change="telchange" /><br />
    </div>
    <!-- <p class="prompt">提交查看答案解析和排名</p> -->
    <div class="btn">
      <!-- <button class="btn-back" @click="btnback">上一页</button> -->
      <button class="btn-submit" @click="btnsubmit">提&nbsp;交</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'submit',
  data() {
    return {
      name: null,
      tel: null,
      nameval: 0,
      telval: 0,
      times: null,
      datas: null,
      score: null,
      id: '',
      gender: '1',
      activity: null,
      openid: null
    }
  },
  created() {
    this.datas = JSON.parse(sessionStorage.getItem('newques'))
    console.log(this.datas)
    this.times = sessionStorage.getItem('times')
    this.score = sessionStorage.getItem('score')
    this.id = sessionStorage.getItem('id')
    this.activity = sessionStorage.getItem('acid').slice(9, 10)
    console.log(this.activity)

    this.openid = sessionStorage.getItem('openid')
  },
  methods: {
    // btnback() {
    //   this.$router.go(-1);
    // },
    btnsubmit() {
      if (!/^[\u4E00-\u9FA5]{2,4}$/.test(this.name) || this.nameval === 0) {
        this.$message('请填写正确的名字')
        return
      }
      if (!/^1[34578]\d{9}$/.test(this.tel) || this.telval === 0) {
        this.$message('请填写正确的电话号码')
        return
      }

      // 请求
      let data = {}
      let roll = {}
      for (let i = 0; i < this.datas.length; i++) {
        const index = this.datas[i].id
        roll[index] = this.datas[i].userneed
      }
      console.log(roll)
      let newroll = JSON.stringify(roll)
      data.roll = newroll
      data.seconds = this.times
      data.score = this.score
      data.phone = this.tel
      data.gender = this.gender
      data.name = this.name
      data.activity = this.activity
      data.openid = this.openid
      console.log(this.name)
      sessionStorage.setItem('name', this.name)
      sessionStorage.setItem('tel', this.tel)
      console.log(data)
      // console.log(roll);
      let postdata = this.$qs.stringify(data)
      // console.log(postdata);
      this.$axios.post('/receive', postdata).then(res => {
        console.log(res)
        sessionStorage.setItem('ranklist', JSON.stringify(res))
        this.$router.push('/ranking')
      })
    },
    namechange() {
      this.nameval = 1
    },
    telchange() {
      this.telval = 1
    }
  }
}
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
  content: '* ';
  color: red;
}

.input {
  width: 9rem;
  height: 1.2rem;
  border-radius: 0.3rem;
  border: 0.05rem solid #ededed;
  text-indent: 0.3rem;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  -webkit-appearance: none;
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
  // .btn-back {
  //   height: 1.5rem;
  //   width: 4rem;
  //   font-size: 0.5rem;
  //   border: none;
  //   border-radius: 0.3rem;
  // }
  .btn-submit {
    height: 1.5rem;
    width: 6rem;
    font-size: 0.5rem;
    color: #fff;
    background-color: #2571fb;
    border: none;
    border-radius: 0.3rem;
  }
}
</style>
