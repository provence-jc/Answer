<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <!-- <p>答题剩余时间：{{time}}秒<span>用时:{{times}}秒</span></p> -->
        XX区答题活动
      </div>
      <div class="topic" v-for="(items, index) of test" :key="index">
        <p class="topic-text" v-if="current === items.id">
          {{ items.id }}.{{ items.title }}
        </p>
        <ul
          class="topic-list"
          v-if="current === items.id && items.type === 1"
          :scoreData="score"
        >
          <li>
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="A"
              border
              >A&nbsp;&nbsp;{{ items.options.A }}</el-radio
            >
          </li>
          <li>
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="B"
              border
              >B&nbsp;&nbsp;{{ items.options.B }}</el-radio
            >
          </li>
          <li>
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="C"
              border
              >C&nbsp;&nbsp;{{ items.options.C }}</el-radio
            >
          </li>
          <li>
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="D"
              border
              >D&nbsp;&nbsp;{{ items.options.D }}</el-radio
            >
          </li>
        </ul>
        <ul
          class="topic-list"
          v-if="current === items.id && items.type === 2"
          :scoreData="score"
        >
          <el-checkbox-group v-model="items.userneed" @change="answerChange">
            <li>
              <el-checkbox label="A" border
                >A {{ items.options.A }}</el-checkbox
              >
            </li>
            <li>
              <el-checkbox label="B" border
                >B {{ items.options.B }}</el-checkbox
              >
            </li>
            <li>
              <el-checkbox label="C" border
                >C {{ items.options.C }}</el-checkbox
              >
            </li>
            <li>
              <el-checkbox label="D" border
                >D {{ items.options.D }}</el-checkbox
              >
            </li>
          </el-checkbox-group>
        </ul>
        <ul
          class="topic-list"
          v-if="current === items.id && items.type === 3"
          :scoreData="score"
        >
          <li class="imagewrap">
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="A"
              border
              >A <img class="images" :src="items.options.A" alt=""
            /></el-radio>
          </li>
          <li class="imagewrap">
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="B"
              border
              >B <img class="images" :src="items.options.B" alt=""
            /></el-radio>
          </li>
          <li class="imagewrap">
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="C"
              border
              >C <img class="images" :src="items.options.C" alt=""
            /></el-radio>
          </li>
          <li class="imagewrap">
            <el-radio
              @change="answerChange"
              v-model="items.userneed"
              label="D"
              border
              >D <img class="images" :src="items.options.D" alt=""
            /></el-radio>
          </li>
        </ul>
      </div>
      <div class="btn">
        <button class="submit" @click="submitBtn">
          {{ button == 1 ? "下一题" : "提交" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import bus from '../../assets/bus'
export default {
  data() {
    return {
      time: 20, // 倒计时
      times: 0, // 答题计时
      score: 0,
      answer: 0,
      button: 1,
      // optines: {},
      // correct:''
      current: 1,
      test: [
        {
          id: 1,
          type: 1,
          title: "以下哪位明代人物不是军人--test",
          options: {
            A: "aa",
            B: "a",
            C: "a",
            D: "a"
          },
          correct: "C",
          analyze:
            "抗倭名将戚继光，袁崇焕和吴三桂都是崇祯年间镇守山海关边防的将领，魏忠贤是宦官。",
          score: 3,
          deleted_at: null,
          created_at: "2020-06-23 02:44:00",
          updated_at: "2020-06-23 07:16:40",
          userneed: []
        },
        {
          id: 2,
          type: 2,
          title: "地球最高峰是一下哪座山峰",
          options: {
            A: "乔戈里峰",
            B: "埃文森峰",
            C: "珠穆朗玛峰",
            D: "奥林匹斯峰"
          },
          correct: "BC",
          analyze:
            "乔戈里峰是我国另一座海拔八千米以上的高峰，奥林匹斯峰是火星最高峰",
          score: 2,
          deleted_at: null,
          created_at: "2020-06-22 14:48:16",
          updated_at: "2020-06-22 08:01:53",
          userneed: []
        },
        {
          id: 3,
          type: 3,
          title: "下面哪个是一幅地图",
          options: {
            A:
              "http://d.ifengimg.com/w50_h58_q70/x0.ifengimg.com/ucms/2020_21/F319365A850BF48FF65A59D0155C2CE3FBEC1C63_w50_h58.jpg",
            B:
              "http://d.ifengimg.com/w50_h58_q70/x0.ifengimg.com/ucms/2020_20/3DB17BDF1D4B7C8BF7BEE0E0642D025812B04446_w50_h58.png",
            C:
              "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1879585545,51626802&fm=26&gp=0.jpg",
            D:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo_-9LBmFHv_-QK-nLv5pK-j9C-96yLUkPqyI9XTX6TLeFGpF_&usqp=CAU"
          },
          correct: "B",
          analyze: "其余的图是佛像",
          score: 5,
          deleted_at: null,
          created_at: "2020-06-22 14:48:16",
          updated_at: "2020-06-23 03:40:14",
          userneed: []
        }
      ]
    };
  },
  created() {
    // 获取数据
    // var s = setInterval(() => {
    //   this.times++
    // }, 1000);
    this.$axios({
      method: "get",
      url: "http://oea.test:8080/send",
      data: ""
    })
      .then(response => {
        // 这里使用了ES6的语法
        console.log(response); // 请求成功返回的数据
      })
      .catch(error => {
        console.log(error); // 请求失败返回的数据
      });
  },
  methods: {
    answerChange(value) {
      this.answer = 1;
    },
    submitBtn() {
      if (this.button == 0) {
        // 提交操作
        // this.times  总时间
      }

      if (this.answer == 0) {
        this.$message("请选择答案");
        return;
      }

      this.answer = 0;
      if (this.test[this.current - 1].type == 2) {
        if (
          this.test[this.current - 1].correct ==
          this.test[this.current - 1].userneed.sort().join("")
        ) {
          this.score += this.test[this.current - 1].score;
        }
      } else {
        if (
          this.test[this.current - 1].correct ==
          this.test[this.current - 1].userneed
        ) {
          this.score += this.test[this.current - 1].score;
        }
      }

      this.current++;
      if (this.current > this.test.length) {
        this.$router.push("/parsing");
      }
      console.log(this.current);

      if (this.current + 1 > this.test.length) {
        this.button = 0;
      }
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
    // border: 0.03rem solid #ededed;
    // border-radius: 0.1rem;
    // padding: 0.2rem;
    // margin: 0.5rem 0;
    .el-radio,
    .el-checkbox {
      width: 100%;
      height: auto;
      padding: 0.4rem;
      margin: 0.2rem 0;
    }
  }
  input[type="checkbox"] {
    width: 0.5rem;
    height: 0.5rem;
  }
}
.clear {
  clear: both;
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
