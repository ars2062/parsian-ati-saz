<template>
  <div :class="$style.dashboard">
    <nav>
      <img src="@/assets/dashboard/2.png">
      <h1>پنل مدیریت سایت پارسیان آتی ساز</h1>
      <router-link to="#">خروج از پنل</router-link>
    </nav>
    <aside>
      <ul>
        <li>
          <router-link to="/admin/property">آگهی ملک</router-link>
        </li>
        <li>
          <router-link to="/admin/product">آگهی محصولات</router-link>
        </li>
        <li>
          <router-link to="/admin/master-worker">استاد کار</router-link>
        </li>
        <li>
          <router-link to="/admin/adviser">مشاور آگهی دهنده</router-link>
        </li>
        <li>
          <router-link to="/admin/dashboard-contact-list">پیام های دریافتی</router-link>
        </li>
        <li>
          <router-link to="/admin/dashboard-verifing-list">آگهی های در دست تایید</router-link>
        </li>
      </ul>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "Admin",
  components: {}
};
</script>

<style lang="scss" module>
.dashboard {
  display: grid;
  grid-template-areas:
    "nav    nav"
    "aside  main";
  grid-template-rows: 80px auto;
  grid-template-columns: 280px auto;
  direction: rtl;
  button {
    cursor: pointer;
    outline: none;
  }

  main {
    grid-area: main;
    height: calc(100vh - 80px);
    overflow: auto;
  }

  aside {
    grid-area: aside;
    height: calc(100vh - 100px);
    background-color: #222222;
    padding: 10px 0;
    ul {
      list-style: none;
      li {
        margin-bottom: 1px;
        a {
          display: block;
          text-decoration: none;
          line-height: 50px;
          color: white;
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          background-color: #6970b2;
          &:hover {
            background-color: #4b507e;
          }
        }
      }
    }
  }

  nav {
    grid-area: nav;
    background-color: #38383d;
    height: 80px;
    * {
      float: right;
      line-height: 80px;
    }
    a {
      float: left;
      display: block;
      text-decoration: none;
      font-size: 20px;
      font-weight: 500;
      color: white;
      margin: 0 25px;
    }
    img {
      height: 70px;
      margin: 5px 25px;
    }
    h1 {
      color: #f0f366;
      font-size: 20px;
      font-weight: 500;
    }
  }
}
</style>


