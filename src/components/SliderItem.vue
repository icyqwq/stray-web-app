<template>
	<div
	  @click="selected = !selected"
	  :class="{ selected: selected }"
	  class="slider-item"
	  v-click-outside="deselect"
	>
	  <div class="content">
		<div class="title">{{ title }}</div>
		<v-slider
		  class="slider"
		  v-model="sliderValue"
		  :color="selected ? 'black' : 'white'"
		  :thumb-color="selected ? 'black' : 'white'"
		></v-slider>
	  </div>
	</div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { ClickOutside } from 'vuetify/directives';
  
  export default {
	directives: {
	  ClickOutside
	},
	props: {
	  title: {
		type: String,
		required: true
	  }
	},
	setup() {
	  const selected = ref(false);
	  const sliderValue = ref(0);
  
	  function deselect() {
		selected.value = false;
	  }
  
	  return {
		selected,
		sliderValue,
		deselect
	  };
	}
  };
  </script>
  
  <style scoped>
  .slider-item {
	width: 100%;
	background: transparent;
	color: white;
	transition: all 0.3s;
	border: 2px solid transparent;
  }
  
  .slider-item.selected {
	background: white;
	color: black;
	border-color: #ffffff;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  
  .content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
  }
  
  .title {
	flex: 1;
	text-align: left;
	padding: 10px;
  }
  
  .slider {
	flex: 1;
	text-align: right;
	padding: 10px;
  }
  </style>