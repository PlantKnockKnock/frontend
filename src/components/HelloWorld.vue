<template>
<div class = "Home">
  <h1>{{ msg }}</h1>
  <h4>어쩌고저쩌고</h4>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<style scoped>
div {
  font-weight: normal;
  color : #fff;
}
</style>
