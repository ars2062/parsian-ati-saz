<template>
  <div class="contact-card">
    <div>
      <span>پیام از {{this.name}}</span>
    </div>
    <div>
      <span>شماره : {{this.phone}}</span>
    </div>
    <div>
      <span>موضوع : {{this.subject}}</span>
    </div>
    <div>
      <div
        class="button"
        style="background-color:#FFFFFF; color:black;"
        @click="this.showMsg"
      >نمایش پیام</div>
    </div>
    <div>
      <div
        class="button"
        style="background-color:#DB3737; color:white;"
        @click="this.delete"
      >حذف پیام</div>
    
    </div>
  </div>
</template>

<script>

import Modal from '@/components/Admin/Modal.vue';

export default {
  name: "Contact",
  components:{
    Modal
  },
  props: ["id", "name", "subject", "phone", "description"],
  data: function() {
    return {
      id: this.id,
      name: this.name,
      subject: this.subject,
      phone: this.phone,
      desc: this.description
    };
  },
  methods: {
      delete(){
          var res=confirm('آیا مطمِن هستید؟');
          if (res) {
            this.$store.dispatch('contact/delete',this.id);
          }
      },
      showMsg(){
        alert(this.desc);
      }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "MJ Two";
  src: url("~@/assets/fonts/Mj_Dinar Two Light.ttf") format("ttf");
}
.contact-card {
  background-color: #f2f2f2;
  margin: 16px;
  height: auto;
  float: right;
  width: 30%;
  direction: rtl;
  display: flex;
  flex-direction: column;
  padding: 10px;
  line-height: 2.5em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.contact-card * {
  font-family: "MJ Two", Roboto;
  font-size: 20px;
  word-wrap: break-word;
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .contact-card {
    width: 93%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .contact-card {
    width: 48%;
    margin: 5px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .contact-card {
    width: 30%;
    margin: 5px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .contact-card {
    width: 30%;
    margin: 12px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>


