<template>
  <div class="releases">
    <div class="container">
      <p-5-sketch
        image-title="anderdog"
        class="p5-sketch justify-content-center align-items-center"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import P5Sketch from '@/components/P5Sketch.vue'

export default {
  name: 'Releases',
  components: {
    P5Sketch
  }
}
</script>
