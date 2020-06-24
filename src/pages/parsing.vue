<template>
  <div class="container">
    <div class="title"><p>洛阳市洛龙区第1期答题活动</p></div>
    <div class="wrapper">
      <div class="wrap-title">
        <p>答题解析</p>
      </div>
      <div class="topic" v-for="(items, index) of test" :key="index">
        <p class="topic-top">第{{ items.id }}题</p>
        <p class="topic-text">{{ items.title }}</p>
        <ul class="topic-list" v-if="items.type === 1">
          <li>
            <el-radio v-model="items.userneed" label="A">{{
              items.options.A
            }}</el-radio>
            <div v-if="items.correct=='A'" class="topic-list-correct">正确</div>
          </li>
          <li>
            <el-radio v-model="items.userneed" label="B">{{
              items.options.B
            }}</el-radio>
            <div v-if="items.correct=='B'" class="topic-list-correct">正确</div>
          </li>
          <li>
            <el-radio v-model="items.userneed" label="C">{{
              items.options.C
            }}</el-radio>
            <div v-if="items.correct=='C'" class="topic-list-correct">正确</div>
          </li>
          <li>
            <el-radio v-model="items.userneed" label="D">{{
              items.options.D
            }}</el-radio>
            <div v-if="items.correct=='D'" class="topic-list-correct">正确</div>
          </li>
          您的答案是：{{items.userneed}}
          <div>
            答案解析{{items.analyze}}
          </div>

        </ul>
        <ul class="topic-list" v-if="items.type === 2">
          <li>
            <el-checkbox label="A">{{ items.options.A }}</el-checkbox>
            <div v-if="pk(items.correct,'A')" class="topic-list-correct">正确</div>
          </li>
          <li>
            <el-checkbox label="B">{{ items.options.B }}</el-checkbox>
            <div v-if="pk(items.correct,'B')" class="topic-list-correct">正确</div>
          </li>
          <li>
            <el-checkbox label="C">{{ items.options.C }}</el-checkbox>
            <div v-if="pk(items.correct,'C')" class="topic-list-correct">正确</div>
          </li>
          <li>
            <el-checkbox label="D">{{ items.options.D }}</el-checkbox>
            <div v-if="pk(items.correct,'D')" class="topic-list-correct">正确</div>
          </li>
          您的答案是：{{items.userneed}}
          <div>
            答案解析{{items.analyze}}
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'parsing',
  data () {
    return {
      time: 20, // 倒计时
      times: 0, // 答题计时
      score: 0,
      // title:'',
      // optines: {},
      // correct:''
      current: 1,
      test: [
        {
          id: 1,
          type: 1,
          title: '新中国国内最大的咸水湖是以下哪个湖泊---sad',
          options: {
            A: '青海湖asdfsadf',
            B: '纳木错',
            D: '鄱阳湖',
            C: '长白山天池'
          },
          userneed: 'A',
          correct: 'A',
          analyze:
            '纳木错和青海湖是咸水湖，青海湖更大些。其余两个选项是淡水湖，其中兴凯湖是目前中俄界湖。',
          score: 1,
          deleted_at: null,
          created_at: '2020-06-22 14:48:16',
          updated_at: '2020-06-22 10:04:28'
        },
        {
          id: 2,
          type: 2,
          title: '新中国国内最大的咸水湖是以下哪个湖泊',
          options: {
            A: '青海湖asdfsadf',
            B: '纳木错',
            D: '鄱阳湖',
            C: '长白山天池'
          },
          userneed: 'A',
          correct: 'AB',
          analyze:
            '纳木错和青海湖是咸水湖，青海湖更大些。其余两个选项是淡水湖，其中兴凯湖是目前中俄界湖。',
          score: 1,
          deleted_at: null,
          created_at: '2020-06-22 14:48:16',
          updated_at: '2020-06-22 10:04:28'
        },
        {
          id: 3,
          type: 1,
          title: '咸水湖是以下哪个湖泊',
          options: {
            A: '青海湖asdfsadf',
            B: '纳木错',
            D: '鄱阳湖',
            C: '长白山天池'
          },
          userneed: '',
          correct: 'ABC',
          analyze:
            '纳木错和青海湖是咸水湖，青海湖更大些。其余两个选项是淡水湖，其中兴凯湖是目前中俄界湖。',
          score: 1,
          deleted_at: null,
          created_at: '2020-06-22 14:48:16',
          updated_at: '2020-06-22 10:04:28'
        }
      ]
    }
  },
  methods: {
    pk (val, K) {
      if (val.indexOf(K) > -1) {
        return true
      } else {
        return false
      }
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
}
</style>
