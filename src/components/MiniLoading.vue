<template>
  <div>
    <div :class="$style.sk_cube_grid">
      <div :class="[$style.sk_cube, $style.sk_cube1]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube2]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube3]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube4]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube5]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube6]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube7]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube8]"></div>
      <div :class="[$style.sk_cube, $style.sk_cube9]"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.sk_cube_grid {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  .sk_cube {
    width: 33.333333%;
    height: 33.333333%;
    background-color: black;
    float: left;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk_cube1 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .sk_cube2 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk_cube3 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .sk_cube4 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .sk_cube5 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .sk_cube6 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk_cube7 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .sk_cube8 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .sk_cube9 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
}

@keyframes sk-cubeGridScaleDelay {
  0%,
  70%,
  100% {
    -webkit-transform: scale3D(1, 1, 1);
    transform: scale3D(1, 1, 1);
  }
  35% {
    -webkit-transform: scale3D(0, 0, 1);
    transform: scale3D(0, 0, 1);
  }
}
</style>