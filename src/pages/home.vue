<template>
  <div
    class="container"
    :style="{
      background:
        'url(' + 'http://oea.fuhaoyun.cn/storage/' + back_pic + ') 0/100% 100% no-repeat'
    }"
  >
    <div class="wrapper">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ sub_title }}</div>
      <div class="time">答题时间 {{ begin }} 到 {{ end }}</div>
      <div class="tips">
        <div class="tips-title">{{ instruction_title }}</div>
        <div class="tips-text">
          <span v-for="(item, index) of instruction" :key="index"
            >{{ index + 1 }}.{{ item }}<br />
          </span>
        </div>
      </div>
      <div class="prize">
        <div class="prize-title">{{ award_title }}</div>
        <div class="prize-text">
          <span v-for="(item, index) in award" :key="index">
            {{ item.level }}
            <span class="keynode">{{ item.num }}</span>
            个：奖品为
            <span class="keynode">{{ item.name }}</span
            ><br />
          </span>
          <span class="address">
            奖品领取地址：
            <span class="keynode">{{ address }}</span> </span
          ><br />
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
  data() {
    return {
      address: null,
      award_title: null,
      award: null,
      back_pic: null,
      begin: null,
      end: null,
      instruction: null,
      instruction_title: null,
      num: null,
      sponsor: null,
      sub_title: null,
      title: null,
      acid: null
    }
  },
  created() {
    this.acid = sessionStorage.getItem('acid')
    console.log(this.acid)
  },
  mounted() {
    setTimeout(() => {
      this.getData()
    }, 1000)
  },
  methods: {
    getData() {
      this.$axios.get('/send?activity=' + this.acid).then(res => {
        console.log(res)
        console.log(res.data.data.questions)

        let data = res.data.data.rules
        this.address = data.address
        this.award_title = data.award_title
        this.back_pic = data.back_pic
        this.begin = data.begin
        this.end = data.end
        this.instruction = data.instruction
        this.instruction_title = data.instruction_title
        this.num = data.num
        this.sponsor = data.sponsor
        this.sub_title = data.sub_title
        this.address = data.address
        this.title = data.title
        sessionStorage.setItem('title',this.title)
        this.award = data.award
        console.log(this.award)
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
              item.level = '四等奖'
              break
            case 5:
              item.level = '五等奖'
              break
            case 6:
              item.level = '六等奖'
              break
          }
        })
        this.award[this.award.length - 1].level = '幸运奖'
        sessionStorage.setItem(
          'questions',
          JSON.stringify(res.data.data.questions)
        )
        sessionStorage.setItem('info', res.data.data.rules.info)
        // sessionStorage.setItem('activity', res.data.data.rules.activity)
        return this.award
      })
    },
    start() {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
.tips,
.prize {
  padding-top: 0.5rem;
  margin: 0 auto;
  width: 8rem;
  .tips-text,
  .prize-text {
    padding-top: 0.3rem;
    font-size: 0.35rem;
    line-height: 0.65rem;
  }
}
.tips-title,
.prize-title {
  width: 2.2rem;
  height: 0.6rem;
  border-radius: 0.5rem;
  background-color: #58897e;
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
.address {
  display: inline-block;
  margin-top: 0.3rem;
}
.keynode {
  color: #e2a642;
  font-weight: 600;
}
.startbtn {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
.btn {
  width: 9rem;
  height: 1.5rem;
  background-color: #e2a642;
  border-radius: 0.1rem;
  border: none;
  color: #fff;
  font-size: 0.42rem;
  text-align: center;
  line-height: 1.5rem;
}
</style>
