


[[toc]]

# [docs](https://animxyz.com/docs)

## demo(click)
<div class='flex2'>
<pureColorCard xyz="fade up big" width='50%' class='xyz-in'></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" class='xyz-in'></pureColorCard>
<pureColorCard xyz="fade up big" class='xyz-in'></pureColorCard>
<pureColorCard xyz="fade up small" class='xyz-in'></pureColorCard>
</div>

## XyzTransition组件

<XyzTransition appear xyz="fade rotate-right ease-out-back">
    <pureColorCard width='60%'></pureColorCard>
</XyzTransition>

```vue
<XyzTransition appear xyz="fade rotate-right ease-out-back">
    <pureColorCard width='60%'></pureColorCard>
</XyzTransition>
```

<XyzTransition appear mode="out-in" xyz="flip-up out-flip-down duration-3 ease-out">
    <pureColorCard width='60%'></pureColorCard>
</XyzTransition>

```vue
<XyzTransition appear mode="out-in" xyz="flip-up out-flip-down duration-3 ease-out">
    <pureColorCard width='60%'></pureColorCard>
</XyzTransition>
```

### nested
<XyzTransition appear duration="auto"  xyz="fade up-100% duration-10">
<div class='flex2'>
<pureColorCard xyz="fade small stagger" width='40%' class='xyz-in'  v-for="index in 4" :key="index"></pureColorCard>
</div>
</XyzTransition>

```vue
<XyzTransition appear duration="auto"  xyz="fade up-100% duration-10">
<div class='flex2'>\
<pureColorCard xyz="fade small stagger" width='40%' class='xyz-in'  v-for="index in 4" :key="index"></pureColorCard>
</div>
</XyzTransition>
```

<ClientOnly>
<mouseXyz></mouseXyz>
</ClientOnly>