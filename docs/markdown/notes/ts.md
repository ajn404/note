[[toc]]
# typescript
## typescript in vue
props type
```vue
<script>
import { defineComponent } from 'vue';
import type {PropType} from 'vue';

type Resturant = {
  id:string
  people:Array<string>
  total:number
  anyThing:any  
}

export default defineComponent({
    props:{
      resturant:{
        type: Object as PropType<Resturant>,
        required: true
      }
    }
})

</script>
```

## advanced ttypescript

::: tip 
tsc ts.ts && node ts.js
:::

### 可选链

@[code](../../codeReference/ts01.ts)
编译后
@[code](../../codeReference/ts01.js)

### 断言和谓词

@[code](../../codeReference/ts02.ts)
编译后
@[code](../../codeReference/ts02.js)

### NonNullable
@[code](../../codeReference/ts03.ts)
编译后
@[code](../../codeReference/ts03.js)

### private 

@[code](../../codeReference/ts04.ts)
编译后
::: warning tsc ts04.ts报错
ts04.ts:7:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

7     get count(){
          ~~~~~

Found 1 error in ts04.ts:7
:::


::: tip 使用tsc ts04 -t es5
:::

  编译后
@[code](../../codeReference/ts04.js)

### closure闭包

@[code](../../codeReference/ts05.ts)
编译后
@[code](../../codeReference/ts05.js)

### readonly array type

@[code](../../codeReference/ts06.ts)
编译后
@[code](../../codeReference/ts06.js)
