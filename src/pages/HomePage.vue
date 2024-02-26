<template lang="">
    <div class="jumbo">
        <img class="jumbo" src="../../public/cocktails_jumbo.jpg" alt="img of cocktails">
    </div>
    <div class="container ">
        <h1 class="p-3">
            COCKTAILS
        </h1>
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