<template lang="">
    <div class="jumbo">
        <img class="jumbo" src="../../public/cocktails_jumbo.jpg" alt="img of cocktails">
    </div>
    <div class="container">
        <h3 class="p-4 text-center text-color-footer ">
            Il nostro menù
        </h3>
        <SingleCard/>

    </div>
</template>
<script>

import SingleCard from '@/components/SingleCard.vue';

export default {
    name: 'HomePage',
    

    components:{
        SingleCard
    },


}
</script>
<style lang="scss">
    img.jumbo{
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
</style>