
<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';


  export default{
    components: { AppHeader, AppMain, AppFooter }
}
</script>
<template>
    <AppHeader/>
    <AppMain/>
    <!-- # questo e' illuogo dove tutto puo' cambiare in base alle rotte -->
    <router-view></router-view>
    <AppFooter/>
</template>



<style lang="scss">
  @use './styles/general.scss' as *;

</style>
