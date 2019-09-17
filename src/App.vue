<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
// window.domain="http://127.0.0.1:8080";
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background: #20262e;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #39464e;
  overflow: hidden;
}
#app {
}
</style>
