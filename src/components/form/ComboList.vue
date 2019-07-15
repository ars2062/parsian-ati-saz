<template>
  <div :class="$style.combolist" dir="rtl">
    <div
      @click="toggleDisplay"
      :style="display=='block'?'border-radius: 6px 6px 0 0; border-bottom:none':''"
    >
      <span>{{choosen||title}}</span>
      <img src="@/assets/icons/right-arrow.svg" />
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
      try {
        $event.stopPropagation();
      } catch {}
      this.display = this.display === "block" ? "none" : "block";
    },
    choose(id) {
      if (!this.checkbox) {
        this.choosen = this.items.find(item => {
          return item.id == id;
        }).text;
        this.$emit("input", id);
      }
      this.toggleDisplay();
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
    height: 40px;
    font-size: 14px;
    cursor: pointer;
    background-color: #3b3b3b;
    border: 1px solid color(skin-tone);
    border-radius: 6px;
    padding: 0 15px;
    span {
      float: right;
      line-height: 40px;
    }
    img {
      width: 17px;
      float: left;
      @include VerticalCenter();
    }
  }
  ul {
    position: absolute;
    top: calc(100% - 1px);
    list-style: none;
    width: calc(100% - 2px);
    z-index: 40;
    border: 1px solid color(skin-tone);
    background-color: #3b3b3b;
    border-top: none;
    border-radius: 0 0 6px 6px;
    li {
      text-align: right;
      flex-direction: row;
      text-align: right;
      line-height: 36px;
      font-size: 15px;
      cursor: pointer;
      color: white;
      padding: 0 10px;
      &:hover {
        background-color: #000000;
      }
      &:last-of-type {
        border-radius: 0 0 6px 6px;
      }
    }
  }
}
</style>
