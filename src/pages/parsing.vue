<template>
  <div class="container">
    <div class="title"><p>洛阳市洛龙区第1期答题活动</p></div>
    <div class="wrapper">
      <div class="wrap-title">
        <p>答题解析</p>
      </div>
      <div class="topic" v-for="(items, index) of questions" :key="index">
        <p class="topic-top">第{{ index + 1 }}题</p>
        <p class="topic-text">{{ items.title }}</p>
        <ul class="topic-list" v-if="items.type === 1 || items.type === 3">
          <li v-for="(value, k, index) in items.options" :key="index">
            <span v-if="items.type === 1" class="topic-list-text">{{k}}&nbsp;&nbsp;{{ value }}</span>
            <span v-if="items.type === 3"
              >{{ k }}&nbsp;&nbsp;<img
                class="images"
                :src="'http://oea.fuhaoyun.cn/storage/' + value"
                alt=""
            /></span>
            <div v-if="items.correct == k" class="topic-list-correct">
              正确
            </div>
          </li>
          <div class="parsing">
            <span class="useranswer">您的答案是：{{ items.userneed }}</span
            ><br />
            <span class="parsing-info">答案解析：</span><br /><span
              class="parsing-text"
              >{{ items.analyze }}</span
            >
          </div>
        </ul>
        <ul class="topic-list" v-if="items.type === 2">
          <li v-for="(value, k, index) in items.options" :key="index">
            <span class="topic-list-text">{{ k }}&nbsp;&nbsp;{{ value }}</span>
            <div v-if="pk(items.correct, k)" class="topic-list-correct">
              正确
            </div>
          </li>
          <div class="parsing">
            <span class="useranswer">您的答案是：{{ items.userneed }}</span
            ><br />
            <span class="parsing-info">答案解析：</span><br /><span
              class="parsing-text"
              >{{ items.analyze }}</span
            >
          </div>
        </ul>
      </div>
      <div class="btn">
        <button class="subbtn" @click="btnclick">
          提交个人信息&nbsp;&nbsp;&nbsp;&nbsp;查看排名
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'parsing',
  data() {
    return {
      time: 20, // 倒计时
      times: 0, // 答题计时
      score: 0,
      datas: null,
      // userneed: null,
      // title:'',
      // optines: {},
      // correct:''
      current: 1,
      questions: [],
      userneed: null
    }
  },
  created() {
    this.questions = JSON.parse(sessionStorage.getItem('datas'))
    this.questions.forEach(item => {
      if (item.type === 2) {
        item.userneed = item.userneed.sort().join('')
      }
      return this.questions
    })
  },
  methods: {
    pk(val, K) {
      if (val.indexOf(K) > -1) {
        return true
      } else {
        return false
      }
    },
    btnclick() {
      sessionStorage.setItem('newques', JSON.stringify(this.questions))
      this.$router.push('/submit')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 0.5rem;
  background-color: #5490fe;
  .title p {
    font-size: 0.5rem;
    color: #fff;
  }
}
.wrapper {
  background-color: #fff;
  margin-top: 0.6rem;
  border-radius: 0.1rem;
  padding-bottom: 0.5rem;
  .wrap-title {
    height: 1.5rem;
    padding-left: 0.3rem;
    border-bottom: 0.02rem solid #f1f1f1;
    p {
      font-size: 0.4rem;
      line-height: 1.5rem;
    }
  }
}
.topic {
  margin-top: 0.3rem;
  padding: 0 0.5rem;
  .topic-top {
    font-size: 0.4rem;
    color: #c4c4c4;
    padding: 0.5rem 0;
  }
  .topic-text {
    font-size: 0.6rem;
  }
}
.topic-list {
  margin-top: 0.3rem;
  font-size: 0.5rem;
  line-height: 0.8rem;
  margin-bottom: 1rem;
  li {
    list-style: none;
    border: 0.02rem solid #e6e6e8;
    padding: 0.2rem;
    margin-top: 0.3rem;
    border-radius: 0.05rem;
    color: #606266;
    font-size: 0.4rem;
    .topic-list-text{
      word-break: break-all
    }
    .topic-list-err {
      width: 1.5rem;
      height: 0.8rem;
      background-color: #fa6e53;
      float: right;
      border-radius: 0.1rem;
      text-align: center;
      color: #fff;
    }
    .topic-list-correct {
      width: 1.5rem;
      height: 0.8rem;
      background-color: #00be6f;
      float: right;
      border-radius: 0.1rem;
      text-align: center;
      color: #fff;
    }
    .images {
      width: 65%;
      height: 65%;
    }
  }
  .parsing {
    margin-top: 0.3rem;

    .useranswer {
      color: red;
    }
    .parsing-text {
      font-size: 0.4rem;
      color: #aeaeae;
    }
  }
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  .subbtn {
    width: 7rem;
    height: 1.2rem;
    background-color: #6495ed;
    color: #ffffff;
    border: none;
    border-radius: 0.1rem;
    font-size: 0.5rem;
  }
}
</style>
