<template lang="">
    <main class="container">
                <!-- Lista Film da stampare come Cards -->
                <div class="lista">                                                          
            <article @click="printTest" v-for="(project, index) in projects"  class="cards text-uppercase fw-bold">
                <!-- Card Title  -->
                <p class="title">
                    {{project.type.name}}
                </p>
                <!-- Original Title -->
                <p>
                    {{project.name}}
                </p>
                <!-- Language -->
                <p>
                    Original Language: {{project.description}} 
                </p> 
                <img :src="project.view" alt="Country Flag" >
                <!-- Voto -->
                <p>
                    Vote: {{project.priority}}
                </p>    
             </article>
        </div>
    </main>
</template>


<script>
// Import Azion
import axios from 'axios';

export default {
    name: 'AppMain',

    data(){
        return{
            projects: [],
        }
    },

    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;

            })
            .catch(function (error) {
                console.warn(error);
            })
        }
    },

    created(){
        this.getProjects();
    }
}
</script>


<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

img{
    width: 100%;
}

main {
        background-color: $primary-bg;
        padding: 50px;
    }

    .lista{
        display: flex;
        flex-wrap: wrap;
    }

    .cards{
        color: white;
        width: calc(100% / 5 - 1rem);
        padding: .5rem;
        margin-left: .5rem;
        margin-right: .5rem;
        margin-bottom: 1rem;
        background-color: $primary-bg;
        background-color: #521c76;
        text-align: center;
    }

    .title{
        color: yellow;
    }


</style>