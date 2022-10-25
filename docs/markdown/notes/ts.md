# typescript
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


