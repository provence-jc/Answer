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
          <li>
            <!-- <el-radio v-model="items.userneed" label="A">{{

            }}</el-radio> -->
            <span>A&nbsp;&nbsp;{{ items.options.A }}</span>
            <div v-if="items.correct == 'A'" class="topic-list-correct">
              正确
            </div>
          </li>
          <li>
            <!-- <el-radio v-model="items.userneed" label="B">{{
              items.options.B
            }}</el-radio> -->
            <span>B&nbsp;&nbsp;{{ items.options.B }}</span>
            <div v-if="items.correct == 'B'" class="topic-list-correct">
              正确
            </div>
          </li>
          <li>
            <!-- <el-radio v-model="items.userneed" label="C">{{
              items.options.C
            }}</el-radio> -->
            <span>C&nbsp;&nbsp;{{ items.options.C }}</span>
            <div v-if="items.correct == 'C'" class="topic-list-correct">
              正确
            </div>
          </li>
          <li>
            <!-- <el-radio v-model="items.userneed" label="D">{{
              items.options.D
            }}</el-radio> -->
            <span>D&nbsp;&nbsp;{{ items.options.D }}</span>
            <div v-if="items.correct == 'D'" class="topic-list-correct">
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
          <li>
            <!-- <el-checkbox label="A">{{ items.options.A }}</el-checkbox> -->
            <span>A&nbsp;&nbsp;{{ items.options.A }}</span>
            <div v-if="pk(items.correct, 'A')" class="topic-list-correct">
              正确
            </div>
          </li>
          <li>
            <!-- <el-checkbox label="B">{{ items.options.B }}</el-checkbox> -->
            <span>B&nbsp;&nbsp;{{ items.options.B }}</span>
            <div v-if="pk(items.correct, 'B')" class="topic-list-correct">
              正确
            </div>
          </li>
          <li>
            <!-- <el-checkbox label="C">{{ items.options.C }}</el-checkbox> -->
            <span>C&nbsp;&nbsp;{{ items.options.C }}</span>
            <div v-if="pk(items.correct, 'C')" class="topic-list-correct">
              正确
            </div>
          </li>
          <li>
            <!-- <el-checkbox label="D">{{ items.options.D }}</el-checkbox> -->
            <span>D&nbsp;&nbsp;{{ items.options.D }}</span>
            <div v-if="pk(items.correct, 'D')" class="topic-list-correct">
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
        <button class="subbtn" @click="btnclick">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parsing",
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
    };
  },
  created() {
    this.questions = JSON.parse(sessionStorage.getItem("datas"));
    this.questions.forEach(item => {
      if (item.type === 2) {
        item.userneed = item.userneed.sort().join("");
      }
      return this.questions;
    });
  },
  methods: {
    pk(val, K) {
      if (val.indexOf(K) > -1) {
        return true;
      } else {
        return false;
      }
    },
    btnclick() {
      sessionStorage.setItem("questions", JSON.stringify(this.questions));
      this.$router.push("/submit");
    }
  }
};
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
    width: 6rem;
    height: 1.2rem;
    background-color: #6495ed;
    color: #ffffff;
    border: none;
    border-radius: 0.1rem;
    font-size: 0.5rem;
  }
}
</style>
