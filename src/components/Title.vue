<template>
  <div :class="$style.title">
    <span>{{this.title}}</span>
    <div>
      <i></i>
    </div>
  </div>
</template> 

<script>
export default {
  props: ["title"]
};
</script> 

<style lang="scss" module>
@import "@/assets/main.scss";
.title {
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  div {
    margin: auto;
    margin-top: 25px;
    position: relative;
    width: 350px;
    height: 1px;
    background-color: color(chocolate);
    i {
      position: absolute;
      display: block;
      left: 0;
      right: 0;
      margin: auto;
      background-color: color(chocolate);
      border: 2px solid color(skin-tone);
      @include size(30px, 30px);
      transform: translateY(-50%) rotate(45deg);
    }
    &::before {
      @include content();
      @include size(5px, 5px);
      top: 0;
      bottom: 0;
      left: -2.5px;
      margin: auto;
      background-color: color(chocolate);
    }
    &::after {
      @include content();
      @include size(5px, 5px);
      top: 0;
      bottom: 0;
      left: 100%;
      margin: auto;
      background-color: color(chocolate);
    }
    @include mobile(380px) {
      width: calc(100% - 20px);
      margin-top: 15px;
      i{
        @include size(20px);
      }
    }
  }

  @include mobile(380px) {
    font-size: 18px;
    width: 100%;
  }
}
</style>