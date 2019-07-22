<template>
  <section :class="$style.searchcard">
    <p>برای جستجوی ملک مورد نظر خود</p>
    <p>با پرکردن فیلد های زیر سریع تر به نتیجه مطلوب خواهید رسید.</p>
    <form ref="searchForm" @submit.prevent="search">
      <Combolist
        title="* نوع تقاضای خود را مشخص کنید"
        :items="[{id: 'Partnership', text: 'مشارکت در ساخت'},{id: 'Sell', text: 'فروش کلنگی'}]"
        @value="chooseType($event)"
        class="fade-in"
        data-scroll
        v-model="advert_type"
      />
      <ComboListMultiselect
        placeholder="محله های مورد نظر خود را مشخص کنید"
        :keywords="cities"
        class="fade-in"
        data-scroll
        v-model="selectedcities"
      />
      <input
        type="number"
        name="maxMetrazh"
        id="maxMetrazh"
        min="1"
        placeholder="حداکثر متراژ مورد نظر خود را وارد کنید"
        class="fade-in"
        data-scroll
        v-model="max_metrazh"
      />
      <input
        type="number"
        name="minMetrazh"
        id="minMetrazh"
        min="1"
        placeholder="حداحقل متراژ مورد نظر خود را وارد کنید"
        class="fade-in"
        data-scroll
        v-model="min_metrazh"
      />
      <div :class="[$style.submitContainer,'slide-in-top']" data-scroll>
        <button type="submit">
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
import ComboListMultiselect from "./form/ComboListMultiselect.vue";

import repositories from "@/repositories/repositories.js";
export default {
  name: "Searchcard",
  data() {
    return {
      showMosharekat: false,
      showForoosh: false,
      displayType: true,
      min_metrazh: null,
      max_metrazh: null,
      cities: [],
      selectedcities: [],
      advert_type: null
    };
  },
  async mounted() {
    await this.$store.dispatch("fetch_cities");
    this.cities = this.$store.getters["cities"];
  },
  computed: {
    typeStyle() {
      if (this.displayType) {
        return "display: flex; width: 30vw";
      } else {
        return "display: none; width: 30vw";
      }
    },
    formPosition() {
      return "position: fixed !important; top: 80px !important;";
    }
  },
  components: {
    Combolist,
    ComboListMultiselect
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
    },
    goto(name, $event) {
      this.$router.push(name);
    },
    async search() {
      if (!this.advert_type) {
        alert("وارد کردن نوع تقاضا الزامیست");
      } else {
        let res = await repositories.home.search({
          min_metrazh: this.min_metrazh ? this.min_metrazh : null,
          max_metrazh: this.max_metrazh ? this.max_metrazh : null,
          cities: this.selectedcities ? this.selectedcities : [],
          advert_type: this.advert_type ? this.advert_type : null
        });
        if (res.status == 200) {
          localStorage.setItem("search_result", res.data);
        } else {
        }

        try {
          if (this.$router.currentRoute.name == "search-result") {
            console.log("go!");
            window.location.reload(true);
          } else this.$router.push("search-result");
        } catch {}
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.searchcard {
  background: image("Radiant-Gradient");
  background-size: cover;
  background-position: center;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, 280px);
    grid-gap: 15px;
    width: 100%;
    margin-bottom: 100px;
    justify-content: center;
    direction: rtl;
    input {
      color: #cecece;
      line-height: 40px;
      height: 40px;
      font-size: 14px;
      background-color: #3b3b3b;
      border: 1px solid color(skin-tone);
      border-radius: 6px;
      padding: 0 15px;
      direction: rtl;
      outline: none;
      width: calc(100% - 30px);
      &::placeholder {
        color: #cecece;
      }
    }
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      margin: 0;
    }
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      margin: 0;
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
