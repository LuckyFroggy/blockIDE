<!--  -->
<template>
  <div id="editor">
    <template v-if="editor_mode=='grid_1'">
      <grid-classic></grid-classic>
    </template>
  </div>
</template>

<script>
import gridClassic from "@/components/codeGrids/CodeGrid1.vue";
export default {
  name: "CodeArea",
  data() {
    return {
      editor_mode: "grid_1"
    };
  },
  components: {
    gridClassic
  },
  computed: {},
  methods: {},
  mounted() {},
  destroyed() {
    this.$event.$off()
}
};
</script>
<style lang='less'>
#editor {
  height: calc(100vh - 60px);
  & > div {
    height: calc(100vh - 60px);
  }
  .gutter {
    position: relative;
    background: #2d333b;
  }
  .panel-h {
    overflow: auto;
    position: relative;
    word-break: break-word;
  }
  .panel-v {
    overflow: auto;
    position: relative;
    word-break: break-word;
  }
  .panel-wrap{
    padding-top:40px;
    height:100%;
  }
  .gutter-horizontal {
    cursor: ew-resize;
    height: 100%;
  }
  .gutter-vertical {
    cursor: ns-resize;
    height: 100%;
  }
  iframe{
    min-width: 100px;
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
  }
}
</style>