<template>
  <div :class="$style.image_selector">
    <input type="file" :id="id" hidden accept="image/*" :multiple="this.multiple" @change="changed">
    <div v-for="(file,index) in files" :key="index" :class="$style.image_container" @click="remove(index)">
      <img :src="file">
    </div>
    <label v-if="(!multiple && files.length < 1)" :for="id" :class="$style.add_image"></label>
    <label v-if="multiple" :for="id" :class="$style.add_image"></label>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  props: { multiple: { type: Boolean, default: false } },
  data() {
    return {
      id: null,
      files: []
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    async changed($event) {
      for (let i = 0; i < $event.target.files.length; i++) {
        const file = $event.target.files[i];
        this.files.push(await this.getBase64(file));
      }
      this.$emit('input',this.files);
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    remove(index){
      this.files.splice(index,1);
      this.$emit('input',this.files);
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.image_selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-gap: 15px;
  user-select: none;
  .add_image {
    display: block;
    @include size(120px, 120px);
    border-radius: 3px;
    border: 1px solid #707070;
    background-color: transparent;
    cursor: pointer;
    background: image(image-add-button) no-repeat;
    background-size: 37px;
    background-position: center;
    margin: 0 !important;
  }
  .image_container {
    display: block;
    @include size(120px, 120px);
    border-radius: 3px;
    border: 1px solid #707070;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    img {
      @include size(100%, 100%);
    }
    &::after {
      @include content();
      background: image(cancel) no-repeat;
      background-size: 50px;
      background-position:center;
      background-color: rgba(white,.8);
      display: none;
    }
    &:hover::after{
      display: block;
    }
  }
}
</style>