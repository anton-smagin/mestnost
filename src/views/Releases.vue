<template>
  <div class="releases">
    <div class="container">
      <div class="row p-5">
        <template v-for="release in releases" >
          <router-link :key="`${release.name}.sketch`" class="btn" to="/releases/AnderdogSleepParalysis">
            <div
              class="col-md-6 col-xs-12 sketch"
              @click="openReleasePage(release.name)"
            >
              <p-5-sketch
                image-title="anderdog"
                class="p5-sketch align-items-center"
              />
              <div class="text-white" :key="`${release.name}.description`">
                <p class="description">{{ release.artistName }}</p>
                <p class="description">{{ release.releaseName }}</p>
              </div>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import P5Sketch from '@/components/P5Sketch.vue'
// import ReleasePage from '@/components/ReleasePage.vue'

export default {
  name: 'Releases',
  components: {
    P5Sketch,
   //  ReleasePage
  },
  data() {
    return {
     releases: [
       { name: 'releases/AnderdogSleepParalysis', artistName: 'Anderdog', releaseName: 'Sleep Paralysis', },
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
    font-size: 1em;
    font-style: bold;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      color: #91a79d;
    }
  }
</style>
