<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg p-0" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand pe-5" href="#"> 
                    <img class="logo" src="../../public/logo.png" alt="logo cocktails booleani">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item fs-5" v-for="(link, index) in linkItems" :key="index">
                            <router-link :to="{ name: link.routeName }" class="nav-link text-color-footer">
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            linkItems: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Chi siamo',
                    routeName: 'ChiSiamo'
                },
                {
                    label: 'Contatti',
                    routeName: 'contatti'
                }
            ]
        }
    },
}
</script>

<style lang="scss">
header {
    background-color: #CFBDDA;
    img.logo{
        width: 4rem;
    }

    .text-color-footer {
        color: rgba(0, 0, 0, 0.700);
    }
}
</style>