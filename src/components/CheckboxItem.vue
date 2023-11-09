<template>
	<div class="item-container" :class="{ 'hovered': hover }" @mouseover="hover = true" @mouseleave="hover = false"
		@touchstart="hover = true">
		<span class="item-title">{{ title }}</span>
		<div class="custom-checkbox">
			<input type="checkbox" id="checkbox" v-model="checked" />
			<label for="checkbox">
				<svg v-if="checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
					<rect width="10" height="10" fill="currentColor" />
					<rect x="10" y="10" width="10" height="10" fill="currentColor" />
					<rect x="20" y="20" width="10" height="10" fill="currentColor" />
					<rect x="10" y="30" width="10" height="10" fill="currentColor" />
					<rect x="0" y="40" width="10" height="10" fill="currentColor" />
					<rect x="30" y="10" width="10" height="10" fill="currentColor" />
					<rect x="40" width="10" height="10" fill="currentColor" />
					<rect x="30" y="30" width="10" height="10" fill="currentColor" />
					<rect x="40" y="40" width="10" height="10" fill="currentColor" />
				</svg>
			</label>
		</div>

	</div>
</template>
  
<script>

export default {
	props: {
		title: {
			type: String,
			default: "Default Title"
		},
		modelValue: {
			type: Boolean,
			default: false
		},
	},
	// mounted() {
	// 	window.addEventListener('touchstart', this.releaseHover);
	// },
	// beforeDestroy() {
	// 	window.removeEventListener('touchstart', this.releaseHover);
	// },
	emits: [
		'update:modelValue'
	],
	watch: {
		checked(newVal) {
			this.$emit('update:modelValue', newVal)
		}
	},
	data() {
		return {
			hover: false,
			checked: this.modelValue,
		};
	},
	setup(props, { emit }) {
		if (props.modelValue != true) {
			emit('update:modelValue', false);
		}
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
};
</script>
  
<style scoped>

.custom-checkbox {
	position: relative;
	display: inline-block;
}

.custom-checkbox input[type="checkbox"] {
	display: none;
}

.custom-checkbox label {
	display: block;
	width: 30px;
	height: 30px;
	border: 2px solid currentColor;
	position: relative;
	cursor: pointer;
}

.custom-checkbox svg {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	fill: currentColor;
	width: 20px;
	height: 20px;
}

.custom-checkbox label:active {
	color: grey;
}

.custom-checkbox label:active>svg {
	color: grey;
}
</style>