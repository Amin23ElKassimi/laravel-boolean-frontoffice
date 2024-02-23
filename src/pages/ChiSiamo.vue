

<template lang="">
  <SingleCard class="card p-0 col-3 mx-4 my-5" v-for="post in posts" :key="post.id"
  :title="post.title" :image="post.post_image" :content="post.content" :linkRoute="{ name: 'single-post', params: { id: post.id}}" linkLabel="Read more..."
  />
</template>

<script>
import SingleProject from '@/components/SingleProject.vue';
import axios from 'axios';

export default {
    name: 'ProjectList',
    data(){
        return{
          projects: [],
        }
    },
    methods:{
      getProject(){
            axios.get('http://127.0.0.1:8000/api/posts', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
      SingleProject
    },

    created(){
        this.getProject();
    }
}
</script>


<style lang="scss">
</style>