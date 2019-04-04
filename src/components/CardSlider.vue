<template>
  <div :class="$style.sliderContainer">
    <button :class="$style.navBtn" @mousedown="this.slideLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button :class="$style.navBtn" @mousedown="this.slideRight">
      <i class="fas fa-chevron-right"></i>
    </button>
    <div :class="$style.cardSlider" ref="slider">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
  data() {
    return {
      index
    };
  },
  methods: {
    slideLeft() {
      let w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      let cardWidth = (w - 340) / 4 + 15;
      this.scrollTo(
        this.$refs["slider"],
        this.$refs["slider"].scrollLeft - cardWidth,
        600
      );
      console.log(this.$refs["slider"]);
    },
    slideRight() {
      let w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      let cardWidth = (w - 340) / 4 + 15;
      this.scrollTo(
        this.$refs["slider"],
        this.$refs["slider"].scrollLeft + cardWidth,
        600
      );
      console.log(this.$refs["slider"]);
    },
    scrollTo(element, to, duration) {
      var start = element.scrollLeft,
        change = to - start,
        currentTime = 0,
        increment = 20;
      var ease = this.easeInOutQuad;
      var animateScroll = function() {
        currentTime += increment;
        var val = ease(currentTime, start, change, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    },
    easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
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
  &::after{
    @include content();
    width: .1px;
    box-shadow: 0 0 140px 100px white;
    z-index: 1;
  }
  &::before {
    left:100%;
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
    overflow-x: hidden;
    scroll-snap-type: x proximity;
    div {
      margin: 10px 0;
      height: calc(100% - 20px);
      scroll-snap-align: center;
      &:not(:first-of-type) {
        margin-right: 15px;
      }
      width: calc((100vw - 340px) / 4);
      display: inline-block;
    }
  }
}
</style>