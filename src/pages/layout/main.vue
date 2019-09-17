<!-- main -->
<template>
  <div class="blockide-layout-container">
      <div class="blockide-area-comp">
          <comp-library></comp-library>
      </div>
      <div class="blockide-area-code">
          <code-area></code-area>
      </div>
  </div>
</template>

<script>
import CompLibrary from "@/components/CompLibrary"
import CodeArea from "@/components/CodeArea"
export default {
  data () {
    return {
    };
  },

  components: {
    CompLibrary,
    CodeArea
  },
  computed:{},
  methods: {},
  mounted(){},
}

</script>
<style lang='less'>
.blockide-layout-container{
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  .blockide-area-comp{
    width: 209px;
    border-right: 1px solid #2d333b;
    background: #20262e;
    display: flex;
    flex-direction: column;
    z-index: 20;
    color: #cfd0d2;
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    flex-shrink: 0;
  }
  .blockide-area-code{
    flex: 1;
  }
}
</style>