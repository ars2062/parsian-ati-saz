<template>
  <div :class="$style.progress">
      <div :key="index" v-for="(step,index) in this.steps" :class="[$style.step,step.class]">
          {{step.text}} 
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    props:{
        steps:{
            type:Array
        }
    }
};
</script>

<style lang="scss" module>
@import "@/assets/main.scss";
.progress{
    height: 54px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    direction: rtl;
    width: fit-content;
    right: 50%;
    position: relative;
    transform: translateX(50%);
    .step{
        clip-path: polygon(25px 0%, 100% 0%, calc(100% - 25px) 100%, 0% 100%);
        padding: 0 50px;
        margin: 0 -12.5px;
        line-height: 54px;
        font-size: 20px;
        background-color: #DBDBDB;
        &:first-of-type{
            margin-right: -25px;
        }
        &:last-of-type{
            margin-left: -25px;
        }
    }
}
</style>