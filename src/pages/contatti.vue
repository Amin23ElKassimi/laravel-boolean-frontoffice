
<template lang="">
    <main class="container">
        <section class="row justify-content-center">   
            <SingleCard class="p-0 col-12 mx-4 my-5" :title="post.title" :image="post.post_image" :content="post.content" :fullLength="true"
            />
        </section>
    </main>
</template>

<script>
import SingleCard from '@/components/SingleCard.vue';
import axios from 'axios';

export default {

    name: 'SingleProject',

    data(){
        return{
            post: {},
            id: ''
        }
    },

    methods:{
        getPost(){
            axios.get(`http://127.0.0.1:8000/api/posts/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.post = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                // this.$router.push({ name: 'not-found' })
            })
        }
    },

    components:{
        SingleCard
    },

    created(){
        this.getPost();
    }
}
</script>

<style lang="scss">
</style>