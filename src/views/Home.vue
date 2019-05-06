<template>
  <div :class="$style.home">
    <Header
      :Title="[{text:'تخصصی'},{text:'ترین سایت', class:$style.light},{text:'مشارکت', class:$style.skin_tone},{text:'در', class:$style.light},{text:'ساخت'}]"
      :subtitle="[{text:'اخبار روز مسکن',class:$style.skin_tone}]"
      :image="require('@/assets/icons/slide1.svg')"
    />
    <Searchcard></Searchcard>
    <section :class="$style.one">
      <Title title="دسترسی سریع به امکانات سایت" style="margin-top:90px"/>
      <div :class="$style.cards">
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>قوانین نظام مهندسی</h3>
          <p>
            لیست استاد کاران درجه یک ساختمان
            استاد کار مورد نظر خود را با دیدن
            نمونه کار انتخاب کنید
          </p>
          <button @click="openLink('rules')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>لیست تلفن</h3>
          <p>
            لیستی تلفن مهندسان ، مشاوران
            و طراحان ساختمانی
            به آسانی یک کلیک دریافت کنید
          </p>
          <button @click="Alert('به زودی...')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>لیست دفاتر خدمات</h3>
          <p>
            لیستی بسیار قوی از دفاتر خدمات
            شهرداری تهران را ما جمع آوردی
            و در اختیار شما قرار داده ایم
          </p>
          <button @click="openModal('dafater-khadamat-shahri')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
        <div :class="$style.card">
          <img src="@/assets/icons/stationery.svg">
          <h3>لیست استاد کاران</h3>
          <p>
            لیست استاد کاران درجه یک ساختمان
            استاد کار مورد نظر خود را با دیدن
            نمونه کار انتخاب کنید
          </p>
          <button @click="goto('masters-workers')">
            <img src="@/assets/icons/right-arrow (2).svg">
            <span>نمایش</span>
          </button>
        </div>
      </div>
    </section>
    <section :class="$style.two">
      <Title title="لوازم ساختمانی" style="margin-top:80px"/>
      <div :class="$style.posts">
        <div :class="$style.post" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
          <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
          <div :class="$style.buttonContainer">
            <button @click="openModal('postDetail')">
              <img src="@/assets/icons/diagonal-resize.svg">
            </button>
          </div>
        </div>
      </div>
      <button :class="$style.more" @click="goto('product-list')">
        <span>نمایش محصولات بیشتر</span>
      </button>
      <Modal ref="postDetail" :class="$style.postDetail">
        <div :class="$style.imageContainer">
          <img src="@/assets/icons/37729214171_cb54f56933_m.jpg">
          <button
            @click="goto('product-detail')"
            :class="$style.more"
          >برای نمایش اطلاعات تکمیلی کلیک کنید</button>
          <section>
            <p>لوزارم ساختمانی برادران بیژن بجز قاسم</p>
            <button @click="goto('product-detail')">نمایش آدرس</button>
          </section>
        </div>
      </Modal>
    </section>
    <section :class="$style.three">
      <Title title="املاک آماده به امضاء" style="margin-top:50px"/>
      <div :class="$style.goldenPosts">
        <router-link to="/property-detail" :class="$style.post" v-for=" i in [1,2,3,4,5,6]" :key="i">
          <div :class="$style.ribbonContainer">
            <div :class="$style.ribbon">
              <img src="@/assets/icons/star.svg">
            </div>
          </div>
          <div :class="$style.type">مشارکت در ساخت</div>
          <img :class="$style.mainImage" src="@/assets/icons/04.jpg">
          <h3>ملک مشارکت در ساخت در سعادت آباد</h3>
          <ul>
            <li>متراژ وموقعيت : ٢٦٠متر جنوبى ،شمالى</li>
            <li>بروگذر : بر ١٠گذر ١٠و٨متر</li>
            <li>پهنه طرح تفصيلي : r122</li>
            <li>تعداد مالك :٢مالك</li>
          </ul>
          <hr>
          <span :class="$style.price">مبلغ بلاعوض : 634.000.000 تومان</span>
        </router-link>
      </div>
      <button :class="$style.more"  @click="goto('clutters')">
        <span>نمایش آگهی بیشتر</span>
      </button>
    </section>
    <section :class="$style.four">
      <h2>
        <span>
          <i></i>آیا شما هم یک مشاور املاک هستید ؟
          <i></i>
        </span>
      </h2>
      <p>
        چنانچه مشاور املاک هستید به راحتی امکانات سایت استفاده کنید و آگهی بزنید
        این سایت تخصصی میباشد و در زمینه مشارکت و فروش املاک کلنگی فعالیت میکند
        با زدن آکهی در این زمینه نتیجه بی نظیر بگیرید
      </p>
      <section :class="$style.left">
        <img src="@/assets/icons/252945-P46MBA-946.png">
        <button @click="goto('advertisement-registration')">ثبت آگهی</button>
      </section>
    </section>
    <section :class="$style.five">
      <Title title="استاد کاران برند منطقه" style="margin-top:65px"/>
      <CardSlider>
        <div v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i" :class="$style.card">
          <img src="@/assets/icons/450-3366-225x168.jpg">
          <h4>کنعان پاسبانی</h4>
          <span>کار {{i}}</span>
          <button>نمایش نمونه کارها</button>
        </div>
      </CardSlider>
      <button :class="$style.more" @click="goto('masters')">
        <span>نمایش به صورت کامل</span>
      </button>
    </section>
    <section :class="$style.six">
      <Title title="سازنده گانی که باما کار میکنند"/>
      <div :class="$style.collaborators">
        <router-link to="#" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
          <img src="@/assets/icons/Kamyar-Maroufzadeh-225x168.jpg">
        </router-link>
      </div>
    </section>
    <Footer/>
    <Modal :class="$style.dafater_khadamat_shahri" ref="dafater-khadamat-shahri">
      <div ref="selectorPanel">
        <h3>لیست دفاتر خدمات شهرداری</h3>
        <h4>لطفا منطقه مور نظر خود را انتخاب کنید</h4>
        <ul>
          <li v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]" :key="i">
            <button @click="displayKhadamatShari(i)">منطقه {{i}}</button>
          </li>
        </ul>
      </div>
      <div ref="dafater_khadamat_shahri_1" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 1</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۱۰۱</span>
            <span :class="$style.tel">تلفن : ۲۲۸۰۳۲۸۶</span>
            <p>خیابان دکتر باهنر(نیاوران)،نبش خیابان علیرضا بازدار جنب مرکز خرید نارون</p>
          </li>
          <li>
            <span :class="$style.code">کد ۱۰۲</span>
            <span :class="$style.tel">تلفن : ۲۲۱۷۴۵۱۷</span>
            <p>ولنجک – انتهای خیابان یمن ( تابناک) – اول خیابان پروانه – پلاک ۱۷- طبقه همکف</p>
          </li>
          <li>
            <span :class="$style.code">کد ۱۰۳</span>
            <span :class="$style.tel">تلفن : ۲۲۶۳۴۷۲۱</span>
            <p>خیابان شریعتی،بالاترازپل صدر،مقابل خیابان میرزاپور(سهیل) ، کوچه باران، پلاک ۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۱۰۴</span>
            <span :class="$style.tel">تلفن : ۲۲۷۲۱۵۸۵</span>
            <p>خیابان ولی عصر،ایستگاه باغ فردوس،جنب پمپ بنزین،ناحیه ۷</p>
          </li>
          <li>
            <span :class="$style.code">کد ۱۰۵</span>
            <span :class="$style.tel">تلفن : ۲۶۱۳۱۵۲۰-۲۲۲۹۲۱۹۶</span>
            <p>میدان اقدسیه،روبروی مسجد،پ۱۰۱،طبقه اول</p>
          </li>
          <li>
            <span :class="$style.code">کد ۱۰۶</span>
            <span :class="$style.tel">تلفن : ۲۲۷۵۵۴۲۱</span>
            <p>میدان قدس،ابتدای خیابان شهید باهنر،نبش کوچه نخست، پلاک ۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۱۰۹</span>
            <span :class="$style.tel">تلفن : ۲۲۴۶۴۳۹۳ – ۲۲۴۶۴۴۱۶</span>
            <p>ضلع شمالی بلوار ارتش ، پلاک ۱۳۸</p>
          </li>
        </ul>
        <button @click="backToSelector(1)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_2" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 2</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰ ،۸۸۲۴۶۳۶۱</span>
            <p>خیابان ستارخان،خیابان پاتریس،نبش کوچه فیروزه</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۲ </span>
            <span :class="$style.tel">تلفن : ۸۸۰۹۹۸۴۵و۸۸۰۹۹۸۷۹</span>
            <p>شهرک غرب بلوار دریا(بین پاکنژاد و مطهری)پلاک ۱۴۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۳ </span>
            <span :class="$style.tel">تلفن : ۲۲۱۴۴۵۷۷</span>
            <p>بزرگراه یادگار امام شمال بعد از خروجی نیایش خيابان کوهستان پلاك ۱۰</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۴ </span>
            <span :class="$style.tel">تلفن : ۲۲۰۷۰۲۵۰</span>
            <p>سعادت اباد،بین میدان شهرداری و میدان سرو،خیابان بخشایش،نبش بهار چهارم،پلاک۴۷ </p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۵ </span>
            <span :class="$style.tel">تلفن : ۴۴۲۷۳۹۷۷</span>
            <p>خیابان سازمان آب،روبروی پارک شاهین،پلاک ۲۹</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۶ </span>
            <span :class="$style.tel">تلفن : ۴۴۲۷۱۸۰۰</span>
            <p>ستارخان- بعد از پارک جوانه- روبروی برق آلستوم- پلاک ۸۴۶- طبقه اول</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۷ </span>
            <span :class="$style.tel">تلفن : ۲۲۱۳۴۲۲۹</span>
            <p>سعادت آباد،انتهای بلوار ۲۴ متری،خیابان دشت بهشت،نبش بن بست میربسطامی، پلاک ۱ </p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۸ </span>
            <span :class="$style.tel">تلفن : ۴۴۲۶۶۹۱۷</span>
            <p>بزرگراه اشرفی اصفهانی، بالاتر از فلکه دوم صادقیه، خیابان سازمان آب شرقی، پلاک 14</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۹ </span>
            <span :class="$style.tel">تلفن : ۶-۸۸۳۷۴۴۹۵</span>
            <p>ميدان صنعت،خیابان فلامك شمالي، نبش خيابان شانزدهم، پلاك ۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۱۰ </span>
            <span :class="$style.tel">تلفن : ۶۶۵۵۹۳۰۷</span>
            <p>خیابان بهبودی، نرسیده به ستارخان، نبش کوچه بشیر، پلاک ۳۶۱</p>
          </li>
        </ul>
        <button @click="backToSelector(2)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_3" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 3</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۳۰۱ </span>
            <span :class="$style.tel">تلفن : ۸۸۲۱۰۹۸۷</span>
            <p>خیابان شیراز شمالی، نرسیده به چهارراه ونک، نبش کوی نرگس، پلاک ۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۳۰۲ </span>
            <span :class="$style.tel">تلفن : ۸۸۲۰۶۶۶۳- ۸۸۲۰۶۶۸۴</span>
            <p>خیابان افریقا،خیابان دامن افشار،پلاک ۱</p>
          </li>
          <li>
            <span :class="$style.code">کد ۳۰۳ </span>
            <span :class="$style.tel">تلفن : ۲۲۲۲۶۶۴۹</span>
            <p>خیابان شریعتی بالاتر از بزررگراه همت خیابان کوشان نبش خیابان افتخاری</p>
          </li>
          <li>
            <span :class="$style.code">کد ۳۰۴ </span>
            <span :class="$style.tel">تلفن : ۲۲۵۷۱۷۶۳</span>
            <p>خیابان دولت،نبش چهارراه کاوه، طبقه اول</p>
          </li>
          <li>
            <span :class="$style.code">کد ۳۰۵</span>
            <span :class="$style.tel">تلفن : ۲۲۸۶۸۵۹۵</span>
            <p>خیابان شریعتی بالاتر از میرداماد ، تقاطع ظفر نبش پورمشکانی پلاک ۱۳۵۷ درب شمالی </p>
          </li>
          <li>
            <span :class="$style.code">کد ۳۰۶ </span>
            <span :class="$style.tel">تلفن : ۲۲۲۵۹۱۳۸-۲۲۲۵۹۱۳۹</span>
            <p>خيابان ميرداماد بين ميدان مادر و خيابان شريعتي پلاك ۲۶ ط اول واحد۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۳۰۷ </span>
            <span :class="$style.tel">تلفن : ۵- ۲۶۲۰۱۹۰۱</span>
            <p>خیابان ولیعصر، روبروی پارک ملت، نبش خیابان مهیار، پلاک ۹۸</p>
          </li>
        </ul>
        <button @click="backToSelector(3)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_4" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 4</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۴۰۱ </span>
            <span :class="$style.tel">تلفن : ۲۲۹۷۶۹۷۱ – ۲۲۹۴۹۹۸۹</span>
            <p>میدان هروی ، خیابان وفامنش، نبش مکران شمالی، پلاک ۳۲</p>
          </li>
          <li>
            <span :class="$style.code">کد ۴۰۲ </span>
            <span :class="$style.tel">تلفن : ۷۷۲۲۷۹۵۰-۷۷۴۴۸۳۸۶</span>
            <p>میدان رسالت خ هنگام بعداز تقاطع فرجام نبش کوچه باقری پ ۱۱۲ طبقه اول</p>
          </li>
          <li>
            <span :class="$style.code">کد ۴۰۳ </span>
            <span :class="$style.tel">تلفن : ۲۲۳۲۴۷۳۶</span>
            <p>میدان ملت،ضلع شرقی میدان،داخل پارک</p>
          </li>
          <li>
            <span :class="$style.code">کد ۴۰۴ </span>
            <span :class="$style.tel">تلفن : ۷۷۹۶۹۸۰۶</span>
            <p>فلکه دوم تهرانپارس، جشنواره،بعدازچهارراه سیدالشهدا،جنب پارک معینی،پ۷۵/۱</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(4)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_5" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 5</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(5)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_6" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 6</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(6)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_7" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 7</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(7)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_8" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 8</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(8)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_9" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 9</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(9)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_10" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 10</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(10)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_11" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 11</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(11)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_12" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 12</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(12)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_13" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 13</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(13)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_14" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 14</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(14)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_15" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 15</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(15)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_16" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 16</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(16)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_17" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 17</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(17)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_18" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 18</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(18)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_19" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 19</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(19)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_20" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 20</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(20)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_21" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 21</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(21)">بازگشت</button>
      </div>
      <div ref="dafater_khadamat_shahri_22" style="display:none" :class="$style.zone">
        <h3>لیست دفاتر خدمات شهرداری منطقه 22</h3>
        <ul>
          <li>
            <span :class="$style.code">کد ۲۰۱</span>
            <span :class="$style.tel">تلفن : ۸۸۲۴۶۳۶۰</span>
            <p>خیابان</p>
          </li>
        </ul>
        <button @click="backToSelector(22)">بازگشت</button>
      </div>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Searchcard from "@/components/SearchCard.vue";
import Title from "@/components/Title.vue";
import CardSlider from "@/components/CardSlider.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";
import Loading from "@/components/Loading.vue";
export default {
  components: {
    Header,
    Searchcard,
    Title,
    CardSlider,
    Footer,
    Modal,
    Loading
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    },
    openModal(name) {
      this.$refs[name].display = true;
    },
    Alert(text) {
      alert(text);
    },
    openLink(name) {
      switch (name) {
        case "rules":
          window.open(
            "http://82.99.242.34/Portal/home/?240980/%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86-%D9%88-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%87%D8%A7"
          );
          break;

        default:
          break;
      }
    },
    displayKhadamatShari(index) {
      this.$refs["selectorPanel"].style.display = "none";
      this.$refs["dafater_khadamat_shahri_" + index].style.display = "block";
    },
    backToSelector(index) {
      this.$refs["selectorPanel"].style.display = "block";
      this.$refs["dafater_khadamat_shahri_" + index].style.display = "none";
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.home {
  section.one {
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      .card {
        text-align: center;
        padding: 60px 20px;
        color: color(chocolate);
        display: grid;
        grid-template-rows: repeat(4, auto);
        * {
          margin: auto;
          text-align: center;
        }
        h3 {
          font-size: 30px;
        }
        img {
          width: 60px;
        }
        p {
          margin: 10px 0;
          min-height: 125px;
          vertical-align: middle;
          font-size: 20px;
          font-weight: 100;
        }
        button {
          position: relative;
          background-color: white;
          border: 1px solid color(chocolate);
          color: color(chocolate);
          @include size(50px, 50px);
          transform: rotate(45deg);
          outline: none;
          cursor: pointer;
          //margin-top: 35px;
          transition: all 0.1s;
          &:active {
            transform: scale(1.05) rotate(45deg);
          }
          * {
            margin: auto;
            position: absolute;
            //transform: rotate(-45deg);
          }
          img {
            width: 13px;
            transform: rotate(-45deg) translate(50%, -50%);
          }
          span {
            top: 100%;
            left: 100%;
            transform: rotate(-45deg) translateX(-12.5%);
          }
        }
      }
    }
  }
  section.two {
    .posts {
      margin-top: 55px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 1fr);
      position: relative;
      .post {
        padding-top: 100%;
        position: relative;
        overflow: hidden;
        * {
          position: absolute;
          margin: auto;
        }
        img {
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .buttonContainer {
          @include size(105px, 105px);
          background-color: rgba(color(coal), 0.5);
          transform: rotate(-45deg);
          top: 100%;
          left: calc(100% - 52.5px);
          right: 0;
          bottom: 0;
          button {
            margin: 7.5px;
            @include size(90px, 90px);
            z-index: 2;
            cursor: pointer;
            position: relative;
            background-color: color(skin-tone);
            border: none;
            transition: all 0.1s;
            &:active {
              transform: scale(1.05);
            }
            img {
              @include size(15px, 15px);
              top: 0;
              margin: 7.5px auto;
              position: absolute;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
    
    .more {
      font-size: 20px;
      position: relative;
      line-height: 54px;
      margin-top: 45px;
      margin-bottom: 100px;
      text-align: center;
      width: 620px;
      border: none;
      @include HorizontalCenter();
      cursor: pointer;
      transition: all 0.1s;
      outline: none;
      &:active::before {
        border-top: 54px solid darken(color(skin-tone), 5%);
      }
      &::before {
        content: "";
        height: 0;
        width: 100%;
        position: absolute;
        top: 0;
        left: -54px;
        /* stick out into margined area */
        z-index: -1;
        /* make it the background */
        border: 54px solid transparent;
        /* left/right diagonals */
        border-top: 54px solid color(skin-tone);
        border-bottom: 0px solid transparent;
      }
    }
  }
  section.three {
    .goldenPosts {
      direction: rtl;
      margin-top: 85px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: 40px;
      padding: 0 100px;
      .post {
        position: relative;
        text-decoration: none;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.05);
        }
        .ribbonContainer {
          overflow: hidden;
          @include size(80px, 80px);
          position: absolute;
          top: 0;
          right: 0;
          left: auto;
          .ribbon {
            width: 150px;
            height: 30px;
            position: absolute;
            top: 10px;
            right: -50px;
            left: auto;
            background: color(red);
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            text-align: center;
            img {
              width: 20px;
              margin: 2.5px;
              transform: rotate(-45deg);
            }
          }
        }
        .mainImage {
          @include size(100%, 220px);
        }
        .type {
          position: absolute;
          top: -5px;
          left: -10px;
          padding: 5px 15px;
          font-size: 14px;
          font-weight: 100;
          background-color: color(skin-tone);
          color: black;
          &::after {
            @include content();
            top: 100%;
            @include size(10px, 10px);
            background-color: black;
            clip-path: polygon(100% 0, 0 0, 100% 100%);
          }
        }
        h3 {
          font-size: 20px;
          color: rgba(black, 0.5);
        }
        ul {
          list-style: none;
          font-size: 14px;
          font-weight: 100;
          color: rgba(black, 0.7);
          li {
            direction: rtl;
            text-align: right;
          }
        }
        hr {
          margin: 5px 0;
          border: 1px solid color(skin-tone);
        }
        .price {
          font-size: 20px;
          font-weight: 100;
          color: black;
        }
      }
    }
    button {
      font-size: 20px;
      position: relative;
      line-height: 54px;
      margin-top: 45px;
      margin-bottom: 100px;
      text-align: center;
      width: 620px;
      border: none;
      @include HorizontalCenter();
      cursor: pointer;
      transition: all 0.1s;
      outline: none;
      &:active::before {
        border-top: 54px solid darken(color(skin-tone), 5%);
      }
      &::before {
        content: "";
        height: 0;
        width: 100%;
        position: absolute;
        top: 0;
        left: -54px;
        /* stick out into margined area */
        z-index: -1;
        /* make it the background */
        border: 54px solid transparent;
        /* left/right diagonals */
        border-top: 54px solid color(skin-tone);
        border-bottom: 0px solid transparent;
      }
    }
  }
  section.four {
    min-height: 445px;
    background: image(testimonials-bg, jpg) no-repeat;
    background-size: cover;
    padding-top: 145px;
    display: grid;
    grid-template-areas:
      "title title"
      "left right";
    h2 {
      grid-area: title;
      text-align: center;
      color: color(skin-tone);
      position: relative;
      font-size: 32px;
      font-weight: 100;
      span {
        display: inline-block;
        position: relative;
        i {
          content: "";
          display: block;
          position: absolute;
          height: 1px;
          background-color: color(skin-tone);
          top: 50%;
          width: 25vw;
          &::before {
            @include content();
            @include size(8px, 8px);
            background-color: color(skin-tone);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          &:first-of-type {
            right: 100%;
            margin-right: 15px;
            &::before {
              right: 100%;
            }
          }
          &:last-of-type {
            left: 100%;
            margin-left: 15px;
            &::before {
              left: 100%;
            }
          }
        }
      }
    }
    p {
      grid-area: right;
      font-size: 25px;
      font-weight: 100;
      color: white;
      text-align: right;
      margin-right: 65px;
      margin-left: 200px;
    }
    .left {
      grid-area: left;
      margin-left: 135px;
      display: flex;
      flex-direction: column;
      img {
        @include size(170px, 170px);
        border-radius: 170px;
        overflow: hidden;
        border: 5px solid white;
      }
      button {
        padding: 7px 47px;
        margin: 30px 0;
        background: white;
        border-radius: 6px;
        border: none;
        cursor: pointer;
      }
    }
  }
  section.five {
    .card {
      border-radius: 6px;
      box-shadow: 0 0 6px rgba($color: #000000, $alpha: 0.16);
      background-color: white;
      position: relative;
      img {
        width: calc((100vw - 340px) / 4);
        border-radius: 6px;
        height: 195px;
      }
      h4 {
        float: right;
        font-size: 18px;
        margin: 7px;
      }
      span {
        float: left;
        font-size: 14px;
        font-weight: 100;
        margin: 17px;
      }
      button {
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        margin: auto;
        position: absolute;
        border-radius: 0 0 6px 6px;
        background-color: color(skin-tone);
        border: none;
        font-size: 20px;
        cursor: pointer;
        outline: none;
        &:active {
          background-color: darken(color(skin-tone), 10%);
        }
      }
    }
    .more {
      font-size: 20px;
      position: relative;
      line-height: 54px;
      margin-top: 45px;
      margin-bottom: 100px;
      text-align: center;
      width: 620px;
      border: none;
      @include HorizontalCenter();
      cursor: pointer;
      transition: all 0.1s;
      outline: none;
      &:active::before {
        border-top: 54px solid darken(color(skin-tone), 5%);
      }
      &::before {
        content: "";
        height: 0;
        width: 100%;
        position: absolute;
        top: 0;
        left: -54px;
        /* stick out into margined area */
        z-index: -1;
        /* make it the background */
        border: 54px solid transparent;
        /* left/right diagonals */
        border-top: 54px solid color(skin-tone);
        border-bottom: 0px solid transparent;
      }
    }
  }
  section.six {
    .collaborators {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 150px);
      margin: 50px 0;
      a {
        img {
          @include size(100%, 100%);
        }
      }
    }
  }
  .dafater_khadamat_shahri {
    direction: rtl;
    text-align: center;
    h3 {
      font-size: 30px;
      font-weight: normal;
    }
    h4 {
      font-size: 20px;
      font-weight: normal;
      color: color(chocolate);
      margin-bottom: 15px;
    }
    ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
      grid-gap: 10px;
      button {
        display: block;
        border: none;
        background-color: color(skin-tone);
        color: color(chocolate);
        line-height: 50px;
        font-size: 20px;
        border-radius: 6px;
        box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.16);
        width: 100%;
        outline: none;
        cursor: pointer;
      }
      li:last-of-type {
        grid-column: span 3;
      }
    }
    .zone {
      direction: rtl;
      ul {
        list-style: none;
        display: block;
        li {
          display: block;
          color:color(chocolate);
          &:not(:last-of-type){
            border-bottom: 1px solid #707070;
          }
          .code {
            float: right;
            display: block;
          }
          .tel {
            float: left;
            display: block;
          }
          p {
            display: inline-block;
        width: 100%;
          }
        }
      }
      button{
        width:90%;
        border: none;
        border-radius: 6px;
        margin: 20px 0;
        background-color: darken(color(chocolate),10%);
        color:white;
        font-size: 20px;
        cursor: pointer;
        outline: none;
      }
    }
  }
  .postDetail {
    .imageContainer {
      position: relative;
      img {
        width: 100%;
      }
      .more {
        border: 1px solid color(skin-tone);
        background-color: rgba($color: #fff, $alpha: 0.95);
        position: absolute;
        top: 25%;
        left: 0;
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        padding-right: 35px;
        font-size: 16px;
      }
      section {
        background-color: rgba($color: #000000, $alpha: 0.85);
        border: 2px solid color(skin-tone);
        direction: rtl;
        position: absolute;
        left: auto;
        top: 75%;
        right: 0;
        * {
          display: inline-block;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          padding: 0 20px;
        }
        p {
          color: white;
          font-weight: 100;
        }
        button {
          border: none;
          background-color: color(skin-tone);
          color: color(chocolate);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
