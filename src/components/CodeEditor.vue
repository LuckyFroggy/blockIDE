<!-- 代码编辑器 -->
<template>
  <div class="code-part" :id="id" :ref="id" style="height:100%;"></div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.main.js";
export default {
  name: "CodeEditor",
  data() {
    return {
      num:0,
      editors:null
    };
  },
  props: {
    codes: {
      type: String,
      default: ""
    },
    id: {
      type: String
    },
    language: {
      type: String,
      default: function() {
        return "html";
      }
    },
    editorOptions: {
      type: Object,
      default: function() {
        return {
          fontSize: "14",
          lineNumbers: "on",
          lineNumbersMinChars: 3,
          lineDecorationsWidth: 6,
          autoClosingBrackets: "always",
          autoClosingOvertype: "always",
          autoClosingQuotes: "always",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          automaticLayout: true,
          theme: "vs-dark"
        };
      }
    }
  },
  components: {},

  computed: {},

  mounted() {
    //   console.log(this.$monaco);
    this.initEditor();
  },

  methods: {
    initEditor() {
      let self = this;

      this.$nextTick(() => {
        self.editors = monaco.editor.create(self.$refs[this.id], {
          ...self.editorOptions,
          value: self.codes,
          language: self.language,
        });
        //   self.$emit("onMounted", editors); //编辑器创建完成回调
        self.editors.onKeyUp((event)=>{
          self.throttle(self.resizehandler, window, 500);
        });
        
      });
    },
    resizehandler(){
      this.$store.commit(this.id, this.editors.getValue());
      this.$emit("onCodeChange");
    },
    throttle(method, context, delay) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function() {
            method.call(context);
        }, delay);
    }
  }
};
</script>
<style lang='less'>
.code-part {
  width: 100%;
  height: calc(100% - 40px);
}
</style>