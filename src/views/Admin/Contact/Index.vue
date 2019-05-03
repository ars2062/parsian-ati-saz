<template>
  <div id="test">
    <div class="contact-container">
      <Contact name="محمد" phone="09114648556" email="mohk1379@gmail.com"/>
      <Contact name="محمد" phone="09385916615" email="mohk1379@gmail.com"/>
      <Contact name="محمد" phone="09102716733" email="mohk1379@gmail.com"/>
      <Contact name="محمد" phone="09102716733" email="mohk1379@gmail.com"/>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/Admin/Contact.vue";

export default {
  name: "index",
  components: {
    Contact
  },
  computed() {},
  created() {
    this.$store.dispatch("contact/fetchAllContacts");
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

</style>


