<template>
  <CountryPicker/>
  <router-view />
</template>

<script>
import CountryPicker from './views/CountryPicker.vue'
export default {
  name: 'App',
  components: {
    CountryPicker
  }
}
</script>

<style>
</style>
