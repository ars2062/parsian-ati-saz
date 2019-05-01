<template>
  <div :class="$style.checkbox">
    <input type="checkbox" :name="this._uid" :id="this._uid" hidden>
    <label :for="this._uid"></label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.checkbox {
  label {
    position: relative;
    @include size(24px, 24px);
    background-color: transparent;
    display: block;
    border-radius: 6px;
    border: 3px solid color(skin-tone);
    cursor: pointer;
    &::after {
      @include content();
      right: 0;
      bottom: 0;
      top: -5px;
      margin: auto;
      @include size(7px, 12px);
      transform: rotate(45deg);
      display: none;
      transition: all 0.2s;
      display: block;
      border-color: color(skin-tone);
      border-style: solid;
      border-width: 0;
    }
  }

  input:checked ~ label::after {
    border-bottom-width: 3px;
    border-right-width: 3px;
  }
}
</style>