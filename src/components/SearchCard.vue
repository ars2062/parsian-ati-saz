<template>
  <section :class="$style.searchcard">
    <p>همین امروز ملک مورد نظر خودتون رو پیدا کنید</p>
    <p>فیلد های زیر را پر کنید طبق معیار های مد نظرتون سپس دکمه جستجو بزنید</p>
    <Combolist
      style="width:300px;margin-bottom: 120px;"
      title="نوع ملک مد نظرتون رو انتخاب کنید"
      :items="[{id: 1, text: 'مشارکت در ساخت'},{id: 2, text: 'فروش کلنگی'}]"
      @value="chooseType($event)"
    />
    <form>
      <div v-if="this.showMosharekat">
        <Combolist
          :style="this.typeStyle"
          title="نوع ملک مد نظرتون رو انتخاب کنید"
          :items="[{id: 1, text: 'مشارکت در ساخت'},{id: 2, text: 'فروش کلنگی'}]"
          @value="chooseType($event)"
        />
        <input
          type="number"
          name="maxMetrazh"
          id="maxMetrazh"
          min="1"
          placeholder="حداکثر متراژ مورد نظر خود را وارد کنید"
        >
        <input
          type="number"
          name="minMetrazh"
          id="minMetrazh"
          min="1"
          placeholder="حداحقل متراژ مورد نظر خود را وارد کنید"
        >
      </div>
      <div v-if="this.showForoosh">فروش</div>
      <div :class="$style.submitContainer">
        <button>
          <span>جستجو</span>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Combolist from "./form/ComboList.vue";
export default {
  name: "Searchcard",
  data() {
    return {
      showMosharekat: false,
      showForoosh: false,
      displayType: true
    };
  },
  computed: {
    typeStyle() {
      if (this.displayType) {
        return "display: flex; width: 20vw";
      } else {
        return "display: none; width: 20vw";
      }
    }
  },
  components: {
    Combolist
  },
  methods: {
    chooseType($event) {
      this.displayType = true;
      if ($event === 1) {
        this.showForoosh = false;
        this.showMosharekat = true;
      } else {
        this.showForoosh = true;
        this.showMosharekat = false;
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.searchcard {
  background-color: color(coal);
  text-align: center;
  padding: 15px;
  position: relative;
  p {
    color: white;
    &:first-of-type {
      font-size: 20px;
    }
    &:last-of-type {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
  form {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 100px;
    div {
      width: 100%;
    }
    input {
      width: 20vw;
      color: color(grullo);
      margin-left: 30px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid color(skin-tone);
      height: 30px;
      font-size: 16px;
      direction: rtl;
      outline: none;
      &::placeholder {
        color: color(grullo);
      }
    }
  }
  .submitContainer {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: calc(100% - 72.5px);
    transform: rotate(45deg);
    @include size(calc(145px), calc(145px));
    background-color: rgba(black, 0.06);
    button {
      @include size(100px, 100px);
      margin: 22.5px;
      background-color: color(skin-tone);
      border: 5px solid white;
      position: relative;
      cursor: pointer;
      outline: none;
      transition: all 0.1s;
      &:active {
        transform: scale(1.05, 1.05);
      }
      span {
        display: inline-block;
        z-index: 2;
        font-size: 20px;
        transform: rotate(-45deg);
      }
      i {
        position: absolute;
        width: calc(100% - 10px);
        height: 1px;
        margin: auto;
        background-color: black;
        display: none;
        &::before {
          @include content();
          background-color: black;
          position: absolute;
          @include size(5px, 5px);
        }
        &:nth-child(2) {
          display: block;
          top: 5px;
          left: 0;
          right: 0;
          &::before {
            left: -2.5px;
            top: -2.5px;
          }
        }
        &:nth-child(3) {
          display: block;
          top: calc(100% - 5px);
          left: 0;
          right: 0;
          &::before {
            left: calc(100% - 2.5px);
            top: -2.5px;
          }
        }
        &:nth-child(4) {
          display: block;
          top: 0;
          bottom: 0;
          left: 5px;
          height: calc(100% - 10px);
          width: 1px;
          &::before {
            left: -2.5px;
            top: calc(100% - 2.5px);
          }
        }
        &:nth-child(5) {
          display: block;
          top: 0;
          bottom: 0;
          left: calc(100% - 5px);
          height: calc(100% - 10px);
          width: 1px;
          &::before {
            left: -2.5px;
            top: -2.5px;
          }
        }
      }
    }
  }
}
</style>
