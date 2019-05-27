<template>
  <div>
    <section :class="$style.detail">
      <div :class="[$style.head,'slide-in-top']" data-scroll>
        <span>خانه / نتیجه جستجو / 261 متری سعادت آباد خیابان صرافها</span>
        <button @click="goback">بازگشت</button>
      </div>
      <div :class="$style.container">
        <section>
          <h1>261 متری سعادت آباد خیابان صرافها</h1>
          <span :class="$style.address">
            <i class="fas fa-map-marker-alt"></i>تهران ، سعادت آباد
          </span>
          <button @click="openModal('contactInfo')"  class="slide-in-left" data-scroll>دریافت شماره تماس</button>
          <button class="slide-in-left" data-scroll>نشان کردن</button>
          <button :class="[$style.left,'slide-in-left']" data-scroll>آماده امضاء</button>
          <ul  class="slide-in-top" data-scroll>
            <li>
              <label>دسته بندی</label>
              <span>مشارکت در ساخت</span>
            </li>
            <li>
              <label>متراژ کل</label>
              <span>1200 متر</span>
            </li>
            <li>
              <label>موقعیت</label>
              <span>شمالی ، شرقی</span>
            </li>
            <li>
              <label>گذر</label>
              <span>24 متر</span>
            </li>
            <li>
              <label>بر ملک</label>
              <span>90 متر</span>
            </li>
            <li>
              <label>نوع سند</label>
              <span>سند شخصی</span>
            </li>
            <li>
              <label>پهنه طرح تفصیلی</label>
              <span>R 212</span>
            </li>
            <li>
              <label>مبلغ بلاعوض</label>
              <span>12 میلیارد</span>
            </li>
            <li>
              <label>مبلغ قرض الحسنه</label>
              <span>12 میلیارد</span>
            </li>
          </ul>
        </section>
        <ImageSlider
          :images="[
            {src:require('@/assets/icons/post10-lg.jpg'),id:0},
            {src:require('@/assets/icons/post10-lg.jpg'),id:1},
            {src:require('@/assets/icons/post10-lg.jpg'),id:2},
            {src:require('@/assets/icons/post10-lg.jpg'),id:3},
            {src:require('@/assets/icons/post10-lg.jpg'),id:4},
            {src:require('@/assets/icons/post10-lg.jpg'),id:5},
            {src:require('@/assets/icons/post10-lg.jpg'),id:6}
          ]"
          :speed="6000"
        />
      </div>
      <p :class="$style.description">
        ملک 1200 متری در سعادت آباد واقع در صرافها
        در بهترین لوکیشن آماده مشارکت
      </p>
    </section>

    <ContactCard/>

    <Footer/>

    <Modal ref="contactInfo">
      <div :class="$style.contactInfo">
        <img src="@/assets/icons/slide1.svg">
        <h1>میلاد شهرایی</h1>
        <a href="tel:+9891240892313">
          <span>شماره تماس:</span> 091240892313
        </a>
        <a href="mailto:shahray@gmail.com">
          <span>ایمیل:</span> shahray@gmail.com
        </a>
        <a href="tel:+9891240892313">برای تماس کلیک کنید</a>
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
import ImageSlider from "@/components/ImageSlider.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    ImageSlider,
    ContactCard
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
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.detail {
  direction: rtl;
  padding: 120px 150px;
  .head {
    line-height: 40px;
    border: 1px solid #707070;
    border-radius: 2px;
    padding: 0 10px;
    color: #202020;
    position: relative;
    overflow: hidden;
    span {
      font-size: 15px;
    }
    button {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      font-size: 14px;
      padding: 0 60px;
      background-color: #f6f6f6;
      border: none;
      border-right: 1px solid #707070;
      cursor: pointer;
      outline: none;
    }
  }
  .container {
    display: grid;
    grid-template-columns: auto 430px;
    grid-gap: 120px;
    padding: 20px 0;
      border-bottom: 1px solid #707070;
    section {
      h1 {
        font-size: 30px;
        font-weight: normal;
      }
      .address {
        display: block;
        margin-bottom: 17px;
        font-size: 18px;
        color: rgba($color: #000000, $alpha: 0.5);
        i {
          color: color(chocolate);
          margin-left: 10px;
        }
      }
      button {
        border-radius: 4px;
        border: none;
        line-height: 40px;
        padding: 0 20px;
        font-size: 14px;
        cursor: pointer;
        outline: none;
        &.left {
          float: left !important;
        }
        &:nth-of-type(1) {
          background-color: color(skin-tone);
          margin-left: 10px;
        }
        &:nth-of-type(2) {
          background-color: #fff;
          border: 1px solid black;
        }
        &:nth-of-type(3) {
          background-color: #fff;
          border: 1px solid color(red);
          color: color(red);
        }
      }
      ul {
        margin: 18px 0;
        list-style: none;
        li {
          line-height: 35px;
          &:not(:last-of-type) {
            border-bottom: 1px solid #707070;
          }
          label {
            color: rgba($color: #202020, $alpha: 0.5);
            font-size: 14px;
          }
          span {
            float: left;
            font-size: 17px;
            color: #202020;
          }
        }
      }
    }
  }
}
.contactInfo {
  direction: rtl;
  min-height: 100%;
  position: relative;
  img {
    margin: auto;
    text-align: center;
    @include size(172px, 172px);
    position: relative;
    right: 50%;
    transform: translateX(50%);
    margin-top: 30px;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    border: 8px solid white;
    border-radius: 172px;
    object-fit: cover;
  }
  h1 {
    text-align: center;
    font-size: 25px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: color(grullo);
    display: block;
    font-size: 20px;
    span {
      color: darken(color(grullo), 20%);
    }
    &:last-of-type {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      background-color: color(grullo);
      line-height: 50px;
      color: white;
      border-radius: 6px;
    }
  }
}
</style>