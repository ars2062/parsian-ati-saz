<template>
  <div :class="$style.modal" :style="this.displayModal" @click="this.close">
    <div :class="$style.container" :style="this.displayImage">
      <button :class="$style.close" @click="this.close"></button>
      <div :class="$style.scroller">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    },
    imageView: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    displayModal() {
      if (this.display) return "display: flex";
      else return "display: none";
    },
    displayImage() {
      if (this.imageView) return "width: 80% !important";
      else return "";
    }
  },
  methods: {
    close($event) {
      if (
        $event.target.classList.contains(this.$style.modal) ||
        $event.target.classList.contains(this.$style.close)
      ) {
        this.display = false;
        this.$emit("closed", true);
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.modal {
  position: fixed;
  @include size(100vw, 100vh);
  background-color: rgba(white, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  padding-top: 110px;
  justify-content: center;
  z-index: 99;
  .container {
    width: 560px;
    max-height: calc(100vh - 130px);
    background-color: #fff;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.39);
    border-radius: 6px;
    padding: 20px 25px;
    position: relative;
    .scroller {
      height: 100%;
      overflow: auto;
      width: 100%;
    }
    .close {
      background: image(cancel) no-repeat;
      background-position: center;
      background-size: calc(100% - 14px);
      @include size(45px, 45px);
      border: none;
      border-radius: 6px;
      background-color: color(skin-tone);
      position: absolute;
      top: -16px;
      right: -9px;
      cursor: pointer;
    }
  }
  img {
    width: 100%;
  }
}
</style>