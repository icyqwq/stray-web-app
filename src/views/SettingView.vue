<template>
  <div class="view-base">
    <div class="view-nav-back">
      <router-link to="/">
        <i class="mdi mdi-chevron-left" style="font-size: 5vmax;"></i>
        <span style="font-size: 3vmax;">SETTING</span>
      </router-link>
    </div>
    <SliderItem title="SHOCK SENSITIVITY" v-model="config.shock_sensitivity" />
    <TimeInputItem title="WAKE-UP TIME" v-model="config.wakeup_time" />
    <TimeInputItem title="SYSTEM SLEEP TIME" v-model="config.sys_sleep_time" />
    <DrawerSelectItem title="Wi-Fi NAME" v-model="config.wifi_ssid" @click="fetchWiFiSSID" :options="wifi_ssid_options"/>
    <InputItem title="Wi-Fi PASSWORD" v-model="config.wifi_pswd" />
    <TextItem title="Wi-Fi STATUS" :value="config.wifi_status" :valueColor="config.wifi_status_color"/>
    <SelectItem title="TIMEZONE" v-model="config.time_zone" :options="time_zone_options" />
    <input class="input-button" type="button" value="SUBMIT" />
  </div>
</template>
  
<script>

import SliderItem from '@/components/SliderItem.vue';
import InputItem from '@/components/InputItem.vue';
import SelectItem from '@/components/SelectItem.vue';
import CheckboxItem from '@/components/CheckboxItem.vue';
import TimeInputItem from '@/components/TimeInputItem.vue';
import DrawerSelectItem from '@/components/DrawerSelectItem.vue';
import TextItem from '@/components/TextItem.vue';
import { timeZoneOptions } from '@/stores/objects.js'


export default {
  data() {
    return {
      config: {
        shock_sensitivity: 50,
        wakeup_time: '00:00',
        sys_sleep_time: '00:00',
        wifi_ssid: '',
        wifi_pswd: '',
        wifi_status: 'NOT CONFIGURED',
        wifi_status_color: 'yellow',
        time_zone: '0',
      },
      time_zone_options: timeZoneOptions,
      wifi_ssid_options: [],
    };
  },
  components: {
    SliderItem,
    InputItem,
    SelectItem,
    CheckboxItem,
    TimeInputItem,
    DrawerSelectItem,
    TextItem
  },
  computed: {

  },
  watch: {
    
  },
  methods: {
    fetchWiFiSSID() {
      this.axios.get('/api/wifi/scan').then((response) => {
        console.log(response)
        if (response.data.status == "ok") {
          this.wifi_ssid_options = response.data.ssid;
        }
      })
      .catch(error => {
          console.error('Error fetching the WiFi SSIDs:', error);
          this.wifi_ssid_options = [];
        });
    },

    onWiFiEvent(e) {
      console.log("wifi ", e.data);
      if (e.data === 'scan done') {
        this.fetchWiFiSSID()
      }
    }
  },
  mounted() {
    this.fetchWiFiSSID()

    this.source = new EventSource('/events');

    this.source.addEventListener('wifi', this.onWiFiEvent, false);
  },
  beforeUnmount() {
    this.source.close();
    this.source.removeEventListener('wifi', this.onWiFiEvent, false);
  },
};
</script>

<style>

</style>