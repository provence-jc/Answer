<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <p>答题剩余时间：{{time}}秒<span>用时:{{times}}秒</span></p>
      </div>
      <div class="topic" v-for="(items,index) of test" :key="index">
        <p class="topic-text" v-if="current===items.id">{{items.id}}.{{items.title}}</p>
        <ul class="topic-list" v-if="current===items.id" :scoreData="score">
          <li><input type="checkbox"><span class="topic-list-key">A</span>{{items.options.A}}</li>
          <li><input type="checkbox"><span class="topic-list-key">B</span>{{items.options.B}}</li>
          <li><input type="checkbox"><span class="topic-list-key">C</span>{{items.options.C}}</li>
          <li><input type="checkbox"><span class="topic-list-key">D</span>{{items.options.D}}</li>
        </ul>
      </div>
      <div class="clear"></div>
      <div class="btn">
        <button class="submit" @click="submitBtn">下一题</button></div>
      </div>
    </div>
</template>

<script>
  import bus from '../../assets/bus'
  export default {
    data () {
      return {
        time: 20, // 倒计时
        times:0,  // 答题计时
        score:0,
        // title:'',
        // optines: {},
        // correct:''
        current:1,
        test: [{
          "id": 1,
          "type": 1,
          "title": "新中国国内最大的咸水湖是以下哪个湖泊---sad",
          "options": {
            "A": "青海湖asdfsadf",
            "B": "纳木错",
            "D": "鄱阳湖",
            "C": "长白山天池",
          },
          "correct": "AB",
          "analyze": "纳木错和青海湖是咸水湖，青海湖更大些。其余两个选项是淡水湖，其中兴凯湖是目前中俄界湖。",
          "score": 1,
          "deleted_at": null,
          "created_at": "2020-06-22 14:48:16",
          "updated_at": "2020-06-22 10:04:28"
        },{
          "id": 2,
          "type": 1,
          "title": "新中国国内最大的咸水湖是以下哪个湖泊",
          "options": {
            "A": "青海湖asdfsadf",
            "B": "纳木错",
            "D": "鄱阳湖",
            "C": "长白山天池",
          },
          "correct": "A",
          "analyze": "纳木错和青海湖是咸水湖，青海湖更大些。其余两个选项是淡水湖，其中兴凯湖是目前中俄界湖。",
          "score": 1,
          "deleted_at": null,
          "created_at": "2020-06-22 14:48:16",
          "updated_at": "2020-06-22 10:04:28"
        },{
          "id": 3,
          "type": 1,
          "title": "咸水湖是以下哪个湖泊",
          "options": {
            "A": "青海湖asdfsadf",
            "B": "纳木错",
            "D": "鄱阳湖",
            "C": "长白山天池",
          },
          "correct": "ABC",
          "analyze": "纳木错和青海湖是咸水湖，青海湖更大些。其余两个选项是淡水湖，其中兴凯湖是目前中俄界湖。",
          "score": 1,
          "deleted_at": null,
          "created_at": "2020-06-22 14:48:16",
          "updated_at": "2020-06-22 10:04:28"
        }],
      }
    },
    created () {
      this.Countdown()
      this.timer()
    },
    methods: {
      Countdown () {
        var t = 20
        var timecount = setInterval(() => {
          t--
          this.time = t
          if (t < 1) {
            clearInterval(timecount)
          }
        }, 1000)
      },
      timer(){
        var t = 0
        var timecount = setInterval(() => {
          t++
          this.times = t
          if (t > 1000) {
            clearInterval(timecount)
          }
        }, 1000)
      },
      submitBtn(){
        // 未解决 刷新倒计时
        let input = document.querySelectorAll('input')
        let a = document.getElementsByClassName("topic-list-key");
        let n = input.length;
        var k = 0 ,j = 1;
        let currect = [...this.test[(this.current)-1].correct.slice('')];
        console.log(currect)
        for (var i=0;i < n;i++){
          if (input[i].checked){
            for (var m=0;m<currect.length;m++)
            if (a[i].innerHTML===currect[m]){
              k=k+j;
            }
          }
        }
        this.score += k;
        console.log(this.score)
        this.bus.$emit('change', this.score)
        this.current++
        if (this.current>this.test.length){
          this.$router.push('/submit')
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  .header {
    width: 10rem;
    height: 1rem;
    background-color: #6495ED;
    color: #fff;
    font-size: .5rem;
    line-height: 1rem;
    text-align: center;
  }
  .topic{
    margin-top: 0.3rem;
    padding: 0 .5rem;
    .topic-text{
      font-size: 0.6rem;
    }
  }
  .topic-list{
    margin-top: 0.3rem;
    font-size: 0.5rem;
    line-height: .8rem;
    li{
      list-style: none;
      .topic-list-key{
        display: inline-block;
        margin: 0 .3rem;
      }
    }
    input[type="checkbox"]{
      width: .5rem;
      height: .5rem;
    }
  }
  .clear{
    clear: both;
  }
  .btn{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .submit{
    width: 6rem;
    height: 1.2rem;
    background-color: #6495ED;
    color: #ffffff;
    border: none;
    border-radius: 0.1rem;
    font-size: 0.5rem;
  }
</style>
