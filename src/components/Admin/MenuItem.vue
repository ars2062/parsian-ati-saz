<template>
  <div class="flex-container">
      <router-link :to='{path:this.path}' >{{this.title}}</router-link>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: ["title","path"],
  data: function() {
    return {
      title: this.title,
      path:this.path
    };
  }
};
</script>

<style scoped>
div {
  height: 50px;
  width: 100%;
  background-color: #6970b2;
  border-bottom: black solid;
  border-bottom-width: 0.5px;
}
.flex-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex-container:hover{
    background-color: #4B507E;
}

a{
    color: white;
    text-decoration: none;
}
</style>

