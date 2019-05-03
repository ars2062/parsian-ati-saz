<template>
  <div>
    <Header
      :Title="[{text:'کنعان پاسبانی'}]"
      :subtitle="[{text:'دارای 27 نمونه کار'}]"
      :image="require('@/assets/icons/49372.jpg')"
    />
    <section :class="$style.detail">
      <div :class="$style.gridContainer">
        <div :class="[$style.card, $style.main]">
          <div :class="$style.content">
            <img src="@/assets/icons/450-336-225x168.jpg">
            <h1>کنعان پاسبانی</h1>
          </div>
        </div>
        <div :class="[$style.card, $style.project_info]">
          <span :class="$style.title">اطلاعات پروژه</span>
          <div :class="$style.content">
            <span :class="$style.label">صاحب امتیاز</span>
            <p>مهندس کنعان پاسبانی</p>
            <span :class="$style.label">زمینه ای کاری</span>
            <p>طراح داخلی ، معمار</p>
            <span :class="$style.label">تاریخ تاسیس</span>
            <p>1375</p>
            <span :class="$style.label">تلفن</span>
            <p>22635793 , 22635794</p>
            <span :class="$style.label">آدرس</span>
            <p>
              شریعتی، خیابان دولت، بعد از خیابان
              نعمتی (کیکاووس)، پلاک 383،
              طبقه 4، واحد 16
            </p>
          </div>
        </div>
        <div :class="[$style.card, $style.description]">
          <span :class="$style.title">توضیحات</span>
          <div :class="$style.content">
            طراحی فاز یک و دو،طراحی داخلی و اجرای لوکس
            اهداف: حرکت در جهت افزایش میزان رضایتمندی
            مخاطبین چه در کیفیت ارائه خدمات و چه در
            سطح کیفیت آن حتی اگر یک گام باشد.
            دیدگاه: افزایش کیفیت زندگی و حفظ ارزشهای
            معماری و فرهنگی و تعالی جایگاه معماری ایرانی
            ، رسالتی است که بر دوش خود احساس میکنیم.
          </div>
        </div>
        <div :class="[$style.card, $style.secondary_image]">
          <img src="@/assets/icons/37529269190_899c89b0ea_o.jpg">
        </div>
      </div>
      <DetailImageViewer title="عکس محصولات"/>
      <button :class="$style.more">
        <span>نمایش نمونه کار های بیشتر</span>
      </button>
    </section>
    <AreYouAMasterWorker/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";
import AreYouAMasterWorker from "@/components/AreYouAMasterWorker.vue";
import DetailImageViewer from "@/components/DetailImageViewer.vue";
export default {
  components: {
    Header,
    Footer,
    Modal,
    AreYouAMasterWorker,
    DetailImageViewer
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
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.detail {
  direction: rtl;
  .gridContainer {
    display: grid;
    grid-template-areas:
      "main project_info description"
      "secondary_image project_info description";
    grid-template-columns: 265px 1fr 1fr;
    grid-gap: 15px;
    padding: 90px;
    .card {
      border: 1px solid color(skin-tone);
      border-radius: 6px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      .title {
        display: block;
        line-height: 60px;
        font-size: 18px;
        padding: 0 30px;
        border-radius: 6px 6px 0 0;
        background-color: color(skin-tone);
      }
      .content {
        padding: 15px;
      }
    }
    .main {
      grid-area: main;
      text-align: center;
      img {
        width: 95%;
      }
      h1 {
        font-size: 18px;
        font-weight: normal;
      }
    }
    .secondary_image {
      grid-area: secondary_image;
      img {
        width: 100%;
      }
    }
    .project_info {
      grid-area: project_info;
      font-size: 18px;
      .content {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 12px;
      }
      .label {
        font-weight: 100;
      }
      p {
        line-height: 40px;
        background-color: #f5f5f5;
        border-radius: 6px;
        padding: 0 12px;
      }
    }
    .description {
      grid-area: description;
      text-align: justify;
      font-size: 18px;
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
  right: 50%;
  transform: translateX(50%);
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