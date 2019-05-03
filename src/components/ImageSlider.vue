<template>
  <div :class="$style.slider">
    <img :id="currentImageId" :src="currentImage">
    <div :class="$style.paginations">
      <span
        v-for="(span,id) in spans"
        :key="span"
        :id="span"
        :class="[$style.pagination,currentImageId===span?$style.active:'']"
        @click="selectImage(id)"
      ></span>
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
  methods:{
      selectImage(id){
          this.index=id;
      }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.index < this.images.length -1) this.index++;
      else this.index = 0;
    }, this.speed);
    this.images.map(image => {
      this.spans.push(image.id);
    });
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
  img {
    width: 100%;
    border-radius: 6px;
  }
  .paginations {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    .pagination {
      @include size(10px, 10px);
      border-radius: 10px;
      margin: 10px;
      display: block;
      border: 1px solid darken(color(chocolate),10%);
      cursor: pointer;
      &.active {
        background-color: darken(color(chocolate),10%);
      }
    }
  }
}
</style>