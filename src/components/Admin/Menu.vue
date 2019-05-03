<template>
    <aside>
        <MenuItem title="ثبت آگهی ملک" path="/admin"/>
        <MenuItem title="ثبت آگهی محصولات" path="admin/product"/>
        <MenuItem title="ثبت استادکار" path="/admin/master"/>
        <MenuItem title="افزودن شماره تلفن" path="/admin/adviser"/>
        <MenuItem title="مدیریت بنر های تبلیغاتی" path="/admin/ad"/>
        <MenuItem title="پیام های دریافتی" path="/admin/contact"/>
    </aside>
</template>

<script>
import MenuItem from "@/components/Admin/MenuItem.vue";

export default {
    name:'Menu',
    components:{
        MenuItem
    }
}
</script>

<style scoped>

aside{
    width: 20%;
    background-color: #222222;
    height: 100vh;
    margin-top: -11px;
    display: block;
    position: static;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    aside{
        width: 20%;
        display: none;
    }
} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    aside{
        width: 20%;
    }
} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

}
</style>

