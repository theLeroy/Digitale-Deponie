<template>
  <div class="navframe" v-bind:class="{On: On}">
    <div class="top"></div>
    <div class="sides left"></div>
    <div class="sides right"></div>
    <div class="btm"></div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Navframe',
  props: {
    On: Boolean
  }
}
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
    display: none;
}
.navframe {
  pointer-events: none;
  position: fixed;
  z-index: 99999999;
  width: 100%;
  height: 100%;
  * {
    transition: .8s;
    background-color: #fff;
    position: absolute;
  }
  .sides {
    width: 12px;
    height: 100%;
    transition-delay: .4s;
    pointer-events: none;
  }
  .top {
    height: 30px;
    width: 100%;
  }
  .left {
    left: 0px;
    top: 0px;
  }
  .right {
    right: 0px;
    top: 0px;
  }
  .btm {
    transition-delay: .4s;
    height: 12px;
    width: 100%;
    left: 0px;
    bottom: 0px;
    pointer-events: none;
  }
}
.On {
  transition: 1.2s;
  .left, .right {
    width: 0px;
    transition: 0.6s;
    transition-delay: .1s;
  }
  .btm {
    height: 0px;
    transition: 0.6s;
    transition-delay: .1s;
  }
  .top {
    height: 0px;
    transition: 1.2s;
    transition-delay: 0.5s;
  }
}
</style>
