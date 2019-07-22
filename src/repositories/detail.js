import consts from "@/consts";
import Axios from "axios";

class detail {
  static async sell(id) {
    return await Axios.get(consts.api_urls.home_screen_sell_detail + id, {
      validateStatus: () => {
        return true;
      }
    });
  }
  static async partnership(id) {
    return await Axios.get(
      consts.api_urls.home_screen_partnership_detail + id,
      {
        validateStatus: () => {
          return true;
        }
      }
    );
  }
  static async master(id) {
    return await Axios.get(consts.api_urls.home_screen_master_detail + id, {
      validateStatus: () => {
        return true;
      }
    });
  }
  static async product(id) {
    return await Axios.get(consts.api_urls.home_screen_product_detail + id, {
      validateStatus: () => {
        return true;
      }
    });
  }
}

export default detail;
