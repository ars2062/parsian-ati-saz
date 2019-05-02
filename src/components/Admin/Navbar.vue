<template>
    <nav class="block-container">
        <div class="parsian-logo flex-container">
            <img src="@/assets/parsian-logo.png">
        </div>
        <div class="flex-container">
            <span class="parsian-text">پنل_مدیریت_سایت_پارسیان_آتی_ساز</span>
        </div>
        <div class="logout flex-container">
                <span @click="logout">خروج از حساب</span>
        </div>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    methods:{
        logout:function(){
            localStorage.removeItem('user');
            window.location='/';
        }
    }
}
</script>

<style scoped>


nav{
    width: 100%;
    height: 80px;
    background-color: #38383D;
    position: static;
}

nav .logout:hover{
    cursor: pointer;
}

nav div {
    height: 100%;
}
nav div img{
    height: 100%;
}

.parsian-logo img {
    margin-right: 20px;
}

.parsian-text {
    color: #F0F366;
    vertical-align: middle;
}

.block-container{
    display: inline-block;
    direction: rtl;
}
.block-container div a:hover {
    cursor: pointer;
}
.flex-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
.logout{
    float: left;
    padding-left: 16px;
    color: #FFFFFF;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .parsian-text{
        display: none;
    }
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

