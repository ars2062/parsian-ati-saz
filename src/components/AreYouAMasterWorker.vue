<template>
  <section :class="$style.are_you_a_master_worker">
    <h1>اگر شما هم یک استاد کار هستید</h1>
    <p>
      با استفاده از پارسیان آتی ساز دیده شوید ، پارسیان آتی ساز یک سایت تخصصی در زمینه مشارکت در ساخت و املاک کلنگی می باشد و در این راستا اکثر سازندگان مناطق 22 گانه
      تهران با ما در ارتباط هستند .
    </p>
    <p>شما میتواند با قراردادن آگهی از خود و به نمایش گذاشتن نمونه کار های خود دیده شوید و پروژه های جدید بگیرید</p>
    <p>برای ثبت آگهی از کلید زیر استفاده کنید</p>
    <button>ثبت آگهی</button>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
section.are_you_a_master_worker {
  background-color: #f1f1f1;
  padding: 25px;
  direction: rtl;
  h1 {
    font-size: 30px;
    font-weight: normal;
  }
  p {
    font-size: 18px;
    font-weight: normal;
  }
  button {
    border: none;
    background-color: #fff;
    color: blue;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    padding: 10px 55px;
    font-size: 18px;
    border-radius: 6px;
    position: relative;
    right: 50%;
    transform: translateX(50%);
    margin-bottom: 50px;
    margin-top: 25px;
    cursor: pointer;
    outline: none;
    @include ripple();
  }
}
</style>