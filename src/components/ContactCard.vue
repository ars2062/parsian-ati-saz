<template>
  <div :class="$style.ContactCard">
    <h2>
      <span>
        <i></i>به مشاور خود پیام دهید
        <i></i>
      </span>
    </h2>
    <form @submit="($event)=>{$event.preventDefault();}" class="slide-in-left" data-scroll>
      <input type="text" placeholder="نام و نام خانوادگی" />
      <input type="text" placeholder="شماره تماس شما" />
      <input type="text" placeholder="ایمیل شما" :class="$style.full" />
      <textarea rows="4" placeholder="پیام شما" :class="$style.full"></textarea>
      <button type="submit" :class="$style.full">ارسال پیام</button>
    </form>
    <section :class="[$style.left,'fade-in']" data-scroll>
      <img src="@/assets/icons/252945-P46MBA-946.png" />
      <h5>میلاد شهرایی</h5>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.ContactCard {
  min-height: 445px;
  background: image(testimonials-bg, jpg) no-repeat;
  background-size: cover;
  padding: 80px 135px;
  display: grid;
  grid-template-areas:
    "title title"
    "left right";
  grid-template-columns: 0.8fr 1.2fr;
  border-top: 5px solid color(skin-tone);
  h2 {
    grid-area: title;
    text-align: center;
    color: color(skin-tone);
    position: relative;
    font-size: 29px;
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
  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    img {
      @include size(170px, 170px);
      border-radius: 170px;
      overflow: hidden;
      border: 5px solid white;
      margin: 0 auto;
    }
    h5 {
      color: color(skin-tone);
      font-weight: normal;
      font-size: 20px;
      text-align: center;
    }
  }
  form {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
    direction: rtl;
    margin: 30px;
    input,
    textarea {
      border-radius: 6px;
      border: 1px solid #707070;
      padding: 0 20px;
      outline: none;
      font-size: 20px;
      &::placeholder {
        font-size: 20px;
        font-weight: lighter;
        opacity: 0.33;
      }
    }
    input {
      line-height: 50px;
    }
    textarea {
      padding: 15px 20px;
    }
    .full {
      grid-column-start: 1;
      grid-column-end: -1;
    }
    button {
      background-color: color(skin-tone);
      border: none;
      line-height: 50px;
      border-radius: 6px;
      font-size: 20px;
      outline: none;
      cursor: pointer;
      &:hover {
        background-color: darken(color(skin-tone), 5%);
      }
    }
    @include mobile(610px){
      margin: 0;
    grid-template-columns: auto;
    }
  }
  @include mobile(940px) {
    grid-template-areas:
      "title"
      "right";
    grid-template-columns: auto;
    padding: 10px 30px;
    h2{
      span i{
        display: none;
      }
    }
    .left {
      display: none;
    }
  }
}
</style>