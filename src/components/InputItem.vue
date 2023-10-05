<template>
	<div class="item-container" :class="{ 'hovered': hover }" @mouseover="hover = true" @mouseleave="hover = false" @touchstart="hover = true">
		<span class="item-title">{{ title }}</span>
		<input :id="title" type="string" class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
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
			type: String,
			default: ""
		},
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
	},
};
</script>
  
<style scoped>

.input {
	flex: 2;
	appearance: none;
	outline: none;
	background: transparent;
	height: 30px;
	background-color: var(--bg-color);
	color: var(--text-color);
	font-family: 'Maza-Bold', sans-serif;
	font-size: 2vmax;
	border: none;
}

@media (orientation: portrait) {
	.item-container {
		flex-direction: column;
		align-items: flex-start;
		position: relative;
	}

	
	.item-title {
		width: 100%;
		flex-basis: 100%;
		margin-bottom: 10px;
	}

	.input {
		width: 100%;
		flex-basis: 100%;
		margin-left: 0px;
	}
}
</style>