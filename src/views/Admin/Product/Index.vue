<template>
  <div>
    <div :class="$style.container">
      <a href="/admin/dashboard-product-list">آگهی های ثبت شده</a>
      <a href="/admin/product-form">ثبت آگهی محصولات</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
};
</script>

<style lang="scss" module>
.container {
  margin: 30px 90px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 20px;
  background-color: rgba(#f2f2f2, 0.48);
  border: 1px solid #ffe1a0;
  border-radius: 6px;
  
  a {
    line-height: 65px;
    text-align: center;
    border: none;
    border-radius: 6px;
    background-color: #6970b2;
    color: white;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      background-color: darken(#6970b2, 10%);
    }
  }
}
</style>