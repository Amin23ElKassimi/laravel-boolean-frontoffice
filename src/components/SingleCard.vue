<template lang="">
    <main class="container">
        <section class="row ">
            <div class="col-3 mb-5" v-for="cocktail in cocktails" :key="cocktail.id">
                <div class="card " style="width: 18rem" >
                    <img :src="cocktail.image_url" class="card-img-top" alt="img of the cocktail">
                    <div class="card-body">
                        <p class="card-text">{{ cocktail.nome }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<script>
import axios from 'axios';

export default {
    name:'AppMain',
    data(){
        return{
            cocktails: [],
        }
    },
    methods:{
        getCocktails(){
            axios.get('http://127.0.0.1:8000/api/cocktails', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                // mi serve il this. per poter accedere ai data
                this.cocktails = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
    created(){
        this.getCocktails();
    }

}
</script>

<style lang="scss">
div.card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>