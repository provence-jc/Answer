<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    var html = document.querySelector("html");
    html.style.fontSize = document.documentElement.clientWidth / 10 + "px";
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
