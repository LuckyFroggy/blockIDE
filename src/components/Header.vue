<!-- 页头 -->
<template>
  <header class="blockide-header">
      <h1>blockIDE</h1>
      <nav>

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
    name:"Header",
  data () {
    return {
    };
  },
components: {},
  computed:{},
  methods: {},
  mounted(){},
}

</script>
<style lang='less'>
    .blockide-header{
        height: 60px;
        background: #1c2128;
        box-shadow: 0 0 5px rgba(28,33,40,0);
        z-index: 100;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0 12px;
        h1{

        }
        nav{
            flex-shrink: 0;
            
        }
        .blockide-settings{
            display: flex;
            flex-flow: row nowrap;
            margin-left: auto;
            list-style: none;
        }
    }
</style>