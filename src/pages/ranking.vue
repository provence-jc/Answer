<template>
  <div class="container">
    <div class="title"><p>洛阳市洛龙区第1期答题活动</p></div>
    <div class="wrapper">
      <!-- <div class="wrap-title">
        <p>答题排行榜</p>
      </div> -->
      <div class="userranktitle">您当前的排名</div>
      <div class="ranking">
        <span class="rank-num"
          >{{ ranksort }}<span class="rank-name">张先生</span
          ><span class="rank-tel">
            131****1234
          </span></span
        >
        <div class="rank-info">
          <p class="rank-score">50分</p>
          <p class="rank-time">总用时：222秒</p>
        </div>
      </div>
      <div class="ranktitle">排行榜</div>
      <div class="ranking" v-for="(item, index) in test.data.list" :key="index">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "parsing",
  data() {
    return {
      ranksort: 0,
      test: {
        code: 200,
        msg: "",
        data: {
          list: [
            {
              id: 12,
              lastname: "栗",
              firstname: "新",
              gender: 1,
              phone: "18568110663",
              score: 5,
              seconds: 1000,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "C",
                "6": "C",
                "7": "C"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 07:57:12",
              updated_at: "2020-06-24 07:57:12"
            },
            {
              id: 13,
              lastname: "栗",
              firstname: "新",
              gender: 1,
              phone: "18568110664",
              score: 4,
              seconds: 1000,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "C",
                "6": "C"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 07:58:02",
              updated_at: "2020-06-24 07:58:02"
            },
            {
              id: 14,
              lastname: "栗",
              firstname: "新",
              gender: 1,
              phone: "18568110665",
              score: 4,
              seconds: 1000,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "C",
                "6": "C"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 08:00:17",
              updated_at: "2020-06-24 08:00:17"
            },
            {
              id: 15,
              lastname: "栗",
              firstname: "新",
              gender: 1,
              phone: "18568110666",
              score: 4,
              seconds: 1000,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "C",
                "6": "C"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 08:00:39",
              updated_at: "2020-06-24 08:00:39"
            },
            {
              id: 8,
              lastname: "栗",
              firstname: "建新",
              gender: 1,
              phone: "18568110661",
              score: 3,
              seconds: 3,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "D"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 07:31:58",
              updated_at: "2020-06-24 07:31:58"
            },
            {
              id: 6,
              lastname: "栗",
              firstname: "二",
              gender: 1,
              phone: "18568110669",
              score: 3,
              seconds: 4,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "D"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 07:17:56",
              updated_at: "2020-06-24 07:17:56"
            },
            {
              id: 7,
              lastname: "栗",
              firstname: "三",
              gender: 1,
              phone: "18568110667",
              score: 3,
              seconds: 5,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "D"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 07:19:07",
              updated_at: "2020-06-24 07:19:07"
            },
            {
              id: 10,
              lastname: "栗",
              firstname: "新",
              gender: 1,
              phone: "18568110662",
              score: 3,
              seconds: 1000,
              roll: {
                "1": "A",
                "2": "CB",
                "5": "C"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 07:33:28",
              updated_at: "2020-06-24 07:33:28"
            },
            {
              id: 1,
              lastname: "栗",
              firstname: "一",
              gender: 1,
              phone: "18568110668",
              score: 2,
              seconds: 6,
              roll: {
                "1": "A",
                "2": "BC",
                "4": "D"
              },
              setup_id: 1,
              awards_id: null,
              receive_at: null,
              deleted_at: null,
              created_at: "2020-06-24 11:50:22",
              updated_at: "2020-06-24 11:50:23"
            }
          ],
          sort: 3
        }
      }
    };
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
  // background-color: #fff;
  margin-top: 0.6rem;
  border-radius: 0.1rem;
  // padding-bottom: 0.5rem;
  .userranktitle {
    width: 100%;
    height: 2.4rem;
    background: url("../../assets/userrank.png") no-repeat;
    background-size: 100% auto;
    text-align: center;
    line-height: 2.2rem;
    font-size: 0.9rem;
  }
  .ranktitle {
    width: 100%;
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
    border-bottom: 0.02rem solid #f1f1f1;
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
      width: 4rem;
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
</style>
