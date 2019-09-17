<!-- 风格一 -->
<template>
  <div class="grid_1">
      <div class="panel-v left" style="width: calc(43.9162% - 0.5px);">
        <div class="panel-h panel" style="height: calc(50% - 0.5px);">
            <div class="panel-wrap">
              <section class="windowLabelCont">
                HTML
              </section>
              <CodeEditor :codes="codeHtml" language="html" id="html" @onMounted="onMounted" @onCodeChange="onCodeChange"></CodeEditor>
            </div>
        </div>
        <div class="gutter gutter-vertical" style="height: 1px;"></div>
        <div class="panel-h panel" style="height: calc(50% - 0.5px);">
          <div class="panel-wrap">
            <section class="windowLabelCont">
                Vue
            </section>
            <CodeEditor :codes="codeJs" language="javascript" id="js" @onCodeChange="onCodeChange"></CodeEditor>
          </div>
        </div>
      </div>
      <div class="gutter gutter-horizontal" style="width: 1px;"></div>
      <div class="panel-v right" style="width: calc(56.0838% - 0.5px);">
        <div class="panel-h panel" style="height: calc(50% - 0.5px);">
          <div class="panel-wrap">
            <section class="windowLabelCont">
                CSS
            </section>
            <CodeEditor :codes="codeCss" language="less" id="less" @onCodeChange="onCodeChange"></CodeEditor>
          </div>
        </div>
        <div class="gutter gutter-vertical" style="height: 1px;"></div>
        <div class="panel-h panel resultsPanel" style="height: calc(50% - 0.5px);">
          <div class="panel-wrap">
            <iframe ref="previewFrame" id="previewFrame" name="previewFrame" src="http://127.0.0.1:7001/api/display" allow="midi *; geolocation *; microphone *; camera *; encrypted-media *;" sandbox="allow-top-navigation allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation" allowfullscreen allowpaymentrequest frameborder="0" ></iframe>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import CodeEditor from "@/components/CodeEditor.vue";
export default {
  data() {
    return {
      keys:'',
      codeHtml: `<div id="app">
    
</div>`,
      codeJs: `new Vue({
          el: "#app",
          data: {

          },
          methods: {
          
          }
        })`,
      codeCss: ``
    };
  },

  components: {
    CodeEditor
  },

  computed: {},

  mounted() {
   this.$store.commit('html',this.codeHtml);
   this.$store.commit('js',this.codeJs);
   this.$store.commit('less',this.codeCss);

    
  },

  methods: {
    onMounted(edit) {
      this.codeHtml = edit;
     
    },
    onCodeChange() {
      this.showPreview();
    },
    showPreview() {
      let _this = this;
      let params = {
        codeTree:{
          html: this.$store.state.html,
          less: this.$store.state.less,
          js: this.$store.state.js,
        },
        codeKey:this.$store.state.codeKey
      };
      this.$https
        .fetchPost("/api/show", params)
        .then(data => {
          console.log(data);
          _this.$refs.previewFrame.setAttribute(
            "src",
            `http://127.0.0.1:7001/api/display?key=${data.data.key}`
          );
          this.$store.commit('codeKey',data.data.key);//?key??state
          // _this.$refs.previewFrame.contentWindow.innerHtml=data.data;
          // _this.$refs.previewFrame.contentWindow.postMessage(
          //        {cmd:'getJson',view:data.data},"*");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang='less'>
.grid_1 {
  display: flex;
  flex-flow: row nowrap;
  .windowLabelCont {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    padding-left: 8px;
    color: #cfd0d2;
  }
}
</style>