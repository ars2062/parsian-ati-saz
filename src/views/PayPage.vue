<template>
  <div>
    <Header
      :Title="[{ text: 'صفحه پرداخت' },{ text: 'هزینه', class: this.$style.skin_tone },{text:'آگهی'}]"
      :image="require('@/assets/icons/slide1.svg')"
    />
    <section :class="$style.one">
      <Title title="هزینه ثبت"/>
      <p
        :class="$style.message"
      >توجه داشته باشید که تا زمانی که آگهی توسط ناظر تایید نشود به صفحه پرداخت انتقال پیدا نمیکنید</p>
      <section>
        <ProgressSteps :steps="steps"/>
        <label>مبلغ قابل پرداخت</label>
        <input type="text" value="10,000 تومان" disabled>
        <div :class="$style.checkbox_container">
          <Checkbox/>
          <span>ثبت آگهی در صفحه اصلی و به صورت آماده به امضاء</span>
        </div>
        <button id="confirm" @click="openModal('error_alert')">انتقال به صفحه ای پرداخت</button>
        <button @click="goto(-1)">بازگشت به صفحه قبل</button>
      </section>
    </section>
    <Footer/>
    <Modal ref="error_alert">
        <div :class="$style.error_alert" >
            <img src="@/assets/icons/cancel.svg">
            <p>آگهی شما هنوز توسط ناظر تایید نشده</p>
            <span>این پروسه 1 الی 12 ساعت به طول می انجامد لطفا منتظر بمایند</span>
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
        { text: "تایید شماره", class: this.$style.done },
        { text: "تایید ناظر", class: this.$style.current_step },
        { text: "پرداخت" },
        { text: "تایید نهایی" }
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
    label {
      font-size: 30px;
      margin-top: 15px;
    }
    .checkbox_container {
      width: fit-content;
      display: flex;
      flex-direction: row;
      justify-items: center;
      right: 50%;
      position: relative;
      transform: translateX(50%);
      margin-bottom: 10px;
      label{
          margin: 0 10px;
      }
    }
    input {
      width: 300px;
      border: none;
      border-radius: 6px;
      box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
      padding: 16px 0;
      margin: 20px 0;
      right: 50%;
      position: relative;
      transform: translateX(50%);
      text-align: center;
      direction: rtl;
      font-size: 30px;
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
  }
}
.error_alert{
    p,span{
        text-align: center;
        margin: 5px 0;
    }
    p{
        font-size: 25px;
    }
    span{
        font-size: 18px;
        font-weight: 100;
        width: 100%;
        display: block;
    }
    img{
        @include size(140px,140px);
        @include HorizontalCenter();
        margin-top: 12vh;
    }
}
</style>