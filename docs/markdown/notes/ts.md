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