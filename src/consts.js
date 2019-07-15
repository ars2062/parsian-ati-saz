
var api_url="http://localhost:8082/v1/";

export default {
    auth_header:"$2y$10$4ci4mDCRywK44qQg9zKqLeECMddbVkxmYgITwERF1PWZN1BKKCioG",
    api_urls:{
        home:api_url+'home',
        add_contact:api_url+'contact',
        search:api_url+'search/',
        sell_files:api_url+'sells',
        partnership_files:api_url+'partnerships',
        all_products:api_url+'products',
        all_masters:api_url+'masters',
        all_golds:api_url+'golds',

        // this part is for account
        login:api_url+'account/login',
        verify:api_url+'account/verify',
        logout:api_url+'account/logout',

        // contact part for admin
        get_contacts:api_url+'contact',
        remove_contacts:api_url+'contact/',

        // sell advert part
        add_sell_advert:api_url+'clutter_sell_advert',
        verify_sell_advert:api_url+'clutter_sell_advert/verify/',
        remove_sell_advert:api_url+'clutter_sell_advert/',
        edit_sell_advert:api_url+'clutter_sell_advert/',

        // partnership advert
        add_partnership_advert:api_url+'clutter_partnership_advert',
        verify_partnership_advert:api_url+'clutter_partnership_advert/verify/',
        remove_partnership_advert:api_url+'clutter_partnership_advert/',
        edit_partnership_advert:api_url+'clutter_partnership_advert/',

        // product advert
        add_product_advert:api_url+'home_advert',
        verify_product_advert:api_url+'home_advert/verify/',
        remove_product_advert:api_url+'home_advert/',
        edit_product_advert:api_url+'home_advert/',

        // professor advert
        add_professor_advert_advert:api_url+'professor_advert',
        verify_professor_advert_advert:api_url+'professor_advert/verify/',
        remove_professor_advert_advert:api_url+'professor_advert/',
        edit_professor_advert_advert:api_url+'professor_advert/',

        // adviser part
        add_adviser:api_url+'admin/adviser',
        edit_adviser:api_url+'admin/adviser/',
        remove_adviser:api_url+'admin/adviser/',

        request_payment_url:api_url+'request/payment/',

        // admin area

        admin_advert_area:{
        // sell advert part
        add_sell_advert:api_url+'admin/clutter_sell_advert',
        remove_sell_advert:api_url+'admin/clutter_sell_advert/',
        edit_sell_advert:api_url+'admin/clutter_sell_advert/',

        // partnership advert
        add_partnership_advert:api_url+'admin/clutter_partnership_advert',
        remove_partnership_advert:api_url+'admin/clutter_partnership_advert/',
        edit_partnership_advert:api_url+'admin/clutter_partnership_advert/',

        // product advert
        add_product_advert:api_url+'admin/home_advert',
        remove_product_advert:api_url+'admin/home_advert/',
        edit_product_advert:api_url+'admin/home_advert/',

        // professor advert
        add_professor_advert_advert:api_url+'admin/professor_advert',
        remove_professor_advert_advert:api_url+'admin/professor_advert/',
        edit_professor_advert_advert:api_url+'admin/professor_advert/',

        verify_advert:api_url+'admin/verify_advert/'
        }
    },
    // advert types for send to api 
    advert_types:{
        HomeAdvertToken:1,
        ProfessorAdvertToken:2,
        ClutterSellAdvertToken:3,
        ClutterPartnershipAdvertToken:4
    }
}