<template>
  <div class="base">
    <div class="nav-back">
      <router-link to="/">
        <i class="mdi mdi-chevron-left" style="font-size: xx-large;"></i>
        <span>SETTING</span>
      </router-link>
    </div>
    <SliderItem v-model="isSelected" title="SETTING" />
    <SliderItem v-model="isSelected" title="SETTING" />
  </div>
  
</template>
  
<script>
import SliderItem from '@/components/SliderItem.vue';

export default {
  data() {
    return {};
  },
  computed: {
    
  },
  components: {
    SliderItem,
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
}

.nav-back a{
  margin: 10px;
  font-size: large;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}
</style>