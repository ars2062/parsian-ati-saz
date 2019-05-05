<script>
export default {
    name:'test',
    mounted(){
        this.$store.dispatch('home/fetch_adverts');
        this.$store.dispatch('account/login','09114648556');
        
    },
    computed:{
        
    },
    methods:{
        search(){
            
        }
    }
}
</script>

<template>
    <p @click="search"></p>
</template>

