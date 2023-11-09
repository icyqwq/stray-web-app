<template>
	<div class="item-container" :class="{ 'hovered': hover }" @mouseover="hover = true" @mouseleave="hover = false" @touchstart="hover = true">
		<span class="item-title">{{ title }}</span>
		<select class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
			<!-- Show loading animation when options list is empty -->
			<option v-if="options.length === 0" disabled>Loading...</option>
			
			<!-- Show actual options when they are available -->
			<option v-else v-for="option in options" :key="option" :value="option">{{ option }}</option>
		</select>
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
		options: {
			type: Array,
			default: () => []
		}
	},
	emits: [
		'update:modelValue'
	],
	data() {
		return {
			hover: false,
		};
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
	line-height: 30px;
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