<template>
  <div>
    <transition>
     <router-view/>
   </transition>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  created: () => console.log("start"),
  mounted() {
    window.addEventListener('load', () => {
      console.log("ende")
    })
},
}
</script>

<style lang="scss">
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}

//Reset css
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

@font-face {
  font-family: 'Archivo';
  src:  url('./assets/fonts/Archivo-Medium.ttf') format('ttf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Oswald';
  src:  url('./assets/fonts/Oswald-Bold.ttf') format('ttf');
  font-weight: 700;
  font-style: bold;
}
@font-face {
  font-family: 'Oswald';
  src:  url('./assets/fonts/Oswald-Regular.ttf') format('ttf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Oswald';
  src:  url('./assets/fonts/Oswald-Medium.ttf') format('ttf');
  font-weight: 500;
  font-style: medium;
}

* {
  box-sizing: border-box;
  font-family: 'Archivo', sans-serif;
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
::selection {
    background-color: $sandbraun;
    color: $black;
}

}
::-webkit-scrollbar {
    display: none;
}

body {
  // background-color: #12171D;
  padding: 0;
  color: rgb(37, 36, 36);
  margin: 0;
  font-family: 'Archivo', sans-serif;
  overflow-x: hidden;
  width: 100vw;
  background-color: $sandbraun;

}
html {
  overflow-x: hidden;
  width: 100vw;

}
h1 {
	font-size: 140pt;
	letter-spacing: 2.8px;
	line-height: 174px;
  font-weight: 900;
  @media screen and (max-width: 950px) {
    font-size: 80pt;
    line-height: 100px;
  }
  @media screen and (max-width: 500px) {
    font-size: 60pt;
    line-height: 80px;
  }
}
h2 {
	font-size: 60px;
	letter-spacing: 2.57px;
	line-height: 62px;
  @media screen and (max-width: 950px) {
    font-size: 40px;
  }

}
h3 {
  font-weight: 700;
	font-size: 37px;
	letter-spacing: -0.46px;
	line-height: 38px;
  @media screen and (max-width: 950px) {
    font-size: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
}
h4 {
	font-size: 24px;
	letter-spacing: -0.1px;
	line-height: 32px;
  @media screen and (max-width: 950px) {
    font-size: 20px;
    line-height: 1.5;
  }
}
h5 {
	font-size: 60px;
	letter-spacing: 2.57px;
	line-height: 1.2;
	text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  @media screen and (max-width: 950px) {
    font-size: 35pt;
  }
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
</style>
<style scoped lang="scss">
.Loadanimation {

  z-index: 1000000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  span {
    position: absolute;
    width: 50vw;
    height: 100vh;
    background: #ffffff;
    pointer-events: none;
  }
  #Loadanimationspan1 {
    animation: moveleft 2s;
    animation-delay: 1s;
    transition-timing-function: ease;
    animation-fill-mode: forwards;
  }
  #Loadanimationspan2 {
    animation: moveright 2s;
    animation-delay: 1s;
    margin-left: 50vw;
    transition-timing-function: ease;
    animation-fill-mode: forwards;
  }
  #Loadanimationspan2:after, #Loadanimationspan1:before {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 2px;
    border-radius: 500000px;
    margin-top: 50vh;
    transition-timing-function: ease;
    transform: translate(-50%, -50%);
    animation: open 1s;
    animation-fill-mode: forwards;
    height: 2px;
  }
  #Loadanimationspan1:before {
    transform: translate(50%, -50%);
    right: 0;
  }
}

@keyframes moveleft {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-101%);
  }
}
@keyframes moveright {
  0% {
    transform: translateX(-0%);
  }
  100% {
    transform: translateX(101%);
  }
}
@keyframes open {
  0% {
    height: 2px;
  }
  100% {
    height: 100vh;
  }
}

</style>
