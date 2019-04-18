<template>
  <div :class="$style.home">
    <Header
      :Title="[{text:'تخصصی'},{text:'ترین سایت', class:$style.light},{text:'مشارکت', class:$style.skin_tone},{text:'در', class:$style.light},{text:'ساخت'}]"
      :subtitle="[{text:'اخبار روز مسکن',class:$style.skin_tone}]"
      :image="require('@/assets/icons/slide1.svg')"
    />
    <Searchcard></Searchcard>
    <section :class="$style.one">
      <Title title="دسترسی سریع به امکانات سایت" style="margin-top:90px"/>
      <div :class="$style.cards">
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>قوانین نظام مهندسی</h3>
          <p>
            لیست استاد کاران درجه یک ساختمان
            استاد کار مورد نظر خود را با دیدن
            نمونه کار انتخاب کنید
          </p>
          <button @click="goto('rules')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>لیست تلفن</h3>
          <p>
            لیستی تلفن مهندسان ، مشاوران
            و طراحان ساختمانی
            به آسانی یک کلیک دریافت کنید
          </p>
          <button @click="Alert('به زودی...')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>لیست دفاتر خدمات</h3>
          <p>
            لیستی بسیار قوی از دفاتر خدمات
            شهرداری تهران را ما جمع آوردی
            و در اختیار شما قرار داده ایم
          </p>
          <button @click="openModal('dafater-khadamat-shahri')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>لیست استاد کاران</h3>
          <p>
            لیست استاد کاران درجه یک ساختمان
            استاد کار مورد نظر خود را با دیدن
            نمونه کار انتخاب کنید
          </p>
          <button @click="goto('masters')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
      </div>
    </section>
    <section :class="$style.two">
      <Title title="لوازم ساختمانی" style="margin-top:80px"/>
      <div :class="$style.posts">
        <div :class="$style.post" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
          <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
          <div :class="$style.buttonContainer">
            <button @click="openModal('postDetail')">
              <img src="@/assets/icons/diagonal-resize.svg">
            </button>
          </div>
        </div>
      </div>
      <Modal ref="postDetail" :class="$style.postDetail">
        <div :class="$style.imageContainer">
          <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
          <button :class="$style.more">برای نمایش اطلاعات تکمیلی کلیک کنید</button>
          <section>
            <p>لوزارم ساختمانی برادران بیژن بجز قاسم</p>
            <button>نمایش آدرس</button>
          </section>
        </div>
      </Modal>
    </section>
    <section :class="$style.three">
      <Title title="املاک طلایی این هفته" style="margin-top:50px"/>
      <div :class="$style.goldenPosts">
        <a href="/property-detail" :class="$style.post" v-for=" i in [1,2,3,4,5,6]" :key="i">
          <div :class="$style.ribbonContainer">
            <div :class="$style.ribbon">
              <img src="@/assets/icons/star.svg">
            </div>
          </div>
          <div :class="$style.type">مشارکت در ساخت</div>
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
        </a>
      </div>
      <button :class="$style.more">
        <span>نمایش آگهی بیشتر</span>
      </button>
    </section>
    <section :class="$style.four">
      <h2>
        <span>
          <i></i>آیا شما هم یک مشاور املاک هستید ؟
          <i></i>
        </span>
      </h2>
      <p>
        چنانچه مشاور املاک هستید به راحتی امکانات سایت استفاده کنید و آگهی بزنید
        این سایت تخصصی میباشد و در زمینه مشارکت و فروش املاک کلنگی فعالیت میکند
        با زدن آکهی در این زمینه نتیجه بی نظیر بگیرید
      </p>
      <section :class="$style.left">
        <img src="@/assets/icons/252945-P46MBA-946.png">
        <button>ثبت آگهی</button>
      </section>
    </section>
    <section :class="$style.five">
      <Title title="استاد کاران برند منطقه" style="margin-top:65px"/>
      <CardSlider>
        <div v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i" :class="$style.card">
          <img src="@/assets/icons/450-3366-225x168.jpg">
          <h4>کنعان پاسبانی</h4>
          <span>کار {{i}}</span>
          <button>نمایش نمونه کارها</button>
        </div>
      </CardSlider>
      <button :class="$style.more">
        <span>نمایش به صورت کامل</span>
      </button>
    </section>
    <section :class="$style.six">
      <Title title="سازنده گانی که باما کار میکنند"/>
      <div :class="$style.collaborators">
        <a href="#" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
          <img src="@/assets/icons/Kamyar-Maroufzadeh-225x168.jpg">
        </a>
      </div>
    </section>
    <Footer/>
    <Modal :class="$style.dafater_khadamat_shahri" ref="dafater-khadamat-shahri">
      <h3>لیست دفاتر خدمات شهرداری</h3>
      <h4>لطفا منطقه مور نظر خود را انتخاب کنید</h4>
      <ul>
        <li v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]" :key="i">
          <a href="#">منطقه {{i}}</a>
        </li>
      </ul>
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
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.home {
  section.one {
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      .card {
        text-align: center;
        padding: 60px 20px;
        color: color(chocolate);
        display: grid;
        grid-template-rows: repeat(4, auto);
        * {
          margin: auto;
          text-align: center;
        }
        h3 {
          font-size: 30px;
        }
        img {
          width: 60px;
        }
        p {
          margin: 10px 0;
          min-height: 125px;
          vertical-align: middle;
          font-size: 20px;
          font-weight: 100;
        }
        button {
          position: relative;
          background-color: white;
          border: 1px solid color(chocolate);
          color: color(chocolate);
          @include size(50px, 50px);
          transform: rotate(45deg);
          outline: none;
          cursor: pointer;
          //margin-top: 35px;
          transition: all 0.1s;
          &:active {
            transform: scale(1.05) rotate(45deg);
          }
          * {
            margin: auto;
            position: absolute;
            //transform: rotate(-45deg);
          }
          img {
            width: 13px;
            transform: rotate(-45deg) translate(50%, -50%);
          }
          span {
            top: 100%;
            left: 100%;
            transform: rotate(-45deg) translateX(-12.5%);
          }
        }
      }
    }
  }
  section.two {
    .posts {
      margin-top: 55px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 1fr);
      position: relative;
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
  }
  section.three {
    .goldenPosts {
      direction: rtl;
      margin-top: 85px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: 40px;
      padding: 0 100px;
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
        }
      }
    }
    button {
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
  section.four {
    min-height: 445px;
    background: image(testimonials-bg, jpg) no-repeat;
    background-size: cover;
    padding-top: 145px;
    display: grid;
    grid-template-areas:
      "title title"
      "left right";
    h2 {
      grid-area: title;
      text-align: center;
      color: color(skin-tone);
      position: relative;
      font-size: 32px;
      font-weight: 100;
      span {
        display: inline-block;
        position: relative;
        i {
          content: "";
          display: block;
          position: absolute;
          height: 1px;
          background-color: color(skin-tone);
          top: 50%;
          width: 25vw;
          &::before {
            @include content();
            @include size(8px, 8px);
            background-color: color(skin-tone);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          &:first-of-type {
            right: 100%;
            margin-right: 15px;
            &::before {
              right: 100%;
            }
          }
          &:last-of-type {
            left: 100%;
            margin-left: 15px;
            &::before {
              left: 100%;
            }
          }
        }
      }
    }
    p {
      grid-area: right;
      font-size: 25px;
      font-weight: 100;
      color: white;
      text-align: right;
      margin-right: 65px;
      margin-left: 200px;
    }
    .left {
      grid-area: left;
      margin-left: 135px;
      display: flex;
      flex-direction: column;
      img {
        @include size(170px, 170px);
        border-radius: 170px;
        overflow: hidden;
        border: 5px solid white;
      }
      button {
        padding: 7px 47px;
        margin: 30px 0;
        background: white;
        border-radius: 6px;
        border: none;
        cursor: pointer;
      }
    }
  }
  section.five {
    .card {
      border-radius: 6px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      background-color: white;
      position: relative;
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
  section.six {
    .collaborators {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 150px);
      margin: 50px 0;
      a {
        img {
          @include size(100%, 100%);
        }
      }
    }
  }
  .dafater_khadamat_shahri {
    direction: rtl;
    text-align: center;
    h3 {
      font-size: 30px;
      font-weight: normal;
    }
    h4 {
      font-size: 20px;
      font-weight: normal;
      color: color(chocolate);
      margin-bottom: 15px;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      grid-gap: 12px;
      a {
        display: block;
        background-color: color(skin-tone);
        color: color(chocolate);
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        text-decoration: none;
        border-radius: 6px;
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
      }
      li:last-of-type {
        grid-column: span 3;
      }
    }
  }
  .postDetail {
    .imageContainer {
      position: relative;
      img {
        width: 100%;
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
        background-color: rgba($color: #000000, $alpha: .85);
        border: 2px solid color(skin-tone);
        direction: rtl;
        position: absolute;
        left: auto;
        top: 75%;
        right: 0;
        *{
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
}
</style>
