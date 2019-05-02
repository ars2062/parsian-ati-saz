<template>
  <div>
    <Header :Title="[{ text: 'حساب شما' }]" :image="require('@/assets/icons/slide1.svg')"/>
    <Title title="حساب کاربری آگهی ها" style="margin:60px 0;"/>
    <div :class="$style.tabs">
      <button :class="$style.tab" @click="displayTab('confirmed')">گهی های ثبت شده</button>
      <button :class="$style.tab" @click="displayTab('notconfirmed')">گهی های در دست تایید</button>
    </div>
    <section
      ref="confirmed"
      :class="[$style.tab_view,$style.confirmed]"
      :style="this.displayConfirmedStyle"
    >confirmed</section>
    <section
      ref="notconfirmed"
      :class="[$style.tab_view,$style.notconfirmed]"
      :style="this.displayNotconfirmedStyle"
    >notconfirmed</section>
    <Footer/>
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
      displayConfirmed: true
    };
  },
  computed: {
    displayNotconfirmedStyle() {
      return this.displayNotconfirmed == true
        ? "display:block"
        : "display:none";
    },
    displayConfirmedStyle() {
      console.log(this.displayConfirmed);
      return this.displayConfirmed == true ? "display:block" : "display:none";
    }
  },
  methods: {
    displayTab(name) {
      switch (name) {
        case 'confirmed':
          this.displayNotconfirmed=false;
          this.displayConfirmed=true;
          break;
        case 'notconfirmed':
          this.displayNotconfirmed=true;
          this.displayConfirmed=false;
          break;
      
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" module>
.tabs {
  .tab {
  }
}
.tab_view {
}
.confirmed {
}
.notconfirmed {
}
</style>