<template>
  <div class="submit">
    <div class="submit-input">
      <label class="submit-input-info">您的姓名 </label>
      <input type="text" class="input"/>
      <label class="submit-input-info">请选择您的信息 </label>
      <select class="input">
        <option selected hidden disabled value="">请选择类型</option>
        <option>1</option>
        <option>2</option>
      </select>
      <label class="submit-input-info">您的电话 </label>
      <input type="tel" class="input"/>
    </div>
    <p class="prompt">提交查看答案解析和排名</p>
    <div class="btn">
      <button class="btn-back">上一页</button>
      <button class="btn-submit">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'submit'
  }
</script>

<style scoped lang="scss">
  .submit-input {
    padding-left: 0.5rem;
  }

  .submit-input-info {
    font-size: 0.5rem;

  }

  label.submit-input-info:after {
    content: '* ';
    color: red;
  }

  .input {
    width: 9rem;
    height: 1.2rem;
    border-radius: 0.3rem;
    border: 0.05rem solid #ededed;
  }
  .prompt{
    font-size: 0.4rem;
    color: red;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
  }
  .btn{
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    .btn-back {
      height: 1.5rem;
      width: 4rem;
      font-size: 0.5rem;
      border: none;
      border-radius: 0.3rem;
    }
    .btn-submit {
      height: 1.5rem;
      width: 4rem;
      font-size: 0.5rem;
      color: #fff;
      background-color: #2571fb;
      border: none;
      border-radius: 0.3rem;
    }
  }
</style>
