<template>
  <div id="app">
    <div class="w-100">
      <div id="nav" class="row justify-content-end">
        <router-link class="btn" to="/">Home</router-link> |
        <router-link class="btn" to="/about">About</router-link>
        <router-link class="btn" to="/releases">Releases</router-link>
        <router-link class="btn" to="/contacts">Contacts</router-link>
      </div>
      <router-view class="row" />
      <footer class="d-flex justify-content-start">
        <a
          class="btn text-white"
          href="https://t.me/svora_vkusovshina"
          target="_blank"
        >
          telegram
        </a>
        <a
          class="btn text-white"
          href="https://www.instagram.com/mestnostishere/"
          target="_blank"
        >
          instagram
        </a>
        <a
          class="btn text-white"
          href="https://mestnost.bandcamp.com"
          target="_blank"
        >
          bandcamp
        </a>
      </footer>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'Cocomat';
  src: url('~@/assets/fonts/Cocomat.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "DroidSerif";
  src: url('~@/assets/fonts/Cocomat-Bold.ttf');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "DroidSerif";
    src: url('~@/assets/fonts/Cocomat-UltraLight.ttf');
  font-weight: lighter;
  font-style: normal;
}

body {
  min-height: 100vh;
  margin: 0;
  overflow: hidden; /* Hide scrollbars */
}

#app {
  font-family: Cocomat;
  font-weight: normal;
  letter-spacing: 0.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('~@/assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #f5fafa;
  font-size: 2em;
}

#nav a.router-link-exact-active {
  color: #91a79d;
}

.button {
  margin: 8px;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 16px;
}

footer a.btn {
  font-size: 1.5em;
}
</style>
