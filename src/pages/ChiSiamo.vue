

<template lang="">

</template>

<script>
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
    },

    created(){
        this.getProject();
    }
}
</script>


<style lang="scss">
</style>