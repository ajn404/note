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

@[code](../../codeReference/typescript/ts01.ts)

:::details 编译后
@[code](../../codeReference/typescript/ts01.js)
:::

### 断言和谓词

@[code](../../codeReference/typescript/ts02.ts)

:::details 编译后
@[code](../../codeReference/typescript/ts02.js)
:::
### NonNullable
@[code](../../codeReference/typescript/ts03.ts)

:::details 编译后

@[code](../../codeReference/typescript/ts03.js)

:::

### private 

@[code](../../codeReference/typescript/ts04.ts)
编译后
::: warning tsc ts04.ts报错
```shell
ts04.ts:7:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

7     get count(){
          ~~~~~

Found 1 error in ts04.ts:7
```
:::


::: tip 使用tsc ts04 -t es5
实现private使用了weakMap
:::

:::details 编译后
@[code](../../codeReference/typescript/ts04.js)
:::

### closure闭包

@[code](../../codeReference/typescript/ts05.ts)

:::details 编译后
@[code](../../codeReference/typescript/ts05.js)
:::

### readonly array type

@[code](../../codeReference/typescript/ts06.ts)

:::details 编译后
@[code](../../codeReference/typescript/ts06.js)
:::

### readonly tuple type

@[code](../../codeReference/typescript/ts07.ts)
:::details 编译后
@[code](../../codeReference/typescript/ts07.js)
:::


### as const 

@[code](../../codeReference/typescript/ts08.ts)
上述运行时不会报错，但下面这种会
@[code](../../codeReference/typescript/ts09.ts)
as const用于数组
@[code](../../codeReference/typescript/ts08.ts)

use const asserts in enum-style obj
@[code](../../codeReference/typescript/ts11.ts)

:::details 编译后
@[code](../../codeReference/typescript/ts11.js)
:::

### 所谓NonNullable
`type NonNullable<T> = T & {};`
```ts
type NonNullable<T> = T extends null | undefined ? never:T;
type A = NonNullable<string>;
type B = NonNullable<null>;
```

应用  
```ts
type EmailRecipient = string | string[] | null | undefined;
type NonNullableEmailRecipient = NonNullable<EmailRecipient>;
//等同于
//type NonNullableEmailRecipient = string | string[]
```


