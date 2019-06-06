<template>
  <div :class="$style.masterList">
    <h1>بررسی آگهی های ثبت شده</h1>
    <div :class="$style.MasterWorkers">
      <div :class="$style.Master" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
        <img src="@/assets/icons/450-336-225x168.jpg">
        <h2>کنعان پاسبانی</h2>
        <span :class="$style.code">27 کار</span>
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
  name: "DashboardMasterWorkerList"
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.masterList {
  h1 {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    margin-top: 22px;
  }
  .MasterWorkers {
    display: grid;
    grid-template-columns: repeat(auto-fit, 225px);
    padding: 0 65px;
    grid-gap: 10px;
          margin-bottom: 100px;
    .Master {
      border-radius: 6px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      padding-bottom: 100px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }
      h2 {
        font-size: 15px;
        font-weight: 500;
        float: right;
        margin: 0 15px;
      }
      span {
        font-size: 11px;
        font-weight: 100;
        line-height: 27px;
        float: left;
        margin: 0 15px;
      }
      .actions{
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: grid;
          padding: 7px 2px;
          grid-gap: 8px;
          button{
              border-radius: 6px;
              border: none;
              background-color: color(skin-tone);
              line-height: 30px;
              box-shadow: 0 3px 6px rgba($color: #000000, $alpha: .16);
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