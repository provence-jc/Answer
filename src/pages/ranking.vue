<template>
  <div class="container">
    <div class="title"><p>{{title}}</p></div>
    <div
      class="wrapper"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="disabled"
      infinite-scroll-distance="10"
      >
      <div class="userranktitle">您当前的排名</div>
      <div class="ranking">
        <span class="rank-num"
          >{{ ranksort + 1 }}<span class="rank-name">{{ name }}{{ gender === 1 ? '先生' : '女士' }}</span
          ><span class="rank-tel">
            {{ tel }}
          </span></span
        >
        <div class="rank-info">
          <p class="rank-score">{{ score }}分</p>
          <p class="rank-time">总用时：{{ times }}秒</p>
        </div>
      </div>
      <div class="ranktitle">排行榜</div>
      <div class="ranking" v-for="(item, index) in list" :key="index">
        <span class="rank-num"
          >{{ index + 1
          }}<span class="rank-name"
            >{{ item.name }}{{ item.gender === 1 ? '先生' : '女士' }}</span
          ><span class="rank-tel">{{
            item.phone
          }}</span></span
        >
        <div class="rank-info">
          <p class="rank-score">{{ item.score }}分</p>
          <p class="rank-time">总用时：{{ item.seconds }}秒</p>
        </div>
      </div>
      <div
        class="loading"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(255, 255, 255,.5)"
        >
        <p class="nomore" v-if="noMore">没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ranking',
  data() {
    return {
      data: null,
      title: null,
      list: null,
      listnum: 6, // 排行榜显示条数
      sublist: [], // 滚动加载后增加的数据
      name: null,
      gender: null,
      tel: null,
      times: null,
      score: null,
      ranksort: 0, // 当前用户排名
      userdata: null,
      loading: false,
      noMore: false,
      // testname: "司马光",
      lastname: null
    }
  },
  created() {
    console.log(11)
    this.title = sessionStorage.getItem('title')

    var that = this
    if (sessionStorage.getItem('ranklist')) {
      console.log(22)
      that.data = JSON.parse(sessionStorage.getItem('ranklist'))
      that.getRankList()
    }
    if (sessionStorage.getItem('rankdata')) {
      console.log(11)
      that.data = JSON.parse(sessionStorage.getItem('rankdata'))
      that.getRankList()
    }
    console.log(this.data)
  },
  computed: {
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    getRankList(){
      this.info = sessionStorage.getItem('info');
      this.list = this.data.data.data.list
      this.ranksort = this.data.data.data.sort
      console.log(this.list);
      console.log(this.ranksort);
      let userdata = this.list[this.ranksort]
      console.log(userdata.name);
      let name = userdata.name
      this.name = this.getLastName(name)
      console.log(this.name);
      this.gender = userdata.gender
      this.tel = userdata.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
      this.times = userdata.seconds
      this.score = userdata.score
      this.list.forEach(item => {
        let lname = ''
        this.getLastName(item.name)
        // console.log(item.name);
        lname = this.lastname
        item.name = lname
        item.phone = item.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
        return this.list
      })
			},
    // 滚动加载
    loadMore() {
      let addnum = 5 // 滚动加载条数
      if (this.listnum + addnum > this.list.length) {
        this.loading = false
        this.noMore = true
        return
      }
      this.loading = true
      setTimeout(() => {
        this.listnum = this.list.length
        this.sublist = this.list.slice(this.listnum, this.listnum + addnum)
        this.list = this.list.concat(this.sublist)
        this.loading = false
        return this.listnum
      }, 2000)
    },
    getLastName(fullname) {
      let hyphenated = [
        '欧阳',
        '太史',
        '端木',
        '上官',
        '司马',
        '东方',
        '独孤',
        '南宫',
        '万俟',
        '闻人',
        '夏侯',
        '诸葛',
        '尉迟',
        '公羊',
        '赫连',
        '澹台',
        '皇甫',
        '宗政',
        '濮阳',
        '公冶',
        '太叔',
        '申屠',
        '公孙',
        '慕容',
        '仲孙',
        '钟离',
        '长孙',
        '宇文',
        '城池',
        '司徒',
        '鲜于',
        '司空',
        '汝嫣',
        '闾丘',
        '子车',
        '亓官',
        '司寇',
        '巫马',
        '公西',
        '颛孙',
        '壤驷',
        '公良',
        '漆雕',
        '乐正',
        '宰父',
        '谷梁',
        '拓跋',
        '夹谷',
        '轩辕',
        '令狐',
        '段干',
        '百里',
        '呼延',
        '东郭',
        '南门',
        '羊舌',
        '微生',
        '公户',
        '公玉',
        '公仪',
        '梁丘',
        '公仲',
        '公上',
        '公门',
        '公山',
        '公坚',
        '左丘',
        '公伯',
        '西门',
        '公祖',
        '第五',
        '公乘',
        '贯丘',
        '公皙',
        '南荣',
        '东里',
        '东宫',
        '仲长',
        '子书',
        '子桑',
        '即墨',
        '达奚',
        '褚师'
      ]
      // console.log(fullname);
      let hyset = new Set(hyphenated)
      let vLength = fullname.length
      // 前为姓,后为名
      let lastname = ''
      let firstname = ''
      if (vLength > 2) {
        var preTwoWords = fullname.substr(0, 2)
        // 取命名的前两个字,看是否在复姓库中
        if (hyset.has(preTwoWords)) {
          firstname = preTwoWords
          lastname = fullname.substr(2)
        } else {
          firstname = fullname.substr(0, 1)
          lastname = fullname.substr(1)
        }
      } else if (vLength === 2) {
        // 全名只有两个字时,以前一个为姓,后一下为名
        firstname = fullname.substr(0, 1)
        lastname = fullname.substr(1)
      } else {
        firstname = fullname
      }
      return (this.lastname = firstname)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 20rem;
  overflow-y: auto;
  padding: 0.5rem;
  background-color: #409eff;
  .title p {
    text-align: center;
    font-size: 0.5rem;
    color: #fff;
  }
}
.wrapper {
  height: 100%;
  overflow-y: auto;
  margin-top: 0.6rem;
  border-radius: 0.1rem;
  // padding-bottom: 0.5rem;
  .userranktitle {
    width: 9rem;
    height: 2.23rem;
    background: url('../../assets/userrank.png') no-repeat center;
    background-size: 9rem 2.23rem;
    text-align: center;
    line-height: 2.2rem;
    font-size: 0.9rem;
  }
  .ranktitle {
    width: 9rem;
    height: 2.5rem;
    background: url('../../assets/rank.png') no-repeat center;
    background-size: 70% auto;
    text-align: center;
    line-height: 2rem;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
  .wrap-title {
    height: 1.5rem;
    padding-left: 0.3rem;
    border-bottom: 0.02rem solid #f1f1f1;
    p {
      font-size: 0.4rem;
      line-height: 1.5rem;
      text-align: center;
    }
  }
  .ranking {
    height: 1.5rem;
    border-radius: 0.2rem;
    background-color: #fff;
    padding: 0 0.3rem;
    margin-top: 0.3rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rank-num {
      font-size: 0.4rem;
      // color: #c4c4c4;
      font-weight: 700;
    }
    .rank-name {
      font-size: 0.4rem;
      margin-left: 0.5rem;
    }
    .rank-tel {
      font-size: 0.4rem;
      margin-left: 0.5rem;
    }
    .rank-info {
      width: 3rem;
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .rank-score {
      width: 2rem;
      height: 0.6rem;
      background-color: #5490fe;
      border-radius: 0.2rem;
      font-size: 0.4rem;
      color: #fff;
      line-height: 0.6rem;
      text-align: center;
      margin-bottom: 0.1rem;
    }
    .rank-time {
      font-size: 0.4rem;
      line-height: 0.4rem;
    }
  }
}
.loading {
  height: 1.6rem;
  padding: 0 0.3rem;
  margin-top: 0.3rem;
  .el-icon-loading {
    color: #ffac00;
  }
}
.nomore {
  text-align: center;
  font-size: 0.4rem;
  color: #fff;
}
</style>
