import consts from "@/consts";
import axios from "axios";

class product {
  static async add_product_advert(obj) {
    return await axios.post(
      consts.api_urls.admin_advert_area.add_product_advert,
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
  static async verify_product_advert({ advert_id, phone, code }) {
    return await axios.post(
      consts.api_urls.admin_advert_area.verify_product_advert + advert_id,
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
  static async remove_product_advert(advert_id) {
    return await axios.delete(
      consts.api_urls.admin_advert_area.remove_product_advert + advert_id,
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
  static async edit_product_advert(obj) {
    return await axios.put(
      consts.api_urls.admin_advert_area.edit_product_advert + obj.id,
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
      consts.api_urls.admin_advert_area.api_urls.product_advert,
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
      consts.api_urls.admin_advert_area.get_product_advert + id,
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

export default product;
