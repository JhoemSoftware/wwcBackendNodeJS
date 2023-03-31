<template>
    <div class="container index">
        <div class="row justify-content-center">
            <div class="col-12 row justify-content-center mb-3">
                <div class="col-12 col-sm-2 align-self-center">
                    <img src="./assets/logo.png" alt="Logo VueJS">
                </div>
                <div class="col-12 col-sm-2 align-self-center">
                    <img src="./assets/nodejs.png" alt="Logo NodeJS">
                </div>
            </div>
            <div class="col-9">
                <h1>Women Who Code • Medellín</h1>
                <h4>NodeJS from Hero to SuperHero</h4>
            </div>
        </div>
        <header>
            <div class="">
                <nav class="custom-wrapper" id="menu">
                    <ul class="container-flex list-unstyled">
                        <li>
                            <router-link to="/" class="text-uppercase">inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/contenido" class="text-uppercase">contenido</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>
<style>
    h1, h4{ text-shadow: 1px .5px rgb(23, 221, 152); }
</style>