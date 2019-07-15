<template>
  <div :class="$style.contact">
    <section v-if="!sendMessage" :class="$style.one">
      <img src="@/assets/parsian-logo2.png" />
      <h1>ارتباط با ما</h1>
      <button @click="sendMessage=true">ارسال پیام</button>
    </section>
    <section :class="$style.two" :style="sendMessage?'display:flex':'display:none'">
      <form @submit.prevent="send">
        <input type="text" v-model="name" name="name" id="name" placeholder="نام و نام خانوادگی" />
        <input type="text" v-model="phone" name="phone" id="phone" placeholder="شماره تماس" />
        <input type="text" v-model="subject" name="subject" id="subject" placeholder="عنوان پیام" />
        <textarea
          name="description"
          v-model="description"
          id="description"
          rows="6"
          placeholder="توضیحات"
        ></textarea>
        <button @click="goto('/')">بازگشت به صفحه صلی</button>
        <button type="submit">ارسال پیام</button>
      </form>
    </section>
    <section :class="$style.info">
      <div :class="$style.con">
        <p
          :class="$style.address"
        >آدرس: سعادت آباد چهار راه شهردای ، مجتمع اداری تجاری سرو (نارنجستان) ، طبقه 5 ، واحد 1</p>
        <a href="tel:+2122065332" :class="$style.phone">تلفن : 02122065332</a>
      </div>
      <div :class="$style.socials">
        <a href="https://www.instagram.com/parsian.atisaz" target="_blank">
          <i class="fab fa-instagram"></i>
          Instagram: @parsian.atisaz
        </a>
        <a href="https://www.t.me/parsianatisaz" target="_blank">
          <i class="fab fa-telegram"></i>
          Telegram: @parsianatisaz
        </a>
      </div>
    </section>
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
export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    Loading
  },
  data() {
    return {
      sendMessage: false,
      name: "",
      subject: "",
      phone: "",
      description: ""
    };
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    },
    openModal(name) {
      this.$refs[name].display = true;
    },
    displayKhadamatShari(index) {
      this.$refs["selectorPanel"].style.display = "none";
      this.$refs["dafater_khadamat_shahri_" + index].style.display = "block";
    },
    backToSelector(index) {
      this.$refs["selectorPanel"].style.display = "block";
      this.$refs["dafater_khadamat_shahri_" + index].style.display = "none";
    },
    async send() {
      await this.$store.dispatch("home/send_contact", {
        name: this.name,
        subject: this.subject,
        phone: this.phone,
        description: this.description
      });
      alert(this.$store.getters["home/msg"])
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.contact {
  background: image("contact-bg") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
  direction: rtl;
  .one {
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 350px;
    }
    h1 {
      font-size: 43px;
      font-weight: normal;
      color: white;
    }
    button {
      border: 1px solid color(skin-tone);
      border-radius: 6px;
      background-color: #101010;
      color: white;
      font-size: 30px;
      line-height: 55px;
      width: 400px;
      box-shadow: 0 0 12px rgba($color: #fff, $alpha: 0.64);
      cursor: pointer;
      &:hover {
        background-color: lighten(#101010, 10%);
      }
    }
  }
  .two {
    min-height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    form {
      width: 833px;
      height: fit-content;
      display: grid;
      grid-gap: 20px;
      grid-template-areas:
        "name           phone"
        "subject        subject"
        "description    description"
        "backtohome     send";
      input,
      textarea {
        background-color: #3b3b3b;
        border: 1px solid color(skin-tone);
        border-radius: 6px;
        line-height: 55px;
        padding: 0 30px;
        color: white;
        font-size: 18px;
        outline: none;
        &::placeholder {
          color: #cecece;
        }
      }
      input[type="text"]:nth-of-type(3) {
        grid-area: subject;
      }
      textarea {
        grid-area: description;
        line-height: 25px;
        resize: none;
        padding: 15px 30px;
      }
      button {
        border: none;
        border-radius: 6px;
        font-size: 25px;
        line-height: 56px;
        cursor: pointer;
        &:nth-of-type(1) {
          background-color: color(chocolate);
          color: white;
          &:hover {
            background-color: darken(color(chocolate), 5%);
          }
        }
        &:nth-of-type(2) {
          background-color: color(skin-tone);
          color: black;
          &:hover {
            background-color: darken(color(skin-tone), 10%);
          }
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    padding: 15px;
    .con {
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    a {
      text-decoration: none;
      color: white;
    }
    .socials {
      float: left;
      display: flex;
      flex-direction: column;
      direction: ltr;
    }
  }
}
</style>