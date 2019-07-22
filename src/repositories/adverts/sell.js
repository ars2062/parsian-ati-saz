import consts from "@/consts";
import axios from "axios";

class sell {
  static async add_sell_advert(obj) {
    return await axios.post(consts.api_urls.add_sell_advert, obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user").token
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async verify_sell_advert({ advert_id, phone, code }) {
    return await axios.post(
      consts.verify_sell_advert + advert_id,
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
  static async remove_sell_advert(advert_id) {
    return await axios.delete(
      consts.api_urls.remove_sell_advert + advert_id,
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
  static async edit_sell_advert(obj) {
    return await axios.put(consts.api_urls.edit_sell_advert + obj.id, obj, {
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
    return await axios.get(consts.api_urls.sell_advert, {
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
    return await axios.get(consts.get_sell_advert + id, {
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

export default sell;
