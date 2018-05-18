<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {
    name: 'sample-electron',
  };
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  html, body {
    width: 100%;
    height: 100%;
  }

  #app {
    height: 100%;
  }
</style>
