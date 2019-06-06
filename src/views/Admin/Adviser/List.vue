<template>
  <div :class="$style.adviserList">
    <h1>مشاور های ثبت شده</h1>
    <div :class="$style.Advisers">
      <div :class="$style.Adviser" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
        <h2>میلاد شهرایی</h2>
        <div :class="$style.group">
          <label>شماره تماس :</label>
          <span>091240892313</span>
        </div>
        <div :class="$style.group">
          <label>ایمیل :</label>
          <span>shahray@gmail.com</span>
        </div>
        <div :class="$style.actions">
          <button>ویرایش</button>
          <button :class="$style.red">حذف آگهی</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAdviserList"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.adviserList {
  h1 {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    margin-top: 22px;
  }
  .Advisers {
    display: grid;
    grid-template-columns: repeat(auto-fit, 215px);
    grid-gap: 40px;
    justify-content: center;
    padding: 0 165px;
    margin-bottom: 100px;
    .Adviser {
      text-align: center;
      border: 1px solid rgba($color: #000000, $alpha: .5);
      padding: 10px;
      border-radius: 6px;
      img {
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
        border: 5px solid white;
        @include size(135px);
        border-radius: 135px;
        object-position: center;
        object-fit: cover;
        overflow: hidden;
        margin: auto;
        text-align: center;
      }
      h2 {
        color: #a49679;
        font-size: 19px;
        font-weight: 500;
      }
      label {
        color: #a49679;
        font-size: 15px;
        font-weight: 500;
      }
      span {
        color: #574e3d;
        font-size: 15px;
        font-weight: 500;
      }
      .actions{
          display: grid;
          grid-gap: 8px;
          button{
              line-height: 30px;
              border: none;
              border-radius: 6px;
              box-shadow: 0 3px 6px rgba($color: #000000, $alpha: .16);
              background-color: color(skin-tone);
              font-size: 13px;
              font-weight: 500;
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