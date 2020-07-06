<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ sub_title }}</div>
      <div class="time">答题时间{{ begin }}到{{ end }}</div>
      <div class="tips">
        <div class="tips-title">答题须知</div>
        <div class="tips-text">
          <span
            >1.在题库里随机抽取<span class="keynode">{{ num }}</span
            >道题目，每人仅限参加<span class="keynode">1次</span>。</span
          ></br>
          <span>2.按最终答题得分排名给予相应答题奖。</span></br>
          <span
            >3.为保证活动公平公正，对答题时间过短，明显不符合时间逻辑的答题者，主办方将进行现场测试，经判定存在作弊的，取消成句。对拒不到现场进行测试的答题者，也将取消成绩。</span
          ></br>
          <span>4.在答题期内，重复答疑的，将取消获奖资格。</span>
        </div>
      </div>
      <div class="prize">
        <div class="prize-title">奖项设置</div>
        <div class="prize-text">
          <span v-for="(item, index) in award" :key="index"
            >{{ item.level }}<span class="keynode">{{ item.num }}</span
            >个：奖品为<span class="keynode">{{ item.name }}</span></br></span
          >
          <span class="address"
            >奖品领取地址：<span class="keynode">{{ address }}</span></span
          ></br>
          <span>{{ sponsor }}</span>
        </div>
      </div>
      <div class="startbtn">
        <button class="btn" @click="start">开始答题</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      address: null,
      award: null,
      begin: null,
      end: null,
      num: null,
      sponsor: null,
      sub_title: null,
      title: null,
      acid: null
    }
  },
  created () {
    this.acid = sessionStorage.getItem('acid')
    this.$axios.get('/send?' + this.acid).then(res => {
      console.log(res)

      console.log(res.data.data.questions)

      let data = res.data.data.rules
      this.address = data.address
      this.begin = data.begin
      this.end = data.end
      this.num = data.num
      this.sponsor = data.sponsor
      this.sub_title = data.sub_title
      this.address = data.address
      this.title = data.title
      this.award = data.award
      this.award.forEach(item => {
        switch (item.level) {
          case 1:
            item.level = '一等奖'
            break
          case 2:
            item.level = '二等奖'
            break
          case 3:
            item.level = '三等奖'
            break
          case 4:
            item.level = '幸运奖'
            break
        }
        sessionStorage.setItem('questions', JSON.stringify(res.data.data.questions))
        sessionStorage.setItem('activity', res.data.data.rules.activity)
        return this.award
      })
    })
  },
  methods: {
    start () {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position:absolute;
	top:0;
	left:0;
  width: 100%;
	height:100%;
  background: url("../../assets/homebg.png") no-repeat;
  background-size: 100% 100%;
}
.title {
  font-size: 0.6rem;
  text-align: center;
  padding-top: 0.3rem;
}
.subtitle {
  font-size: 0.5rem;
  text-align: center;
  line-height: 1rem;
}
.time {
  font-size: 0.4rem;
  text-align: center;
}
.tips , .prize{
  padding-top: 0.5rem;
  margin: 0 auto;
  width: 8rem;
  .tips-text ,.prize-text{
    padding-top: 0.3rem;
    font-size: 0.35rem;
    line-height: 0.65rem;
  }
}
.tips-title , .prize-title {
  width: 2.2rem;
  height: .6rem;
  border-radius: .5rem;
  background-color: #58897e;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
.address{
  display: inline-block;
  margin-top: 0.3rem;
}
.keynode{
  color:#E2A642;
  font-weight: 600
}
.startbtn{
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
.btn{
  width: 9rem;
  height: 1.5rem;
  background-color: #E2A642;
  border-radius: 0.1rem;
  border: none;
  color: #fff;
  font-size: 0.5rem;
  text-align: center;
}
</style>
