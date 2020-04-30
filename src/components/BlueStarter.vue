<template>
  <div class="wraper" v-bind:class="{fixed: fixed}">
    <div class="flexer" ref="bluebox" >
      Digitale<br>
      Deponie
    </div>
  </div>
</template>

<script>


export default {
  name: 'BlueStarter',
  props: {
    fixed: Boolean
  },
  methods: {
    handleScroll (event) {
      this.$refs.bluebox.style.marginTop = '-'+window.scrollY+'px';
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

}
</script>

<style scoped lang="scss">
.wraper {
  background: $lightblue;
  height: 30vw;
  width: 60vw;
  max-width: 80vw;
  max-height: 80vh;
  margin-left: 50vw;
  transform: translateX(-50%)  translateY(50%);
  position: absolute;
  padding: 15px;
  overflow: hidden;
  bottom: 50vh;
}
.flexer {
  position: relative;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 8.5vw;
  color: $black;
  line-height: 1.15;
}
.fixed {
  transform: translateX(-50%) translateY(-50%);
  position: fixed;
  margin-top: 50vh;
  bottom: unset;
}
</style>
