<template>
  <header>
    <img :src="image">
    <div :class="$style.trapezoids">
      <div v-if="Title" :class="[$style.trapezoid,this.titleS]">
        <span v-for="span in Title" :key="span.id" :class="span.class">{{span.text}}</span>
      </div>
      <div v-if="subtitle" :class="[$style.trapezoid,this.subtitleS]">
        <span v-for="span in subtitle" :key="span.id" :class="span.class">{{span.text}}</span>
      </div>
    </div>
    <img src="@/assets/icons/mouse.svg">
  </header>
</template>

<script>
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

    .trapezoid {
      line-break: none;
      text-align: center;
      span {
        margin: 0 5px;
      }
      &:first-of-type {
        color: white;
        font-size: 40px;
        border-bottom: 80px solid rgba($color: #000000, $alpha: 0.65);
        border-left: 54px solid transparent;
        border-right: 54px solid transparent;
        line-height: 80px;
        height: 0;
        width: 750px;
      }

      &:last-of-type {
        font-size: 20px;
        position: relative;
        line-height: 54px;
        margin-top: 5px;
        text-align: center;
        width: 620px;
        @include HorizontalCenter();

        &::before {
          content: "";
          height: 0;
          width: 100%;
          position: absolute;
          top: 0;
          left: -54px;
          /* stick out into margined area */
          z-index: -1;
          /* make it the background */
          border: 54px solid transparent;
          /* left/right diagonals */
          border-top: 54px solid color(dimm-black);
          border-bottom: 0px solid transparent;
        }
      }
    }
    .skin_tone_trapezoid {
      color: #000000 !important;
      border-bottom-color: color(skin-tone) !important;
    }
    .skin_tone_Utrapezoid {
      color: #000000 !important;
      &::before {
        border-top-color: color(skin-tone) !important;
      }
    }
  }
}
</style>