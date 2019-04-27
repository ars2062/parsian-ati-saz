<template>
  <div>
    <Header :Title="this.headertitle" :image="require('@/assets/icons/slide1.svg')"/>

    <Title title="ثبت آگهی" style="margin-top:60px;margin-bottom:35px;"/>

    <section
      :class="[$style.choose_category,$style.sec]"
      ref="choose_category"
      style="display:block"
    >
      <div :class="$style.message">لطفا دسته مورد نظر خود را برای ثبت آگهی انتخاب کنید</div>
      <div :class="$style.options">
        <div :class="$style.grid">
          <button
            @click="display('choose_category','reqister_product',[{text:'ثبت'},{text:'آگهی محصولات', class:$style.skin_tone}])"
          >ثبت آگهی محصولات ساختمانی</button>
          <button
            @click="display('choose_category','reqister_masterworker',[{text:'ثبت'},{text:'آگهی استاد کار', class:$style.skin_tone}])">ثبت آگهی استاد کار</button>
          <button
            @click="display('choose_category','choose_property_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
          >املاک</button>
        </div>
        <p>توجه داشته باشید که پارسیان آتی ساز فقط در این دو زمینه به صورت تخصصی فعالت می کند</p>
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
            @click="display('choose_property_category','reqister_partnership',[{text:'ثبت'},{text:'آگهی املاک مشارکتی', class:$style.skin_tone}])">املاک مشارکتی</button>
          <button
            @click="display('choose_property_category','reqister_clutter',[{text:'ثبت'},{text:'آگهی املاک فروش کلنگی', class:$style.skin_tone}])">املاک فروش کلنگی</button>
        </div>
        <p>توجه داشته باشید که پارسیان آتی ساز فقط در این دو زمینه به صورت تخصصی فعالت می کند</p>
        <button
          :class="$style.back"
          @click="display('choose_property_category','choose_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
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
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
          </select>
        </div>
        <div :class="$style.form_group">
          <label>عکس آگهی نمونه محصولات</label>
          <span>گذاشتن نمونه کار الزامی می باشد</span>
          <ImageSelector multiple v-model="images"/>
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
          <input type="text" placeholder="09*********">
        </div>
        <div :class="$style.form_group">
          <label>زمینه کاری</label>
          <input type="text">
          <div :class="$style.checkbox_container">
            <input type="checkbox">
            <span>ایمیل در آگهی نمایش داده نشود</span>
          </div>
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>آدرس شما</label>
          <span>آدرس خود را به طور دقیق وارد کنید</span>
          <input type="text">
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات</label>
          <span>یک توضیحات تکمیلی از برند خود</span>
          <textarea rows="10"></textarea>
        </div>
        <button type="submit" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back"
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
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
          </select>
        </div>
        <div :class="$style.form_group">
          <label>عکس آگهی نمونه کارها</label>
          <span>گذاشتن نمونه کار الزامی می باشد</span>
          <ImageSelector multiple v-model="images"/>
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
          <input type="text" placeholder="09*********">
        </div>
        <div :class="$style.form_group">
          <label>زمینه کاری</label>
          <input type="text">
        </div>
        <div :class="$style.form_group">
          <label>تاریخ تاسیس</label>
          <input type="text">
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="email">
          <div :class="$style.checkbox_container">
            <input type="checkbox">
            <span>ایمیل در آگهی نمایش داده نشود</span>
          </div>
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>آدرس شما</label>
          <span>آدرس خود را به طور دقیق وارد کنید</span>
          <input type="text">
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات</label>
          <span>یک توضیحات تکمیلی از برند خود</span>
          <textarea rows="10"></textarea>
        </div>
        <button type="submit" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back"
          @click="display('reqister_masterworker','choose_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
      </div>
    </section>
    
    <section
      :class="[$style.reqister_clutter,$style.sec]"
      ref="reqister_clutter"
      style="display:none"
    >
      <div
        :class="$style.message"
      >شما دسته ثبت آگهی برای فروش کلنگی را انتخاب کرده اید لطفا اطلاعات زیر را تکمیل کنید و کلید ارسال را بزنید </div>
      <div :class="$style.form">
        <div :class="[$style.form_group,$style.full]">
          <label>محله</label>
          <select>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
          </select>
        </div>
        <div :class="[$style.form_group,$style.full]">
          <label>عکس آگهی</label>
          <span>آگر آگهی شما فاقد عکس می باشد این قسمت را خالی رها کنید</span>
          <ImageSelector multiple v-model="images"/>
        </div>
        <div :class="$style.form_group">
          <label>متراژ</label>
          <input type="number">
        </div>
        <div :class="$style.form_group">
          <label>مبلغ</label>
          <input type="number">
        </div>
        <div :class="$style.form_group">
          <label>شماره تماس</label>
          <input type="text" placeholder="09*********">
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="email">
          <div :class="$style.checkbox_container">
            <input type="checkbox">
            <span>ایمیل در آگهی نمایش داده نشود</span>
          </div>
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>عنوان آگهی</label>
          <span>در عنوان آگهی از مطالب مهم و چشمگیر استفاده کنید</span>
          <input type="text">
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات آگهی</label>
          <span>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید تا شانس موفقیت آگهی شما بیشتر شود</span>
          <textarea rows="10"></textarea>
        </div>
        <button type="submit" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back"
          @click="display('reqister_clutter','choose_property_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
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
      >شما دسته ثبت آگهی برای فروش کلنگی را انتخاب کرده اید لطفا اطلاعات زیر را تکمیل کنید و کلید ارسال را بزنید </div>
      <div :class="$style.form">
        <div :class="[$style.form_group,$style.full]">
          <label>محله</label>
          <select>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
            <option value="a">a</option>
          </select>
        </div>
        <div :class="[$style.form_group,$style.full]">
          <label>عکس آگهی</label>
          <span>آگر آگهی شما فاقد عکس می باشد این قسمت را خالی رها کنید</span>
          <ImageSelector multiple v-model="images"/>
        </div>
        <div :class="$style.form_group">
          <label>متراژ بر</label>
          <input type="number">
        </div>
        <div :class="$style.form_group">
          <label>متراژ گذر</label>
          <input type="number">
        </div>
        <div :class="$style.form_group">
          <label>مبلغ بلاعوض</label>
          <input type="number">
        </div>
        <div :class="$style.form_group">
          <label>متراژ کل</label>
          <input type="number">
        </div>
        <div :class="$style.form_group">
          <label>شماره تماس</label>
          <input type="text" placeholder="09*********">
        </div>
        <div :class="$style.form_group">
          <label>ایمیل شما</label>
          <input type="email">
          <div :class="$style.checkbox_container">
            <input type="checkbox">
            <span>ایمیل در آگهی نمایش داده نشود</span>
          </div>
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>عنوان آگهی</label>
          <span>در عنوان آگهی از مطالب مهم و چشمگیر استفاده کنید</span>
          <input type="text">
        </div>
        <div :class="[$style.form_group, $style.full]">
          <label>توضیحات آگهی</label>
          <span>جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید تا شانس موفقیت آگهی شما بیشتر شود</span>
          <textarea rows="10"></textarea>
        </div>
        <button type="submit" :class="$style.full">ارسال آگهی</button>
        <button
          :class="$style.back"
          @click="display('reqister_partnership','choose_property_category',[{text:'صفحه ثبت'},{text:'آگهی', class:$style.skin_tone}])"
        >بازگشت به صفحه قبل</button>
      </div>
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
import ImageSelector from "@/components/form/ImageSelector.vue";
export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    ImageSelector
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
    line-height: 65px;
    display: block;
    background-color: rgba(color(skin-tone), 0.57);
    border-radius: 6px;
    font-size: 20px;
    padding: 0 25px;
    margin: 22px 0;
  }
  .options {
    padding: 20px;
    border: 1px solid color(skin-tone);
    background-color: rgba($color: #f2f2f2, $alpha: 0.48);
    border-radius: 6px;
    margin-bottom: 70px;
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 25px;
      button {
        font-size: 25px;
        background-color: rgba(color(skin-tone), 0.57);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.1s;
        outline: none;
        &:active {
          transform: scale(1.02);
        }
      }
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: 100;
      margin-top: 45px;
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
  }
}
</style>