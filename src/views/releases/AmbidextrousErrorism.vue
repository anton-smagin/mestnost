<template>
  <div class="ambidextrous-errorism w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img
          src="/static/ambidextrous_cassette_1.jpg"
          width="80%"
        />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ambidextrous</h5>
          <h5 class="text-white"><span class="text-nowrap">Errorism</span></h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-md-4 mt-5 text-nowrap"
            >
              <font-awesome-icon :icon="['fab', link.icon]" class="text-white" />
              <a
                :href="link.link"
                target="_blank"
                class="text-white social"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 mb-5">
        <img
          src="/static/ambidextrous_face.jpg"
          alt="ambidextrous"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Errorism – второй альбом музыканта Ника Завриева aka Ambidextrous, вышедший в 2001 году в формате CD на лейбле Shaped Harmonics. Западные ценители пикантного IDM сравнивали его с релизом BOLA – Soup 1998 года, поскольку для начала нулевых и той сухой экспериментальной электроники Errorism был крайне музыкален. «Хитросплетения ритмов, густые рифы Roland tb-303, мелодичность и изысканность басовых линий делают особо интересным этот IDM от музыканта из Москвы под ником Ambidextrous – на 12-й минуте вы уже захотите нажать repeat», <a href="https://igloomag.com/reviews/ambidextrous-errorism-shaped-harmonics-cd" target="_blank">писали</a> в 2001-м растроганные рецензенты.
          </p>
          <p>
            Спустя 20 лет Errorism выходит на лейбле «Местность» в формате кассеты – лоуфай даст новое прочтение работе, написанной на взлете цифровой культуры. Для юбилейного издания был сделан ремастеринг оригинального материала. На кассету попали несколько не опубликованных ранее бонус-треков, которые были записаны в период работы над альбомом Errorism. Кроме того релиз состоится и на виниле, на московском лейбле Sealt.
            Кассетный релиз Errorism открывает серию переизданий под названием «Местность Источники» – это фонотека культовых работ, повлиявших на ту или иную локальную сцену.
          </p>
        </div>
        <div class="col-md-6 offset-md-2">
          <iframe
            style="border: 0; width: 100%; height: 120px;"
            src="https://bandcamp.com/EmbeddedPlayer/album=2299107141/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://mestnost.bandcamp.com/album/errorism">Errorism by Ambidextrous</a>
          </iframe>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="/static/ambidextrous_cassette_1.jpg"
          alt="ambidextrous"
          width="80%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/ambidextrous_cassette_2.jpg"
          alt="ambidextrous"
          width="80%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="/static/ambidextrous_cassette_3.jpg"
          alt="ambidextrous"
          width="80%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmbidextrousErrorism',
  data() {
    return {
      links: [
        { name: 'Bandcamp', icon: 'bandcamp', link: 'https://mestnost.bandcamp.com/album/errorism' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.ambidextrous-errorism {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 15%;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  font-family: 'Acrom';
  text-align: left;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
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

.fill {
    min-height: 90vh;
    height: 100%;
}
</style>
