<template>
  <div :class="$style.modal" :style="this.displayModal" @click="this.close">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    displayModal() {
      if (this.display) return "display: flex";
      else return "display: none";
    }
  },
  methods: {
    close($event) {
      if ($event.target.classList.contains(this.$style.modal)) {
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
  align-items: center;
  justify-content: center;
  form {
    width: 560px;
    background-color: #fff;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.39);
    border-radius: 6px;
    display: grid;
    padding: 20px 25px;
    grid-gap: 10px;
  }
}
</style>