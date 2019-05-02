<template>
    <div :class="$style.combolist" dir="rtl">
      <div @click="toggleDisplay">
        <span>{{choosen||title}}</span>
        <img src="@/assets/icons/right-arrow.svg">
      </div>
      <ul :style="{display:this.display}">
        <li v-for="(item,index) in this.items" :key="item.id" @click="choose(item.id)">
          <Checkbox :value="item.id" v-model="CheckedItems" :dark="(index % 2 == 0)?true:false"/>
          <span>{{item.text}}</span>
        </li>
      </ul>
      {{CheckedItems}}
  </div>
</template>

<script>
import Checkbox from '@/components/form/Checkbox.vue';
export default {
  name: "Combolist",
  components:{Checkbox},
  props: { items: { type: Array }, title: { type: String } },
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
      this.choosen = this.items.find(item => {
        return item.id == id;
      }).text;
      this.$emit("value", id);
      this.toggleDisplay();
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
      display: block;
      border: 1px solid white;
      cursor: pointer;
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
