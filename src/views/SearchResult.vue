<template>
  <div>
    <Searchcard style="margin-top:90px;display:inline-block;width: calc(100% - 30px);"/>
    <div :class="$style.posts">
      <router-link
        to="/property-detail"
        :class="[$style.post,'slide-in-top']"
        data-scroll
        v-for="post in result"
        :key="post.id"
      >
        <div v-if="post.is_special" :class="$style.ribbonContainer">
          <div :class="$style.ribbon">
            <img src="@/assets/icons/star.svg">
          </div>
        </div>
        <div :class="$style.type">{{(post.type=="sell")?"فروشی":"مشارکت در ساخت"}}</div>
        <img :class="$style.mainImage" src="@/assets/icons/04.jpg">
        <h3>{{post.title}}</h3>
        <ul>
          <li>متراژ وموقعيت : {{post.total_metrazh}}متر {{post.position}}</li>
          <li>بروگذر : بر {{post.bar}}گذر  {{post.gozar}}متر</li>
          <li>{{post.document_type}} : r122</li>
          <li>تعداد مالك :٢مالك</li>
        </ul>
        <hr>
        <span v-if="post.cost" :class="$style.price">مبلغ بلاعوض : {{Number(post.cost).toLocaleString()}} تومان</span>
        <span v-if="post.loan_cost" :class="$style.price">مبلغ وام : {{Number(post.loan_cost).toLocaleString()}} تومان</span>
      </router-link>
    </div>
    <AreYouAMasterWorker/>
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
import Loading from "@/components/Loading.vue";
import AreYouAMasterWorker from "@/components/AreYouAMasterWorker.vue";
export default {
  data(){
    return{
      result:[]
    }
  },
  async mounted(){
    this.result=JSON.parse(localStorage.getItem("search_result"));
  },
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    Loading,
    AreYouAMasterWorker
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
    displayKhadamatShari(index) {
      this.$refs["selectorPanel"].style.display = "none";
      this.$refs["dafater_khadamat_shahri_" + index].style.display = "block";
    },
    backToSelector(index) {
      this.$refs["selectorPanel"].style.display = "block";
      this.$refs["dafater_khadamat_shahri_" + index].style.display = "none";
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.posts {
  direction: rtl;
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  justify-content: center;
  grid-gap: 40px;
  padding: 125px 100px;
  .post {
    position: relative;
    text-decoration: none;
    &:hover {
      background-color: #fcfcfc;
    }
    .ribbonContainer {
      overflow: hidden;
      @include size(80px, 80px);
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      .ribbon {
        width: 150px;
        height: 30px;
        position: absolute;
        top: 10px;
        right: -50px;
        left: auto;
        background: color(red);
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        text-align: center;
        img {
          width: 20px;
          margin: 2.5px;
          transform: rotate(-45deg);
        }
      }
    }
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
      color: black;
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
      color: black;
    }
  }
  @include mobile(){
  padding: 125px 20px;
  }
}
</style>