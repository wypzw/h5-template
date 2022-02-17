<template>
  <div class="home">
    {{msg}}
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      msg:"h5模板"
    }
  },
}
</script>
<style>
  .home .van-button{
    border-radius:0px;
  }
</style>
<style lang="scss" scoped>
    .home{
      width: 750px;
      height: auto;
    }
</style>
