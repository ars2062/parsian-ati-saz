import consts from "@/consts";
import axios from "axios";

class advert {
  static async verify_advert({ advert_id, type }) {
    return await axios.post(
      consts.api_urls.admin_advert_area.verify_advert + advert_id,
      {
        advert_type: type
      },
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
  static async fetch_pending_adverts() {
    return await axios.get(consts.api_urls.admin_advert_area.pending_adverts, {
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

export default advert;
