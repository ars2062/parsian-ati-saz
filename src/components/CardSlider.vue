<template>
  <div :class="[$style.sliderContainer,'scrollable-pane']">
    <button :class="$style.navBtn" @mousedown="this.slideLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button :class="$style.navBtn" @mousedown="this.slideRight">
      <i class="fas fa-chevron-right"></i>
    </button>
    <div :class="$style.cardSlider" ref="slider">
      <div :class="$style.items" ref="cards" :style="`transform: translateX(${transform}px);`">
        <slot></slot>
      </div>
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
      index: 0,
      transform: 0
    };
  },
  methods: {
    slideLeft() {
      console.log(this.cardWidth);
      if (
        this.transform <
        Array.from(this.$refs["cards"].querySelectorAll("div")).length *
          this.cardWidth
      )
        this.transform += this.cardWidth + 15;
    },
    slideRight() {
      if (this.transform != 0) this.transform -= this.cardWidth + 15;
    },
    vw(v) {
      var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      return (v * w) / 100;
    }
  },
  computed: {
    cardWidth() {
      /*@include mobile(1120px) {
        width: calc((100vw - 340px) / 3);
      }
      @include mobile(920px) {
        width: calc((100vw - 340px) / 2);
      }
      @include mobile(730px) {
        width: calc((100vw - 340px));
      }
      @include mobile(530px) {
        width: calc((100vw - 140px));
      }*/
      if (this.vw(100) <= 530) return this.vw(100) - 140;
      else if (this.vw(100) <= 730) return this.vw(100) - 340;
      else if (this.vw(100) <= 920) return (this.vw(100) - 340) / 2;
      else if (this.vw(100) <= 1120) return (this.vw(100) - 340) / 3;
      else return (this.vw(100) - 340) / 4;
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
    padding: 0 140px;
    overflow: hidden;
    .items {
      transition-duration: 0.15s;
      transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      will-change: transform;
      display: inline-block;
      white-space: nowrap;
    }
    &::-webkit-scrollbar {
      display: none !important;
    }
    div {
      margin: 10px 0;
      height: calc(100% - 20px);
      width: calc((100vw - 340px) / 4);
      display: inline-block;
      &:not(:first-of-type) {
        margin-right: 15px;
      }
      @include mobile(1120px) {
        width: calc((100vw - 340px) / 3);
      }
      @include mobile(920px) {
        width: calc((100vw - 340px) / 2);
      }
      @include mobile(730px) {
        width: calc((100vw - 340px));
      }
      @include mobile(530px) {
        width: calc((100vw - 140px));
      }
    }

    @include mobile(530px) {
      padding: 0 70px;
      width: calc(100% - 130px);
    }
  }
}
</style>