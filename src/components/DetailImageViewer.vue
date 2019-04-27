<template>
  <div>
    <span :class="$style.title">{{this.title}}</span>
    <div :class="$style.image_grid">
      <div
        :class="$style.image_container"
        @click="openModal('expandedImage')"
        v-for="i in [1,2,3,4,5,6]"
        :key="i"
      >
        <img src="@/assets/icons/05.jpg">
      </div>
    </div>
    <Modal imageView ref="expandedImage">
      <img src="@/assets/icons/05.jpg">
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  props: ["title"],
  methods: {
    openModal(name) {
      this.$refs[name].display = true;
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.title{
  color: color(grullo);
  font-size: 25px;
  text-align: center;
  width: 100%;
  display: block;
  margin: 30px 0;
}
.image_grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  .image_container{
    border: 1px solid color(skin-tone);
    cursor: pointer;
    position: relative;
    img{
      width: 100%;
    }
    &::after{
      @include content();
      background: image(diagonal-resize) no-repeat;
      background-size: 50px;
      background-position: center;
      background-color: rgba($color: color(skin-tone), $alpha: .57);
      display: none;
    }
    &:hover::after{
      display: block;
    }
  }
}
</style>