<template lang="">
    
    <main class="container">
        <section class="row ">
            <div id="vue-instance">
                
            </div>
            <div class="col-3 mb-5 relative my-img" v-for="cocktail in cocktails" :key="cocktail.id">
                <div class="card" style="width: 18rem" >
                    <img :src="cocktail.image_url" class="card-img-top" alt="img of the cocktail">
                    <!-- <div class="card-body">
                        <p class="card-text">{{ cocktail.nome }}</p>
                    </div> -->
                </div>
                

                <p class="card-text text-center fs-4 my-text text-white">{{ cocktail.nome }}</p>

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
            types: [],
            inventory: [
                {name: 'MacBook Air', id: 1},
                {name: 'MacBook Pro', id: 2},
                {name: 'Lenovo W530', id: 3},
                {name: 'Acer Aspire One', id: 4}
                    ],
            selected: {
                id: 2
                 }
        }
    },
    methods:{
        getCocktails(){
            axios.get('http://127.0.0.1:8000/api/cocktails', {
                params: {
                }
            })
            .then((response) => {
                // console.log(response.data.results);
                // mi serve il this. per poter accedere ai data
                this.cocktails = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        },
        getTypes(){
            axios.get('http://127.0.0.1:8000/api/types', {
                params: {
                }
            })
            .then((response) => {
                // console.log(response.data.results);
                this.types = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                // this.$router.push({ name: 'not-found' })
            })
        }
    },
    created(){
        this.getCocktails();
        this.getTypes();
        console.log(this.types);
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

.relative {
    position: relative;
}

.my-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;    
}

.my-img:hover .my-text{
    display: inline-block;
}

.my-img:hover img {
    filter: brightness(50%);
    
}

</style>