<template>
  <div class="contact-container">
    <Contact name="محمد" phone="09114648556" email="mohk1379@gmail.com" @click="this.fetchAllContacts"/>
    <Contact name="محمد" phone="09385916615" email="mohk1379@gmail.com"/>
    <Contact name="محمد" phone="09102716733" email="mohk1379@gmail.com"/>
    <Contact name="محمد" phone="09102716733" email="mohk1379@gmail.com"/>
  </div>
</template>

<script>
import Contact from "@/components/Admin/Contact.vue";

export default {
  name: "index",
  components: {
    Contact
  },
  computed() {
      },
  created() {
      this.$store.dispatch("contact/fetchAllContacts");
    },
  methods:{}
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>


