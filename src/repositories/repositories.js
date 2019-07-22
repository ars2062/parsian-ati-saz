import home from "./home";
import auth from "./auth";
import advert from "./advert";
import detail from "./detail";
import { advert as admin_advert } from "./admin/advert";
import { adviser as admin_adviser } from "./admin/adviser";
import { contact as admin_contact } from "./admin/contact";
import { master as admin_master } from "./admin/adverts/master";
import { partnership as admin_partnership } from "./admin/adverts/partnership";
import { product as admin_product } from "./admin/adverts/product";
import { sell as admin_sell } from "./admin/adverts/sell";
import master from "./adverts/master";
import partnership from "./adverts/partnership";
import product from "./adverts/product";
import sell from "./adverts/sell";

export default {
  admin: {
    adverts: {
      master: admin_master,
      partnership: admin_partnership,
      product: admin_product,
      sell: admin_sell
    },
    advert: admin_advert,
    adviser: admin_adviser,
    contact: admin_contact
  },
  adverts: {
    master: master,
    partnership: partnership,
    product: product,
    sell: sell
  },
  advert: advert,
  auth: auth,
  detail: detail,
  home: home
};
