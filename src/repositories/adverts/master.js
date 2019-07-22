import consts from "@/consts";
import axios from "axios";

class master {
  static async add_master_advert(obj) {
    return await axios.post(consts.api_urls.add_master_advert, obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user").token
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async verify_master_advert({ advert_id, phone, code }) {
    return await axios.post(
      consts.verify_master_advert + advert_id,
      {
        phone: phone,
        code: code
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user").token
        },
        validateStatus: () => {
          return true;
        }
      }
    );
  }
  static async remove_master_advert(advert_id) {
    return await axios.delete(
      consts.api_urls.remove_master_advert + advert_id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user").token
        },
        validateStatus: () => {
          return true;
        }
      }
    );
  }
  static async edit_master_advert(obj) {
    return await axios.put(consts.api_urls.edit_master_advert + obj.id, obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async fetch_adverts() {
    return await axios.get(consts.api_urls.master_advert, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user").token
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async detail(id) {
    return await axios.get(consts.get_master_advert + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
}

export default master;
