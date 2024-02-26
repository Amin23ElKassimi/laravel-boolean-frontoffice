<template lang="">
    <main class="container">
        <section class="row">
            <div class="col-12">
                <h3>Our cocktails</h3>
                <ul>
                    <li v-for="cocktail in cocktails" :key="cocktail.id">
                        {{ cocktail.nome }}
                    </li>
                </ul>
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

<style lang="scss" scoped>
</style>