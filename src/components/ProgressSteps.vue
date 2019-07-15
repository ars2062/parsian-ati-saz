<template>
  <div :class="$style.progress">
    <div
      :key="index"
      v-for="(step,index) in this.steps"
      :class="[$style.step,(index%2==0)?$style.top:$style.bottom,step.class]"
    >{{step.text}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: {
    steps: {
      type: Array
    }
  },
  mounted() {
    console.log(this.$style);
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.progress {
  display: flex;
  margin: 20px 0;
  position: relative;
  &::before {
    @include content();
    height: 9px;
    background-color: #dbdbdb;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .step {
    display: block;
    font-size: 20px;
    height: 35px;
    font-weight: 500;
    
    flex-grow: 1;
    flex-basis: 0;
    &::after {
      @include content();
      @include size(25px);
      background-color: #DBDBDB;
      position: absolute;
      left: calc(50% - 12.5px);
      z-index: 3;
      border-radius: 25px;
    }
    @include mobile(790px){
      font-size: 14px;
    }
    @include mobile(490px){
      font-size: 12px;
    }
    @include mobile(410px){
      font-size: 10px;
    }
  }
  .top {
    transform: translateY(-30px);
    &::after{
      top: 100%;
    }
  }
  .bottom {
    transform: translateY(30px);
    &::after{
      top: auto;
      bottom: 100%;
    }
  }
}
</style>