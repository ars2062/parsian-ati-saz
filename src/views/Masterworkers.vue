<template>
  <div>
    <Header
      :Title="[{text:'لیست استاد کاران '}]"
      :subtitle="[{text:'ثبت آگهی'}]"
      :image="require('@/assets/icons/49372.jpg')"
      subtitleC
    />
    <section :class="$style.one">
      <Title title="استاد کاران برند منطقه" style="margin-top:45px"/>
      <div :class="$style.cards">
        <div v-for="i in [1,2,3,4,5,6,7,8]" :key="i" :class="$style.card">
          <img src="@/assets/icons/450-3366-225x168.jpg">
          <h4>کنعان پاسبانی</h4>
          <span>کار {{i}}</span>
          <button>نمایش نمونه کارها</button>
        </div>
      </div>
      <button :class="$style.more">
        <span>نمایش آگهی بیشتر</span>
      </button>
    </section>
    <section :class="$style.two">
      <h1>اگر شما هم یک استاد کار هستید</h1>
      <p>
        با استفاده از پارسیان آتی ساز دیده شوید ، پارسیان آتی ساز یک سایت تخصصی در زمینه مشارکت در ساخت و املاک کلنگی می باشد و در این راستا اکثر سازندگان مناطق 22 گانه
        تهران با ما در ارتباط هستند .
      </p>
      <p>شما میتواند با قراردادن آگهی از خود و به نمایش گذاشتن نمونه کار های خود دیده شوید و پروژه های جدید بگیرید</p>
      <p>برای ثبت آگهی از کلید زیر استفاده کنید</p>
      <button>ثبت آگهی</button>
    </section>
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
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
section.one {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 15px;
    padding: 50px 125px;
    .card {
      border-radius: 6px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      background-color: white;
      position: relative;
      padding-bottom: 35px;
      img {
        width: calc((100vw - 340px) / 4);
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
}
section.two {
    background-color: #f1f1f1;
    padding: 25px;
    direction: rtl;
    h1{
        font-size: 30px;
        font-weight: normal;
    }
    p{
        font-size: 18px;
        font-weight: normal;
    }
    button{
        border: none;
        background-color: #fff;
        color: blue;
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: .16);
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