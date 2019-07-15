<template>
  <div>
    <Header
      :Title="[{text:'لیست استاد کاران '}]"
      :subtitle="[{text:'ثبت آگهی'}]"
      :image="require('@/assets/icons/49372.jpg')"
      subtitleC
    />
    <section :class="$style.one">
      <Title title="استاد کاران برند منطقه" style="margin-top:45px" />
      <div :class="$style.cards">
        <div v-for="i in [1,2,3,4,5,6,7,8]" :key="i" :class="$style.card">
          <img src="@/assets/icons/450-3366-225x168.jpg" />
          <h4>کنعان پاسبانی</h4>
          <span>کار {{i}}</span>
          <button @click="goto('master-worker-detail')">نمایش نمونه کارها</button>
        </div>
      </div>
      <button :class="$style.more">
        <span>نمایش آگهی بیشتر</span>
      </button>
    </section>
    <AreYouAMasterWorker />
    <Footer />
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
import AreYouAMasterWorker from "@/components/AreYouAMasterWorker.vue";
export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    AreYouAMasterWorker
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
section.one {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 15px;
    padding: 50px 20px;
    justify-content: center;
    .card {
      border-radius: 6px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      background-color: white;
      position: relative;
      padding-bottom: 35px;
      width: 260px;
      img {
        width: 100%;
        border-radius: 6px;
        height: 195px;
      }
      h4 {
        float: right;
        font-size: 18px;
        margin: 7px;
      }
      span {
        float: left;
        font-size: 14px;
        font-weight: 100;
        margin: 17px;
      }
      button {
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        margin: auto;
        position: absolute;
        border-radius: 0 0 6px 6px;
        background-color: color(skin-tone);
        border: none;
        font-size: 20px;
        cursor: pointer;
        outline: none;
        &:active {
          background-color: darken(color(skin-tone), 10%);
        }
      }
    }
  }
  .more {
    font-size: 14px;
    position: relative;
    line-height: 40px;
    margin-top: 45px;
    margin-bottom: 100px;
    text-align: center;
    width: 300px;
    border: none;
    @include HorizontalCenter();
    cursor: pointer;
    transition: all 0.1s;
    outline: none;
    clip-path: polygon(0 0, 100% 0, calc(100% - 40px) 100%, 40px 100%);
    background-color: color(skin-tone);
    @include mobile(320px) {
      width: calc(100% - 20px);
    }
  }
}
section.two {
  background-color: #f1f1f1;
  padding: 25px;
  direction: rtl;
  h1 {
    font-size: 30px;
    font-weight: normal;
  }
  p {
    font-size: 18px;
    font-weight: normal;
  }
  button {
    border: none;
    background-color: #fff;
    color: blue;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    padding: 10px 55px;
    font-size: 18px;
    border-radius: 6px;
    position: relative;
    right: 50%;
    transform: translateX(50%);
    margin-bottom: 50px;
    margin-top: 25px;
    cursor: pointer;
    outline: none;
    @include ripple();
  }
}
</style>