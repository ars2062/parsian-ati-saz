<template>
  <div :class="$style.slider">
    <img :id="currentImageId" :src="currentImage" :class="$style.mainImage" />
    <div :class="$style.allImages">
      <ul :class="$style.container">
        <li v-for="(image,index) in images" :key="image.id">
          <img
            :key="image.id"
            :src="image.src"
            :class="currentImageId===image.id?$style.active:''"
            @click="selectImage(index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  props: { images: { type: Array }, speed: { type: Number, default: 1000 } },
  data() {
    return {
      index: 0,
      timer: null,
      spans: []
    };
  },
  computed: {
    currentImage() {
      return this.images[this.index].src;
    },
    currentImageId() {
      return this.images[this.index].id;
    }
  },
  methods: {
    selectImage(id) {
      this.index = id;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.index < this.images.length - 1) this.index++;
      else this.index = 0;
    }, this.speed);
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.slider {
  position: relative;
  width: 430px;
  .mainImage {
    width: 100%;
    border: 2px solid color(skin-tone);
  }
  .allImages {
    height: 85px;
    width: 430px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    overflow-x: auto;
    .container {
      width: fit-content;
      li{
        height: 100%;
        display: inline-block;
        &:not(:last-of-type) {
          margin-left: 10px;
        }
      }
      img {
        height: 100%;
        border-radius: 6px;
        transition: opacity 1s, transform 0.5s;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
      .active {
        opacity: 0.68;
      }
    }
  }

  @include mobile(1000px) {
    width: 100%;
    .allImages {
      width: 100%;
    }
  }
}
</style>