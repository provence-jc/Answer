<template>
  <div class="container">
    <div class="title"><p>洛阳市洛龙区第1期答题活动</p></div>
    <div class="wrapper">
      <div class="wrap-title">
        <p>答题排行榜</p>
      </div>
      <div class="ranking">
        <span class="rank-num"
          >1<span class="rank-name">张三</span
          ><span class="rank-tel">139****1234</span></span
        >
        <div class="rank-info">
          <p class="rank-score">100分</p>
          <p class="rank-time">总用时：222秒</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parsing"
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
      text-align: center;
    }
  }
  .ranking {
    height: 1.5rem;
    border-bottom: 0.02rem solid #f1f1f1;
    padding: 0 0.3rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rank-num {
      font-size: 0.4rem;
      color: #c4c4c4;
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
</style>
