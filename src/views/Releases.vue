<template>
  <div class="releases">
    <div class="container">
      <div class="row p-5">
        <template v-for="release in releases" >
          <p-5-sketch
            :key="`${release.name}.sketch`"
            image-title="anderdog"
            class="p5-sketch align-items-center col-md-5"
          />
          <div class="col-md-5 text-white" :key="`${release.name}.description`">
            <p
              v-for="text in release.description"
              :key="text"
              class="description"
              @click="openReleasePage(release.name)"
            >
              {{ text }}
            </p>
          </div>
        </template>
      </div>
    </div>
    <release-page
      v-show="showReleasePage"
      :page="releasePage"
      @close="showReleasePage = false"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import P5Sketch from '@/components/P5Sketch.vue'
import ReleasePage from '@/components/ReleasePage.vue'

export default {
  name: 'Releases',
  components: {
    P5Sketch,
    ReleasePage
  },
  data() {
    return {
     releases: [
       {
        name: 'anderdog',
        description: ['Anderdog', 'Sleep Paralysis:', 'Если бы Aphex Twin родился в Электростали'],
      },
     ],
     releasePage: null,
     showReleasePage: false,
    }
  },
  methods: {
    openReleasePage(releaseName) {
      this.releasePage = releaseName;
      this.showReleasePage = true;
    }
  }
}
</script>

<style scoped lang="scss">
  .description {
    font-size: 2em;
    font-style: bold;
    cursor: pointer;
    &:hover {
      color: #91a79d;
    }
  }
</style>
