<template>
    <div class="end">
      <p v-bind="scoreData()">测试结束，你的得分是{{score}}分</p>
    </div>
</template>

<script>
  import bus from '../../assets/bus'
  export default {
    name: 'end',
    data(){
      return{
        score:0
      }
    },
    created(){

        this.bus.on('change', function (data) {
          data=this.score
        })

    }
  }
</script>

<style scoped>
p{
  color: #333;
}
</style>
