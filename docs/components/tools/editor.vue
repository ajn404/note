<template>
  <div class="canvas-editor"></div>
</template>
<script lang="ts" setup>
import Editor, { RowFlex, EditorMode } from "@hufe921/canvas-editor";
import { nextTick } from "vue";
let instance;
nextTick(() => {
  let dom: HTMLDivElement | null = document.querySelector(".canvas-editor");
  if (dom)
    instance = new Editor(
      dom,
      {
        header: [
          {
            value: "Header",
            rowFlex: RowFlex.CENTER,
          },
        ],
        main: [
          {
            value: "Hello World",
          },
        ],
        footer: [
          {
            value: "canvas-editor",
            size: 12,
          },
        ],
      },
      {
        mode: EditorMode.EDIT,
      }
    );
  // 设置
  instance.command.executeMode("edit");
});
</script>
