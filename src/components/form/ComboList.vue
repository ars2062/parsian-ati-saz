<template>
  <div :class="$style.combolist" dir="rtl">
    <div @click="toggleDisplay">
      <span>نوع ملک مد نظرتون رو انتخاب کنید</span>
      <img src="@/assets/icons/right-arrow.svg">
    </div>
    <ul :style="{display:this.display}">
      <li v-for="item in this.items" :key="item.id" @click="choose(item.id)">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Combolist",
  props: { items: { type: Array } },
  data() {
    return {
      display: "none"
    };
  },
  methods: {
    toggleDisplay() {
      this.display = this.display === "block" ? "none" : "block";
    },
    choose(id){
      this.$emit('value',id);
    }
  }
};
</script>

<style lang='scss' module>
@import "@/assets/main.scss";
.combolist {
  margin: auto;
  margin-bottom: 175px;
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
