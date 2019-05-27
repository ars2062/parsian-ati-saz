<template>
  <div :class="$style.combolist" dir="rtl">
    <div
      @click="toggleDisplay"
      :style="display=='block'?'border-radius: 6px 6px 0 0; border-bottom:none':''"
    >
      <span>{{choosen||''}}</span>
      <img src="@/assets/icons/right-arrow.svg">
    </div>
    <ul :style="{display:this.display}">
      <li v-for="item in this.items" :key="item.id" @click="choose(item.id)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
import Checkbox from "@/components/form/Checkbox.vue";
export default {
  name: "Combolist",
  components: { Checkbox },
  props: {
    items: { type: Array },
    title: { type: String },
    checkbox: { type: Boolean, default: false }
  },
  data() {
    return {
      display: "none",
      choosen: "",
      CheckedItems: []
    };
  },
  mounted() {
    window.addEventListener("click", e => {
      if (this.display === "block") this.display = "none";
    });
  },
  methods: {
    toggleDisplay($event) {
      $event.stopPropagation();
      this.display = this.display === "block" ? "none" : "block";
    },
    choose(id) {
      if (!this.checkbox) {
        this.choosen = this.items.find(item => {
          return item.id == id;
        }).text;
        this.$emit("value", id);
      }
      this.toggleDisplay();
    },
    change() {
      let text = "";
      this.CheckedItems.map(i => {
        text +=
          '"' +
          this.items.find(item => {
            return item.id == i;
          }).text +
          '" ';
      });
      this.$emit("value", this.CheckedItems);
      this.choosen = text;
    }
  }
};
</script>

<style lang='scss' module>
@import "@/assets/main.scss";
.combolist {
  position: relative;
  user-select: none;
  div {
    color: #cecece;
    height: 24px;
    font-size: 14px;
    cursor: pointer;
    background-color: rgba($color: #fff, $alpha: 0.57);
    border-radius: 6px;
    border: none;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    padding: 15px 30px;
    span {
      float: right;
      line-height: 54px;
      color: #000000;
    }
    img {
      width: 17px;
      float: left;
      @include VerticalCenter();
    }
  }
  ul {
    position: absolute;
    top: calc(100%);
    list-style: none;
    width: calc(100%);
    z-index: 40;
    background-color: white;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    border-radius: 0 0 6px 6px;
    li {
      text-align: right;
      flex-direction: row;
      text-align: right;
      line-height: 36px;
      font-size: 15px;
      cursor: pointer;
      color: #3b3b3b;
      padding: 0 10px;
      &:hover {
        background-color: darken(white,10%);
      }
      &:last-of-type {
        border-radius: 0 0 6px 6px;
      }
    }
  }
}
</style>
