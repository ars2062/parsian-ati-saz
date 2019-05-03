<template>
  <div class="contact-container">

      <center>
          <span v-show="this.loading">Loading</span>
      </center>
        <Contact :v-=!this.loading v-for="c in this.contacts" :key="c.id"
        :id='c.id' 
        :name='c.name'
        :subject='c.subject'
        :phone='c.phone'
        :description='c.description' />
  </div>
</template>

<script>
import Contact from "@/components/Admin/Contact.vue";
import { mapState } from 'vuex';
import { mapGetters } from "vuex";

export default {
  name: "index",
  components: {
    Contact
  },
  mounted() {
    this.$store.dispatch("contact/fetchAllContacts");
  },
  computed:{
      contacts:function(){
          return this.$store.getters['contact/contacts'];
      },
      loading:function () {
          return this.$store.getters['contact/loading'];
      }
  },
  methods:{
      
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.contact-container{
    height: 90vh;
    overflow-y: auto;
}
</style>


