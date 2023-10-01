<template>
  <div class="base">
    <div class="nav-back">
      <router-link to="/">
        <i class="mdi mdi-chevron-left" style="font-size: 5vmax;"></i>
        <span style="font-size: 3vmax;">SETTING</span>
      </router-link>
    </div>
    <SliderItem :title="'SLIDER ITEM'" v-model="slider_value" style="font-size: 2vmax;"/>
    <SliderItem :title="'SLIDER ITEM2'" v-model="slider_value2" style="font-size: 2vmax;"/>
    <InputItem :title="'INPUT ITEM'" v-model="input_value" style="font-size: 2vmax;"/>
  </div>
  
</template>
  
<script>
import SliderItem from '@/components/SliderItem.vue';
import InputItem from '@/components/InputItem.vue';

export default {
  data() {
    return {
      title: 'SETTING 1',
      slider_value: 50,
      slider_value2: 60,
      input_value: ""
    };
  },
  computed: {
    
  },
  components: {
    SliderItem,
    InputItem,
  },
  methods: {
    onSliderChanged(e) {
      console.log('value = ' + e)
    }
  },
  watch: {
    slider_value(newVal, oldVal) {

    },
  },
};
</script>

<style>

.base {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:left;
  padding: 10vw;
}

.nav-back a{
  margin: 10px;
  font-size: large;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}

@media (orientation: portrait) {
	.base {
    padding: 5vw;
  }
}

</style>