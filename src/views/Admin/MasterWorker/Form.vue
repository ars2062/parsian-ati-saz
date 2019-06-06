<template>
  <div :class="$style.productForm">
    <h1>ثبت آگهی استاد کار</h1>
    <form :class="$style.form" @submit.prevent="()=>{}">
      <div :class="[$style.form_group,$style.full]">
        <label>یکی از محله های تهران را انتخاب کنید</label>
        <ComboList2
          title="نوع سند"
          :items="[
              {id: 1, text: 'نظام آباد'},
              {id: 2, text: 'سبلان'},
              {id: 3, text: 'نیاوران'},
              {id: 4, text: 'زعفرانیه'},
              {id: 5, text: 'افسریه'},
              {id: 6, text: 'یافت آباد'},
              {id: 7, text: 'دهکده المپیک'},
              {id: 8, text: 'پاسداران'}
            ]"
          @value="chooseType($event)"
        />
      </div>
      <div :class="$style.form_group">
        <label>عکس آگهی نمونه کار ها</label>
        <span>گذاشتن نمونه کار الزامی می باشد</span>
        <ImageSelector multiple/>
      </div>
      <div :class="$style.form_group">
        <label>لوگوی خود را اضافه کنید</label>
        <span>گذاشتن لوگو الزامی مبیاشد</span>
        <ImageSelector/>
      </div>
      <div :class="$style.form_group">
        <label>نام صاحب امتایز</label>
        <input type="text">
      </div>
      <div :class="$style.form_group">
        <label>نام برند</label>
        <input type="text">
      </div>
      <div :class="$style.form_group">
        <label>شماره تماس</label>
        <MaskedInput
          mask="\+98 911 111 1111"
          placeholder-char="*"
          style="direction:ltr;    width: calc(100% - 60px);"
        />
      </div>
      <div :class="$style.form_group">
        <label>زمینه کاری</label>
        <input type="text">
      </div>
      <div :class="$style.form_group">
        <label>تاریخ تاسیس</label>
        <input type="number">
      </div>
      <div :class="$style.form_group">
        <label>ایمیل شما</label>
        <input type="email">
      </div>
      <div :class="[$style.form_group, $style.full]">
        <label>آدرس شما</label>
        <span>آدرس خود را به طور دقیق وارد کنید</span>
        <input type="text">
      </div>
      <div :class="[$style.form_group, $style.full]">
        <label>توضیحات آگهی</label>
        <span>یک توضیحات تکمیلی از برند خود</span>
        <textarea rows="10"></textarea>
      </div>
      <button type="submit" :class="$style.full">ارسال آگهی</button>
      <button :class="$style.back">بازگشت به صفحه قبل</button>
    </form>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import ImageSelector from "@/components/form/ImageSelector.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import MaskedInput from "vue-masked-input";
import ComboListMultiselect2 from "@/components/form/ComboListMultiselect2.vue";
import ComboList2 from "@/components/form/ComboList2.vue";
export default {
  name: "MasterWorkerForm",
  components: {
    Modal,
    ImageSelector,
    Checkbox,
    MaskedInput,
    ComboListMultiselect2,
    ComboList2
  },
  data() {
    return {
      images: [],
      wayofcontact: ""
    };
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.productForm {
  h1 {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 8px;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px;
    //padding: 20px;
    border-radius: 6px;
    border: 1px solid #6970b2;
    background-color: rgba($color: #f2f2f2, $alpha: 0.48);
    position: relative;
    margin: 0 70px;
    margin-bottom: 70px;
    padding: 15px;

    .full {
      grid-column: span 2;
    }
    .form_group {
      display: flex;
      flex-direction: column;
      label {
        font-size: 20px;
        margin-bottom: 8px;
      }
      span {
        font-size: 16px;
        font-weight: 100;
        margin-top: -16px;
        margin-bottom: 8px;
      }
      input,
      select,
      input[type="text"],
      textarea,
      input[type="email"],
      input[type="number"] {
        background-color: rgba($color: #fff, $alpha: 0.57);
        border-radius: 6px;
        border: none;
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
        padding: 15px 30px;
        outline: none;
        &:disabled {
          background-color: #e0e0e0;
        }
      }
      option {
        width: 100%;
      }
      textarea {
        resize: vertical;
      }
      .checkbox_container {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        span {
          margin: 0;
          margin-right: 10px;
          line-height: 30px;
          font-size: 16px;
        }
      }
    }
    button[type="submit"] {
      width: 50%;
      margin: auto;
      border: none;
      border-radius: 6px;
      background-color: #6970b2;
      padding: 15px 0;
      font-size: 20px;
      color: white;
    }
    .back {
      background-color: #6970b2;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 0 20px;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    .radio_container {
      label {
        display: block;
        @include size(25px);
        background-color: #c2c6ee;
        border-radius: 6px;
        position: relative;
        cursor: pointer;
        &::after {
          @include content();
          @include size(0px);
          border-radius: 15px;
          top: 12.5px;
          left: 12.5px;
          transition: all 0.5s;
          background-color: #6970b2;
        }
      }
      input:checked ~ label::after {
        width: 15px !important;
        height: 15px !important;
        top: 5px !important;
        left: 5px !important;
      }
    }
  }
}
</style>