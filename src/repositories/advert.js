import consts from "@/consts";
import axios from "axios";

class advert {
  static async fetch_user_adverts() {
    await axios.get(consts.api_urls.get_user_adverts_url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user").token
      },
      validateStatus: () => {
        return true;
      }
    });
  }
}

export default advert;
