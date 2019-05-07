<template>
  <div :class="[$style.sliderContainer,'scrollable-pane']">
    <button :class="$style.navBtn" @mousedown="this.slideLeft" @mouseup="this.stopLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button :class="$style.navBtn" @mousedown="this.slideRight" @mouseup="this.stopRight">
      <i class="fas fa-chevron-right"></i>
    </button>
    <div :class="$style.cardSlider" ref="slider">
      <slot></slot>
      <section :class="$style.padding"></section>
    </div>
  </div>
</template>

<script>
import JQuery from "jquery";
import { setInterval, clearInterval } from "timers";
let $ = JQuery;
export default {
  data() {
    return {
      index:0,
      slideleft:false,
      slideright:false
    };
  },
  methods: {
    slideLeft() {
      if (!this.slideleft) {
        this.slideleft = setInterval(() => {
          this.$refs["slider"].scrollBy(-5,0);
        }, 10);
      }
    },
    slideRight() {
      if (!this.slideright) {
        this.slideright = setInterval(() => {
          this.$refs["slider"].scrollBy(5,0);
        }, 10);
      }
    },
    vw(v) {
      var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      return (v * w) / 100;
    },
    stopLeft() {
      clearInterval(this.slideleft);
      this.slideleft = undefined;
    },
    stopRight() {
      clearInterval(this.slideright);
      this.slideright = undefined;
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.sliderContainer {
  height: 320px;
  overflow: hidden;
  margin-top: 50px;
  position: relative;
  .navBtn {
    position: absolute;
    top: 0;
    bottom: 0;
    left: auto;
    right: auto;
    margin: auto;
    @include size(40px, 40px);
    line-height: 40px;
    border-radius: 40px;
    border: none;
    background-color: color(chocolate);
    color: white;
    outline: none;
    transition: all 0.1s;
    cursor: pointer;
    z-index: 2;
    &:active {
      transform: scale(1.1);
    }
    &:first-of-type {
      left: 70px;
    }
    &:last-of-type {
      right: 70px;
    }
  }
  &::before,
  &::after {
    @include content();
    width: 0.1px;
    box-shadow: 0 0 140px 100px white;
    z-index: 1;
  }
  &::before {
    left: 100%;
  }
  &::after {
    left: 0;
  }
  .cardSlider {
    direction: rtl;
    width: calc(100% - 280px);
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 140px;
    overflow-x: scroll;
    &::-webkit-scrollbar { display: none !important }
    div {
      margin: 10px 0;
      height: calc(100% - 20px);
      &:not(:first-of-type) {
        margin-right: 15px;
      }
      width: calc((100vw - 340px) / 4);
      display: inline-block;
    }
    .padding{
      width: 140px;
      height: 100%;
      background-color: red;
      display: inline-block;
    }
  }
}
</style>