




# [docs](https://animxyz.com/docs)

## demo(click)
<!-- <div class='flex2'>
<pureColorCard xyz="fade up big" width='50%' ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade up big" ></pureColorCard>
<pureColorCard xyz="fade up small" ></pureColorCard>
</div> -->

<div class='flex2'>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
<pureColorCard xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0" ></pureColorCard>
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

<XyzTransition appear xyz="fade rotate-right ease-out-back">
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
<pureColorCard xyz="fade small stagger" width='40%'   v-for="index in 4" :key="index"></pureColorCard>
</div>
</XyzTransition>

```vue
<XyzTransition appear duration="auto"  xyz="fade up-100% duration-10">
<div class='flex2'>\
<pureColorCard xyz="fade small stagger" width='40%'   v-for="index in 4" :key="index"></pureColorCard>
</div>
</XyzTransition>
```

<ClientOnly>
<mouseXyz
:presets='[
				{
					title: "🎓 Drop out",
					utilities: ["fade", "down-100%", "back-5"]
				},
				{
					title: "🌪 Spinny",
					utilities: ["fade", "down-5", "rotate-right-50%", "stagger"]
				},
				{
					title: "⤵️ Flippy",
					utilities: ["fade", "flip-up", "flip-left"]
				},
				{
					title: "💾 Floppy",
					utilities: ["fade", "front-3", "flip-down-50%", "duration-10", "stagger-5"]
				},
				{
					title: "🎈 Yoink!",
					utilities: ["stagger-2", "narrow-100%"], "variables": ["translate-y: -350%", "ease: cubic-bezier(0.5,-1.5,0.5,1.5)"]
				},
				{
					title: "📺 Click",
					utilities: ["duration-6", "short-100%", "wide-25%"]
				},
				{
					title: "🌀 It is gone spiral!",
					variables: ["rotate-z: 1turn", "origin: center -200%", "duration: 2s", "scale-x: 0", "scale-y: 0"]
				},
				{
					title: "💫 Engage",
					variables: ["rotate-x: 90deg", "rotate-z: -180deg", "origin: -200%", "stagger: 0.1s", "duration: 0.75s", "perspective: 100px", "translate-z: 100px", "translate-y: 10vh"]
				}
			]'
></mouseXyz>
</ClientOnly>

<objectification text="cards" class="pc-views"></objectification>

<ClientOnly>
<cards class="pc-views"></cards>
</CLientOnly>