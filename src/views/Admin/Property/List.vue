<template>
  <div :class="$style.postList">
    <h1>آگهی های ثبت شده</h1>
    <div :class="$style.posts">
      <div :class="[$style.post,'slide-in-top']" data-scroll v-for=" i in [1,2,3,4,5,6]" :key="i">
        <div :class="[$style.type,$style.green]">ثبت شده</div>
        <img :class="$style.mainImage" src="@/assets/icons/04.jpg">
        <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
        <ul>
          <li>متراژ وموقعيت : ٢٦٠متر جنوبى ،شمالى</li>
          <li>بروگذر : بر ١٠گذر ١٠و٨متر</li>
          <li>پهنه طرح تفصيلي : r122</li>
          <li>تعداد مالك :٢مالك</li>
        </ul>
        <hr>
        <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
        <div :class="$style.actions">
          <button>ویرایش و نمایش آگهی</button>
          <button :class="$style.red">حذف آگهی</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyList"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";

.postList {
  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 15px 0;
  }
  .posts {
    direction: rtl;
    margin-bottom: 85px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 285px);
    grid-gap: 27px;
    padding: 0 75px;
    justify-content: center;
    .post {
      position: relative;
      text-decoration: none;
      &:hover {
        background-color: #fcfcfc;
      }
      .mainImage {
        @include size(100%, 220px);
      }
      .type {
        position: absolute;
        top: -5px;
        left: -10px;
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 500;
        color: white;
        &::after {
          @include content();
          top: 100%;
          @include size(10px, 10px);
          background-color: black;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
        &.red {
          background-color: color(red);
        }
        &.green {
          background-color: color(green);
        }
      }
      h3 {
        font-size: 16px;
        color: rgba(black, 0.5);
      }
      ul {
        list-style: none;
        font-size: 11px;
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
        font-size: 16px;
        font-weight: 100;
        color: black;
      }
      .actions {
        display: flex;
        width: 100%;
        gap: 10px;
        button {
          flex-grow: 1;
          flex-shrink: 1;
          border: none;
          background-color: color(skin-tone);
          border-radius: 6px;
          line-height: 35px;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 3px 6px rgba($color: #000000, $alpha: .16);
          &:not(:last-of-type){
            margin-left: 7px;
          }
          &.red{
            background-color: #E2574C;
            color: white;
          }
        }
      }
    }
  }
}
</style>