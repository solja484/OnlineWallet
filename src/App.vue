<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
    src: local('Nunito Sans Regular'), local('NunitoSans-Regular'),
    url('assets/Fonts/NunitoSans-Regular.woff') format('woff'),
    url('assets/Fonts/NunitoSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'),
    url('assets/Fonts/NunitoSans-SemiBold.woff') format('woff'),
    url('assets/Fonts/NunitoSans-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src: local('Nunito Sans Bold'), local('NunitoSans-Bold'),
    url('assets/Fonts/NunitoSans-Bold.woff') format('woff'),
    url('assets/Fonts/NunitoSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: local('Nunito Sans ExtraBold'), local('NunitoSans-ExtraBold'),
    url('assets/Fonts/NunitoSans-ExtraBold.woff') format('woff'),
    url('assets/Fonts/NunitoSans-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito Sans';
    src: local('Nunito Sans Black'), local('NunitoSans-Black'),
    url('assets/Fonts/NunitoSans-Black.woff') format('woff'),
    url('assets/Fonts/NunitoSans-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }
*{
  font-family: 'Nunito Sans',serif;
}
</style>
