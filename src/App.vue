<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

/* This is the starting state for entering */
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(10%);
  opacity: 0;
}

</style>