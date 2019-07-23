<template>
  <div>
    <Header
      :Title="[{text:'لیست کامل محصولات ساختمانی'}]"
      :subtitle="[{text:'ثبت آگهی'}]"
      :image="require('@/assets/icons/3246.jpg')"
      subtitleC
    />
    <Title title="لیست محصولات برند منظقه" style="margin-top:50px;" />
    <div
      :class="$style.products"
      v-infinite-scroll="loadmore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div :class="$style.post" v-for="product in list" :key="product.id" ref="scroller">
        <img src="@/assets/icons/37729214171_cb54f56933_m.jpg" />
        <h3>{{product.brand_name}}</h3>
        <h4>زمینه کاری : {{product.working_field}}</h4>
        <button @click="goto('product-detail')">نمایش کامل اطلاعات</button>
      </div>
    </div>
    <MiniLoading v-if="busy" />
    <AreYouAMasterWorker />
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
import AreYouAMasterWorker from "@/components/AreYouAMasterWorker.vue";
import repositories from "@/repositories/repositories.js";
import infiniteScroll from "vue-infinite-scroll";
import MiniLoading from "@/components/MiniLoading.vue";
export default {
  data() {
    return {
      list: [],
      busy: false
    };
  },
  async created() {
    //await this.$store.dispatch("home/get_all_products");
    //this.list = this.$store.getters["home/get_all_products"];
    this.list = (await repositories.home.get_all_products()).data;
  },
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    AreYouAMasterWorker,
    MiniLoading
  },
  directives: {
    infiniteScroll
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
    async loadmore() {
      try {
        this.busy = true;
        setTimeout(
          this.list.push(
            ...(await repositories.home.get_all_products(
              this.list[this.list.length - 1].id
            )).data
          ),
          1000
        );
        this.busy = false;
      } catch {}
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, 330px);
  grid-gap: 30px;
  padding: 50px 120px;
  justify-content: center;
  .post {
    direction: rtl;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
    img {
      width: 100%;
    }
    h3 {
      font-weight: normal;
      font-size: 18px;
      margin: 0 10px;
    }
    h4 {
      font-weight: 100;
      font-size: 17px;
      margin: 0 10px;
    }
    button {
      border: none;
      border-radius: 0 0 6px 6px;
      background-color: color(skin-tone);
      width: 100%;
      cursor: pointer;
      font-size: 20px;
      line-height: 50px;
      margin-top: 17px;
      outline: none;
      &:active {
        background-color: darken($color: color(skin-tone), $amount: 10%);
      }
    }
  }
}
.postDetail {
  .imageContainer {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }
    .more {
      border: 1px solid color(skin-tone);
      background-color: rgba($color: #fff, $alpha: 0.95);
      position: absolute;
      top: 25%;
      left: 0;
      cursor: pointer;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      padding-right: 35px;
      font-size: 16px;
    }
    section {
      background-color: rgba($color: #000000, $alpha: 0.85);
      border: 2px solid color(skin-tone);
      direction: rtl;
      position: absolute;
      left: auto;
      top: 75%;
      right: 0;
      * {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        padding: 0 20px;
      }
      p {
        color: white;
        font-weight: 100;
      }
      button {
        border: none;
        background-color: color(skin-tone);
        color: color(chocolate);
        cursor: pointer;
      }
    }
  }
}
.more {
  font-size: 14px;
  position: relative;
  line-height: 40px;
  margin-top: 45px;
  margin-bottom: 100px;
  text-align: center;
  width: 300px;
  border: none;
  @include HorizontalCenter();
  cursor: pointer;
  transition: all 0.1s;
  outline: none;
  clip-path: polygon(0 0, 100% 0, calc(100% - 40px) 100%, 40px 100%);
  background-color: color(skin-tone);
  @include mobile(320px) {
    width: calc(100% - 20px);
  }
}
</style>