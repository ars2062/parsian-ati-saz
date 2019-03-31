<template>
  <nav>
    <ul>
      <li>
        <span>ارسال آگهی</span>
        <img src="@/assets/icons/deployment.svg">
      </li>
      <li>
        <span>حساب من</span>
        <img src="@/assets/icons/avatar.svg">
      </li>
      <li>
        <span>منو</span>
        <img src="@/assets/icons/menu (1).svg">
      </li>
    </ul>
    <img src="@/assets/icons/2-coply.svg" :class="$style.logo">
    <div :class="$style.info">
      <h1>پارسیان آتی ساز</h1>
      <h2>تمامی امور ملکی شما را پاسخگو هستیم</h2>
      <h2>با ما در ارتباط باشید</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
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

            span {
                padding: 0;
            }

            img {
              width: 34px;
                @include HorizontalCenter();
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
        color: color(skin-tone);
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
                background-color: color(skin-tone);
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
}
</style>
