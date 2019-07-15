<template>
  <header>
    <img :src="image">
    <div :class="$style.trapezoids">
      <div v-if="Title" :class="[$style.trapezoid,this.titleS,$style.first]" data-scroll>
        <span v-for="span in Title" :key="span.id" :class="span.class">{{span.text}}</span>
      </div>
      <div v-if="subtitle" :class="[$style.trapezoid,this.subtitleS,$style.last]" data-scroll>
        <span v-for="span in subtitle" :key="span.id" :class="span.class">{{span.text}}</span>
      </div>
    </div>
    <img src="@/assets/icons/mouse.svg">
  </header>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  props: {
    Title: { type: Array, required: true },
    subtitle: { type: Array, required: false },
    image: { type: String, required: true },
    titleC: { type: Boolean, default: false, required: false },
    subtitleC: { type: Boolean, default: false, required: false }
  },
  computed: {
    titleS() {
      if (this.titleC) return this.$style.skin_tone_trapezoid;
      else return "";
    },
    subtitleS() {
      if (this.subtitleC) return this.$style.skin_tone_Utrapezoid;
      else return "";
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
header {
  height: 77vh;
  position: relative;
  border-bottom: 3px solid color(skin-tone);

  img {
    position: absolute;
    &:first-of-type {
      z-index: -1;
      display: block;
      width: 100%;
      height: 77vh;
      object-fit: cover;
    }
    &:last-of-type {
      bottom: 18.5px;
      left: 0;
      right: 0;
      margin: auto;
      width: 42.5px;
      cursor: pointer;
    }
  }

  .trapezoids {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    .trapezoid {
      line-break: none;
      text-align: center;
      span {
        margin: 0 5px;
      }
      &.first {
        color: white;
        font-size: 40px;
        background-color: rgba($color: #000000, $alpha: 0.65);
        line-height: 80px;
        height: 80px;
        width: 750px;
        clip-path: polygon(50px 0%, calc(100% - 50px) 0%, 100% 100%, 0% 100%);
        @include HorizontalCenter();
        @include mobile(860px) {
          clip-path: polygon(30px 0%, calc(100% - 30px) 0%, 100% 100%, 0% 100%);
          width: 100%;
          font-size: 22px;
          height: 40px;
          line-height: 40px;
        }
        @include mobile(550px) {
          font-size: 15px;
        }
      }

      &.last {
        font-size: 20px;
        position: relative;
        line-height: 54px;
        height: 54px;
        margin-top: 5px;
        text-align: center;
        width: 620px;
        color: white;
        @include HorizontalCenter();
        clip-path: polygon(0 0, 100% 0, calc(100% - 50px) 100%, 50px 100%);
        background-color: color(dimm-black);

        @include mobile(740px) {
          clip-path: polygon(0 0, 100% 0, calc(100% - 30px) 100%, 30px 100%);
          width: calc(100% - 50px);
          font-size: 17px;
          line-height: 30px;
          height: 30px;
        }
      }
    }
    .skin_tone_trapezoid {
      color: #000000 !important;
      background-color: color(skin-tone) !important;
    }
    .skin_tone_Utrapezoid {
      color: #000000 !important;
      background-color: color(skin-tone) !important;
    }
  }
}
</style>