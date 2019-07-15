<template>
  <div :class="$style.KeywordSelector">
    <div
      :class="$style.selected"
      @click="toggle"
      :style="isVisible=='block'?'border-radius: 6px 6px 0 0; border-bottom:none':''"
    >
      <span v-for="(keyword,index) in selectedKeywords" :key="keyword.id">
        {{keyword.name}}
        <button @click="removeKeyword(index)"></button>
      </span>
      <span v-if="selectedKeywords.length==0" :class="$style.all">همه محله ها</span>
      <img src="@/assets/icons/right-arrow.svg">
    </div>
    <ul :style="{display: isVisible}">
      <li
        v-for="keyword in computedkeywords"
        :key="keyword.id"
        @click="addKeyword($event,keyword)"
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
    toggle($event) {
      $event.stopPropagation();
      this.isVisible == "block"
        ? (this.isVisible = "none")
        : (this.isVisible = "block");
    },
    async addKeyword($event, k) {
      $event.stopPropagation();
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
  position: relative;
  .selected {
    display: flex;
    flex-wrap: wrap;
    min-height: 40px;
    flex-direction: row;
    color: #cecece;
    min-height: 40px;
    font-size: 14px;
    cursor: pointer;
    background-color: #3b3b3b;
    border: 1px solid color(skin-tone);
    border-radius: 6px;
    padding: 0 15px;
    span {
      padding: 0 5px;
      background-color: #e6e6e6;
      color: #000000;
      border-radius: 6px;
      line-height: 28px;
      height: 28px;
      margin: 0 5px;
      display: flex;
      border-radius: 6px;
      margin: 6px;
      button {
        display: block;
        text-decoration: none;
        color: rgba($color: #000000, $alpha: 0.68);
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
      &.all {
        color: #cecece;
        background-color: transparent;
        border: none;
      }
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
  img {
    width: 17px;
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>