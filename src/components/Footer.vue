<template>
  <footer>
    <div :class="$style.head">
      <img src="@/assets/icons/logo.svg">
      <h1>پارسیان آتی ساز</h1>
      <span>سعادت آباد ، چهار راه شهرداری ، برج نارنجستان ، طبقه 5 واحد 1</span>
    </div>
    <div :class="$style.contents">
      <div :class="$style.col">
        <h2 :class="$style.title">شبکه ها</h2>
        <ul>
          <li>
            <router-link to="#">تلگرام</router-link>
          </li>
          <li>
            <router-link to="#">اینستاگرام</router-link>
          </li>
        </ul>
      </div>
      <div :class="$style.col">
        <h2 :class="$style.title">
          <span :class="$style.gold">فایل</span> های اخیر
        </h2>
        <router-link to="#" :class="$style.card" v-for="i in [1,2]" :key="i">
          <div :class="$style.type">مشارکت در ساخت</div>
          <img :class="$style.mainImage" src="@/assets/icons/04.jpg">
          <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
          <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
        </router-link>
      </div>
      <div :class="$style.col">
        <h2 :class="$style.title">
          <span :class="$style.gold">درباره</span> پارسیان آتی ساز
        </h2>
        <p>
          قطعا پیدا کردن یک ملک مشارکتی با شرایط ایده ال کار آسانی نیست آن هم در تهران اما
          پارسیان آتی ساز با در اختیار گذاشتن امکانات فوق العاده این کار را برای شما آسان کرده است .
          شما میتوانید به راحتی از طریق سایت ملک مد نظر خود را جستجو کنید و یا مستقیما با
          کارشناسان ما در ارتباط باشید .وهمچنین شما میتوانید از طریق سامانه در خواست ملک
          شرایط ملک مورد نظر خودتون رو برای ما ارسال کنید و با در نظر گرفتن آن شرایط
          ما به شما ملک معرفی خواهیم کرد . اگر هم سازندگان مناطق پایین هستید
          و در نظر دارید در مناطق بالا تر ساخت و ساز کنید در این مسیر شما را یاری خواهیم کرد +
          پارسیان آتی ساز در راستای ارائه خدمات هرچه بهتر به سازندگان عزیز
          در تلاش برای بهتر شدن است اگر انتقاد و پیشنهادی نیز دارید با
          ما در میان بگذارید .
        </p>
      </div>
    </div>
    <div :class="$style.foot">
      <span>
        طراحی شده توسط تیم
        <span :class="$style.gold">TRIDEV</span> در سال 2019
      </span>
      <a href="tel:+989123848430">
        <span :class="$style.gold">+989123848430</span>
      </a>
    </div>
    <div :class="$style.goToTop">
      <button @click="this.goToTop">
        <i class="fas fa-chevron-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goToTop() {
      let scrollDuration = 500;
      var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
          if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
          } else clearInterval(scrollInterval);
        }, 15);
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
footer {
  background: image("fat-footer-bg", "jpg") no-repeat;
  background-size: cover;
  background-position: center;
  direction: rtl;
  color: white;
  overflow: hidden;
  padding: 0 90px;
  position: relative;
  .head {
    height: 100px;
    padding: 0 20px;
    position: relative;
    border-bottom: 2px solid white;
    display: block;
    margin-top: 60px;
    img,
    h1 {
      float: right;
    }
    img {
      @include VerticalCenter();
    }
    h1 {
      font-size: 31px;
      font-weight: 100;
      line-height: 100px;
    }
    span {
      float: left;
      font-size: 18px;
      position: absolute;
      bottom: 10px;
      left: 20px;
    }
  }
  .contents {
    display: grid;
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin: 60px 0;
    .col {
      padding: 10px;
      h2 {
        padding: 5px;
        border-bottom: 2px solid color(skin-tone);
        width: auto;
        position: relative;
        font-size: 26px;
        font-weight: 100;
        &::before {
          @include content();
          @include size(8px, 8px);
          background-color: color(skin-tone);
          top: auto;
          bottom: -4px;
          right: -4px;
        }
        .gold {
          color: color(skin-tone);
        }
      }
      ul {
        list-style: none;
        padding: 5px;
        li a {
          font-size: 20px;
          font-weight: 100;
          text-decoration: none;
          color: white;
        }
      }
      .card {
        text-decoration: none;
        position: relative;
        display: block;
        margin: 18px 15px;
        .mainImage {
          @include size(100%, 100px);
          object-fit: cover;
          border: 2px solid color(skin-tone);
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
          font-size: 16px;
          color: color(skin-tone);
        }
        .price {
          font-size: 14px;
          color: white;
        }
      }
      p {
        font-size: 20px;
        font-weight: 100;
        text-align: justify;
        margin: 10px;
      }
    }
  }
  .foot {
    padding: 5px 20px;
    position: relative;
    border-bottom: 2px solid white;
    display: block;
    margin-bottom: 150px;
    span {
      font-size: 20px;
      font-weight: 100;
      .gold {
        color: color(skin-tone);
        font-weight: normal;
      }
    }
    a {
      float: left;
      direction: ltr;
      text-decoration: none;
      .gold {
        color: color(skin-tone);
        font-weight: normal;
      }
    }
  }
  .goToTop {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 5px;
    background-color: color(skin-tone);
    button {
      position: absolute;
      background-color: transparent;
      border: none;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 0;
      height: 0;
      border-left: 96px solid transparent;
      border-right: 96px solid transparent;
      border-bottom: 96px solid color(skin-tone);
      cursor: pointer;
      outline: none;
      transition: all 0.1s;
      &:active {
        transform: scale(1.1);
      }
      i {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 24px;
        line-height: 50px;
        margin: auto;
      }
    }
  }
}
</style>