<template>
  <div id="app">
    <div class="w-100">
      <div id="nav" class="row justify-content-end">
        <router-link class="btn btn-ligh" to="/">Home</router-link> |
        <router-link class="btn btn-ligh" to="/releases">Releases</router-link>
        <router-link class="btn btn-ligh" to="/contacts">Contacts</router-link>
      </div>
      <router-view class="row justify-content-center" />
    </div>
  </div>
</template>

<style>
body {
  min-height: 100vh;
  margin: 0;
  overflow: hidden; /* Hide scrollbars */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(rgb(10, 10, 10), rgb(59, 59, 59));
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #f5fafa;
}

#nav a.router-link-exact-active {
  color: #91a79d;
}

.button {
  margin: 8px;
}
</style>
