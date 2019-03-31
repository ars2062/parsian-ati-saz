<template>
  <div :class="$style.cardSlider">
    <button :class="$style.navBtn" @click="this.slideLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <slot></slot>
    <button :class="$style.navBtn" @click="this.slideRight">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    slideLeft() {
      let cardWidth = (this.$el.clientWidth - 340) / 4;
      this.$el.scrollLeft -= cardWidth;
    },
    slideRight() {
      let cardWidth = (this.$el.clientWidth - 340) / 4;
      this.$el.scrollLeft += cardWidth;
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.cardSlider {
  direction: rtl;
  width: calc(100% - 280px);
  height: 300px;
  overflow: hidden;
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0 140px;
  div {
    height: 100%;
    &:not(:first-of-type) {
      margin-right: 15px;
    }
    width: calc((100vw - 340px) / 4);
    display: inline-block;
  }
  .navBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
      transform: translateY(-50%) scale(1.1);
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
  }
  &::before {
    right: 0;
  }
  &::after {
    left: 0;
  }
}
</style>