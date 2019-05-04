<template>
  <div class="contact-container">
    <div v-if="this.loading">
        <center>
          <span>درحال بارگذاری</span>
        </center>
      </div>
    <div v-else>
      <div v-if="this.contacts.length <= 0">
      <center>
        <span>هیچ موردی یافت نشد</span>
      </center>
    </div>
      <div v-else>
        <Contact
          v-for="c in this.contacts"
          :key="c.id"
          :id="c.id"
          :name="c.name"
          :subject="c.subject"
          :phone="c.phone"
          :description="c.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/Admin/Contact.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "index",
  components: {
    Contact
  },
  mounted() {
    this.$store.dispatch("contact/fetchAllContacts");
  },
  computed: {
    contacts: function() {
      return this.$store.getters["contact/contacts"];
    },
    loading: function() {
      return this.$store.getters["contact/loading"];
    }
  },
  methods: {}
};
</script>

<style>

@font-face {
  font-family: "MJ Two";
  src: url("~@/assets/fonts/Mj_Dinar Two Light.ttf") format("ttf");
}

.contact-container * {
  font-family: "MJ Two",Roboto;
  font-size:20px;
  box-sizing: border-box;
}
.contact-container {
  height: 90vh;
  overflow-y: auto;
}
</style>


