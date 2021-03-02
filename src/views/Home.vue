<template>
  <div class="home">
    <div class="container-fluid h80">
      <div class="d-flex align-items-center h80">
        <div class="col-md-12">
          <h1 class="text-white logo w-100">МЕСТНОСТЬ</h1>
        </div>
      </div>
    </div>
        <footer class="d-flex justify-content-start">
      <a
        class="btn text-white"
        href="https://t.me/mestnost_label"
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
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  background: url('~@/assets/background.jpg') no-repeat center center fixed;
  background-size: cover;
}
.logo {
  font-size: 3em;
  font-weight: normal;
  letter-spacing: 1em;
  margin-bottom: 10%;
  @media only screen and (max-width: 768px) {
    font-size: 2em;
    letter-spacing: 0.1em;
  }
}

footer {
  min-height: 10vh;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 16px;
}

footer a.btn {
  font-size: 1em;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.1em;
  }
}
</style>
