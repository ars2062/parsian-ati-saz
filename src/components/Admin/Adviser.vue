<script>
export default {
  name: "Adviser",
  props: ["id", "name", "phone", "email", "pic"],
  data: {
    function() {
      return [
        this.id,
        this.name,
        this.phone,
        this.email,
        this.pic
      ];
    }
  },
  methods:{
      delete(){
          var res=confirm('آیا مطمِن هستید؟');
          if (res) {
            this.$store.dispatch('adviser/delete',this.id);
          }
      },
      edit(){
      }
  }
};
</script>

<style scoped>
.adviser-card {
  display: flex;
  flex-direction: column;
  width: auto;
  direction: rtl;
  line-height: 2em;
  padding: 16px;
  transition-delay: 0.1s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 5px;
  /* float: right; */
}

.image img {
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background-color: aqua;
}

.button {
  height: 51px;
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.button:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>



<template>
  <div class="adviser-card">
    <div class="image">
      <center>
        <img :src='this.pic'>
      </center>
    </div>
    <div>
      <center>
        <span>{{this.name}}</span>
      </center>
    </div>
    <div>
      <span>شماره تلفن : {{this.phone}}</span>
    </div>
    <div>
      <span>ایمیل : {{this.email}}</span>
    </div>
    <div>
      <div
        class="button"
        style="background-color:#FFFFFF; color:black;"
        @click="this.edit"
      >ویرایش</div>
    </div>
    <div>
      <div
        class="button"
        style="background-color:#DB3737; color:white;"
        @click="this.delete"
      >حذف</div>
    </div>
  </div>
</template>


