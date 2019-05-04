<script>
import Adviser from "@/components/Admin/Adviser.vue";
import Modal from "@/components/Admin/Modal.vue";
export default {
  name: "List",
  components: {
    Adviser,
    Modal
  },
  mounted() {
    this.$store.dispatch("adviser/fetchAllAdvisers");
  },
  computed: {
    advisers: function() {
      return this.$store.getters["adviser/advisers"];
    },
    loading: function() {
      return this.$store.getters["adviser/loading"];
    }
  },
  methods(){
    edit:()=> {
      this.$store.commit('modal/showModal');
    }
  }
};
</script>

<template>
  <div class="adviser-container">
    <div v-if="this.loading">
      <center>
        <span>درحال بارگذاری</span>
      </center>
    </div>
    <div v-else>
      <div v-if="this.advisers.length <= 0">
        <center>
          <span>هیچ موردی یافت نشد</span>
        </center>
      </div>
      <div v-else>
        <Modal title="hello world" id="myModal"/>
        <Adviser
          v-for="adviser in this.advisers"
          :key="adviser.id"
          :id="adviser.id"
          :name="adviser.name"
          :phone="adviser.phone"
          :email="adviser.email"
          :pic="adviser.pic"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "MJ Two";
  src: url("~@/assets/fonts/Mj_Dinar Two Light.ttf") format("ttf");
}

* {
  font-family: "MJ Two", Roboto;
  font-size: 20px;
  box-sizing: border-box;
}
.adviser-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

@media only screen and (max-width: 450px) {
  .adviser-container {
    padding: 15px;
  }
}
@media only screen and (min-width: 450px) {
  .adviser-container {
    display: block;
  }
  .adviser-container div.adviser-card {
    float: right;
    margin-right: 8px;
  }
}

@media only screen and (min-width: 600px) {
  .adviser-container {
    display: block;
  }
  .adviser-container div.adviser-card {
    float: right;
  }
}
</style>



