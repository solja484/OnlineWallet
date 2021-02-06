<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Menu from '@/components/Basic/Menu.vue'
  export default {
    name: "App",
    components: {
      Menu
    }
  }
</script>

<style>
  @font-face {
    font-family: 'Igra Sans';
    src: local('Igra Sans'), local('IgraSans'),
    url('assets/Fonts/IgraSans.woff') format('woff'),
    url('assets/Fonts/IgraSans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body{
    background: #FAFAFA!important;
  }
*{
  border-radius: 3px!important;
}
  a{
    font-family: 'Igra Sans',serif;
  }
</style>
