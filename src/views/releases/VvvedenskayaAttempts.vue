<template>
  <div class="microdog-east-side w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-xs-12 col-md-6 align-self-center">
        <img
          src="static/vvvedenskaya.jpg"
          width="80%"
        />
      </div>
      <div class="col-xs-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Vvvedenskaya</h5>
          <h5 class="text-white"><span>Attempts</span></h5>
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
          src="static/vvvedenskaya_face.jpg"
          alt="vvvedenskaya"
          width="70%"
          height="auto"
        />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Название attempts означает попытки по созданию музыкальных форм. Даже усилия, поскольку релиз давался трудно.
            Я считаю его в каком-то смысле вымученным, поскольку вокруг каждого трека было много сомнений – достойно ли это, чтобы считаться треком?
            Релиз окружает облако из преодолений, усилий и сомнений, именно поэтому он мне нравится, кажется мощным и бескомпромиссным.
          </p>
          <p>
            Трек Kabul появился после новостей о захвате власти талибаном в Афганистане. Я увидела в новостях, как люди бегут за последним самолетом,
            вылетающим из Кабула, чтобы сбежать из страны, и их не пускают на борт, они буквально цеплялись за крылья самолета. Это очень страшно, будто кошмарный сон.
            Я хотела выразить солидарность с этими людьми и записала этот трек.
          </p>
          <p>
            В целом в альбоме много эмбиента и жесткого бита. Своим дискомфортом это вызывает сопереживание. Альбом нельзя не заметить или поставить фоном, его надо слушать и переживать.
          </p>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 mt-5">
        <img
          src="static/vvvedenskaya_cassete_1.jpg"
          alt="vvedenskaya"
          width="80%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="static/vvvedenskaya_cassete_2.jpg"
          alt="vvedenskaya"
          width="80%"
          height="auto"
        />
      </div>
      <div class="col-md-4 mt-5">
        <img
          src="static/vvvedenskaya_cassete_3.jpg"
          alt="vvedenskaya"
          width="80%"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VvedenskayaAttempts',
  data() {
    return {
      links: [
        { name: 'Bandcamp', icon: 'bandcamp', link: 'https://mestnost.bandcamp.com/album/attempts' },
        { name: 'Apple Music', icon: 'apple', link: 'https://music.apple.com/album/attempts-ep/1620433720' },
        { name: 'Spotify', icon: 'spotify', link: 'https://open.spotify.com/album/1aucx2r8GR8n6vCH5XEb0I' },
        // { name: 'Yandex', icon: 'yandex', link: 'https://music.yandex.ru/album/21595457' },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.microdog-east-side {
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
