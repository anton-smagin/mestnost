
<template>
  <div class="p5-template row justify-content-center">
    <vue-p5
      @preload="preload"
      @setup="setup"
      @draw="draw"
      @keypressed="keyPressed"
      @windowresized="windowResized"
    >
    </vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
import SimplexNoise from "simplex-noise";
export default {
  name: "p5-example",
  components: {
    "vue-p5": VueP5
  },
  props: {
    imageTitle: String,
  },
  data: () => ({
    lines: [],
    p5LogoImage: null,
    startTime: Date.now(),
    // store current time in data to force computed properties to update
    currentTime: Date.now(),
    noisePositionX: [0, 0, 0],
    noisePositionY: [0, 0, 0],
    noiseProgress: [0.001, 0.002, 0.003],
    noiseScale: 0.002,
    simplexNoise: new SimplexNoise(`${Math.random()}`),
    speedX: 1,
    speedY: 1,
  }),
  computed: {
    msSinceStart() {
      return this.currentTime - this.startTime;
    },
    blue() {
      return Math.floor(this.msSinceStart * 0.03) % 255;
    },
    p5LogoRotationAngle() {
      return this.msSinceStart * 0.0001 % Math.PI * 2;
    },
    side() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      return Math.min(width, height) * 0.4;
    },
  },
  methods: {
    preload(sketch) {
      this.image = sketch.loadImage(`static/${this.imageTitle}.jpg`);
    },
    setup(sketch) {
      sketch.createCanvas(this.side, this.side);
      this.image.resize(this.side, this.side);
    },
    draw(sketch) {
      this.currentTime = Date.now();
      this.image.loadPixels();
      let len = this.image.pixels.length;
      // this.speedX = sketch.map(sketch.mouseX, 0, sketch.width, -15, 15);
      // this.speedY = sketch.map(sketch.mouseY, 0, sketch.width, -15, 15);
      for (let i = 0; i < sketch.width; i+=2) {
        for (let j = 0; j < sketch.height; j+=2) {
          let m = i + j * this.image.width;
          let offset = this.warp(i, j, 0.000003 * this.msSinceStart / 1000, 615, sketch);
          offset = (m-parseInt(offset))%len * 4;
          this.image.set(
            i,
            j,
            sketch.color(
              this.image.pixels[offset],
              this.image.pixels[offset + 1],
              this.image.pixels[offset + 2]
            ),
          );
        }
      }
      this.image.updatePixels();
      sketch.image(this.image, 0, 0);
    },
    keyPressed({ keyCode }) {
      // 'g' key
      if (keyCode === 71) {
        this.toggleGreen();
      }
    },
    toggleRed() {
      this.red = 255 - this.red;
    },
    toggleGreen() {
      this.green = 255 - this.green;
    },
    pushLine(line) {
      let lines = this.lines;
      lines.push(line);
      this.lines = lines.slice(-100);
    },
    windowResized(sketch) {
      sketch.resizeCanvas(this.side, this.side);
    },
    warp(_x, _y, factor, n_range, sketch) {
      let n1 = this.simplexNoise.noise2D((_x+0.0) * factor, (_y+0.0) * factor) * n_range;
      let n2 = this.simplexNoise.noise2D((_x+5.2) * factor, (_y+1.3) * factor) * n_range;
      let q = sketch.createVector(n1, n2);

      let n3 = this.simplexNoise.noise2D(((_x + q.x * 4) + 1.7) * factor, ((_y + q.y * 4) + 9.2) * factor) * n_range;
      let n4 = this.simplexNoise.noise2D(((_x + q.x * 4) + 8.3) * factor, ((_y + q.y * 4) + 2.8) * factor) * n_range;
      let r = sketch.createVector(n3, n4);

      return this.simplexNoise.noise2D((_x + r.x * 4) * factor, (_y + r.y * 4) * factor) * n_range;
    }
  }
};
</script>
