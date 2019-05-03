<template>
  <nav>
    <ul>
      <li @click="goto('advertisement-registration')">
        <span>ارسال آگهی</span>
        <img src="@/assets/icons/deployment.svg">
      </li>
      <li @click="this.toggleAccountOptions">
        <span>حساب من</span>
        <img src="@/assets/icons/avatar.svg">
        <ul :style="this.displayAccountOptions">
          <li>
            <a href="#">آگهی های من</a>
          </li>
          <li>
            <a href="#">خروج از حساب</a>
          </li>
        </ul>
      </li>
      <li @click="this.openMenu">
        <span>منو</span>
        <img src="@/assets/icons/menu (1).svg">
      </li>
    </ul>
    <img src="@/assets/icons/logo.svg" :class="$style.logo">
    <div :class="$style.info">
      <h1>پارسیان آتی ساز</h1>
      <h2>تمامی امور ملکی شما را پاسخگو هستیم</h2>
      <h2>با ما در ارتباط باشید</h2>
    </div>
    <div :class="$style.menuContainer" @click="this.closeMenu" :style="this.displayMenu">
      <ul>
        <img src="@/assets/icons/logo.svg">
        <h1>پارسیان آتی ساز</h1>
        <li>
          <a href="/">خانه</a>
        </li>
        <li>
          <a href="#">املاک مشارکت در ساخت</a>
        </li>
        <li>
          <a href="#">املاک فروش کلنگی</a>
        </li>
        <li>
          <a href="#">ثبت آگهی استادکار</a>
        </li>
        <li>
          <a href="#">درباره ما</a>
        </li>
        <li>
          <a href="#">ارتباط با ما</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "Nav",
  data() {
    return {
      displaymenu: false,
      displayaccountoptions: false
    };
  },
  methods: {
    closeMenu($event) {
      if ($event.target.classList.contains(this.$style.menuContainer))
        this.displaymenu = false;
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
  }
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
  z-index: 9999;
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
      margin-left: 20px;
      @include VerticalCenter();
      transform: translateY(calc(-50% - 5px));
      cursor: pointer;
      position: relative;
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
    }
  }

  .logo {
    height: 53px;
    margin-right: 80px;
    @include VerticalCenter();
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
  }
}
</style>
