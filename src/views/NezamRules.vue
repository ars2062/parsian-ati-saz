<template>
  <div>
    <Header :Title="[{text:'قوانین نظام مهندسی'}]" :image="require('@/assets/icons/slide1.svg')"/>
    <section :class="$style.one">text</section>
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
export default {
  components: {
    Header,
    Footer,
    Modal,
    AreYouAMasterWorker
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
section.one {
  min-height: 150vh;
}
</style>
