<template>
  <div class="releases">
    <div class="container">
      <div class="row p-5">
        <template v-for="release in releases">
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
        name: 'releases/KokokeiMimoza',
        artistName: 'Kokokei',
        releaseName: 'Mimoza',
        image: 'kokokei',
      },
      {
        name: 'releases/AnderdogAndreyLeto',
        artistName: 'Anderdog and Andrey Leto',
        releaseName: 'Romantic Selection',
        image: 'anderdogandreyleto',
      },
      {
        name: 'releases/MorakhLimes',
        artistName: 'Morakh',
        releaseName: 'Limes',
        image: 'morakh',
       },
      {
        name: 'releases/VvvedenskayaAttempts',
        artistName: 'Vvvedenskaya',
        releaseName: 'Attempts',
        image: 'vvvedenskaya',
       },
       {
        name: 'releases/MicrodogEastSide',
        artistName: 'Microdog',
        releaseName: 'East Side of the Breaktown',
        image: 'microdog',
       },
       {
        name: 'releases/AmbidextrousErrorism',
        artistName: 'Ambidextrous',
        releaseName: 'Errorism',
        image: 'ambidextrous_cassette_1',
       },
       {
          name: 'releases/KoMaRealFace',
          artistName: 'Ko+Ma',
          releaseName: '-',
          image: 'koma',
       },
       {
         name: 'releases/AnderdogSleepParalysis',
         artistName: 'Anderdog',
         releaseName: 'Sleep Paralysis',
         image: 'anderdog',
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

  .p-5 {
    justify-content: space-around;
  }

  .sketch {
    width: 80%;
  }
</style>
