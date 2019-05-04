<template>
  <div :class="$style.KeywordSelector">
    <div :class="$style.selected" @click="focus">
      <span v-for="(keyword,index) in selectedKeywords" :key="keyword.id">
        {{keyword.name}}
        <button @click="removeKeyword(index)"></button>
      </span>
      <input id="tagInput" type="text" :placeholder="placeholder" @focus="isVisible='block'" v-model="value">
    </div>
    <img src="@/assets/icons/right-arrow.svg">
    <ul :style="{display: isVisible}">
      <li
        v-for="keyword in computedkeywords"
        :key="keyword.id"
        @click="addKeyword(keyword)"
      >{{keyword.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
export default {
  props: { keywords: { type: Array }, placeholder: { tpye: String } },
  data() {
    return {
      /*keywords: [],*/ selectedKeywords: [],
      isVisible: "none",
      value: ""
    };
  },
  mounted() {
    /*axios
      .get("/api/keyword", {
        headers: { "X-Authorization": user.remember_token },
        validateStatus: () => {
          return true;
        }
      })
      .then(res => {
        this.keywords = res.data;
      });
      */

    window.addEventListener("click", e => {
      if (this.isVisible == "block") this.isVisible = "none";
    });
  },
  methods: {
    focus($event) {
      $event.stopPropagation();
      document.getElementById("tagInput").focus();
    },
    async addKeyword(k) {
      await this.selectedKeywords.push(k);
      const input = document.getElementById("tagInput");
      input.blur();
      this.value = "";
      this.hide();
      this.$emit("input", this.selectedKeywords.map(keyword => keyword.id));
    },
    hide() {
      this.isVisible = "none";
    },
    async removeKeyword(index) {
      await this.selectedKeywords.splice(index, 1);
      await this.$emit(
        "input",
        this.selectedKeywords.map(keyword => keyword.id)
      );
      this.hide();
    }
  },
  computed: {
    computedkeywords() {
      return this.keywords.filter(keyword => {
        if (this.value != "") {
          return (
            keyword.name.includes(this.value) &&
            !this.selectedKeywords.includes(keyword)
          );
        } else return !this.selectedKeywords.includes(keyword);
      });
    }
  }
};
</script>

<style lang='scss' module>
@import "@/assets/main.scss";
.KeywordSelector {
  border-bottom: 2px solid color(skin-tone);
  direction: rtl;
  position: relative;
  font-size: 16px;
  min-height: 30px;
  cursor: text;
  .selected {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    min-height: 30px;
    flex-direction: row;
  }
  span {
    padding: 0 5px;
    background-color: color(skin-tone);
    border-radius: 0px;
    height: 25px;
    line-height: 25px;
    margin: 0 5px;
    display: flex;
    flex-direction: row;
    border-radius: 6px;
    button {
      display: block;
      text-decoration: none;
      color: black;
      font-size: 10px;
      width: 10px;
      height: 10px;
      line-height: 10px;
      border: none;
      cursor: pointer;
      margin: 8px 0;
      margin-right: 5px;
      background-color: transparent;
      outline: none;
      &::before {
        content: "\1F5D9";
      }
    }
  }
  input {
    background: transparent !important;
    border: none !important;
    height: 100%;
    outline: none;
    height: 30px;
    line-height: 30px;
    display: inline-block;
  }
  ul {
    background-color: #fff;
    position: absolute;
    max-height: 400px;
    top: calc(100% + 10px);
    right: 0;
    width: 100%;
    list-style: none;
    overflow-y: auto;
    z-index: 50;
    li {
      cursor: pointer;
      border: 1px solid white;
      text-align: right;
      padding: 0 10px;
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
  img {
    width: 17px;
    height: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>