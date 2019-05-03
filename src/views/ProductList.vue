<template>
  <div>
    <Header :Title="[{text:'خرید'}]" :image="require('@/assets/icons/slide1.svg')"/>
    <div :class="$style.products">
      <div :class="$style.post" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
        <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
        <div :class="$style.buttonContainer">
          <button @click="openModal('postDetail')">
            <img src="@/assets/icons/diagonal-resize.svg">
          </button>
        </div>
      </div>
    </div>
    <button :class="$style.more">
      <span>نمایش آگهی بیشتر</span>
    </button>
    <Footer/>

    <Modal ref="postDetail" :class="$style.postDetail">
      <div :class="$style.imageContainer">
        <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
        <button
          @click="goto('building-equipment-detail')"
          :class="$style.more"
        >برای نمایش اطلاعات تکمیلی کلیک کنید</button>
        <section>
          <p>لوزارم ساختمانی برادران بیژن بجز قاسم</p>
          <button @click="goto('building-equipment-detail')">نمایش آدرس</button>
        </section>
      </div>
    </Modal>
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
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, 210px);
  grid-gap: 10px;
  padding: 50px;
  justify-content: center;
  .post {
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    * {
      position: absolute;
      margin: auto;
    }
    img {
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .buttonContainer {
      @include size(105px, 105px);
      background-color: rgba(color(coal), 0.5);
      transform: rotate(-45deg);
      top: 100%;
      left: calc(100% - 52.5px);
      right: 0;
      bottom: 0;
      button {
        margin: 7.5px;
        @include size(90px, 90px);
        z-index: 2;
        cursor: pointer;
        position: relative;
        background-color: color(skin-tone);
        border: none;
        transition: all 0.1s;
        &:active {
          transform: scale(1.05);
        }
        img {
          @include size(15px, 15px);
          top: 0;
          margin: 7.5px auto;
          position: absolute;
          transform: rotate(45deg);
        }
      }
    }
  }
}
.postDetail {
  .imageContainer {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
    .more {
      border: 1px solid color(skin-tone);
      background-color: rgba($color: #fff, $alpha: 0.95);
      position: absolute;
      top: 25%;
      left: 0;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      padding-right: 35px;
      font-size: 16px;
    }
    section {
      background-color: rgba($color: #000000, $alpha: 0.85);
      border: 2px solid color(skin-tone);
      direction: rtl;
      position: absolute;
      left: auto;
      top: 75%;
      right: 0;
      * {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        padding: 0 20px;
      }
      p {
        color: white;
        font-weight: 100;
      }
      button {
        border: none;
        background-color: color(skin-tone);
        color: color(chocolate);
        cursor: pointer;
      }
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