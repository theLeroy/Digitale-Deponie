<template>
  <div class="home">
    <div class="bluearea">

      <BlueStarter :fixed="fixed"/>
    </div>
    <div class="asd" ref="stoper">
    </div>
  </div>
</template>

<script>
import BlueStarter from '@/components/BlueStarter.vue'

export default {
  name: 'Home',
  components: {
    BlueStarter
  },
  data: function () {
    return {
      fixed: true
    }
  },
  methods: {
    handleScroll (event) {

        if(this.$refs.stoper.getBoundingClientRect().top < window.innerHeight) {
          this.fixed = false
        } else {
          this.fixed = true
        }
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
.home {
  width: 100%;
  height: 100%;
}
.bluearea {
  height: 1800px;
  width: 100%;
  background: $sandbraun;
  display: inline-block;
  position: relative;
}
.asd {
  height: 200vh;
  background-color: red;
}
.BlueStarter {
  background-color: $lightblue;
  width: 400px;
  height: 400px;
  position: fixed;
  margin-top: 200px;
  box-sizing: border-box;
top: 0;
}
</style>
