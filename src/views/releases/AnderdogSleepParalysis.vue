<template>
  <div class="anderdog-sleep-paralysis w-100">
    <div class="row mb-5">
      <div class="col-xs-12 col-md-6">
        <img
          src="static/anderdog.jpg"
          width="80%"
        />
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="mt-5">
          <h5 class="text-white release-name">Anderdog</h5>
          <h5 class="text-white"><span class="text-nowrap">Sleep Paralysis</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-md-4 mt-5 text-nowrap"
            >
              <font-awesome-icon :icon="['fab', link.icon]" class="text-white" />
              <a
                :href="link.link"
                class="text-white social"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-12">
        <img
          src="static/anderdog_face.jpg"
          alt="anderdog"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p><b>"Мне в Электростали живется нормально":</b> Как писать треки в духе WARP и вдохновляться самой большой в Европе свалкой.</p>
          <p>
            5 марта на новом лейбле «Местность» выйдет релиз Sleep Paralysis музыканта Дениса aka Anderdog.
            Это 10 треков, заряженных переживаниями сонного паралича и атмосферой индустриального города, где идет непрестанная борьба властей и эко-активистов.
          </p>
          <p>
            В интервью Денис рассказал, почему в Электростали все любят металл, в чем прелесть работы часовщиком, как быть андердогом, не напрягаясь, и отделять музыку от политики.
          </p>
        </div>
        <p class="description text-white text-center">
          <a href="https://t.me/mestnost_label/341">
            продолжение читайте в нашем телеграм канале...
          </a>
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4">
        <img
          src="static/anderdog_cassete_1.jpeg"
          alt="anderdog"
          width="80%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-3">
        <img
          src="static/anderdog_cassete_2.jpeg"
          alt="anderdog"
          width="80%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-3">
        <img
          src="static/anderdog_cassete_3.jpeg"
          alt="anderdog"
          width="80%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnderdogSleepParalysos',
  data() {
    return {
      links: [
        { name: 'Bandcamp', icon: 'bandcamp', link: 'https://bandcamp.com' },
        { name: 'Apple Music', icon: 'apple', link: 'https://apple.com' },
        { name: 'Spotify', icon: 'spotify', link: 'https://spotify.com' },
        { name: 'Yandex', icon: 'yandex', link: 'https://yandex.ru' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.anderdog-sleep-paralysis {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 20%;
  letter-spacing: 0.1em;
  line-height: 2em;
  font-family: 'Acrom';
}

.social {
  font-size: 1em;
}

.store-link {
  display: inline-block;
  margin-left: 0.1em;
  letter-spacing: 0.2em;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
}

.release-name {
  font-weight: bold;
}
</style>
