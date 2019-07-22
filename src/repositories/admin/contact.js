import consts from "@/consts";
import axios from "axios";

class contact {
  static async fetchAllContacts() {
    return await axios.get(consts.api_urls.get_contacts, {
      headers: {
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async delete_contact(id) {
    return await axios.delete(consts.api_urls.remove_contacts + id, {
      headers: {
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
}

export default contact;
