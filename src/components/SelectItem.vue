<template>
	<div class="item-container" :class="{ 'hovered': hover }" @mouseover="hover = true" @mouseleave="hover = false"
		@touchstart="hover = true">
		<label class="item-title" :for="title">{{ title }}</label>
		<div class="options-item-container">
            <button @click="decrementIndex" class="arrow-button" :disabled="currentIndex === 0">
                <span class="mdi mdi-chevron-left"></span>
            </button>
            <span class="option-text">{{ currentOption }}</span>
            <button @click="incrementIndex" class="arrow-button" :disabled="currentIndex === options.length - 1">
                <span class="mdi mdi-chevron-right"></span>
            </button>
        </div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	props: {
		title: {
			type: String,
			default: "Default Title"
		},
		modelValue: {
			type: String,
			default: ""
		},
		options: {
			type: Array,
			default: () => []
		}
	},

	setup(props, { emit }) {
		const currentIndex = ref(0);

		if (!props.modelValue && props.options.length > 0) {
			emit('update:modelValue', props.options[0]['value']);
		}

		const currentOption = computed(() => {
			return props.options[currentIndex.value]['label'] || '';
		});

		const decrementIndex = () => {
			if (currentIndex.value > 0) {
				currentIndex.value--;
			}
		};

		const incrementIndex = () => {
			if (currentIndex.value < props.options.length - 1) {
				currentIndex.value++;
			}
		};

		return {
			currentIndex,
			currentOption,
			decrementIndex,
			incrementIndex
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
	},
	watch: {
		currentIndex(newValue) {
			this.$emit('update:modelValue', this.$props.options[this.currentIndex]['value']);
		}
	}
	
};
</script>

<style scoped>


.options-item-container {
	flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.arrow-button {
    background: none;
    border: none;
	color: var(--bg-color);
    cursor: pointer;
    padding: 0;
    font-size: 30px;
	-webkit-text-stroke: 2px var(--bg-color);
	overflow: hidden;
	margin-left: -10px;
	margin-right: -10px;
	flex-shrink: 0;
	transition: transform 0.1s;
}

.arrow-button:active {
    transform: translateY(5px);
}

.option-text {
	flex-grow: 1;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}


@media (orientation: portrait) {
	.item-container {
		flex-direction: column;
		align-items: flex-start;
	}

	.item-title {
		width: 100%;
		flex-basis: 100%;
		margin-bottom: 10px;
	}

	.options-item-container {
		width: 100%;
		flex-basis: 100%;
		margin-left: 0px;
	}
}
</style>
