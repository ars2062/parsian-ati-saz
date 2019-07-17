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
      <span v-if="selectedKeywords.length==0" :class="$style.all">همه</span>
      <img src="@/assets/icons/right-arrow.svg" />
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
      //const input = document.getElementById("tagInput");
      //input.blur();
      //this.value = "";
      //this.hide();
      this.emit();
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
      this.emit();
    },
    emit() {
      this.$emit("input", this.selectedKeywords.map(keyword => keyword.id));
    }
  },
  computed: {
    computedkeywords() {
      return this.keywords.filter(keyword => {
        return !this.selectedKeywords.find(k => k.id == keyword.id);
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
    min-height: 24px;
    flex-direction: row;
    color: #cecece;
    min-height: 24px;
    font-size: 14px;
    cursor: pointer;
    background-color: rgba($color: #fff, $alpha: 0.57);
    border-radius: 6px;
    border: none;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    padding: 15px 30px;
    span {
      padding: 0 5px;
      background-color: #e6e6e6;
      color: #000000;
      border-radius: 6px;
      line-height: 28px;
      height: 28px;
      margin: 0 5px !important;
      display: flex;
      border-radius: 6px;
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
    top: calc(100%);
    list-style: none;
    width: calc(100%);
    z-index: 40;
    background-color: white;
    border-radius: 0 0 6px 6px;
    box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
    max-height: 175px;
    overflow: auto;
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
        background-color: darken(white, 10%);
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
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>