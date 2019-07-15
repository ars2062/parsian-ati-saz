<template>
  <div>
    <section :class="$style.one">
      <Title title="تایید شماره" />
      <p
        :class="$style.message"
      >آگهی شما ثبت و در صف بررسی قرار گرفت بعد از تایید ناظر شما به صورت خودکار به صفحه ای پرداخت منتقل می شوید</p>
      <section>
        <ProgressSteps :steps="steps" />
        <p>
          یک پیام حاوی کد تایید به شماره
          <span :class="$style.bold">09121234567</span> ارسال گردید
        </p>
        <label>کد را وارد کنید</label>
        <MaskedInput mask="1 1 1 1 1 1" placeholder-char="-" />
        <a
          v-if="sendAgainTime>0"
          :class="$style.sendAgain"
          disabled
        >{{sendAgainTime}} تا ارسال دوباره کد</a>
        <a href="#" v-if="sendAgainTime==0" :class="$style.sendAgain">ارسال دوباره کد</a>
        <button id="confirm" @click="goto('supervisor-confirmation')">تایید شماره</button>
        <button @click="goto(-1)">بازگشت به صفحه قبل</button>
        <button>ویرایش شماره تماس</button>
      </section>
    </section>
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
import ProgressSteps from "@/components/ProgressSteps.vue";
import ImageSelector from "@/components/form/ImageSelector.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import MaskedInput from "vue-masked-input";
export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    ImageSelector,
    Checkbox,
    ProgressSteps,
    MaskedInput
  },
  data() {
    return {
      steps: [
        { text: "ثبت کردن آگهی", class: this.$style.done },
        { text: "تایید شماره", class: this.$style.current_step },
        { text: "تایید ناظر" },
        { text: "پرداخت" }
      ],
      sendAgainTime: 120,
      interval: null
    };
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
    display(parentName, name, headertitle) {
      this.$refs[name].style.display = "block";
      this.$refs[parentName].style.display = "none";
      this.headertitle = headertitle;
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.sendAgainTime--;
      if (this.sendAgainTime == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
section.one {
  direction: rtl;
  padding: 80px;
  .message {
    font-size: 20px;
    line-height: 65px;
    margin: 35px 0;
    background-color: rgba($color: color(skin-tone), $alpha: 0.57);
    padding: 0 25px;
    border-radius: 6px;
    @include mobile() {
      font-size: 15px;
      line-height: 30px;
      padding: 10px 25px;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background-color: rgba($color: #f2f2f2, $alpha: 0.48);
    border-radius: 6px;
    border: 1px solid color(skin-tone);
    padding: 20px;
    padding-bottom: 80px;
    position: relative;
    p {
      font-size: 25px;
      font-weight: 100;
      margin-top: 20px;
      .bold {
        font-size: 28px;
        font-weight: normal;
      }
    }
    label {
      font-size: 18px;
    }
    input {
      width: 300px;
      border: none;
      border-radius: 6px;
      box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
      padding: 16px 0;
      margin: 20px 0;
      margin-bottom: auto;
      right: 50%;
      position: relative;
      transform: translateX(50%);
      text-align: center;
      direction: ltr;
    }
    a {
      margin-bottom: 10px;
    }
    button {
      border: none;
      width: 300px;
      border-radius: 6px;
      background-color: color(skin-tone);
      font-size: 20px;
      line-height: 65px;
      cursor: pointer;
      right: 50%;
      position: relative;
      transform: translateX(50%);
    }

    button:nth-of-type(2) {
      position: absolute;
      bottom: 6px;
      right: 6px;
      transform: none;
      font-size: 16px;
      line-height: 40px;
      width: auto;
      padding: 0 30px;
    }

    button:nth-of-type(3) {
      position: absolute;
      bottom: 6px;
      left: 6px;
      transform: none;
      font-size: 16px;
      line-height: 40px;
      width: auto;
      padding: 0 30px;
    }

    @include mobile() {
      padding: 20px 10px;
      padding-bottom: 80px;
      input {
        width: 100%;
      }
      button:nth-of-type(1) {
        width: 100%;
      }
    }
    @include mobile(490px){
      padding-bottom: 20px;
      button:nth-of-type(2),
      button:nth-of-type(3){
        position: relative;
        left: auto;
        right: auto;
        bottom: auto;
        margin-top: 10px;
      }
    }
  }
  @include mobile() {
    padding: 80px 20px;
  }
}
</style>