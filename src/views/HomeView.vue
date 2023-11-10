<!-- Home.vue -->
<template>
  <div class="home">
    <div class="center-container">
      <h1 class="home-title">HOME</h1>
      <nav>
        <div class="nav-item" v-for="route in routes" :key="route.name">
          <router-link :to="route.path" active-class="active-link" exact-active-class="exact-active-link">{{ route.name
          }}</router-link>
        </div>
      </nav>
      <div style="margin-top: 10px; color: rgba(96, 96, 96, 1);"> {{ this.device_version }} </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      device_version: 'fetching...',
    };
  },
  computed: {
    routes() {
      return [
        // { path: '/', name: 'HOME' },
        { path: '/setting', name: 'SETTING' },
        { path: '/control', name: 'CONTROL' },
        { path: '/update', name: 'UPDATE' },
        { path: '/function', name: 'FUNCTION' },
        { path: '/affection', name: 'AFFECTION' },
      ];
    }
  },
  components: {
    
  },
  methods: {
      getDeviceVersion() {
        axios.get('/device_version').then((response) => {
          this.device_version = response.data;
        }).catch((error) => {
          this.device_version = 'n/a';
          console.log(error);
        });
      }
  },
  mounted() {
    this.getDeviceVersion();
  }
};
</script>

<style>
.home {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  /* background-color: rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
}

.center-container {
  display: flex;
  flex-direction: column;
}

.home-title {
  text-align: left;
  color: white;
  font-size: 3em;
  margin-bottom: 20px;
}

nav {
  display: flex;
  flex-direction: column;
}

.nav-item a {
  color: rgba(96, 96, 96, 1);
  text-decoration: none;
  position: relative;
  font-size: xx-large;
}

.nav-item a:hover,
.nav-item a.active-link,
.nav-item a.exact-active-link {
  color: white;
}

.nav-item a:hover::after,
.nav-item a.active-link::after,
.nav-item a.exact-active-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  opacity: 0;
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }

  to {
    width: 100%;
    opacity: 1;
  }
}
</style>