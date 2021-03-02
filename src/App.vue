<template>
  <div id="app">
    <div class="w-100">
      <div id="nav" class="row justify-content-end">
        <div class="d-flex w-100 justify-content-end">
          <img
            class="hamburger d-block d-sm-none"
            src="~@/assets/white-hamburger.png"
            width="30px"
            height="30px"
            alt=""
            @click="menuShow = !menuShow"
          >
        </div>
        <transition name="fade">
          <div class="d-sm-none row" v-if="menuShow">
            <div class="col-sm-12" @click="menuShow = false">
              <router-link class="btn text-nowrap" to="/" >Главная</router-link>
            </div>
            <div class="col-sm-12" @click="menuShow = false">
              <router-link class="btn text-nowrap" to="/about" >О местности</router-link>
            </div>
            <div class="col-sm-12" @click="menuShow = false">
              <router-link class="btn text-nowrap" to="/releases">Релизы</router-link>
            </div>
            <div class="col-sm-12" @click="menuShow = false">
              <router-link class="btn text-nowrap" to="/contacts">Контакты</router-link>
            </div>
          </div>
        </transition>
        <div class="col-sm-2 d-none d-sm-block">
          <router-link class="btn text-nowrap px-2" to="/">Главная</router-link>
        </div>
        <div class="col-sm-3 d-none d-sm-block">
          <router-link class="btn text-nowrap px-2" to="/about">О местности</router-link>
        </div>
        <div class="col-sm-2 d-none d-sm-block">
          <router-link class="btn text-nowrap px-2" to="/releases">Релизы</router-link>
        </div>
        <div class="col-sm-2 d-none d-sm-block">
          <router-link class="btn text-nowrap px-2" to="/contacts">Контакты</router-link>
        </div>
      </div>
      <div class="h80">
        <div class="col-xs-12 h80">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      menuShow: false,
    }
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Cocomat';
  src: url('~@/assets/fonts/Cocomat.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Cocomat";
  src: url('~@/assets/fonts/Cocomat-Bold.ttf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Acrom";
    src: url('~@/assets/fonts/Acrom-Medium.otf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Acrom";
  src: url('~@/assets/fonts/Acrom-Regular.otf');
  font-weight: lighter;
  font-style: normal;
}

body {
  min-height: 100vh;
  margin: 0;
  background: url('~@/assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
  max-width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: Cocomat;
  font-weight: normal;
  letter-spacing: 0.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  min-height: 10vh;
}

#nav a {
  color: #f5fafa;
  font-size: 1em;
  font-weight: lighter;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.1em;
  }
}

#nav a.router-link-exact-active {
  color: #91a79d;
}

.hamburger {
  cursor: pointer;
}

.h80 {
  min-height: 80vh;
}

.button {
  margin: 8px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
