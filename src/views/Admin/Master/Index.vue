<template>
  <div class="page">
    <center>
      <div class="box" style="display:flex; flex-direction:column; justify-content: center;">
        <div class="flex-container" style="flex-direction:row; flex-wrap:5px;">
          <div class="button" style="width:50%;">ثبت اگهی های استاد کار</div>
          <div class="button" style="width:50%;">بررسی اگهی های استادکار</div>
        </div>
      </div>
    </center>
  </div>
</template>
<script>
export default {
  name: "Index"
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}

.button {
  height: 65px;
  background-color: #6970b2;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  border: none;
  border-radius: 5px;
  color: white;
  transition-property: opacity;
  transition-delay: 0.1s;
}

.button:hover {
  opacity: 0.7;
  cursor: pointer;
}

.page {
  width: 100%;
  height: 100vh;
}
.box {
  width: 80%;
  height: 182px;
  background-color: #f2f2f2;
  border: #ffe1a0 solid;
  border-radius: 5px;
}
</style>

