<template>
    <div class="container index">
        <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="text-uppercase">inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contenido" class="text-uppercase">productos</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>