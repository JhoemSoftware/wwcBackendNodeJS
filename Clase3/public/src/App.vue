<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <! <HelloWorld msg="Welcome to Your Vue.js App"/> >
</template> -->

<!-- <script>
/* import HelloWorld from './components/HelloWorld.vue' */
import HomeComponent from './components/HomeComponent.vue';

export default {
    name: 'App',
    components: {
        /* HelloWorld, */
        HomeComponent
    }
}
</script> -->

<!-- <style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style> -->

<template>
    <div>
        <header class="space-inter">
            <div class="container container-flex space-between">
                <h1 class="logoPage"><span>APP</span>movies</h1>
                <nav class="custom-wrapper" id="menu">
                    <ul class="container-flex list-unstyled">
                        <li>
                            <router-link to="/" class="text-uppercase">inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/series" class="text-uppercase">series</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>