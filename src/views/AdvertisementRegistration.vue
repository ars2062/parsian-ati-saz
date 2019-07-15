<template>
  <div>
    <Title
      title="ثبت آگهی"
      style="margin:100px auto 35px auto;display:inline-grid;position:relative;left:50%;transform:translateX(-50%)"
    />

    <section
      :class="[$style.choose_category,$style.sec]"
      ref="choose_category"
      style="display:block"
    >
      <div :class="$style.message">لطفا دسته مورد نظر خود را برای ثبت آگهی انتخاب کنید</div>
      <div :class="$style.options">
        <div :class="$style.grid">
          <button
            @click="display('choose_category','choose_property_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
          >
            <span :class="$style.light">ثبت آگهی</span> املاک کلنگی/مشارکت
          </button>
          <button
            @click="display('choose_category','reqister_masterworker',[{text:'ثبت'},{text:'آگهی استاد کار', class:$style.skin_tone}])"
          >
            <span :class="$style.light">ثبت آگهی</span> استادکاران
          </button>
          <button
            @click="display('choose_category','reqister_product',[{text:'ثبت'},{text:'آگهی محصولات', class:$style.skin_tone}])"
          >
            <span :class="$style.light">ثبت آگهی</span> محصولات ساختمانی
          </button>
        </div>
        <p>توجه داشته باشید که ثبت آگهی املاک شامل هزینه می باشید</p>
      </div>
    </section>

    <section
      :class="[$style.choose_property_category,$style.sec]"
      ref="choose_property_category"
      style="display:none"
    >
      <div :class="$style.message">لطفا دسته مورد نظر خود را برای ثبت آگهی انتخاب کنید</div>
      <div :class="$style.options">
        <div :class="$style.grid">
          <button
            @click="display('choose_property_category','reqister_partnership',[{text:'ثبت'},{text:'آگهی املاک مشارکتی', class:$style.skin_tone}])"
          >املاک مشارکتی</button>
          <button
            @click="display('choose_property_category','register_sell',[{text:'ثبت'},{text:'آگهی املاک فروش کلنگی', class:$style.skin_tone}])"
          >املاک فروش کلنگی</button>
        </div>
        <button
          :class="$style.back"
          @click="display('choose_property_category','choose_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت</button>
      </div>
    </section>

    <section
      :class="[$style.reqister_product,$style.sec]"
      ref="reqister_product"
      style="display:none"
    >
      <div
        :class="$style.message"
      >شما دسته ثبت آکهی استاد کار را انتخاب کرده اید لطفا بعد از پر کردن فیلد های زیر دکمه ارسال را بزنید</div>
      <div :class="$style.form">
        <div :class="[$style.form_group,$style.full]">
          <label>محله</label>
          <select>
            <option value="a">نظام آباد</option>
            <option value="a">سبلان</option>
            <option value="a">نیاوران</option>
            <option value="a">زعفرانیه</option>
            <option value="a">افسریه</option>
            <option value="a">یافت آباد</option>
            <option value="a">دهکده المپیک</option>
            <option value="a">پاسداران</option>
          </select>
        </div>
        <div :class="$style.form_group">
          <label>عکس آگهی نمونه محصولات</label>
          <span>گذاشتن نمونه کار الزامی می باشد</span>
          <ImageSelector multiple v-model="images" />
        </div>
        <div :class="$style.form_group">
          <label>لوگوی خود را اضافه کنید</label>
          <span>گذاشتن لوگو الزامی مبیاشد</span>
          <ImageSelector />
        </div>
        <div :class="$style.form_group">
          <label>نام صاحب امتایز</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>نام برند</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>شماره تماس</label>
          <MaskedInput mask="\+98 911 111 1111" placeholder-char="*" style="direction:ltr" />
        </div>
        <div :class="$style.form_group">
          <label>زمینه کاری</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>تاریخ تاسیس (سال)</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="text" />
          <div :class="$style.checkbox_container">
            <Checkbox />
            <span>ایمیل در آگهی نمایش داده نشود</span>
          </div>
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>آدرس شما</label>
          <span>آدرس خود را به طور دقیق وارد کنید</span>
          <input type="text" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>عنوان آگهی</label>
          <span>در عنوان آگهی از مطالب مهم و چشمگیر استفاده کنید</span>
          <input type="text" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات</label>
          <span>یک توضیحات تکمیلی از برند خود</span>
          <textarea rows="10"></textarea>
        </div>
        <button type="submit" @click="goto('register-confirmation')" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back2"
          @click="display('reqister_product','choose_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
      </div>
    </section>

    <section
      :class="[$style.reqister_masterworker,$style.sec]"
      ref="reqister_masterworker"
      style="display:none"
    >
      <div
        :class="$style.message"
      >شما دسته ثبت آکهی استاد کار را انتخاب کرده اید لطفا بعد از پر کردن فیلد های زیر دکمه ارسال را بزنید</div>
      <div :class="$style.form">
        <div :class="[$style.form_group,$style.full]">
          <label>محله</label>
          <select>
            <option value="a">نظام آباد</option>
            <option value="a">سبلان</option>
            <option value="a">نیاوران</option>
            <option value="a">زعفرانیه</option>
            <option value="a">افسریه</option>
            <option value="a">یافت آباد</option>
            <option value="a">دهکده المپیک</option>
            <option value="a">پاسداران</option>
          </select>
        </div>
        <div :class="$style.form_group">
          <label>عکس آگهی نمونه کارها</label>
          <span>گذاشتن نمونه کار الزامی می باشد</span>
          <ImageSelector multiple v-model="images" />
        </div>
        <div :class="$style.form_group">
          <label>لوگوی خود را اضافه کنید</label>
          <span>گذاشتن لوگو الزامی مبیاشد</span>
          <ImageSelector />
        </div>
        <div :class="$style.form_group">
          <label>نام صاحب امتایز</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>نام برند</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>شماره تماس</label>
          <MaskedInput mask="\+98 911 111 1111" placeholder-char="*" style="direction:ltr" />
        </div>
        <div :class="$style.form_group">
          <label>زمینه کاری</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>تاریخ تاسیس (سال)</label>
          <input type="text" />
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="email" />
          <div :class="$style.checkbox_container">
            <Checkbox />
            <span>ایمیل در آگهی نمایش داده نشود</span>
          </div>
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>آدرس شما</label>
          <span>آدرس خود را به طور دقیق وارد کنید</span>
          <input type="text" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات</label>
          <span>یک توضیحات تکمیلی از برند خود</span>
          <textarea rows="10"></textarea>
        </div>
        <button type="submit" @click="goto('register-confirmation')" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back2"
          @click="display('reqister_masterworker','choose_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
      </div>
    </section>

    <section :class="[$style.register_sell,$style.sec]" ref="register_sell" style="display:none">
      <div
        :class="$style.message"
      >شما دسته ثبت آگهی برای فروش کلنگی را انتخاب کرده اید لطفا اطلاعات زیر را تکمیل کنید و کلید ارسال را بزنید</div>
      <div :class="$style.form">
        <div :class="[$style.form_group,$style.full]">
          <label>محله</label>
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
        <div :class="[$style.form_group,$style.full]">
          <label>عکس آگهی</label>
          <span>آگر آگهی شما فاقد عکس می باشد این قسمت را خالی رها کنید</span>
          <ImageSelector multiple v-model="images" />
        </div>
        <div :class="$style.form_group">
          <label>متراژ کل</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>موقعیت</label>
          <ComboListMultiselect2
            placeholder="محله های مورد نظر خود را انتخاب کنید"
            :keywords="[{id:0,name:'شمالی'},{id:1,name:'جنوبی'},{id:2,name:'شرقی'},{id:3,name:'غربی'}]"
          />
        </div>
        <div :class="$style.form_group">
          <label>بر ملک</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>گذر</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>نوع سند</label>
          <ComboList2
            title="نوع سند"
            :items="[{id: 1, text: 'مشارکت در ساخت'},{id: 2, text: 'فروش کلنگی'}]"
            @value="chooseType($event)"
          />
        </div>
        <div :class="$style.form_group">
          <label>پهنه طرح تفضیلی</label>
          <ComboList2
            :items="[{id: 1, text: 'R212'},{id: 2, text: 'R213'}]"
            @value="chooseType($event)"
          />
        </div>
        <div :class="$style.form_group">
          <label>قیمت کل</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>شماره تماس</label>
          <MaskedInput mask="\+98 911 111 1111" placeholder-char="*" style="direction:ltr" />
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="email" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>عنوان آگهی</label>
          <span>در عنوان آگهی از مطالب مهم و چشمگیر استفاده کنید</span>
          <input type="text" placeholder="ملک 20 متری مشارک در سعادت آباد صرافها" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات آگهی</label>
          <span>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید تا شانس موفقیت آگهی شما بیشتر شود</span>
          <textarea rows="10" placeholder="ملک 20 متری مشارک در سعادت آباد صرافها"></textarea>
        </div>
        <button type="submit" @click="goto('register-confirmation')" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back2"
          @click="display('register_sell','choose_property_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
      </div>
    </section>

    <section
      :class="[$style.reqister_partnership,$style.sec]"
      ref="reqister_partnership"
      style="display:none"
    >
      <div
        :class="$style.message"
      >شما دسته ثبت آگهی برای فروش کلنگی را انتخاب کرده اید لطفا اطلاعات زیر را تکمیل کنید و کلید ارسال را بزنید</div>
      <div :class="$style.form">
        <div :class="[$style.form_group,$style.full]">
          <label>محله</label>
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
        <div :class="[$style.form_group,$style.full]">
          <label>عکس آگهی</label>
          <span>آگر آگهی شما فاقد عکس می باشد این قسمت را خالی رها کنید</span>
          <ImageSelector multiple v-model="images" />
        </div>
        <div :class="$style.form_group">
          <label>متراژ کل</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>موقعیت</label>
          <ComboListMultiselect2
            placeholder="محله های مورد نظر خود را انتخاب کنید"
            :keywords="[{id:0,name:'شمالی'},{id:1,name:'جنوبی'},{id:2,name:'شرقی'},{id:3,name:'غربی'}]"
          />
        </div>
        <div :class="$style.form_group">
          <label>بر ملک</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>گذر</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>نوع سند</label>
          <ComboList2
            title="نوع سند"
            :items="[{id: 1, text: 'مشارکت در ساخت'},{id: 2, text: 'فروش کلنگی'}]"
            @value="chooseType($event)"
          />
        </div>
        <div :class="$style.form_group">
          <label>پهنه طرح تفضیلی</label>
          <ComboList2
            :items="[{id: 1, text: 'R212'},{id: 2, text: 'R213'}]"
            @value="chooseType($event)"
          />
        </div>
        <div :class="$style.form_group">
          <label>مبلغ بلاعوض</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>مبلغ قرض الحسنه</label>
          <input type="number" />
        </div>
        <div :class="$style.form_group">
          <label>شماره تماس</label>
          <MaskedInput mask="\+98 911 111 1111" placeholder-char="*" style="direction:ltr" />
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="email" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>عنوان آگهی</label>
          <span>در عنوان آگهی از مطالب مهم و چشمگیر استفاده کنید</span>
          <input type="text" placeholder="ملک 20 متری مشارک در سعادت آباد صرافها" />
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات آگهی</label>
          <span>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید تا شانس موفقیت آگهی شما بیشتر شود</span>
          <textarea rows="10" placeholder="ملک 20 متری مشارک در سعادت آباد صرافها"></textarea>
        </div>
        <button type="submit" @click="goto('register-confirmation')" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back2"
          @click="display('reqister_partnership','choose_property_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
      </div>
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
import ImageSelector from "@/components/form/ImageSelector.vue";
import Checkbox from "@/components/form/Checkbox.vue";
import MaskedInput from "vue-masked-input";
import ComboListMultiselect2 from "@/components/form/ComboListMultiselect2.vue";
import ComboList2 from "@/components/form/ComboList2.vue";
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
    MaskedInput,
    ComboListMultiselect2,
    ComboList2
  },
  data() {
    return {
      headertitle: [
        { text: "صفحه ثبت" },
        { text: "آگهی", class: this.$style.skin_tone }
      ],
      images: []
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
    openLink(name) {
      switch (name) {
        case "rules":
          window.open(
            "http://82.99.242.34/Portal/home/?240980/%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86-%D9%88-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%87%D8%A7"
          );
          break;

        default:
          break;
      }
    },
    display(parentName, name, headertitle) {
      this.$refs[name].style.display = "block";
      this.$refs[parentName].style.display = "none";
      this.headertitle = headertitle;
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.sec {
  padding: 0 90px;
  direction: rtl;
  transition: all 0.1s;
  .message {
    line-height: 35px;
    display: block;
    background-color: rgba(color(skin-tone), 0.57);
    border-radius: 3px;
    font-size: 14px;
    padding: 0 25px;
    margin: 22px 0;
  }
  .options {
    padding: 20px;
    border: 1px solid color(skin-tone);
    background-color: rgba($color: #f2f2f2, $alpha: 0.48);
    border-radius: 4px;
    margin-bottom: 70px;
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 25px;
      button {
        font-size: 16px;
        background-color: color(skin-tone);
        height: 40px;
        line-height: 40px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.1s;
        outline: none;
        &:active {
          transform: scale(1.02);
        }
        &:hover {
          background-color: darken(color(skin-tone), 10%);
        }
      }
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 14px;
      font-weight: 100;
      margin-top: 22px;
    }
  }
  .back {
    font-size: 20px;
    border: none;
    border-radius: 6px;
    background-color: color(skin-tone);
    padding: 2px 15px;
    cursor: pointer;
    transition: all 0.1s;
    outline: none;
    position: relative;
    right: 50%;
    transform: translate(50%);
    margin-top: 12px;
    &:active {
      transform: scale(1.02) translate(50%);
    }
  }
  .back2 {
    font-size: 20px;
    border: none;
    border-radius: 6px;
    background-color: color(skin-tone);
    padding: 2px 15px;
    cursor: pointer;
    transition: all 0.1s;
    outline: none;
    width: fit-content;
    &:active {
      transform: scale(1.02);
    }
  }

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid color(skin-tone);
    background-color: rgba($color: #f2f2f2, $alpha: 0.48);
    position: relative;
    margin-bottom: 70px;
    .full {
      grid-column-start: 1;
      grid-column-end: -1;
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
      background-color: color(skin-tone);
      padding: 15px 0;
      font-size: 20px;
    }
    .back {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
    @include mobile() {
      grid-template-columns: auto;
    }
  }
  @include mobile() {
    padding: 20px;
  }
}
</style>