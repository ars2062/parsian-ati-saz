<template>
<header>
        <img src="@/assets/icons/slide1.svg">
        <div :class="$style.trapezoids">
            <div :class="$style.trapezoid">
                تخصصی<span :class="$style.light">ترین سایت</span>
                <span :class="$style.skin_tone">مشارکت</span>
                <span :class="$style.light">در</span>ساخت
            </div>
            <div :class="$style.trapezoid">
               <span :class="$style.skin_tone">اخبار روز مسکن</span>
            </div>
        </div>
        <img src="@/assets/icons/mouse.svg">
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
header {
    height: 77vh;
    position: relative;
    border-bottom: 3px solid color(skin-tone);

    img {
        position: absolute;
        &:first-of-type {
            z-index: -1;
            display: block;
            width: 100%;
            height: 77vh;
            object-fit: cover;
        }
        &:last-of-type{
            bottom: 18.5px;
            left: 0;
            right: 0;
            margin: auto;
            width: 42.5px;
            cursor: pointer;
        }
    }

    .trapezoids {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .trapezoid {
            line-break: none;
            text-align: center;

            &:first-of-type {
                color: white;
                font-size: 40px;
                border-bottom: 80px solid rgba($color: #000000, $alpha: .65);
                border-left: 54px solid transparent;
                border-right: 54px solid transparent;
                line-height: 80px;
                height: 0;
                width: 750px;
            }

            &:last-of-type {
                font-size: 20px;
                position: relative;
                line-height: 54px;
                margin-top: 5px;
                text-align: center;
                width: 620px;
                @include HorizontalCenter();

                &::before {
                    content: '';
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
                    border-top: 54px solid color(dimm-black);
                    border-bottom: 0px solid transparent;
                }
            }
        }
    }

}

.light {
    font-weight: 100;
}

.skin_tone {
    color: color(skin-tone);
}
</style>
