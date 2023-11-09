<template>
	<div class="item-container" >
		<span class="item-title">{{ title }}</span>
		<span class="item-title" :style="{ color: valueColor}" style="text-align: right;">{{ value }}</span>
	</div>
</template>
  
<script>

export default {
	props: {
		title: {
			type: String,
			default: "Default Title"
		},
		value: {
			type: String,
			default: ""
		},
		valueColor: {  // New prop for the color
			type: String,
			default: "white"  // Default color is black
		}
	},
	data() {
		return {
			hover: false,
		};
	},
};
</script>
  
<style scoped>

</style>