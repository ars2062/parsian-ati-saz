<template>
    <div>
    <Header
      :Title="[{text:'خرید'}]"
      :image="require('@/assets/icons/slide1.svg')"
    />
    <Searchcard></Searchcard>
    <div :class="$style.list_container">
      <router-link to="/property-detail" :class="$style.post" v-for=" i in [1,2,3,4,5,6]" :key="i">
        <div :class="$style.ribbonContainer">
          <div :class="$style.ribbon">
            <img src="@/assets/icons/star.svg">
          </div>
        </div>
        <div :class="$style.type">فروش</div>
        <img :class="$style.mainImage" src="@/assets/icons/04.jpg">
        <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
        <ul>
          <li>متراژ وموقعيت : ٢٦٠متر جنوبى ،شمالى</li>
          <li>بروگذر : بر ١٠گذر ١٠و٨متر</li>
          <li>پهنه طرح تفصيلي : r122</li>
          <li>تعداد مالك :٢مالك</li>
        </ul>
        <hr>
        <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
      </router-link>
    </div>
    <button :class="$style.more">
      <span>نمایش آگهی بیشتر</span>
    </button>
    <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Searchcard from "@/components/SearchCard.vue";
import Title from "@/components/Title.vue";
import CardSlider from "@/components/CardSlider.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    },
    openModal(name) {
      this.$refs[name].display = true;
    },
    Alert(text) {
      alert(text);
    },
    openLink(name) {
      switch (name) {
        case "rules":
          window.open(
            "http://82.99.242.34/Portal/home/?240980/%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86-%D9%88-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%87%D8%A7"
          );
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.list_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-gap: 50px;
  justify-content: center;
  padding: 0 50px;
  margin-top: 160px;
  .post {
    position: relative;
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.05);
    }
    .ribbonContainer {
      overflow: hidden;
      @include size(80px, 80px);
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      .ribbon {
        width: 150px;
        height: 30px;
        position: absolute;
        top: 10px;
        right: -50px;
        left: auto;
        background: color(red);
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        text-align: center;
        img {
          width: 20px;
          margin: 2.5px;
          transform: rotate(-45deg);
        }
      }
    }
    .mainImage {
      @include size(100%, 220px);
    }
    .type {
      position: absolute;
      top: -5px;
      left: -10px;
      padding: 5px 15px;
      font-size: 14px;
      font-weight: 100;
      background-color: color(skin-tone);
      color: black;
      &::after {
        @include content();
        top: 100%;
        @include size(10px, 10px);
        background-color: black;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
      }
    }
    h3 {
      font-size: 20px;
      color: rgba(black, 0.5);
    }
    ul {
      list-style: none;
      font-size: 14px;
      font-weight: 100;
      color: rgba(black, 0.7);
      li {
        direction: rtl;
        text-align: right;
      }
    }
    hr {
      margin: 5px 0;
      border: 1px solid color(skin-tone);
    }
    .price {
      font-size: 20px;
      font-weight: 100;
      color: black;
    }
  }
}

.more {
  font-size: 20px;
  position: relative;
  line-height: 54px;
  margin-top: 45px;
  margin-bottom: 100px;
  text-align: center;
  width: 620px;
  border: none;
  @include HorizontalCenter();
  cursor: pointer;
  transition: all 0.1s;
  outline: none;
  &:active::before {
    border-top: 54px solid darken(color(skin-tone), 5%);
  }
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
    border-top: 54px solid color(skin-tone);
    border-bottom: 0px solid transparent;
  }
}
</style>