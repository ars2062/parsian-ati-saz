
var api_url="http://localhost:8082/v1/";

export default {
    auth_header:"$2y$10$4ci4mDCRywK44qQg9zKqLeECMddbVkxmYgITwERF1PWZN1BKKCioG",
    api_urls:{
        home:api_url+'home',
        search:api_url+'search/',
        login:api_url+'account/login',
        verify:api_url+'account/verify',
        logout:api_url+'account/logout',
        add_contact:api_url+'contact',
        add_sell_advert:api_url+'clutter_sell_advert',
        verify_sell_advert:api_url+'clutter_sell_advert/verify/',
        remove_sell_advert:api_url+'clutter_sell_advert/',
        edit_sell_advert:api_url+'clutter_sell_advert/',
        add_partnership_advert:api_url+'clutter_partnership_advert',
        verify_partnership_advert:api_url+'clutter_partnership_advert/verify/',
        remove_partnership_advert:api_url+'clutter_partnership_advert/',
        edit_partnership_advert:api_url+'clutter_partnership_advert/',
        add_product_advert:api_url+'home_advert',
        verify_product_advert:api_url+'home_advert/verify/',
        remove_product_advert:api_url+'home_advert/',
        edit_product_advert:api_url+'home_advert/',
        add_professor_advert_advert:api_url+'professor_advert',
        verify_professor_advert_advert:api_url+'professor_advert/verify/',
        remove_professor_advert_advert:api_url+'professor_advert/',
        edit_professor_advert_advert:api_url+'professor_advert/',
        request_payment_url:api_url+'request/payment/',

    },
    
}