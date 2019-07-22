import consts from "@/consts";
import axios from "axios";

class partnership {
  static async add_partnership_advert(obj) {
    return await axios.post(
      consts.api_urls.admin_advert_area.add_partnership_advert,
      obj,
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
  static async remove_partnership_advert(advert_id) {
    return await axios.delete(
      consts.api_urls.admin_advert_area.remove_partnership_advert + advert_id,
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
  static async edit_partnership_advert(obj) {
    return await axios.put(
      consts.api_urls.admin_advert_area.edit_partnership_advert + obj.id,
      obj,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        },
        validateStatus: () => {
          return true;
        }
      }
    );
  }
  static async fetch_adverts() {
    return await axios.get(
      consts.api_urls.admin_advert_area.partnership_advert,
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
  static async detail(id) {
    return await axios.get(
      consts.api_urls.admin_advert_area.get_partnership_advert + id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("user.token")
        },
        validateStatus: () => {
          return true;
        }
      }
    );
  }
}

export default partnership;
