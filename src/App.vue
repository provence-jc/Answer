<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    ;(function() {
      if (
        typeof WeixinJSBridge === 'object' &&
        typeof WeixinJSBridge.invoke === 'function'
      ) {
        handleFontSize()
      } else {
        document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
      }
      function handleFontSize() {
        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function() {
          WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
        })
      }
    })()
    var html = document.querySelector('html')
    html.style.fontSize = document.documentElement.clientWidth / 10 + 'px'
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  /* IOS禁止微信调整字体大小 */
  -webkit-text-size-adjust: 100% !important;
}
</style>
