<template>
	<div class="item-container" :class="{ 'hovered': hover }" @mouseover="hover = true" @mouseleave="hover = false"
		@touchstart="hover = true">
		<div v-if="isPortrait" style="display: flex; width: 100%; flex-basis: 100%; justify-content: space-between; ">
			<span class="item-title">{{ title }}</span>
			<span class="item-title" style="text-align: right;">{{ modelValue }}</span>
		</div>

		<input v-if="isPortrait" :id="title" type="range" class="slider" :value="modelValue" :min="min" :max="max"
			:step="step" @input="$emit('update:modelValue', Number($event.target.value))" @touchstart="onInput"/>

		<span v-if="!isPortrait" class="item-title">{{ title }}</span>

		<div v-if="!isPortrait" style="flex: 2; display: flex; align-items: center;">
			<input :id="title" type="range" class="slider" :value="modelValue" :min="min" :max="max" :step="step"
				@input="$emit('update:modelValue', Number($event.target.value))" />
			<span class="item-title" style="text-align: right; flex: 1;">{{ modelValue }}</span>
		</div>
	</div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
	props: {
		title: {
			type: String,
			default: "Default Title"
		},
		modelValue: {
			type: Number,
			default: 0
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		step: {
			type: Number,
			default: 1
		}
	},
	setup() {
		const isPortrait = ref(window.matchMedia("(orientation: portrait)").matches);

		const updateOrientation = () => {
			isPortrait.value = window.matchMedia("(orientation: portrait)").matches;
		};

		onMounted(() => {
			window.addEventListener('resize', updateOrientation);
			window.addEventListener('orientationchange', updateOrientation);
		});

		onUnmounted(() => {
			window.removeEventListener('resize', updateOrientation);
			window.removeEventListener('orientationchange', updateOrientation);
		});

		return {
			isPortrait
		};
	},
	mounted() {
		window.addEventListener('touchstart', this.releaseHover);
	},
	beforeDestroy() {
		window.removeEventListener('touchstart', this.releaseHover);
	},
	emits: [
		'update:modelValue'
	],
	watch: {
		hover(val) {

		}
	},
	data() {
		return {
			hover: false,
		};
	},
	methods: {
		releaseHover(e) {
			try {
				if (e.target.attributes[1].nodeValue != this.title) {
					this.hover = false
				}
			} catch (error) {
				this.hover = false
			}
		},
		onInput(e) {
			console.log(e)
		}
	},
};
</script>
  
<style scoped>
.slider {
	flex: 4;
	appearance: none;
	outline: none;
	background: transparent;
	height: 6px;
	/* margin-left: 10vw; */
	background-color: var(--bg-color);
}

.slider::-webkit-slider-thumb {
	appearance: none;
	width: 30px;
	height: 20px;
	background: var(--bg-color);
	cursor: pointer;
}

.slider::-moz-range-thumb {
	width: 20px;
	height: 20px;
	background: var(--bg-color);
	cursor: pointer;
}

.slider::-ms-thumb {
	width: 20px;
	height: 20px;
	background: var(--bg-color);
	cursor: pointer;
}

@media (orientation: portrait) {

	/* .item-container {
		flex-direction: column;
		align-items: flex-start;
	} */
	.item-title {

		/* width: 100%; */
		/* flex-basis: 100%; */
		margin-bottom: 10px;
	}

	.slider {
		width: 100%;
		flex-basis: 100%;
		margin-left: 0px;
	}

	.slider::-webkit-slider-thumb {
		width: 25px;
		height: 15px;
	}
}
</style>