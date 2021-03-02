<template>
  <div class="home h80">
    <div class="container-fluid h80">
      <div class="d-flex align-items-center h80">
        <div class="col-md-12">
          <h1 class="text-white logo w-100">МЕСТНОСТЬ</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
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
</style>
