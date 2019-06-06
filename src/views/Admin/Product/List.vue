<template>
  <div :class="$style.ProductList">
    <h1>ثبت آکهی های محصولات</h1>
    <div :class="$style.products">
      <div :class="$style.product" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
        <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
        <section>
          <h1>محصولات برادران قاسمی بجز بیژن</h1>
          <p>
            محصولاتی بی نظر در سطح منطقه
            اشاره میکنم بیژن در ما نیست
          </p>
          <div :class="$style.actions">
            <button>ویرایش و نمایش آگهی</button>
            <button :class="$style.red">حذف آگهی</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardProductList"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.ProductList {
  h1 {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    margin-top: 22px;
  }
  .products {
    display: grid;
    grid-gap: 18px;
    justify-content: center;
    .product {
      border-radius: 5px;
      background-color: #f6f6f6;
      display: grid;
      padding: 10px;
      grid-gap: 25px;
      grid-template-columns: 230px auto;
      position: relative;
      h1 {
        font-size: 25px;
        font-weight: 500;
        text-align: right;
      }
      p {
        font-size: 14px;
        font-weight: 500;
      }
      .actions {
        position: absolute;
        bottom: 20px;
        left: 15px;
        button {
          line-height: 40px;
          border: none;
          border-radius: 6px;
          box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
          background-color: color(skin-tone);
          padding: 0 17px;
          font-size: 15px;
          font-weight: 500;
          margin-right: 10px;
          &.red {
            background-color: #e2574c;
            color: white;
            &:active {
              background-color: darken(#e2574c, 10%);
            }
          }
          &:active {
            background-color: darken(color(skin-tone), 10%);
          }
        }
      }
    }
  }
}
</style>