<template>
    <aside>
        <MenuItem title="ثبت آگهی ملک" path="/admin/clutter"/>
        <MenuItem title="ثبت آگهی محصولات" path="/admin/products"/>
        <MenuItem title="ثبت استادکار" path="/admin/masters"/>
        <MenuItem title="افزودن شماره تلفن" path="/admin/advisers"/>
        <MenuItem title="مدیریت بنر های تبلیغاتی" path="/admin/ads"/>
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
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

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

