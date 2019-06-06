<template>
  <div :class="$style.contactList">
    <div :class="$style.Contacts">
      <div :class="$style.Contact" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
        <div :class="$style.group">
          <label>پیام از :</label>
          <span>محمد ایمانی</span>
        </div>
        <div :class="$style.group">
          <label>شماره تماس :</label>
          <span>09114648556</span>
        </div>
        <div :class="$style.group">
          <label>ایمیل :</label>
          <span>IMAN@GMAIL.COM</span>
        </div>
        <div :class="$style.actions">
          <button @click="openModal(i)">نمایش</button>
          <button :class="$style.red">حذف پیام</button>
        </div>
      </div>
    </div>

    <Modal ref="modal">پیام : ارشیا هرچه زود تر تموم کن این طراحی رو</Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "DashboardContactList",
  components: { Modal },
  methods: {
    openModal(name) {
      this.$refs["modal"].display = true;
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.contactList {
  .Contacts {
    display: grid;
    grid-template-columns: repeat(auto-fit, 285px);
    grid-gap: 10px;
    justify-content: center;
    padding: 0 100px;
    margin: 100px 0;
    .Contact {
      text-align: right;
      background-color: #f2f2f2;
      padding: 20px;
      border-radius: 12px;
      .group {
        margin: 10px 0;
      }
      label {
        color: #000;
        font-size: 20px;
        font-weight: 500;
      }
      span {
        color: #000;
        font-size: 20px;
        font-weight: 500;
      }
      .actions {
        display: grid;
        grid-gap: 8px;
        button {
          line-height: 50px;
          border: none;
          border-radius: 12px;
          box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
          background-color: white;
          font-size: 20px;
          font-weight: 500;
          &.red {
            background-color: #e2574c;
            color: white;
          }
        }
      }
    }
  }
}
</style>