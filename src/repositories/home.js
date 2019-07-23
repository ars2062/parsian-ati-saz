import consts from "@/consts";
import Axios from "axios";

class home {
  static async fetch_adverts() {
    return await Axios.get(consts.api_urls.home, {
      validateStatus: () => {
        return true;
      }
    });
  }
  static async search(paramObj) {
    return await Axios.get(consts.api_urls.search, {
      params: {
        min_metrazh: paramObj.min_metrazh,
        max_metrazh: paramObj.max_metrazh,
        cities: paramObj.cities,
        advert_type: paramObj.advert_type
      },
      headers: {
        "Content-Type": "application/json"
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async send_contact({ name, subject, phone, description }) {
    return await Axios.post(
      consts.api_urls.add_contact,
      {
        name: name,
        subject: subject,
        phone: phone,
        description: description
      },
      {
        headers: { "Content-Type": "application/json" },
        validateStatus: () => {
          return true;
        }
      }
    );
  }
  static async get_sell_files(last_id = null, paginate = 9) {
    return await Axios.get(consts.api_urls.sell_files, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        lastItem_Id: last_id,
        paginate: paginate
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async get_partnership_files(last_id = null, paginate = 9) {
    return await Axios.get(consts.api_urls.partnership_files, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        lastItem_Id: last_id,
        paginate: paginate
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async get_all_products(last_id = null, paginate = 9) {
    return await Axios.get(consts.api_urls.all_products, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        lastItem_Id: last_id,
        paginate: paginate
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async get_all_masters(last_id = null, paginate = 9) {
    return await Axios.get(consts.api_urls.all_masters, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        lastItem_Id: last_id,
        paginate: paginate
      },
      validateStatus: () => {
        return true;
      }
    });
  }
  static async get_all_golds(last_id = null, paginate = 9) {
    return await Axios.get(consts.api_urls.all_golds, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        lastItem_Id: last_id,
        paginate: paginate
      },
      validateStatus: () => {
        return true;
      }
    });
  }
}

export default home;
