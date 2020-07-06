<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <!-- <p>答题剩余时间：{{time}}秒<span>用时:{{times}}秒</span></p> -->
        XX区答题活动
      </div>
      <div
        class="topic"
        v-for="(items, index) of questions.slice(sort, sort + 1)"
        :key="index"
      >
        <p class="topic-text">
          {{ current }}.{{ items.title
          }}{{ items.type === 1 ? "（单选题）" : "（多选题）" }}
        </p>
        <ul class="topic-list" v-if="items.type === 1" :scoreData="score">
          <li>
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="A"
              >A {{ items.options.A }}</el-radio
            >
          </li>
          <li>
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="B"
              >B {{ items.options.B }}</el-radio
            >
          </li>
          <li>
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="C"
              >C {{ items.options.C }}</el-radio
            >
          </li>
          <li>
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="D"
              >D {{ items.options.D }}</el-radio
            >
          </li>
        </ul>
        <ul class="topic-list" v-if="items.type === 2" :scoreData="score">
          <el-checkbox-group v-model="items.userneed" @change="answerChange">
            <el-checkbox border label="A">A {{ items.options.A }}</el-checkbox>
            <br />
            <el-checkbox border label="B">B {{ items.options.B }}</el-checkbox>
            <br />
            <el-checkbox border label="C">C {{ items.options.C }}</el-checkbox>
            <br />
            <el-checkbox border label="D">D {{ items.options.D }}</el-checkbox>
          </el-checkbox-group>
        </ul>
        <ul class="topic-list" v-if="items.type === 3" :scoreData="score">
          <li class="imagewrap">
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="A"
              >A <img class="images" :src="items.options.A" alt=""
            /></el-radio>
          </li>
          <li class="imagewrap">
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="B"
              >B <img class="images" :src="items.options.B" alt=""
            /></el-radio>
          </li>
          <li class="imagewrap">
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="C"
              >C <img class="images" :src="items.options.C" alt=""
            /></el-radio>
          </li>
          <li class="imagewrap">
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              label="D"
              >D <img class="images" :src="items.options.D" alt=""
            /></el-radio>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="btn">
        <button class="submit" @click="submitBtn">
          {{ button == 1 ? "下一题" : "提交答题，查看解析" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 20, // 倒计时
      times: 0, // 答题计时
      score: 0, // 总分
      value: 0,
      answer: 0,
      button: 1,
      // optines: {},
      // correct:''
      current: 1,
      questions: null,
      ques: null,
      sort: 0,
      activity: null
    };
  },
  created() {
    // 获取数据
    // var s = setInterval(() => {
    //   this.times++
    // }, 1000);
    this.mounted();
    this.questions = JSON.parse(sessionStorage.getItem("questions"));
    console.log(this.questions);
  },
  methods: {
    get() {
      this.times++;
    },
    mounted() {
      this.timer = setInterval(this.get, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    answerChange(value) {
      this.answer = 1;
    },
    submitBtn() {
      if (this.answer === 0) {
        this.$message("请选择答案");
        return;
      }
      if (this.questions[this.current - 1].type === 2) {
        if (
          this.questions[this.current - 1].correct ===
          this.questions[this.current - 1].userneed.sort().join("")
        ) {
          this.score += this.questions[this.current - 1].score;
        }
      } else {
        if (
          this.questions[this.current - 1].correct ==
          this.questions[this.current - 1].userneed
        ) {
          this.score += this.questions[this.current - 1].score;
        }
      }
      if (this.button == 0) {
        // 提交操作
        this.beforeDestroy();

        if (this.current >= this.questions.length) {
          sessionStorage.setItem("score", this.score);
          sessionStorage.setItem("times", this.times);
          sessionStorage.setItem("datas", JSON.stringify(this.questions));
          this.$router.push("/parsing");
        }
      } else {
        this.answer = 0;
        this.current++;
        this.sort++;
        if (this.current === this.questions.length) {
          this.button = 0;
        }
      }
      console.log(this.score);
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 1rem;
}
.images {
  width: 80%;
  height: 150px;
}
.imagewrap {
  width: 90%;
}
.header {
  width: 100%;
  height: 1rem;
  background-color: #6495ed;
  color: #fff;
  font-size: 0.5rem;
  line-height: 1rem;
  text-align: center;
}
.topic {
  margin-top: 0.3rem;
  padding: 0 0.5rem;
  .topic-text {
    font-size: 0.6rem;
  }
}
.topic-list {
  margin-top: 0.3rem;
  font-size: 0.5rem;
  line-height: 0.8rem;
  li {
    list-style: none;
  }
  .el-radio,
  .el-checkbox {
    width: 100%;
    height: auto;
    padding: 0.4rem;
    margin: 0.2rem 0;
  }
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.submit {
  width: 6rem;
  height: 1.2rem;
  background-color: #6495ed;
  color: #ffffff;
  border: none;
  border-radius: 0.1rem;
  font-size: 0.5rem;
}
</style>
