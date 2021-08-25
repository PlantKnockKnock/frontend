<template>
  <div id="app">
    <sidebar></sidebar>
      <div id="content" class="content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style>
body {
  background-color:#222;
  padding-left : 100px;
}
</style>