<template>
  <div :class="$style.slider">
    <img :id="currentImageId" :src="currentImage" :class="$style.mainImage">
    <div :class="$style.allImages">
      <img
        v-for="(image,index) in images"
        :key="image.id"
        :src="image.src"
        :class="currentImageId===image.id?$style.active:''"
        @click="selectImage(index)"
      >
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
    img {
      height: 100%;
      border-radius: 6px;
      transition: opacity 1s, transform .5s;
      cursor: pointer;
      &:not(:last-of-type){
        margin-left: 10px;
      }
      &:hover{
        transform: scale(1.05);
      }
    }
    .active{
      opacity: .68;
    }
  }
}
</style>