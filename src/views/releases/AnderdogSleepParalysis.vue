<template>
  <div class="about">
    <div class="row mb-5">
      <div class="col-md-12">
        <h3 class="text-white">Anderdog - Sleep Paralysis</h3>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-12">
        <img
          src="static/anderdog.jpg"
          width="40%"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div
        v-for="link in links"
        class="col-md-3 mb-2"
        :key="link.name"
      >
        <a
          :href="link.link"
          class="text-white social"
        >
          {{ link.name }}
        </a>
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
        <p class="description text-white">
          "Мне в Электростали живется нормально": как писать треки в духе WARP и вдохновляться самой большой в Европе свалкой 5 марта на новом лейбле «Местность» выйдет релиз Sleep Paralysis музыканта Дениса aka Anderdog. Это 10 треков, заряженных переживаниями сонного паралича и атмосферой индустриального города, где идет непрестанная борьба властей и эко-активистов. В интервью Денис рассказал, почему в Электростали все любят металл, в чем прелесть работы часовщиком, как быть андердогом, не напрягаясь, и отделять музыку от политики.
        </p>
        <a class="description text-white" href="https://t.me/mestnost_label/341">
          продолжение читайте в нашем телеграм канале...
        </a>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-12">
        <img
          src="static/anderdog_cassete.jpg"
          alt="anderdog"
          width="50%"
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
        { name: 'apple', link: 'https://apple.com' },
        { name: 'spotify', link: 'https://spotify.com' },
        { name: 'bandcamp', link: 'https://bandcamp.com' },
        { name: 'yandex', link: 'https://yandex.ru' },
      ]
    }
  },
}
</script>

<style scoped>
h1 {
  color: white;
}

.description {
  margin: 0 20%;
  letter-spacing: 0.1em;
  line-height: 2em;
}
.social {
  font-size: 1em;
}
</style>
