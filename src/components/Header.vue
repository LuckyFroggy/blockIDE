<!-- 页头 -->
<template>
  <header class="blockide-header">
      <h1>blockIDE</h1>
      <nav>
          <div class="blockide-nav-item">
              <div class="blockide-nav-btn" @click="saveCode()">保存</div>
          </div>
      </nav>
      <ul class="blockide-settings">
          <li>
              退出
          </li>
      </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    saveCode() {
      // 保存
      let code = {
        html: this.$store.state.html,
        less: this.$store.state.less,
        js: this.$store.state.js
      };
      if (
        code.html.trim() === "" &&
        code.less.trim() === "" &&
        code.js.trim() === ""
      ) {
        //全为空禁止保存
        return;
      }
      this.$https
        .fetchPost("/api/save", code)
        .then(data => {

        }).catch(err => {
          console.log(err);
        });
      console.log("保存");
    }
  },
  mounted() {}
};
</script>
<style lang='less'>
.blockide-header {
  height: 60px;
  background: #1c2128;
  box-shadow: 0 0 5px rgba(28, 33, 40, 0);
  z-index: 100;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 12px;
  h1 {
  }
  nav {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 0 16px;
    .blockide-nav-item {
      flex-shrink: 0;
      .blockide-nav-btn {
        display: block;
        text-decoration: none;
        color: #fbfbfb;
        padding: 0 12px;
        cursor: pointer;
        background: transparent;
        border: none;
        height: 59px;
        line-height: 60px;
        &:hover {
          border-bottom: 1px solid #0089f5;
        }
      }
    }
  }
  .blockide-settings {
    display: flex;
    flex-flow: row nowrap;
    margin-left: auto;
    list-style: none;
  }
}
</style>