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
          }}{{ items.type === 1 ? '（单选题）' : '（多选题）' }}
        </p>
        <ul class="topic-list" v-if="items.type === 1" :scoreData="score">
          <li v-for="(value, k, index) in items.options" :key="index">
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              :label="k"
              >{{ k }} {{ value }}</el-radio
            >
          </li>
        </ul>
        <div class="topic-list" v-if="items.type === 2" :scoreData="score">
          <el-checkbox-group v-model="items.userneed" @change="answerChange">
            <el-checkbox
              border
              v-for="(value, k, index) in items.options"
              :key="index"
              :label="k"
              >{{ k }} {{ value }}</el-checkbox
            >
          </el-checkbox-group>
        </div>
        <ul class="topic-list" v-if="items.type === 3" :scoreData="score">
          <li
            class="imagewrap"
            v-for="(value, k, index) in items.options"
            :key="index"
          >
            <el-radio
              border
              @change="answerChange"
              v-model="items.userneed"
              :label="k"
              >{{ k }}
              <img
                class="images"
                :src="'http://oea.fuhaoyun.cn/storage/' + value"
                alt=""
            /></el-radio>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="btn">
        <button class="submit" @click="submitBtn">
          {{ button == 1 ? '下一题' : '提交答题，查看解析' }}
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
    }
  },
  created() {
    // 获取数据
    // var s = setInterval(() => {
    //   this.times++
    // }, 1000);
    this.mounted()
    this.questions = JSON.parse(sessionStorage.getItem('questions'))
    console.log(this.questions)
  },
  methods: {
    get() {
      this.times++
    },
    mounted() {
      this.timer = setInterval(this.get, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    answerChange(value) {
      this.answer = 1
    },
    submitBtn() {
      if (this.answer === 0) {
        this.$message('请选择答案')
        return
      }
      if (this.questions[this.current - 1].type === 2) {
        if (
          this.questions[this.current - 1].correct ===
          this.questions[this.current - 1].userneed.sort().join('')
        ) {
          this.score += this.questions[this.current - 1].score
        }
      } else {
        if (
          this.questions[this.current - 1].correct ==
          this.questions[this.current - 1].userneed
        ) {
          this.score += this.questions[this.current - 1].score
        }
      }
      if (this.button == 0) {
        // 提交操作
        this.beforeDestroy()

        if (this.current >= this.questions.length) {
          sessionStorage.setItem('score', this.score)
          sessionStorage.setItem('times', this.times)
          sessionStorage.setItem('datas', JSON.stringify(this.questions))
          this.$router.push('/parsing')
        }
      } else {
        this.answer = 0
        this.current++
        this.sort++
        if (this.current === this.questions.length) {
          this.button = 0
        }
      }
      console.log(this.score)
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 1rem;
}
.images {
  width: 80%;
  height: 80%;
}
.imagewrap {
  width: 90%;
  height: auto;
}
.header {
  width: 100%;
  height: 1rem;
  background-color: #6495ed;
  color: #fff;
  font-size: 0.45rem;
  line-height: 1rem;
  text-align: center;
}
.topic {
  margin-top: 0.3rem;
  padding: 0 0.5rem;
  .topic-text {
    font-size: 0.46rem;
  }
}
.topic-list {
  margin-top: 0.3rem;
  font-size: 0.44rem;
  line-height: 0.8rem;
  li {
    list-style: none;
    .el-radio {
      white-space: pre-wrap;
    }
  }
  .el-checkbox.is-bordered + .el-checkbox.is-bordered {
    margin-left: 0;
  }
  .el-checkbox + .el-checkbox {
    margin-left: 0;
  }
  .el-radio,
  .el-checkbox {
    width: 100%;
    height: auto;
    padding: 0.4rem;
    margin: 0.2rem 0;
  }
}
.el-radio__label {
      white-space: pre-wrap;
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
  font-size: 0.4rem;
  line-height: 1.2rem;
}
</style>
