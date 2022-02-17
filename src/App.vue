<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  margin: 0px;
  padding: 0px;
  -webkit-overflow-scrolling: touch;
  .van-picker__cancel{
  color: #AFB1B3;
  }
  .van-picker__confirm{
    color: #0CB398;
  }
}
html,body{
  margin: 0px;
  padding: 0px;
}

</style>
