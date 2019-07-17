<template>
  <nav>
    <ul>
      <li @click="goto('advertisement-registration')" :class="(displaymenu)?$style.mobile:''">
        <span>ارسال آگهی</span>
        <img src="@/assets/icons/deployment.svg" />
      </li>
      <li
        v-if="loggedin"
        @click="this.toggleAccountOptions"
        :class="(displaymenu)?$style.mobile:''"
      >
        <span>حساب من</span>
        <img src="@/assets/icons/avatar.svg" />
        <ul :style="this.displayAccountOptions">
          <li>
            <router-link to="#">آگهی های من</router-link>
          </li>
          <li>
            <router-link to="#">خروج از حساب</router-link>
          </li>
        </ul>
      </li>
      <li
        v-if="!loggedin"
        @click="openModal('LoginRegister')"
        :class="(displaymenu)?$style.mobile:''"
      >
        <span>ورود / ثبت نام</span>
        <img src="@/assets/icons/avatar.svg" />
      </li>
      <li @click="this.openMenu">
        <span>منو</span>
        <img src="@/assets/icons/menu (1).svg" />
      </li>
    </ul>
    <img src="@/assets/icons/logo.svg" :class="$style.logo" />
    <div :class="$style.info">
      <h1>پارسیان آتی ساز</h1>
      <h2>اولین در ارئه خدمات مشارکت در ساخت</h2>
      <h2>با ما در ارتباط باشید</h2>
    </div>
    <div :class="$style.menuContainer" @click="this.closeMenu" :style="this.displayMenu">
      <ul>
        <img src="@/assets/icons/logo.svg" />
        <h1>پارسیان آتی ساز</h1>
        <button :class="$style.close" @click="close">
          <i class="fas fa-times"></i>
        </button>
        <li>
          <router-link @click.native="close" to="/">خانه</router-link>
        </li>
        <li>
          <router-link @click.native="close" to="/partnerships">فایل های مشارکت در ساخت</router-link>
        </li>
        <li>
          <router-link @click.native="close" to="/sells">فایل های املاک کلنگی</router-link>
        </li>
        <li>
          <router-link
            @click.native="close"
            to="/advertisement-registration"
          >ثبت/ارسال آگهی استادکاران</router-link>
        </li>
        <li>
          <router-link
            @click.native="close"
            to="/advertisement-registration"
          >ثبت آگهی محصولات ساختمانی</router-link>
        </li>
        <li>
          <router-link @click.native="close" to="#">درباره ما</router-link>
        </li>
        <li>
          <router-link @click.native="close" to="/contact">ارتباط با ما</router-link>
        </li>
      </ul>
    </div>
    <Modal ref="LoginRegister">
      <div :class="$style.LoginRegister">
        <form @submit.prevent="loginRegister" v-if="!LoginRegisterSent">
          <h3>ورود به حساب</h3>
          <p>برای ورود به حساب نیاز به تایید شماره تماس است</p>
          <div :class="$style.container">
            <Label for="phone">
              <i class="fas fa-phone"></i> شماره تماس
            </Label>
            <MaskedInput id="phone" mask="\+98 911 111 1111" placeholder-char="*" v-model="phone" />
          </div>
          <button type="submit">دریافت کد</button>
        </form>
        <form @submit.prevent="verify" v-if="LoginRegisterSent">
          <Label>کد</Label>
          <p>یک کد برای شما ارسال شد</p>
          <MaskedInput mask="1 1 1 1 1 1" placeholder-char="-" />
          <button
            v-if="sendAgainTime>0"
            :class="$style.sendAgain"
            disabled
          >{{sendAgainTime}} تا ارسال دوباره کد</button>
          <button v-if="sendAgainTime==0" :class="$style.sendAgain">ارسال دوباره کد</button>
          <button v-if="LoginRegisterSent" type="submit">ورود / ثبتنام</button>
        </form>
      </div>
    </Modal>
  </nav>
</template>

<script>
import Modal from "@/components/Modal.vue";
import MaskedInput from "vue-masked-input";
export default {
  name: "Nav",
  components: {
    Modal,
    MaskedInput
  },
  data() {
    return {
      displaymenu: false,
      displayaccountoptions: false,
      loggedin: false,
      LoginRegisterSent: false,
      sendAgainTime: 120,
      interval: null,
      phone: null
    };
  },
  methods: {
    closeMenu($event) {
      if ($event.target.classList.contains(this.$style.menuContainer))
        this.displaymenu = false;
    },
    close() {
      this.displaymenu = false;
    },
    openModal(name) {
      this.$refs[name].display = true;
    },
    openMenu() {
      this.displaymenu = true;
    },
    toggleAccountOptions() {
      this.displayaccountoptions = !this.displayaccountoptions;
    },
    goto(name) {
      this.$router.push(name);
    },
    async loginRegister() {
      if (this.phone.includes("*")) alert("شماره وارد شده صحیح نمی باشد");
      else if (!this.phone) alert("وارد کردن شماره الزامی میباشد");
      else {
        await this.$store.dispatch(
          "account/login",
          this.phone.replace(/\s/g, "")
        );
        alert(this.$store.getters["account/login_message"]);
        this.interval = setInterval(() => {
          if (this.LoginRegisterSent) this.sendAgainTime--;
          if (this.sendAgainTime == 0) {
            clearInterval(this.interval);
          }
        }, 1000);
      }
    },
    verify() {}
  },
  computed: {
    displayMenu() {
      if (this.displaymenu) return "display: block";
      else return "display: none";
    },
    displayAccountOptions() {
      if (this.displayaccountoptions) return "display: block";
      else return "display: none";
    },
    menuUl() {
      if (this.displaymenu) {
        return "height: 100vh";
      } else {
        return "height: 0";
      }
    }
  },
  created() {}
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
nav {
  background-color: color(dimm-black);
  position: fixed;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid color(skin-tone);
  z-index: 99;
  * {
    float: right;
  }

  ul {
    float: left;
    list-style: none;
    color: color(skin-tone);
    margin-left: 80px;
    height: 100%;
    li {
      display: grid;
      grid-template-rows: repeat(2, auto);
      text-align: center;
      font-size: 14px;
      margin: auto;
      @include VerticalCenter();
      transform: translateY(calc(-50% - 5px));
      cursor: pointer;
      position: relative;

      &:not(:last-of-type) {
        margin-left: 20px;
      }

      span {
        padding: 0;
      }

      img {
        width: 34px;
        @include HorizontalCenter();
      }
      ul {
        left: 0;
        transform: translateX(-75%);
        top: 100%;
        position: absolute;
        list-style: none;
        width: 185px;
        animation: expand 0.1s forwards;
        li {
          text-align: center;
          display: block;
          border: 1px solid white;
          cursor: pointer;
          width: 100%;
          &:nth-child(odd) {
            background-color: color(skin-tone);
            a {
              color: black;
            }
          }
          &:nth-child(even) {
            background-color: black;
            a {
              color: white;
            }
          }
          &:hover {
            text-shadow: 0 0 10px rgba($color: #fff, $alpha: 0.1);
          }
          a {
            text-decoration: none;
            display: block;
            width: 100%;
          }
        }
      }
      @keyframes expand {
        from {
          transform: translateX(-75%) scaleY(0);
        }
        to {
          transform: translateX(-75%) scaleY(1);
        }
      }
      @include mobile(570px) {
        transform: translateY(-50%);
        &:not(:last-of-type) {
          display: none;
        }
        &:last-of-type {
          span {
            display: none;
          }
        }
      }
    }
    @include mobile(570px) {
      margin-left: 20px;
      li.mobile {
        display: block;
        z-index: 99;
        position: absolute;
        top: calc(100vh - 50px);
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 0;
        padding: 0;
        transform: none;
        border-top: 1px solid color(skin-tone);
        font-size: 20px;
        img {
          display: none;
        }
        span {
          width: 100%;
        }
        ul {
        }
      }
      li.mobile:nth-of-type(2) {
        top: calc(100vh - 100px);
      }
    }
  }

  .logo {
    height: 53px;
    margin-right: 80px;
    @include VerticalCenter();

    @include mobile(680px) {
      margin-right: 20px;
    }
  }

  .info {
    @include VerticalCenter();
    color: white;
    display: grid;
    grid-template-areas:
      "desc1 name"
      "desc2 name";
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 14px;
    text-align: right;

    h1 {
      font-size: 22px;
      font-weight: 100;
      grid-area: name;
      position: relative;

      &::after {
        @include content();
        width: 1.5px;
        left: -6.25px;
        background-color: white;
        @include mobile(850px) {
          display: none;
        }
      }

      @include mobile(680px) {
        display: none;
      }
    }

    h2 {
      font-weight: 100;

      &:first-of-type {
        font-size: 12px;
        grid-area: desc1;
      }

      &:last-of-type {
        font-size: 9px;
        grid-area: desc2;
      }
      @include mobile(850px) {
        display: none;
      }
    }
  }

  .menuContainer {
    position: fixed;
    @include size(100vw, 100vh);
    background-color: rgba(black, 0.63);
    overflow: hidden;
    ul {
      width: 250px;
      height: 0;
      background-color: color(coal);
      position: absolute;
      left: 0;
      top: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      color: white;
      overflow: hidden;
      animation: openMenu 0.5s ease-out forwards;
      img {
        margin: 12px;
        height: 50px;
      }
      .close {
        display: none;
        position: absolute;
        top: 10px;
        right: 25px;
        font-size: 35px;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
      }
      h1 {
        font-size: 22px;
        font-weight: 100;
        margin: 3px;
      }
      li {
        height: auto;
        transform: none;
        top: 0;
        margin: 0;
        border-top: 1px solid white;
        &:first-of-type {
          margin-top: 60px;
        }
        &:last-of-type {
          border-bottom: 1px solid white;
        }
        a {
          text-decoration: none;
          color: white;
          display: block;
          height: 50px;
          line-height: 50px;
          overflow: hidden;
          &:active {
            background-color: lighten(color(coal), 10%);
          }
        }
        @include mobile(570px) {
          transform: translateY(-50%);
          display: block;
          a {
            width: 100%;
          }
        }
      }
    }
    @keyframes openMenu {
      from {
        height: 0;
      }
      to {
        height: 100vh;
      }
    }
    @include mobile() {
      ul {
        width: 100%;
        position: relative;
        .close {
          display: block;
        }
      }
    }
  }
  .LoginRegister {
    float: none;
    text-align: center;
    direction: rtl;
    * {
      float: none;
      display: block;
    }
    h3 {
      font-size: 20px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      color: rgba(black, 0.8);
    }
    .container {
      width: 90%;
      margin: 0 5%;
      display: flex;
      margin-top: 15px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      label,
      input {
        display: inline-block;
        line-height: 40px;
      }
      input {
        flex-grow: 1;
        border: 1px solid color(skin-tone);
        border-right: none;
        border-radius: 6px 0 0 6px;
        direction: ltr;
        padding: 0 20px;
      }
      label {
        border: 1px solid color(skin-tone);
        border-left: none;
        background-color: color(skin-tone);
        width: fit-content;
        padding: 0 10px;
        color: rgba($color: #3b3b3b, $alpha: 0.74);
        border-radius: 0 6px 6px 0;
        * {
          display: inline-block;
        }
      }
    }
    button {
      line-height: 40px;
      border: none;
      border-radius: 6px;
      outline: none;
      background-color: color(chocolate);
      color: white;
      padding: 0 45px;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      right: 50%;
      margin-top: 20px;
      transform: translateX(50%);
      cursor: pointer;
    }
  }
  @include mobile() {
    height: 70px;
  }
}
</style>
