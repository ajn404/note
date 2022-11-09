<template>
    <div>
        <div class="container">
            <span class="txt anim-text-flow">
                <span  v-for="item in txt">{{item}}</span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref } from 'vue'
const txt :any = ref([])
let s = "note for ecma , glsl , typescript , rust , leetcode , p5 , vtk , kaboom , three , hutao"
txt.value = s.split("")
</script>

<style lang="scss" scoped>
/*
 * Animation module with all animation code
 */
 .anim-text-flow,
.anim-text-flow-hover:hover {
  /*
   * Animation variables
   */
  $animationSteps: 20;
  $animationDuration: 50;
  $animationElement: span;
  $animationElementsCount: 100;
  $delayBetweenLetters: 0.2;

  /*
   * Elements settings
   */
  #{$animationElement} {
    animation-name: anim-text-flow-keys;
    animation-duration: #{$animationDuration}s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
  }

  /*
   * Keyframe loop
   */
  @keyframes anim-text-flow-keys {
    @for $i from 0 through $animationSteps {
      #{percentage($i * (1 / $animationSteps))} {
        color: hsla(random(365), 60, 60, 1);
      }
    }
  }

  /*
   * Element animation delay loop
   */
  $totalDelayTime: $animationElementsCount * $delayBetweenLetters;

  @for $i from 1 through $animationElementsCount {
    #{$animationElement}:nth-of-type(#{$i}) {
      animation-delay: #{($i * $delayBetweenLetters) - $totalDelayTime}s;
    }
  }
}

////////////////////////////
// DEMO CODE 
///////////////////////////



.txt {
  display: block;
  font-size: 1.9em;
  margin: 50px auto;
}

</style>