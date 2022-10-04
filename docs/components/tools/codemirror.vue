<template>
  <div class="codemirror-tool-box">
    <codemirror v-model="code" placeholder="在这里写代码" :style="{ padding: '10px 0' ,margin:'20px 0 0',maxHeight:'200px'}"
      :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady"
      @change="handelChange" />
    <div class="run">
      <button class="btn" @click="run">运行</button>
      <button class="btn" @click="clear">清空</button>
      <button class="btn" @click="refresh">刷新</button>
      <div class="result">
        <div contenteditable="true" class="run-result" v-html="codeRes">
        </div>
      </div>
    </div>

  </div>


</template>
  
<script>
//简易试炼场
import { defineComponent } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { ref, shallowRef, nextTick } from 'vue'
import { useGlobalCode } from '@scripts/store.common.ts'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'


export default defineComponent({
  components: {
    Codemirror
  },
  props: {
    codes: String
  },
  setup(props) {
    const store = useGlobalCode();
    const { globalCode, filteredCode } = storeToRefs(store);
    const extensions = [javascript(), oneDark];
    const router = useRouter();
    const demoCode = `[].forEach.call(document.querySelectorAll("a"), (a) => {
  a.style.outline ="5px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
  console.log(a.style.outline);
});`

    //input
    const code = ref(props.codes || filteredCode.value || globalCode.value || demoCode)
    // Codemirror EditorView instance ref
    const view = shallowRef()
    const res = ref(code.value);
    const codeRes = ref(null)
    const handleReady = (payload) => {
      view.value = payload.view
    }

    const handelChange = (e) => {
      res.value = e;
    }
    // let reWrite = console.log;
    console.reWriteLog = function () {
      let t = []
      for (let n = 0, o = arguments.length; n < o; n++) {
        let i = arguments[n];
        t.push(i)
      }
      codeRes.value = `${codeRes.value}${t.join("<br/>")}<br/>`;
      // reWrite.apply(console, arguments)
    }

    //output
    const run = () => {
      codeRes.value = "";
      try {
        if (!res.value) {
          codeRes.value = "不要偷懒哦,帅哥! "
          return;
        }
        //codeRes.value = eval(res.value)
        //eval=>new Function
        const template = res.value.replaceAll('console\.log', 'console\.reWriteLog');
        const func = new Function(`console.reWriteLog("运行成功啦! ");${template}`);
        func();
      }
      catch (err) {
        codeRes.value = `出错喽，帅哥！<br/>${err}`;
      }
    };

    const clear = () => {
      code.value = ""
      res.value = "";
      codeRes.value = "";
    };

    const refresh = () => { 
        router.go(0);
    };

    nextTick(() => {
      // run()
    })

    return {
      extensions,
      code,
      res,
      codeRes,
      handleReady,
      handelChange,
      run,
      clear,
      refresh
    }
  }
})
</script>

<style scoped lang="scss">
.codemirror-tool-box {
  display: flex;
  flex-direction: column;
}

.run {
  flex-grow: 1;
  overflow-y: scroll;

  .btn {
    border: none;
    padding: 5px;
    margin: 10px 20px 20px;
    color: #2a2a99;
    background-color: #aeddff;
    font-weight: bold;
    border-radius: 20%;
    width: 50px;
    height: 40px;
    cursor: pointer;
    transition: all 1s;

    &:hover {
      box-shadow: 10px 5px 5px #2a2a99;
    }
  }

  .result {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: scroll;

    .result-tag {
      color: black;

    }

    .run-result {
      padding: 5px;
      background-color: #282c34;
      background-image: linear-gradient(270deg, #999999, #001100);
      color: #98c379;
    }
  }
}
</style>