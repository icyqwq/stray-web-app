<template>
  <div class="base">
    <div class="nav-back">
      <router-link to="/">
        <i class="mdi mdi-chevron-left" style="font-size: 5vmax;"></i>
        <span style="font-size: 3vmax;">SETTING</span>
      </router-link>
    </div>
    <SliderItem :title="'SLIDER ITEM'" v-model="slider_value" @click="onClick"/>
    <SliderItem :title="'SLIDER ITEM2'" v-model="slider_value2" />
    <InputItem :title="'INPUT ITEM'" v-model="input_value" />
    <SelectItem :title="'SELECT ITEM'" v-model="sel_value" :options="options" />
    <CheckboxItem :title="'CHECKBOX ITEM'" v-model="check_value" />
  </div>
  
</template>
  
<script>
import SliderItem from '@/components/SliderItem.vue';
import InputItem from '@/components/InputItem.vue';
import SelectItem from '@/components/SelectItem.vue';
import CheckboxItem from '@/components/CheckboxItem.vue';

export default {
  data() {
    return {
      title: 'SETTING 1',
      slider_value: 50,
      slider_value2: 60,
      input_value: "",
      sel_value: "",
      check_value: true,
      options: [
        {
          value: 'value 1',
          label: 'label 1'
        },
        {
          value: 'value 2',
          label: 'label 2'
        },
        {
          value: 'value 3',
          label: 'label 3'
        },
        {
          value: 'value 4',
          label: 'label 4'
        },
        {
          value: 'value 5',
          label: 'label 5'
        },
      ]
    };
  },
  computed: {
    
  },
  components: {
    SliderItem,
    InputItem,
    SelectItem,
    CheckboxItem
  },
  methods: {
    onSliderChanged(e) {
      console.log('value = ' + e)
    }
  },
  watch: {
    sel_value(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    check_value(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    onClick() {
      console.log('onClick')
    }
  }
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
  position: relative;
  margin: 10px;
  font-size: large;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}

.nav-back:active {
    transform: translateY(5px);
}

@media (orientation: portrait) {
	.base {
    padding: 5vw;
  }
}

</style>