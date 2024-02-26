
<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default{
    components: { AppHeader, AppMain }
}
</script>
<template>
    <AppHeader/>
    <AppMain/>
    <!-- # questo e' illuogo dove tutto puo' cambiare in base alle rotte -->
    <router-view></router-view>
</template>



<style lang="scss">
  @use './styles/general.scss' as *;

</style>
