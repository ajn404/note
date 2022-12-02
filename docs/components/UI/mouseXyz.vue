<template>
	<div class="modifiers-presets">
		<XyzTransitionGroup tag="ul" class="presets-list" body-scroll-lock-ignore appear duration="auto"
			xyz="fade small stagger-1.5">
			<li class="preset-item__wrap" v-for="preset in computedPresets" :key="preset.title">
				<button class="preset-item example-wrap" @click="onPresetClick(preset)"
					@mouseenter="onPresetMouseEnter(preset)" @mouseleave="onPresetMouseLeave">
					<div class="preset-title">{{ preset.title }}</div>
					<div class="square xyz-nested" :class="{ [mode]: hoveredPreset === preset.title }"
						v-xyz="preset.utilities" :style="preset.style" @animationend="onPresetAnimationEnd"></div>
				</button>
			</li>
		</XyzTransitionGroup>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { XyzTransitionGroup } from '@animxyz/vue3'
export default defineComponent({
	name: 'XyzModifiersPresets',
	props: {
	},
	components: { XyzTransitionGroup },
	data() {
		return {
			hoveredPreset: null,
			toggled: false,
			toggleTimeout: null,
			presets: [
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
					title: "🌀 It's gone spiral!",
					variables: ["rotate-z: 1turn", "origin: center -200%", "duration: 2s", "scale-x: 0", "scale-y: 0"]
				},
				{
					title: "💫 Engage",
					variables: ["rotate-x: 90deg", "rotate-z: -180deg", "origin: -200%", "stagger: 0.1s", "duration: 0.75s", "perspective: 100px", "translate-z: 100px", "translate-y: 10vh"]
				}
			]
		}
	},
	computed: {
		mode() {
			return this.toggled ? 'xyz-in' : 'xyz-out'
		},
		computedPresets() {
			return this.presets.map((preset) => {
				const style = {}

				if (preset.variables) {
					preset.variables.forEach((variable) => {
						const [name, value] = variable.split(':')
						style[`--xyz-${name}`] = value.trim()
					})
				}

				return {
					...preset,
					style,
				}
			})
		},
	},
	methods: {
		clearToggleTimeout() {
			clearTimeout(this.toggleTimeout)
			this.toggleTimeout = null
		},
		onPresetClick(preset) {
			this.$emit('select-preset', preset)
		},
		onPresetMouseEnter(preset) {
			this.hoveredPreset = preset.title
		},
		onPresetMouseLeave() {
			this.hoveredPreset = null
			this.toggled = false
			this.clearToggleTimeout()
		},
		onPresetAnimationEnd() {
			this.clearToggleTimeout()
			this.toggleTimeout = setTimeout(() => {
				this.toggled = !this.toggled
			}, 500)
		},
	},
	beforeDestroy() {
		this.clearToggleTimeout()
	},
})
</script>

<style lang="scss" scoped>
@import '@styles/base.scss';
@import 'include-media/dist/_include-media';

.presets-list {
	padding: $sp-m;
	padding-right: 0;
	overflow-x: auto;
	display: flex;
	list-style: none;

	@include media('<tablet') {
		padding: $sp-s;
	}
}

.preset-item__wrap {
	padding-right: $sp-s;

	@include media('>=tablet') {
		&:last-child {
			padding-right: $sp-m;
		}
	}
}

.preset-item {
	position: relative;
	display: flex;
	flex-direction: column;
	flex-shrink: 0;
	align-items: stretch;
	height: 9rem;
	width: 14rem;
	box-shadow: inset 0 0 0 2px primary-color(800);
	border-radius: $br-xl;
	transition: box-shadow 0.2s $ease-in-out;

	@include media('<tablet') {
		height: 7rem;
		width: 12rem;
	}

	@include media('<phone') {
		height: auto;
		width: auto;
		min-width: 12rem;
	}

	.square {
		@include size(3.5rem);
		margin: auto;
		background-color: primary-color(200, 0.65);
		transition: background-color 0.2s $ease-in-out;

		@include media('<tablet') {
			@include size(2.5rem);
		}

		@include media('<phone') {
			display: none;
		}
	}

	&:hover,
	&:focus,
	&:active {
		box-shadow: inset 0 0 0 4px primary-color(700);

		.preset-title {
			color: primary-color(100);
		}

		.square {
			background-color: $cyan;
		}
	}
}

.preset-title {
	font-family: $font-stack-mono;
	padding: $sp-xs;
	line-height: 1;
	color: primary-color(300);
	transition: color 0.2s $ease-in-out;

	@include media('>=phone') {
		text-align: left;
		padding-bottom: 0;
	}
}
</style>
