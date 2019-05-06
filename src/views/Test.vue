<script>

import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
    name:'test',
    mounted(){
        this.$store.dispatch('home/fetch_adverts');
    },
    computed:{
        // ...mapState(['loading','cities']),
        // ...mapState('home',[
        //     'product_adverts',
        //     'sell_adverts',
        //     'partnership_adverts',
        //     'master_adverts',
        //     'search_results',
        // ])
    },
    methods:{
        search(){
        
        }
    }
}
</script>

<template>
    <div>
        <p @click="this.search" style="position:static;">hello world</p>
    </div>
</template>

