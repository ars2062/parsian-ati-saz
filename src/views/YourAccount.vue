<template>
  <div>
    <Header :Title="[{ text: 'حساب شما' }]" :image="require('@/assets/icons/slide1.svg')"/>
    <Title title="حساب کاربری آگهی ها" style="margin:60px 0;"/>
    <div class="tabs">
      <button class="tab">آگهی های ثبت شده</button>
      <button class="tab">آگهی های در دست تایید</button>
    </div>
    <section ref="confirmed" class="confirmed">
        confirmed
    </section>
    <section ref="notconfirmed" class="notconfirmed">
notconfirmed
    </section>
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
  }
};
</script>

<style lang="scss" module>

</style>