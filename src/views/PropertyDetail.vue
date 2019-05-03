<template>
  <div>
    <Header
      :Title="[{text:'261 متری سعادت آباد'}]"
      :subtitle="[{text:'ثبت شده در 22 بهمن 97'}]"
      :image="require('@/assets/icons/slide1.svg')"
    />
    <section :class="$style.detail">
      <div :class="$style.head">
        <button @click="goback">بازگشت به صفحه قبل</button>
        <button>
          <i class="fas fa-star"></i>آماده به امضا
        </button>
        <span>کد آگهی: 298</span>
      </div>
      <div :class="$style.introdoction">
        <h1>تهران، سعادت آباد</h1>
        <h2>صرافها خیابان 19 غربی</h2>
      </div>
      <button :class="$style.location">
        <i class="fas fa-map-marker"></i>
      </button>
      <img src="@/assets/icons/post10-lg.jpg">
      <button :class="$style.getPhone" @click="openModal('contactInfo')">دریافت شماره تماس</button>
      <div :class="$style.actions">
        <button>برای مشارکت</button>
        <button>نشان کردن آگهی</button>
      </div>
      <div :class="$style.detailHead">
        <h1>261 متری سعادت آباد خیابان صرافها</h1>
        <h3>مبلغ بلاعوض : 1.000.000.000</h3>
      </div>
      <div :class="$style.detailContent">
        <span :class="$style.bar">
          <span :class="$style.bold">بر:</span> 12 متر
        </span>
        <span :class="$style.gozar">
          <span :class="$style.bold">گذر:</span> 12 متر
        </span>
        <p>
          بهترین لوکیشن (24متری)
          پلن بی نظیر
          کم واحد
          لابی وسرایداری
          2پارکینگ سندی
          نوساز کلیدنخورده
          شرایط پرداخت عالی
          روبه آفتاب غرق نور
          املاک
        </p>
      </div>
    </section>
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
  padding: 150px;
  .head {
    border-bottom: 1px solid #707070;
    padding: 5px;
    height: 40px;
    button {
      float: right;
      margin-top: 5px;
      margin-left: 10px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      padding: 0 15px;
      height: 30px;
      line-height: 30px;
      &:first-of-type {
        background-color: color(skin-tone);
      }
      &:last-of-type {
        background-color: color(red);
        color: white;
        i {
          margin-left: 10px;
        }
      }
    }
    span {
      float: left;
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      margin-top: 5px;
    }
  }
  .introdoction {
    float: left;
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
    h1 {
      font-size: 20px;
      font-weight: normal;
      line-height: 20px;
    }
    h2 {
      font-size: 14px;
      font-weight: 100;
    }
  }
  button.location {
    float: right;
    @include size(35px, 35px);
    line-height: 35px;
    border-radius: 35px;
    border: none;
    background-color: color(skin-tone);
    font-size: 17px;
    margin: 20px;
  }
  img {
    width: 100%;
    border-radius: 6px;
  }
  button.getPhone {
    float: right;
    border: none;
    border-radius: 6px;
    background-color: color(chocolate);
    color: white;
    padding: 10px 40px;
    font-size: 20px;
  }
  .actions {
    float: left;
    display: flex;
    flex-direction: column;
    button {
      border: none;
      border-radius: 6px;
      padding: 0 30px;
      font-size: 14px;
      margin-bottom: 5px;
      &:first-of-type {
        background-color: color(skin-tone);
      }
      &:last-of-type {
        background-color: white;
        border: 1px solid #707070;
        font-weight: 100;
      }
    }
  }
  .detailHead {
    width: 100%;
    float: right;
    margin-top: 35px;
    border-bottom: 1px solid #707070;
    h1 {
      font-size: 30px;
      font-weight: normal;
      float: right;
    }
    h3 {
      font-size: 20px;
      margin-top: 20px;
      font-weight: 100;
      float: left;
    }
  }
  .detailContent {
    width: 100%;
    float: right;
    margin-bottom: 50px;
    .bold {
      font-weight: normal;
      font-size: 20px;
    }
    .bar {
      font-weight: 100;
    }
    .gozar {
      font-weight: 100;
    }
    p {
      font-weight: 100;
      font-size: 20px;
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
      color: darken(color(grullo),20%);
    }
    &:last-of-type{
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