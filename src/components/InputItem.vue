<template>
	<div class="container" :class="{ 'hovered': hover }" @mouseover="hover = true" @mouseleave="hover = false" @touchstart="hover = true">
		<span class="title">{{ title }}</span>
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
			if (e.target.attributes[1].nodeValue != this.title) {
				this.hover = false
			}
		},
	},
};
</script>
  
<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
	color: white;
	border: 5px solid transparent;
	transition: all 0.3s ease;
	--slider-color: white;
	--text-color: black;
	width: 100%;
	padding: 10px;
	flex-wrap: wrap;
}

.container.hovered {
	background-color: white;
	color: black;
	box-shadow: 0 0 10px white;
	--slider-color: black;
	--text-color: white;
}

.title {
	flex: 1;
	white-space: nowrap;
	flex-basis: 25%;
}

.input {
	flex: 4;
	appearance: none;
	outline: none;
	background: transparent;
	height: 30px;
	background-color: var(--slider-color);
	color: var(--text-color);
	font-family: 'Maza-Bold', sans-serif;
	font-size: 2vmax;
}

@media (orientation: portrait) {
	.container {
		flex-direction: column;
		align-items: flex-start;
	}
	.title {
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