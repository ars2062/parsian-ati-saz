var api_url = "http://localhost:8082/v1/";

export default {
  auth_header: "$2y$10$4ci4mDCRywK44qQg9zKqLeECMddbVkxmYgITwERF1PWZN1BKKCioG",
  api_urls: {
    home: api_url + "home",
    city: api_url + "city",
    add_contact: api_url + "contact",
    search: api_url + "search",
    related: api_url + "related",
    sell_files: api_url + "sells",
    partnership_files: api_url + "partnerships",
    all_products: api_url + "products",
    all_masters: api_url + "masters",
    all_golds: api_url + "golds",

    // this part is for account
    login: api_url + "accounts/login",
    verify: api_url + "accounts/verify",
    logout: api_url + "accounts/logout",

    // contact part for admin
    get_contacts: api_url + "/adminstrator/contact",
    remove_contacts: api_url + "/adminstrator/contact/",

    // sell advert part
    sell_advert: api_url + "standard/sell",
    add_sell_advert: api_url + "standard/sell",
    remove_sell_advert: api_url + "standard/sell/",
    edit_sell_advert: api_url + "standard/sell/",

    // partnership advert
    add_partnership_advert: api_url + "standard/partnership",
    partnership_advert: api_url + "standard/partnership",
    remove_partnership_advert: api_url + "standard/partnership/",
    edit_partnership_advert: api_url + "standard/partnership/",

    // product advert
    add_product_advert: api_url + "standard/products-advert",
    product_advert: api_url + "standard/products-advert",
    remove_product_advert: api_url + "standard/products-advert/",
    edit_product_advert: api_url + "standard/products-advert/",

    // professor advert
    add_master_advert: api_url + "standard/master-advert",
    master_advert: api_url + "standard/master-advert",
    remove_master_advert: api_url + "standard/master-advert/",
    edit_master_advert: api_url + "standard/master-advert/",

    // adviser part
    add_adviser: api_url + "adminstrator/adviser",
    fetch_adviser: api_url + "adminstrator/adviser",
    edit_adviser: api_url + "adminstrator/adviser/",
    remove_adviser: api_url + "adminstrator/adviser/",

    request_payment_url: api_url + "request/payment/",
    get_user_adverts_url : api_url + 'standard/user/adverts',

    // admin area

    admin_advert_area: {
      // sell advert part
      sell_advert: api_url + "adminstrator/sell",
      add_sell_advert: api_url + "adminstrator/sell",
      remove_sell_advert: api_url + "adminstrator/sell/",
      edit_sell_advert: api_url + "adminstrator/sell/",

      // partnership advert
      add_partnership_advert: api_url + "adminstrator/partnership",
      partnership_advert: api_url + "adminstrator/partnership",
      remove_partnership_advert: api_url + "adminstrator/partnership/",
      edit_partnership_advert: api_url + "adminstrator/partnership/",

      // product advert
      add_product_advert: api_url + "adminstrator/products-advert",
      product_advert: api_url + "adminstrator/products-advert",
      remove_product_advert: api_url + "adminstrator/products-advert/",
      edit_product_advert: api_url + "adminstrator/products-advert/",

      // professor advert
      add_master_advert: api_url + "adminstrator/master-advert",
      master_advert: api_url + "adminstrator/master-advert",
      remove_master_advert: api_url + "adminstrator/master-advert/",
      edit_master_advert: api_url + "adminstrator/master-advert/",

      verify_advert: api_url + "adminstrator/advert/verify/",
      pending_adverts: api_url + "adminstrator/pending-adverts"
    }
  },
  // advert types for send to api
  advert_types: {
    Product: 'ProductsAdvert',
    Master: 'MasterAdvert',
    Sell: 'Sell',
    Partnership: 'Partnership'
  }
};
