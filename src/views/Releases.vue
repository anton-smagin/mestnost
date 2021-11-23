<template>
  <div class="releases">
    <div class="container">
      <div class="row p-5">
        <template v-for="release in releases" >
          <div
            class="col-md-6 col-xs-12 sketch align-items-center"
            @click="openReleasePage(release.name)"
            :key="`${release.name}.sketch`"
          >
            <router-link class="btn " :to="`/${release.name}`">
                <p-5-sketch
                  :image-title="`${release.image}`"
                  class="p5-sketch"
                />
                <div class="text-white" :key="`${release.name}.description`">
                  <p class="description">{{ release.artistName }}</p>
                  <p class="description">{{ release.releaseName }}</p>
                </div>
            </router-link>
          </div>
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
       {
         name: 'releases/AnderdogSleepParalysis',
         artistName: 'Anderdog',
         releaseName: 'Sleep Paralysis',
         image: 'anderdog',
       },
       {
         name: 'releases/KoMaRealFace',
         artistName: 'Ko+Ma',
         releaseName: '-',
         image: 'koma',
        },
        {
         name: 'releases/AmbidextrousErrorism',
         artistName: 'Ambidextrous',
         releaseName: 'Errorism',
         image: 'ambidextrous_cassete_1',
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
    font-family: 'Acrom';
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #91a79d;
    }
  }

  .sketch {
    width: 80%;
  }
</style>
