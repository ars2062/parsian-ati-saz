import consts from "@/consts";
import axios from "axios";
class auth {
  static async login(phone) {
    return await axios.get(consts.api_urls.login, {
      params: { phone: phone },
      headers: {
        "Content-Type": "application/json"
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async verify(phone, code) {
    return await axios.post(
      consts.api_urls.verify,
      {
        phone: phone,
        code: code
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        validateStatus: () => {
          return true;
        }
      }
    );
  }
  static async logout() {
    return await axios.post(
      consts.api_urls.logout,
      {},
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
}

export default auth;
