<script setup>
import { ref, onUnmounted, nextTick, readonly } from "vue";
import { ElMessage, ElLoading } from "element-plus";
import { isClient } from "@vueuse/core";

//vue中使用P5的方式
import * as p5MainFunc from "@scripts/p5Fantastic";
import { allMethods } from "@scripts/p5FantasticMethod";

const props = defineProps({ type: String });

const funcs = {};
for (let p5MainFuncItem in p5MainFunc) {
  funcs[`${p5MainFuncItem}`] = p5MainFunc[`${p5MainFuncItem}`];
}

const singlePage = ref(props.type && funcs[props.type]);
const selectMethhod = ref([]);
let defaultMethod = props.type || "defaultFunc";

const methods = readonly(allMethods);
const fullList = ["quickSort", "bubbleSort", "rayCast", "lorenzSystem", "chenShiSystem"];
const soundList = ["delaySound"];

const loading = () => {
  return ElLoading.service({
    lock: true,
    text: "加载中",
    fullscreen: true,
    background: "rgba(0, 0, 0, 0.7)",
  });
};
let loadInstance;


let dom;
const clearFunc = () => {
  dom = document.querySelector("#p5-start")
  if (dom) dom.innerHTML = "";
};
const loadP5Func = () => {
  clearFunc();
  p5 = window['p5'];
  new p5(p5MainFunc[defaultMethod], "p5-start");
  window["p5DrawLoop"] = defaultMethod;
}

let p5;
if (isClient)
  nextTick(() => {
    if (soundList.includes(defaultMethod)) {
      if (p5?.Oscillator)
        loadP5Func()
      else {
        loadInstance = loading()
        import("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/addons/p5.sound.min.js").then(() => {
          loadInstance.close()
          loadP5Func()
        })
      }
    } else
      loadP5Func()



  });
onUnmounted(() => {
  window["p5DrawLoop"] = "";
});
const loadMethod = arr => {
  if (p5 && typeof p5 === "function") {
    let funcName = arr[arr.length - 1];
    window["p5DrawLoop"] = singlePage.value || funcName;
    //清除之前的
    clearFunc();
    //新建计算和canvas 
    dom = document.querySelector("#p5-start");

    if (fullList.includes(funcName) && dom) {
      dom.requestFullscreen().then(() => {
        new p5(funcs[funcName] || p5MainFunc.defaultFunc, "p5-start");
      });
    } else
      new p5(singlePage.value || funcs[funcName] || p5MainFunc.defaultFunc, "p5-start");
  }
}

const handleChange = (arr) => {
  try {
    loadMethod(arr)
  } catch (e) {
    ElMessage.warning("可能cdn的p5还没有加载好");
  }
};
</script>
<template>
  <div class="p5-start">
    <el-cascader-panel v-model="selectMethhod" :options="methods" @change="handleChange" v-if="!singlePage"
      class="cascader" size="large">
      <template #default="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf">({{ data.children.length }})</span>
      </template>
    </el-cascader-panel>
    <div id="p5-start" :class="[singlePage ? 'singlepage' : 'container']"></div>
  </div>
</template>
<style scoped lang="scss">
#p5-start {
  overflow: hidden;
  display: flex;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.p5-start {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  min-height: 80vh;
  max-height: 90vh;
}

@media screen and (max-width: 900px) {
  .p5-start {
    flex-direction: column;
  }
}

:deep(.cascader .el-cascader-menu) {
  color: var(--c-text) !important;
}

:deep(.el-cascader-menu__wrap.el-scrollbar__wrap) {
  height: 100%;
}
</style>
  