<template>
  <div class="container">
    <div class="title"><p>洛阳市洛龙区第1期答题活动</p></div>
    <div
      class="wrapper"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="disabled"
      infinite-scroll-distance="10"
    >
      <!-- <div class="wrap-title">
        <p>答题排行榜</p>
      </div> -->
      <div class="userranktitle">您当前的排名</div>
      <div class="ranking">
        <span class="rank-num"
          >{{ ranksort }}<span class="rank-name">{{ lname }}先生</span
          ><span class="rank-tel">
            {{ tel.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2") }}
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
            >{{ item.lastname }}{{ item.gender === 1 ? "先生" : "女士" }}</span
          ><span class="rank-tel">{{
            item.phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
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
  name: "ranking",
  data() {
    return {
      data: null,
      list: null,
      listnum: 3, // 排行榜显示条数
      sublist: [], // 滚动加载后增加的数据
      lanme: null,
      tel: null,
      times: null,
      score: null,
      ranksort: 0, // 当前用户排名
      loading: false,
      noMore: false
    };
  },
  created() {
    this.data = JSON.parse(sessionStorage.getItem("ranklist")).data.data;
    this.list = this.data.list;
    this.lname = sessionStorage.getItem("lname");
    this.tel = sessionStorage.getItem("tel");
    this.times = sessionStorage.getItem("times");
    this.score = sessionStorage.getItem("score");
    this.ranksort = this.data.sort;
  },
  computed: {
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    // 滚动加载
    loadMore() {
      let addnum = 2; // 滚动加载条数
      if (this.listnum + addnum > this.list.length) {
        this.loading = false;
        this.noMore = true;
        return;
      }
      this.loading = true;
      setTimeout(() => {
        this.listnum = this.list.length;
        this.sublist = this.list.slice(this.listnum, this.listnum + addnum);
        this.list = this.list.concat(this.sublist);
        this.loading = false;
        return this.listnum;
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 20rem;
  overflow-y: auto;
  padding: 0.5rem;
  background-color: #409eff;
  .title p {
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
    background: url("../../assets/userrank.png") no-repeat center;
    background-size: 9rem 2.23rem;
    text-align: center;
    line-height: 2.2rem;
    font-size: 0.9rem;
  }
  .ranktitle {
    width: 9rem;
    height: 2.5rem;
    background: url("../../assets/rank.png") no-repeat center;
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
    }
    .rank-time {
      font-size: 0.4rem;
      line-height: 0.6rem;
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
  font-size: 0.5rem;
}
</style>
