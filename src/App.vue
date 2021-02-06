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

  @font-face {
    font-family: 'Nunito Sans';
    src: url('assets/Fonts/NunitoSans-Regular.eot');
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'),
    url('assets/Fonts/NunitoSans-Regular.woff') format('woff'),
    url('assets/Fonts/NunitoSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: url('assets/Fonts/NunitoSans-SemiBold.eot');
    src: local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'),
    url('assets/Fonts/NunitoSans-SemiBold.woff') format('woff'),
    url('assets/Fonts/NunitoSans-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src: url('assets/Fonts/NunitoSans-Bold.eot');
    src: local('Nunito Sans Bold'), local('NunitoSans-Bold'),
    url('assets/Fonts/NunitoSans-Bold.woff') format('woff'),
    url('assets/Fonts/NunitoSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: url('assets/Fonts/NunitoSans-ExtraBold.eot');
    src: local('Nunito Sans ExtraBold'), local('NunitoSans-ExtraBold'),
    url('assets/Fonts/NunitoSans-ExtraBold.woff') format('woff'),
    url('assets/Fonts/NunitoSans-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: url('assets/Fonts/NunitoSans-Black.eot');
    src: local('Nunito Sans Black'), local('NunitoSans-Black'),
    url('assets/Fonts/NunitoSans-Black.woff') format('woff'),
    url('assets/Fonts/NunitoSans-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  body{
    background: #FAFAFA!important;
  }
*{
  font-family: 'Nunito Sans';
  border-radius: 3px!important;
}
  a{
    font-family: 'Igra Sans',serif;
  }
</style>
