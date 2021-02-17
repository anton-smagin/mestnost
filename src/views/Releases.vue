<template>
  <div class="releases">
    <div class="container">
      <div class="row">
        <template v-for="release in releases">
          <p-5-sketch
            :key="release.name"
            image-title="anderdog"
            class="p5-sketch align-items-center col-md-3"
          />
          <div class="col-md-3 text-white" :key="release.name">
            <p
              v-for="text in release.description"
              :key="text"
              class="description"
            >
              {{ text }}
            </p>
          </div>
        </template>
      </div>
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
  },
  data() {
    return {
     releases: [
       {
        name: 'anderdog',
        description: ['Anderdog', 'Sleep Paralysis:', 'Если бы Aphex Twin родился в Электростали'],
      },
     ]
    }
  }
}
</script>

<style scoped>
  .description {
    font-size: 2em;
    font-style: bold;
  }
</style>
