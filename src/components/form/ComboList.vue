<template>
  <div :class="$style.combolist" dir="rtl">
    <div @click="toggleDisplay">
      <span>{{choosen||title}}</span>
      <img src="@/assets/icons/right-arrow.svg">
    </div>
    <ul :style="{display:this.display}">
      <li v-for="(item,index) in this.items" :key="item.id" @click="choose(item.id)">
        <div v-if="checkbox" :class="$style.checkbox">
          <input
            type="checkbox"
            v-model="CheckedItems"
            :name="index"
            :id="index"
            :value="item.id"
            @change="change()"
            hidden
          >
          <label :for="index" :class="(index % 2 == 0)?$style.dark:''"></label>
        </div>
        <span>{{item.text}}</span>
      </li>
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
  methods: {
    toggleDisplay() {
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
  margin: auto;
  position: relative;
  user-select: none;
  div {
    color: color(grullo);
    height: 30px;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 2px solid color(skin-tone);
    span {
      float: right;
    }
    img {
      width: 17px;
      float: left;
      @include VerticalCenter();
    }
  }
  ul {
    position: absolute;
    top: calc(100% + 10px);
    list-style: none;
    width: 100%;
    z-index: 40;
    li {
      text-align: center;
      display: flex;
      flex-direction: row;
      border: 1px solid white;
      text-align: right;
      cursor: pointer;
      span {
        margin-right: 10px;
      }
      &:nth-child(odd) {
        background-color: color(skin-tone);
        color: black;
      }
      &:nth-child(even) {
        background-color: black;
        color: white;
      }
      &:hover {
        text-shadow: 0 0 10px rgba($color: #fff, $alpha: 0.1);
      }
    }
  }
}
</style>
