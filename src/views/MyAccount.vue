<template>
  <div>
    <Header :Title="[{ text: 'حساب شما' }]" :image="require('@/assets/icons/slide1.svg')" />
    <Title title="حساب کاربری آگهی ها" style="margin:60px 0;" />
    <div :class="$style.ads">
      <div :class="$style.tabs">
        <button
          :class="[$style.tab,this.displayConfirmed?$style.active:'']"
          @click="displayTab('confirmed')"
        >آگهی های ثبت شده</button>
        <button
          :class="[$style.tab,this.displayNotconfirmed?$style.active:'']"
          @click="displayTab('notconfirmed')"
        >آگهی های در دست تایید</button>
        <button
          :class="[$style.tab,this.displayStars?$style.active:'']"
          @click="displayTab('stars')"
        >آگهی های نشان شده</button>
      </div>
      <section
        ref="confirmed"
        :class="[$style.tab_view,$style.confirmed]"
        :style="this.displayConfirmedStyle"
      >
        <div :class="$style.post" v-for=" i in [1,2,3,4,5,6]" :key="i">
          <div :class="[$style.type,$style.green]">ثبت شده</div>
          <img :class="$style.mainImage" src="@/assets/icons/04.jpg" />
          <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
          <ul>
            <li>متراژ وموقعيت : ٢٦٠متر جنوبى ،شمالى</li>
            <li>بروگذر : بر ١٠گذر ١٠و٨متر</li>
            <li>پهنه طرح تفصيلي : r122</li>
            <li>تعداد مالك :٢مالك</li>
          </ul>
          <hr />
          <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
          <div :class="$style.actions">
            <button>ویرایش آگهی</button>
            <button :class="$style.red">حذف آگهی</button>
          </div>
        </div>
      </section>
      <section
        ref="notconfirmed"
        :class="[$style.tab_view,$style.notconfirmed]"
        :style="this.displayNotconfirmedStyle"
      >
        <div :class="$style.post" v-for=" i in [1,2,3,4,5,6]" :key="i">
          <div :class="[$style.type,$style.red]">در انتظار تایید ناظر</div>
          <img :class="$style.mainImage" src="@/assets/icons/04.jpg" />
          <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
          <ul>
            <li>متراژ وموقعيت : ٢٦٠متر جنوبى ،شمالى</li>
            <li>بروگذر : بر ١٠گذر ١٠و٨متر</li>
            <li>پهنه طرح تفصيلي : r122</li>
            <li>تعداد مالك :٢مالك</li>
          </ul>
          <hr />
          <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
          <div :class="$style.actions">
            <button>ویرایش آگهی</button>
            <button :class="$style.red">حذف آگهی</button>
          </div>
        </div>
      </section>
      <section ref="stars" :class="[$style.tab_view,$style.stars]" :style="this.starsStyle">
        <div :class="$style.post" v-for=" i in [1,2,3,4,5,6]" :key="i">
          <div :class="$style.type">مشارکت در ساخت</div>
          <img :class="$style.mainImage" src="@/assets/icons/04.jpg" />
          <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
          <ul>
            <li>متراژ وموقعيت : ٢٦٠متر جنوبى ،شمالى</li>
            <li>بروگذر : بر ١٠گذر ١٠و٨متر</li>
            <li>پهنه طرح تفصيلي : r122</li>
            <li>تعداد مالك :٢مالك</li>
          </ul>
          <hr />
          <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
          <div :class="$style.actions">
            <button :class="$style.red">حذف آگهی</button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
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
      displayNotconfirmed: false,
      displayConfirmed: true,
      displayStars: false
    };
  },
  computed: {
    displayNotconfirmedStyle() {
      return this.displayNotconfirmed == true ? "display:grid" : "display:none";
    },
    displayConfirmedStyle() {
      return this.displayConfirmed == true ? "display:grid" : "display:none";
    },
    starsStyle() {
      return this.displayStars == true ? "display:grid" : "display:none";
    }
  },
  methods: {
    displayTab(name) {
      switch (name) {
        case "confirmed":
          this.displayNotconfirmed = false;
          this.displayConfirmed = true;
          this.displayStars = false;
          break;
        case "notconfirmed":
          this.displayNotconfirmed = true;
          this.displayConfirmed = false;
          this.displayStars = false;
          break;
        case "stars":
          this.displayNotconfirmed = false;
          this.displayConfirmed = false;
          this.displayStars = true;
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.red {
  background-color: color(red) !important;
  color: white !important;
}
.green {
  background-color: color(green) !important;
  color: white !important;
}
.ads {
  padding: 0 140px;
  margin-bottom: 90px;
  direction: rtl;
  .tabs {
    border-bottom: 1px solid color(chocolate);
    .tab {
      border: none;
      background-color: color(skin-tone);
      font-size: 18px;
      margin-left: 10px;
      padding: 5px 20px;
      cursor: pointer;
      outline: none;
      &.active {
        background-color: color(chocolate);
        color: white;
      }
      @include mobile() {
        width: 100%;
      }
    }
  }
  .tab_view {
    display: grid;
    grid-template-columns: repeat(auto-fit, 320px);
    grid-gap: 30px;
    padding: 20px 0;
    justify-content: center;
    .post {
      position: relative;
      text-decoration: none;
      transition: all 0.2s;
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
      .actions {
        margin-top: 15px;
        button {
          border: none;
          border-radius: 6px;
          background-color: color(skin-tone);
          font-size: 18px;
          padding: 5px 20px;
          margin-left: 10px;
        }
      }
    }
  }

  .confirmed {
  }
  .notconfirmed {
  }
  @include mobile() {
    padding: 0 20px;
  }
}
</style>