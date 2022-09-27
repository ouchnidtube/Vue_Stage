<template>
  <header-top></header-top>
  <router-view/>
</template>

<script>
  import HeaderTop from './components/HeaderTop.vue';
 
  export default {
    name: 'App',
    components: {
      HeaderTop,
    }
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  overflow-x: hidden;
}  
</style>