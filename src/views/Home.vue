<template>
  <div class="home">
    <Navframe :On="fixed"/>

    <div id="blottr-plain-text"></div>
    <div class="bluearea">

      <BlueStarter :fixed="fixed"/>
    </div>
    <div class="stoper" ref="stoper">
      <div class="Navigation">
        <span>Ig</span>
        <span>Apfau</span>
        <span>Texte</span>
        <span>Biuder</span>
        <span>Kontakt</span>
      </div>
    </div>
  </div>
</template>

<script>
import BlueStarter from '@/components/BlueStarter.vue'
import Navframe from '@/components/Navframe.vue'

export default {
  name: 'Home',
  components: {
    BlueStarter,
    Navframe
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
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
.stoper {
  height: 200vh;
  background-color: $lightblue;
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
#blottr-plain-text {
  width: max-content;
  margin-top: 0px;
  position: fixed;
  z-index: 2000;
  cursor: pointer;
}
.Navigation {
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: super;
  font-family: "Oswald";
  span {
    text-align: center;
    margin: 20px;
    font-size: 3em;
    cursor: pointer;
  }
  span:hover {
    text-decoration: underline;

  }
}
</style>
