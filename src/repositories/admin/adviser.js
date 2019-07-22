import consts from "@/consts";
import axios from "axios";

class adviser {
  static async fetchAllAdvisers() {
    return await axios.get(consts.api_url.fetch_adviser, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async delete(id) {
    return await axios.delete(consts.api_urls.remove_adviser + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async edit(obj) {
    return await axios.put(consts.api_urls.edit_adviser + obj.id, obj, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user.token")
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async create(obj) {
    return await axios.put(consts.api_urls.add_adviser, obj, {
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

export default adviser;
