<template>
    <div>
      <button @click="fn">下一步</button>
    </div>
</template>

<script>
export default {
  name: 'parsing',
  methods: {
    fn () {
      this.$router.push('/submit')
    }
  }

}
</script>

<style scoped>

</style>
