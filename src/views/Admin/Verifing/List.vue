<template>
  <div :class="$style.verifingList">
    <h1>آگهی های در دست تایید</h1>
    <div :class="$style.Verifings">
      <div :class="$style.Verifing" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
          <div :class="$style.type">لوازم ساختمانی</div>
        <img src="@/assets/icons/37059363793_e31f3f8a28_z.jpg">
        <h2>لوازم ساختمانی برادران بیژن</h2>
        <p>زمینه کاری : تولید لوازم پلاستیکی</p>
        <div :class="$style.actions">
          <button @click="openModal(i)">پیش نمایش اطلاعات آگهی</button>
          <button :class="$style.green">تایید آگهی</button>
          <button :class="$style.red">حذف آگهی</button>
        </div>
      </div>
    </div>

    <Modal ref="modal">پیام : ارشیا هرچه زود تر تموم کن این طراحی رو</Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "DashboardVerifingList",
  components: { Modal }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.verifingList {
  h1 {
    text-align: center;
    font-size: 35px;
    font-weight: 500;
    margin-top: 22px;
  }
  .Verifings {
    display: grid;
    grid-template-columns: repeat(auto-fit, 335px);
    grid-gap: 15px;
    justify-content: center;
    padding: 0 20px;
    margin-bottom: 100px;
    .Verifing {
      border-radius: 6px;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      position: relative;
      .type{
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
          color: white;
          padding: 5px 30px;
          font-size: 15px;
      }
      img {
        width: 335px;
      }
      h2 {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        font-size: 17px;
        font-weight: 100;
      }
      .actions {
        display: grid;
        margin-top: 17px;
        button {
          border: none;
          margin-top: 2px;
          line-height: 50px;
          font-size: 20px;
          font-weight: 500;
          background-color: color(skin-tone);
          &.red {
            background-color: #e2574c;
            color: white;
          }
          &.green {
            background-color: #a2c64d;
          }
        }
      }
    }
  }
}
</style>